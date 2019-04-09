import { Request, Response } from 'express';
import errorCodes from '../../errorCode';
import { validateUtils } from '../../utils';
import loginManager from './loginManager';

async function login(req: Request, res: Response) {
  let result = errorCodes.SystemError;
  try {
    result = validateUtils.validateParams(req.body, 'login');
    if (result.resultCode === errorCodes.Success.resultCode) {
      result = await loginManager.login(req.body);
    }
  } catch (err) {
    console.log(err.message);
  }
  return res.status(200).send(result);
}

export default { login };
