"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("./config"));
const modules_1 = require("./db/modules");
const router_1 = __importDefault(require("./router"));
const app = express_1.default();
// allow custom header and CORS
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Channel-No');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true'); // 可以带cookies
    if (req.method === 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});
app.use(body_parser_1.default.urlencoded({ limit: '20mb', extended: true }));
app.use(body_parser_1.default.json({ limit: '20mb' }));
modules_1.connectMongo();
// routes
app.use('/', router_1.default);
// error handler
app.use(function (req, res) {
    return res.status(500).send({});
});
app.listen(config_1.default.systemConfig.port, function () {
    console.log(`the server is start at port ${config_1.default.systemConfig.port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map