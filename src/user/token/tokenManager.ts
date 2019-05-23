import { tools } from '../../utils';
import errorCode from '../../errorCode';
import { timeUtils } from '../../utils';
import config from '../../config';
import { IResponse } from '../../types';

function verifyToken(token: string): IResponse {
  let result = errorCode.TokenError;
  try {
    const decodeToken = tools.decryptToken(token);
    const generateTime = decodeToken.split('||')[1];
    const currentTime = timeUtils.getTimeStamp();
    if (Number(currentTime) - Number(generateTime) < config.systemConfig.expirationTime) {
      result = errorCode.Success;
    }
  } catch (err) {
    console.log(err);
  }
  return result;
}

export default { verifyToken };
