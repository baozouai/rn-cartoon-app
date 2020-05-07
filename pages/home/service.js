import {
    baseUrl
} from '../constants';
// 获取首页列表
const getHomeList = async page => fetch(`${baseUrl}/indexList?page=${page}`);

export {
    getHomeList,
};