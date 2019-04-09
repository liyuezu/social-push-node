import uuidv1 from 'uuid/v1';
import timeUtils from './timeUtils';
import AES from 'crypto-js/aes';

interface ITools {
  getUUID: () => string;
  generateToken: (userId: string) => string;
}

/* 统一工具类 */
const tools: ITools = {
  getUUID() {
    let uuid = uuidv1();
    return uuid.toString().replace(/[-]/g, '');
  },
  generateToken(userId) {
    const currentTimeStamp = timeUtils.getTimeStamp();
    const token = `${userId}||${currentTimeStamp}`;
    const encodeToken = AES.encrypt(token, '123').toString();
    return encodeToken;
  }
};

export default tools;
