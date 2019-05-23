import errorCodes from '../../errorCode';
import { userInfoDal } from '../../db/dal';
import { IResponse, IUpdateUserInfo } from '../../types';

const updateUserInfo = async (userId: string, reqBody: IUpdateUserInfo): Promise<IResponse> => {
  let result: IResponse = errorCodes.SystemError;
  try {
    const userInfo = await userInfoDal.updateUserInfo(userId, reqBody);
    if (userInfo) {
      result = errorCodes.Success;
      result.data = {
        userInfo
      };
    } else {
      result = errorCodes.SystemError;
    }
  } catch (err) {
    console.log(err.message);
  }
  return result;
};

export default { updateUserInfo };
