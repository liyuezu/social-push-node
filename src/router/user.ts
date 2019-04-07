'use strict';
import express from 'express';
const router = express.Router();
import registerController from '../user/register';

const routers = router.post('/login').post('/register', registerController.register);

export default routers;
