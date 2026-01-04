export default {
    getPages() {
        return getCurrentPages();
    },
    /**
     * 跳转
     * @param url url: 'test?id=1&name=uniapp'
     */
    navigateTo(url, obj) {
        uni.navigateTo({
            url: url + '?data=' + encodeURIComponent(JSON.stringify(obj))
        });
    },
    /**
     * 关闭当前页面并跳转
     * @param url
     */
    redirectTo(url) {
        uni.redirectTo({
            url: url
        });
    },
    /*关闭所有页面并跳转*/
    reLaunch(url) {
        uni.reLaunch({
            url: url
        });
    },
    /**
     *关闭当前页面，返回上一页面或多级页面
     * @param delta 默认1
     */
    navigateBack(delta) {
        uni.navigateBack({
            delta: delta ? delta : 1
        });
    },

    /*同步缓存*/
    setStorageSync(key, data) {
        uni.setStorageSync(key, data);
    },
    /**
     * 从本地缓存中同步获取指定 key 对应的内容
     * @param key
     * @returns {*}
     */
    getStorageSync(key) {
        return uni.getStorageSync(key);
    },
    /**
     * 从本地缓存中同步移除指定 key。
     * @param key
     */
    removeStorageSync(key) {
        uni.removeStorageSync(key);
    },
    /*清空所有缓存*/
    clearStorageSync() {
        uni.clearStorageSync();
    },
}
