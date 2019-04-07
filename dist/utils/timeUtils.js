"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const utils = {
    // 获取当前utc时间字符串
    getCurrentDateTime() {
        return moment_1.default().format('YYYY-MM-DDTHH:mm:ss.SSSSZ');
    }
};
exports.default = utils;
//# sourceMappingURL=timeUtils.js.map