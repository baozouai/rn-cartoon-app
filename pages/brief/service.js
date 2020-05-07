import {
    baseUrl
} from '../constants';
// 获取首页列表
const getArticleList = async bookTitle => fetch(`${baseUrl}/articleList?bookTitle=${bookTitle}`);

export {
    getArticleList,
};