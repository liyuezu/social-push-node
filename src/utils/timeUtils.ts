import moment from 'moment';

interface IUtils {
  getCurrentDateTime: () => string;
}

const utils: IUtils = {
  // 获取当前utc时间字符串
  getCurrentDateTime() {
    return moment().format('YYYY-MM-DDTHH:mm:ss.SSSSZ');
  }
};

export default utils;
