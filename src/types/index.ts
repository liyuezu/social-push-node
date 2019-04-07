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

export { IResponse, IErrorCodeItem, UserInfoModel };
