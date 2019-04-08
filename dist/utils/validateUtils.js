"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorCode_1 = __importDefault(require("../errorCode"));
/* 类型判断工具类 */
const typesUtil = {
    isString(param) {
        return Object.prototype.toString.call(param).toLowerCase() === '[object string]';
    },
    isNumber(param) {
        return Object.prototype.toString.call(param).toLowerCase() === '[object nuber]';
    },
    isBoolean(param) {
        return Object.prototype.toString.call(param).toLowerCase() === '[object boolean]';
    },
    isUndefined(param) {
        return Object.prototype.toString.call(param).toLowerCase() === '[object undefined]';
    },
    isNull(param) {
        return Object.prototype.toString.call(param).toLowerCase() === '[object null]';
    },
    isObject(param) {
        return Object.prototype.toString.call(param).toLowerCase() === '[object object]';
    },
    isArray(param) {
        return Object.prototype.toString.call(param).toLowerCase() === '[object array]';
    },
    isFunction(param) {
        return Object.prototype.toString.call(param).toLowerCase() === '[object function]';
    }
};
const typeList = {
    register: ['userName', 'password']
};
/* 统一参数判空方法 */
function validateParams(reqParams, type) {
    if (!typesUtil.isObject(reqParams)) {
        return errorCode_1.default.ParameterError;
    }
    if (typesUtil.isArray(typeList[type])) {
        for (let item of typeList[type]) {
            if (typesUtil.isNull(reqParams[item]) || typesUtil.isUndefined(reqParams[item])) {
                return errorCode_1.default.ParameterError;
            }
        }
    }
    return errorCode_1.default.Success;
}
exports.default = { validateParams, typesUtil };
//# sourceMappingURL=validateUtils.js.map