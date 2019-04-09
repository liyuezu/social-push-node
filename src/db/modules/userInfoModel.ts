import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { timeUtils, tools } from '../../utils';

/** 用户信息表 */
const UserInfoSchema = new Schema({
  userId: { type: String, default: tools.getUUID }, // 用户的ID，唯一标识
  userName: { type: String }, // 用户名
  password: { type: String }, // 密码
  isActive: { type: Boolean, default: true }, // 当前用户是否可用
  createdTime: { type: Date, default: timeUtils.getCurrentDateTime }, // 创建用户的时间
  updatedTime: { type: Date, default: timeUtils.getCurrentDateTime } // 用户更新时间
});

UserInfoSchema.index({ userId: 1 }, { unique: true });
UserInfoSchema.index({ userName: 1 }, { unique: true });

const UserInfo = mongoose.model('UserInfo', UserInfoSchema);
export default UserInfo;
