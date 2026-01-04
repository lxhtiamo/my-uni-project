import {mergeWith, isArray} from 'lodash-es';

export const isNoEmptyObject = (value) => {
  // 首先检查是否为对象类型，且不是null，也不是数组
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    // 检查对象是否有自有属性
    return Object.keys(value).length > 0;
  }
  return false;
};

/**
 * 深度合并两个对象，数组直接覆盖
 * @param {Object} obj1 - 目标对象
 * @param {Object} obj2 - 源对象
 * @returns {Object} - 合并后的对象
 */
export const deepMerge = (obj1, obj2) => {
  return mergeWith({}, obj1, obj2, (targetValue, sourceValue) => {
    // 处理数组：直接覆盖（或根据需求修改为 concat）
    if (isArray(targetValue)) {
      return sourceValue;
    }
  });
};
