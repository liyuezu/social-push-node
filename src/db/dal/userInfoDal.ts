import { UserInfoModel } from '../modules';

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

export default { addUser, findUserByUserName, findUserByUserId };
