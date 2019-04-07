import development from './development';
import production from './production';

// 根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
let config = development;
if (process.env.NODE_ENV === 'production') {
  config = production;
}

export default config;
