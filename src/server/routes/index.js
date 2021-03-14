async function handleRoute(ctx) {
  await ctx.render('index', {
    title: 'Test',
  });
}

export default {
  path: '/',
  route: handleRoute,
};
