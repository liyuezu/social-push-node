const systemConfig = {
  port: Number(process.env.PORT) || 8000,
  dbUrl: 'mongodb://127.0.0.1:27017/social-push'
};

export default {
  systemConfig: systemConfig
};
