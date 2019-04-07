import { UserInfoModel } from '../modules';

interface IUser {
  userName: string;
  password: String;
}

async function addUser(user: IUser) {
  let userModel = new UserInfoModel(user);
  return userModel.save();
}

async function findUserByUserName(userName: string) {
  let query = UserInfoModel.findOne({ userName });
  return query.exec();
}

export default { addUser, findUserByUserName };
