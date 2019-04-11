const systemConfig = {
  port: Number(process.env.PORT) || 8000, // 服务端口号
  dbUrl: "mongodb://127.0.0.1:27017/social-push", // 数据库地址
  secretKey: "socialpush999", // token加密密钥
  expirationTime: 2 * 60 * 60 // token过期时间，秒为单位
};

export default {
  systemConfig: systemConfig
};
