import { IErrorCodeItem } from "../types";

interface IErrorCode {
  Success: IErrorCodeItem;
  ParameterError: IErrorCodeItem;
  SystemError: IErrorCodeItem;
  ValidateLoginError: IErrorCodeItem;
  CreateUserError: IErrorCodeItem;
  TokenError: IErrorCodeItem;
  UserNameRepeat: IErrorCodeItem;
  loginFaild: IErrorCodeItem;
}

const errorCode: IErrorCode = {
  Success: { resultCode: "0000", description: "成功" },
  ParameterError: { resultCode: "0001", description: "参数错误" },
  SystemError: { resultCode: "0002", description: "系统错误" },
  ValidateLoginError: { resultCode: "0003", description: "用户验证失败，请重新登录" },
  CreateUserError: { resultCode: "0004", description: "创建用户失败" },
  TokenError: { resultCode: "0006", description: "Token错误或已过期" },
  UserNameRepeat: { resultCode: "0007", description: "用户名重复" },
  loginFaild: { resultCode: "0008", description: "用户名或密码错误" }
};

export default errorCode;
