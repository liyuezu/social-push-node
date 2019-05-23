import { UserInfoModel } from '../modules';
import { IUpdateUserInfo } from '../../types';

interface IUser {
  userName: string;
  password: String;
}

/** 增加用户 */
async function addUser(user: IUser) {
  const userModel = new UserInfoModel(user);
  return userModel.save();
}

/** 根据用户名查询用户 */
async function findUserByUserName(userName: string) {
  const query = UserInfoModel.findOne({ userName });
  return query.exec();
}

/** 根据用户id查询用户 */
async function findUserByUserId(userId: string) {
  const query = UserInfoModel.findOne({ userId });
  return query.exec();
}

/** 根据用户id更新用户信息 */
const updateUserInfo = async (userId: string, params: IUpdateUserInfo) => {
  const query = UserInfoModel.findOneAndUpdate(
    userId,
    {
      $set: params
    },
    {
      new: true
    }
  );
  return query.exec();
};

export default { addUser, findUserByUserName, findUserByUserId, updateUserInfo };
