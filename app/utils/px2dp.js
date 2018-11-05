import { Dimensions } from 'react-native';

export default px2dp = (size) => {
    const uiHeightPx = 375;// 设计图宽度
    return Math.floor(size * Dimensions.get('window').width / uiHeightPx);
};