import errorCodes from '../errorCode';

interface ITypesUtil {
  isString: (param: any) => boolean;
  isNumber: (param: any) => boolean;
  isBoolean: (param: any) => boolean;
  isUndefined: (param: any) => boolean;
  isNull: (param: any) => boolean;
  isObject: (param: any) => boolean;
  isArray: (param: any) => boolean;
  isFunction: (param: any) => boolean;
}

/* 类型判断工具类 */
const typesUtil: ITypesUtil = {
  isString(param) {
    return Object.prototype.toString.call(param).toLowerCase() === '[object string]';
  },
  isNumber(param) {
    return Object.prototype.toString.call(param).toLowerCase() === '[object nuber]';
  },
  isBoolean(param) {
    return Object.prototype.toString.call(param).toLowerCase() === '[object boolean]';
  },
  isUndefined(param) {
    return Object.prototype.toString.call(param).toLowerCase() === '[object undefined]';
  },
  isNull(param) {
    return Object.prototype.toString.call(param).toLowerCase() === '[object null]';
  },
  isObject(param) {
    return Object.prototype.toString.call(param).toLowerCase() === '[object object]';
  },
  isArray(param) {
    return Object.prototype.toString.call(param).toLowerCase() === '[object array]';
  },
  isFunction(param) {
    return Object.prototype.toString.call(param).toLowerCase() === '[object function]';
  }
};

const typeList = {
  register: ['userName', 'password']
};

/* 统一参数判空方法 */
function validateParams(reqParams: any, type: string) {
  if (!typesUtil.isObject(reqParams)) {
    return errorCodes.ParameterError;
  }
  if (typesUtil.isArray(typeList[type])) {
    for (let item of typeList[type]) {
      if (typesUtil.isNull(reqParams[item]) || typesUtil.isUndefined(reqParams[item])) {
        return errorCodes.ParameterError;
      }
    }
  }
  return errorCodes.Success;
}

export default { validateParams, typesUtil };
