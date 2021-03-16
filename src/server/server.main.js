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

import './styles/app.css';

const app = new Koa();
if (process.env.NODE_ENV === 'development') app.use(logger());

app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser());

app.use(serve(resolve(__dirname, './public')));

app.use(render);
app.use(router);

const serverPort = process.env.APP_PORT ?? 27655;
export default app.listen(serverPort, () => {
  // eslint-disable-next-line no-console
  console.log('[Server] Listening on port: ', serverPort);
});
