import { Request, Response } from 'express';
import { validateUtils } from '../../utils';
import errorCodes from '../../errorCode';
import registerManager from './registerManager';

/** 注册 */
async function register(req: Request, res: Response) {
  console.log(`接受到参数：${JSON.stringify(req.body)}`);
  try {
    let result = validateUtils.validateParams(req.body, 'register');
    if (result.resultCode === errorCodes.Success.resultCode) {
      result = await registerManager(req.body);
      return res.status(200).send(result);
    } else {
      return res.status(200).send(result);
    }
  } catch (err) {
    console.log(err.message);
    return res.status(200).send(errorCodes.SystemError);
  }
}

export default { register };
