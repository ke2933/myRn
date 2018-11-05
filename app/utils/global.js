/**
 * Created by ke2933 on 2018/11/05.
 */
import { Dimensions, Platform, PixelRatio, StatusBar } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

// 颜色变量
import colors from './colors';

// 适配
import px2dp from './px2dp';

const { height, width } = Dimensions.get('window');

// 颜色
global.colors = colors;

// 系统是iOS
global.IOS = Platform.OS === 'ios' ? true : false;

// 系统是安卓
global.Android = Platform.OS === 'android' ? true : false;

// 获取屏幕宽度
global.SCREEN_WIDTH = width;

// 获取屏幕高度
global.SCREEN_HEIGHT = height;

// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();

// 最小线宽
global.pixel = 1 / PixelRatio;

// 是否为苹果刘海设备
global.IPhoneX = isIphoneX();

// 适配
global.px2dp = px2dp;

// android 状态栏高度
global.AndroidCurrentHeight = StatusBar.currentHeight;

// ios 状态栏高度
global.IOSCurrentHeight = isIphoneX() ? 44 : 20;

//状态栏高度
global.StatusBarHeight = Platform.OS === 'ios' ? (isIphoneX() ? 44 : 20) : StatusBar.currentHeight;

// 导航高度
global.NavHeight = Platform.OS === 'ios' ? (isIphoneX() ? 88 : 64) : 44;

// tabBar 高度
global.TabBar = isIphoneX() ? 34 : 0;