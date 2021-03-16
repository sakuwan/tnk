async function handleRoute(ctx) {
  await ctx.render('index', {});
}

export default {
  path: '/',
  route: handleRoute,
};
