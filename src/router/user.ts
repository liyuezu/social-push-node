'use strict';
import express from 'express';
const router = express.Router();
import registerController from '../user/register';
import loginController from '../user/login';
import userInfoController from '../user/userInfo';

const routers = router
  .post('/login', loginController.login)
  .post('/register', registerController.register)
  .post('/updateUserInfo', userInfoController.updateUserInfo);

export default routers;
