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
const utils_1 = require("../../utils");
const errorCode_1 = __importDefault(require("../../errorCode"));
const registerManager_1 = __importDefault(require("./registerManager"));
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`接受到参数：${JSON.stringify(req.body)}`);
        try {
            let result = utils_1.validateUtils.validateParams(req.body, 'register');
            if (result.resultCode === errorCode_1.default.Success.resultCode) {
                result = yield registerManager_1.default(req.body);
                return res.status(200).send(result);
            }
            else {
                return res.status(200).send(result);
            }
        }
        catch (err) {
            return res.status(200).send(errorCode_1.default.SystemError);
        }
    });
}
exports.default = { register };
//# sourceMappingURL=registerController.js.map