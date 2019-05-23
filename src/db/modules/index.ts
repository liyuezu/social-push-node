import mongoose from 'mongoose';
import config from '../../config';

import UserInfoModel from './userInfoModel';
import TopicModel from './topicModel';

/* 初始化数据库连接 */
function connectMongo() {
  mongoose.Promise = global.Promise;
  try {
    mongoose.connect(config.systemConfig.dbUrl, {
      useCreateIndex: true,
      useNewUrlParser: true
    });
  } catch (error) {
    console.log(`连接数据库失败, ${error.message}`);
  }

  mongoose.connection
    .once('open', function() {
      console.log('数据库连接成功');
    })
    .on('error', function(err) {
      throw err;
    });
}

export { UserInfoModel, TopicModel, connectMongo };
