"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const development_1 = __importDefault(require("./development"));
const production_1 = __importDefault(require("./production"));
// 根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
let config = development_1.default;
if (process.env.NODE_ENV === 'production') {
    config = production_1.default;
}
exports.default = config;
//# sourceMappingURL=index.js.map