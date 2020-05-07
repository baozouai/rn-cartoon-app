import {
    Dimensions,
} from 'react-native';
// 获取竖屏app宽度
const deviceWidthDp = Dimensions.get('window').width;
// ui默认宽度750
const uiWidthPx = 750;

const pxSize =uiElementWidth => uiElementWidth * deviceWidthDp / uiWidthPx;
const  onFetch = async(page = 1, startFetch, abortFetch, service) => {
    try {
      // 每次获取20条
      const pageLimit = 20;
      const response = await service(page);
      const data = await response.json();
      startFetch(data, pageLimit);
    } catch (err) {
      abortFetch();
    }
  }
export {
    pxSize,
    onFetch,
};