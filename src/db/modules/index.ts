import mongoose from 'mongoose';
import config from '../../config';

import UserInfoModel from './userInfoModel';

function connectMongo() {
  mongoose.Promise = global.Promise;
  console.log(config.systemConfig.dbUrl, '123');
  mongoose.connection.openUri(config.systemConfig.dbUrl);
}

export { UserInfoModel, connectMongo };
