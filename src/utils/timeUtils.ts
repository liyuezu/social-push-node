import moment from 'moment';

interface IUtils {
  getCurrentDateTime: () => string;
}

/* 时间格式方法 */
const utils: IUtils = {
  // 获取当前utc时间字符串
  getCurrentDateTime() {
    return moment().format('YYYY-MM-DDTHH:mm:ss.SSSSZ');
  }
};

export default utils;
