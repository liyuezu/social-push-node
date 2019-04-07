const uuidv1 = require('uuid/v1');

interface ITools {
  getUUID: () => string;
}

const tools: ITools = {
  getUUID() {
    let uuid = uuidv1();
    return uuid.toString().replace(/[-]/g, '');
  }
};

export default tools;
