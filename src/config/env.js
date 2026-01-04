// 生产环境
const production = {
  baseURL: `https://localhost:8080/`,
  staticPath: 'public',
};

// 开发环境'
const development = {
  baseURL: `https://yjyfj.linewell.com/`,
  staticPath: 'prod-api/',
};

const config = {
  development,
  production,
};
export default config[process.env.NODE_ENV];
