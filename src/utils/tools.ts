import uuidv1 from "uuid/v1";
import timeUtils from "./timeUtils";
import CryptoJS from "crypto-js";
import config from "../config";

interface ITools {
  getUUID: () => string;
  generateToken: (userId: string) => string;
  decryptToken: (token: string) => string;
}

/* 统一工具类 */
const tools: ITools = {
  getUUID() {
    const uuid = uuidv1();
    return uuid.toString().replace(/[-]/g, "");
  },
  generateToken(userId) {
    const currentTimeStamp = timeUtils.getTimeStamp();
    const token = `${userId}||${currentTimeStamp}`;
    const encodeToken = CryptoJS.AES.encrypt(token, config.systemConfig.secretKey).toString();
    return encodeToken;
  },
  decryptToken(token) {
    const decodeToken = CryptoJS.AES.decrypt(token, config.systemConfig.secretKey).toString(
      CryptoJS.enc.Utf8
    );
    return decodeToken;
  }
};

export default tools;
