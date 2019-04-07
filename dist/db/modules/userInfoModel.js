"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const utils_1 = require("../../utils");
const UserInfoSchema = new Schema({
    userId: { type: String, default: utils_1.tools.getUUID() },
    userName: { type: String },
    password: { type: String },
    isActive: { type: Boolean, default: true },
    createdTime: { type: Date, default: utils_1.timeUtils.getCurrentDateTime },
    updatedTime: { type: Date, default: utils_1.timeUtils.getCurrentDateTime } // 用户更新时间
});
UserInfoSchema.index({ userId: 1 }, { unique: true });
UserInfoSchema.index({ userName: 1 }, { unique: true });
const UserInfo = mongoose_1.default.model('UserInfo', UserInfoSchema);
exports.default = UserInfo;
//# sourceMappingURL=userInfoModel.js.map