import errorCodes from '../../errorCode';
import { userInfoDal } from '../../db/dal';
import { IResponse, UserInfoModel } from '../../types';
import { tools } from '../../utils';

type IReqBody = {
  userName: string;
  password: string;
};

async function login(reqBody: IReqBody): Promise<IResponse> {
  let result: IResponse = errorCodes.SystemError;
  try {
    const userInfo: UserInfoModel = await userInfoDal.findUserByUserName(reqBody.userName);
    if (userInfo) {
      if (userInfo.isActive && userInfo.password === reqBody.password) {
        result = errorCodes.Success;
        result.data = {
          userId: userInfo.userId,
          token: tools.generateToken(userInfo.userId)
        };
      } else {
        result = errorCodes.loginFaild;
      }
    } else {
      result = errorCodes.loginFaild;
    }
  } catch (err) {
    console.log(err.message);
  }
  return result;
}

export default { login };
