'use strict';
const env = 'dev'
const defaltAlertMessage = '好像哪里出了点问题~请再试一次'

const defaultBarTitle = {en:'ikcamp'}

const defaltShareText = {en:"Ikcamp英语-学英语口语听力四六级"}

const defaultImg = {
    articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
    coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
  };

let core = {
    env:env,
    defaltAlertMessage:defaltAlertMessage,
    defaltShareText:defaltShareText['en'],
    defaultImg:defaultImg,
    defaultBarTitle:defaultBarTitle['en'],
    isDev:env === 'dev',
    isProduction:env === 'production'
}

export default core;
  