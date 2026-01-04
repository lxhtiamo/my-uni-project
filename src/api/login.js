//评价详情
import {get, post} from '@/utils/request/http';

export const login = (parameter) => {
  return get('/admin_case_evaluation/getAdminCaseEvaluationUnid', parameter);
};

export const getList = (parameter) => {
  return post('product/api/v1/line/pagination', parameter);
};
