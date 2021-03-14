import { resolve } from 'path';

import nunjucks from 'koa-nunjucks-async';

export default nunjucks(resolve('./views'), {
  ext: '.html',
  noCache: process.env.NODE_ENV !== 'production',
  filters: {
    json: (x) => JSON.stringify(x, null, 2),
  },
});
