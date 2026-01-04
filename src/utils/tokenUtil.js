export const TOKEN_KEY = 'token';
export const TOKEN_TIMESTAMP = 'tokenTimeStamp' // 存放token的时的时间戳
/**
 * 存取token
 */
export const setToken = (token) => {
    uni.setStorageSync(TOKEN_KEY, token)
}
export const getToken = () => {
    const token = uni.getStorageSync(TOKEN_KEY);
    return token || null
}

/**
 * 存放token时的时间戳
 */
export const setTokenTimestamp = (timestamp) => {
    uni.setStorageSync(TOKEN_TIMESTAMP, timestamp)
}

export const getTokenTimestamp = () => {
    const tokenTimestamp = uni.getStorageSync(TOKEN_TIMESTAMP);
    return tokenTimestamp || null
}
//清理token
export const removeToken = () => {
    uni.clearStorageSync();
}