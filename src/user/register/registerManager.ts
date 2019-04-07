import errorCodes from '../../errorCode';
import { userInfoDal } from '../../db/dal';
import { IResponse, UserInfoModel } from '../../types';

async function register(reqBody: any): Promise<IResponse> {
  let result: IResponse = errorCodes.UserNameRepeat;
  try {
    let user: UserInfoModel = await userInfoDal.findUserByUserName(reqBody.userName);
    if (!user) {
      user = await userInfoDal.addUser(reqBody);
      result = errorCodes.Success;
      result.data = { userId: user.userId };
    }
  } catch (err) {
    console.log('注册时发生错误', err.message);
    return errorCodes.SystemError;
  }
  return result;
}

export default register;
