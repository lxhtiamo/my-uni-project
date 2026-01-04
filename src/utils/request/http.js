import env from '@/config/env';
import store from '@/store';
import {removeToken} from '@/utils/tokenUtil';
import {config} from '@/config/config';
// 默认配置
const defaultOptions = {
  baseURL: env.baseURL,
  timeout: 15000, // 请求接口超时时间
  dataType: 'json',
  header: {
    'Content-Type': 'application/json',
    APPID: config.wxappid,
  },
  showErr: true,
  loading: false,
};
// 请求核心方法
export const request = async (method, url, data = {}, customOptions = {}) => {
  // 合并配置
  let options = {
    ...defaultOptions,
    method,
    data,
  };

  console.log(defaultOptions);
  // 请求接口地址处理，如果传来http/https的直接用传来的地址
  if (url.startsWith('http') || url.startsWith('https')) {
    options.url = url;
  } else {
    options.url = `${defaultOptions.baseURL}${env.staticPath}${url}`;
  }
  // 请求拦截
  const token = uni.getStorageSync('token');
  if (token) {
    // 这里是token
    options.header.Authorization = `Bearer ${store.getters.token}`;
  }
  // 显示 Loading
  if (options.loading || customOptions.loading) {
    await uni.showLoading({title: '加载中...', mask: true});
  }
  // 自定义header
  if (customOptions.header) {
    options.header = Object.assign(options.header, customOptions.header);
  }
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        try {
          const processedRes = responseInterceptor(res);
          resolve(processedRes.data);
        } catch (error) {
          reject(error);
        }
      },
      fail: (err) => {
        console.error('[Request Fail]', err);
        if (options.showErr) {
          uni.showToast({title: err.errMsg || '请求失败', icon: 'none'});
        }
        reject(err);
      },
      complete: () => {
        options.loading && uni.hideLoading();
      },
    });
  });
};
// 响应拦截器
const responseInterceptor = (res) => {
  console.log(`[Response] ${res.statusCode}`, res);
  // HTTP 状态码错误
  if (res.statusCode !== 200) {
    throw new Error(`接口请求失败 Error: ${res.statusCode}`);
  }
  // 业务状态码处理
  if (res.data?.code === 401) {
    handleUnauthorized();
    throw new Error('登录状态已过期');
  }
  return res;
};
// 401 处理封装
const handleUnauthorized = () => {
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  const redirectUrl = currentPage ? `/${currentPage.route}` : '/';
  removeToken();
  uni.showToast({
    title: '登录已过期',
    icon: 'none',
    duration: 800,
  });
  setTimeout(() => {
    // 关闭所有界面，回到登录页面
    uni.reLaunch({
      url: `/pages/login/index?redirect=${encodeURIComponent(redirectUrl)}`,
    });
  }, 800);
};
// 快捷方法
export const get = (url, data, options) => request('GET', url, data, options);
export const post = (url, data, options) => request('POST', url, data, options);
export const put = (url, data, options) => request('PUT', url, data, options);
export const del = (url, data, options) => request('DELETE', url, data, options);
// 文件上传优化
export const uploadFile = (url, filePath, options = {}) => {
  let fullUrl = '';
  // 请求接口地址处理，如果传来http/https的直接用传来的地址
  if (url.startsWith('http') || url.startsWith('https')) {
    fullUrl = url;
  } else {
    fullUrl = `${defaultOptions.baseURL}${url}`;
  }
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: fullUrl,
      filePath,
      name: 'file', // 参数字段
      header: {
        Authorization: uni.getStorageSync('token') ? `Bearer ${uni.getStorageSync('token')}` : '',
        ...options.header,
      },
      success: (res) => {
        if (res.statusCode === 200) {
          try {
            resolve(JSON.parse(res.data));
          } catch (e) {
            resolve(res.data);
          }
        } else {
          reject(new Error(`上传失败：${res.errMsg}`));
        }
      },
      fail: reject,
    });
  });
};
export const downloadFile = (url, options = {}) => {
  const fullUrl = url.startsWith('http') || url.startsWith('https') ? url : `${defaultOptions.baseURL}${url}`;
  return uni.downloadFile({
    url: fullUrl,
    ...options,
  });
};
