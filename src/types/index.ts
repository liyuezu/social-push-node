import mongoose from 'mongoose';

interface IErrorCodeItem {
  resultCode: string;
  description: string;
}

interface IResponse extends IErrorCodeItem {
  data?: any;
}

type UserInfoModel = mongoose.Document & {
  userId?: string;
  userName?: string;
  password?: string;
  isActive?: boolean;
  createdTime?: string;
  updatedTime?: string;
};

type IUpdateUserInfo = {
  userNickName?: string;
  avatar?: string;
  introduction?: string;
  area?: string;
};

export { IResponse, IErrorCodeItem, UserInfoModel, IUpdateUserInfo };
