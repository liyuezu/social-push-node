import moment from 'moment';

interface IUtils {
  getCurrentDateTime: () => string;
  getTimeStamp: () => number;
}

/* 时间格式方法 */
const utils: IUtils = {
  // 获取当前utc时间字符串
  getCurrentDateTime() {
    return moment().format('YYYY-MM-DDTHH:mm:ss.SSSSZ');
  },
  getTimeStamp() {
    let d = new Date();
    return Math.floor(d.getTime() / 1000);
  }
};

export default utils;
