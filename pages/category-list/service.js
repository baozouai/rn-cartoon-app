import {
    baseUrl
} from '../constants';
// 获取首页列表
const getCategoryList = async (page, category) => fetch(`${baseUrl}/cList?page=${page}&category=${category}`);

export {
    getCategoryList,
};