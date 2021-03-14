import Router from '@koa/router';

import indexRoute from './routes/index';

const router = new Router();
router.get(indexRoute.path, indexRoute.route);

export default router;
