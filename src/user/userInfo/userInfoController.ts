import { Request, Response } from 'express';
import errorCodes from '../../errorCode';
import userInfoManager from './userInfoManager';

const updateUserInfo = async (req: Request, res: Response) => {
  let result = errorCodes.SystemError;
  try {
    result = await userInfoManager.updateUserInfo(req.body.userId, req.body);
  } catch (err) {
    console.log(err.message);
  }
  console.log(result, 'result');
  return res.status(200).send(result);
};

export default { updateUserInfo };
