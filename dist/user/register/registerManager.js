"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorCode_1 = __importDefault(require("../../errorCode"));
const dal_1 = require("../../db/dal");
function register(reqBody) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = errorCode_1.default.UserNameRepeat;
        try {
            let user = yield dal_1.userInfoDal.findUserByUserName(reqBody.userName);
            if (!user) {
                user = yield dal_1.userInfoDal.addUser(reqBody);
                result = errorCode_1.default.Success;
                result.data = { userId: user.userId };
            }
        }
        catch (err) {
            console.log('注册时发生错误', err.message);
            return errorCode_1.default.SystemError;
        }
        return result;
    });
}
exports.default = register;
//# sourceMappingURL=registerManager.js.map