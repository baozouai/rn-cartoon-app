import {
    Dimensions,
} from 'react-native';
// 获取竖屏app宽度
const deviceWidthDp = Dimensions.get('window').width;
// ui默认宽度750
const uiWidthPx = 750;

const pxSize =uiElementWidth => uiElementWidth * deviceWidthDp / uiWidthPx;

export {
    pxSize,
};