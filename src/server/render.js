import { resolve } from 'path';

import nunjucks from 'koa-nunjucks-async';

export default nunjucks(resolve(__dirname, './views'), {
  ext: '.html',
  filters: {
    json: (x) => JSON.stringify(x, null, 2),
  },
});
