import { resolve } from 'path';

import Koa from 'koa';

import serve from 'koa-static';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';

import cors from '@koa/cors';
import helmet from 'koa-helmet';
import compress from 'koa-compress';

import render from './render';
import router from './router';

const app = new Koa();
if (process.env.NODE_ENV === 'development') app.use(logger());

app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser());

app.use(serve(resolve('./dist/public')));

app.use(render);
app.use(router);

export default app.listen(27655, () => {
  // eslint-disable-next-line no-console
  console.log('[Server] Listening on port: ', 27655);
});
