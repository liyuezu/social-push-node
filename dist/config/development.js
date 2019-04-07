"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const systemConfig = {
    port: Number(process.env.PORT) || 8000,
    dbUrl: 'mongodb://127.0.0.1:27017/social-push'
};
exports.default = {
    systemConfig: systemConfig
};
//# sourceMappingURL=development.js.map