import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import { connectMongo } from './db/modules';
import router from './router';

const app = express();

// allow custom header and CORS
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Requested-With, Channel-No'
  );
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true'); // 可以带cookies
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));
connectMongo();

// routes
app.use('/', router);

// error handler
app.use(function(err, req, res, next) {
  console.error(err.message);
  return res.sendStatus(500).send({});
});

app.listen(config.systemConfig.port, function() {
  console.log(`the server is start at port ${config.systemConfig.port}`);
});

export default app;
