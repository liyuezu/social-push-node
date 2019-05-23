import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { timeUtils, tools } from '../../utils';

/** 用户信息表 */
const UserInfoSchema = new Schema({
  userId: { type: String, required: true, default: tools.getUUID }, // 用户的ID，唯一标识
  userName: { type: String, required: true }, // 用户名
  password: { type: String, required: true }, // 密码
  isActive: { type: Boolean, default: true }, // 当前用户是否可用
  userNickName: { type: String }, // 用户昵称
  avatar: { type: String }, // 头像
  introduction: { type: String }, // 简介
  sex: { type: Number }, // 性别:1 man,2 woman,3 unknown
  area: { type: String }, // 地区
  isCompleteFirstUserInfo: { type: Boolean, default: false, required: true }, // 是否已完成首次登陆完善信息
  createdTime: { type: Date, default: timeUtils.getCurrentDateTime }, // 创建用户的时间
  updatedTime: { type: Date, default: timeUtils.getCurrentDateTime } // 用户更新时间
});

UserInfoSchema.index({ userId: 1 }, { unique: true });
UserInfoSchema.index({ userName: 1 }, { unique: true });

const UserInfo = mongoose.model('UserInfo', UserInfoSchema);
export default UserInfo;
