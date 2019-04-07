"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv1 = require('uuid/v1');
const tools = {
    getUUID() {
        let uuid = uuidv1();
        return uuid.toString().replace(/[-]/g, '');
    }
};
exports.default = tools;
//# sourceMappingURL=tools.js.map