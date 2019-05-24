import { Request, Response } from 'express';
import errorCodes from '../../errorCode';
import tokenManager from './tokenManager';

async function verifyToken(req: Request, res: Response, next) {
  let result = errorCodes.TokenError;
  try {
    if (req.headers && req.headers.token) {
      result = tokenManager.verifyToken(<string>req.headers.token);
      console.log(result, 'result');
      if (result.resultCode === errorCodes.Success.resultCode) {
        next();
      }
    }
  } catch (err) {
    console.log(err);
  }
  if (result.resultCode !== errorCodes.Success.resultCode) {
    return res.status(200).send(result);
  }
}

export default { verifyToken };
