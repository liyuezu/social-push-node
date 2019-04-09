'use strict';
import express from 'express';
const router = express.Router();
import registerController from '../user/register';
import loginController from '../user/login';

const routers = router
  .post('/login', loginController.login)
  .post('/register', registerController.register);

export default routers;
