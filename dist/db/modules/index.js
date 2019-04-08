"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../config"));
const userInfoModel_1 = __importDefault(require("./userInfoModel"));
exports.UserInfoModel = userInfoModel_1.default;
function connectMongo() {
    mongoose_1.default.Promise = global.Promise;
    console.log(config_1.default.systemConfig.dbUrl, '123');
    mongoose_1.default.connect(config_1.default.systemConfig.dbUrl);
}
exports.connectMongo = connectMongo;
//# sourceMappingURL=index.js.map