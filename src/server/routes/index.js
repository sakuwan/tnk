async function handleRoute(ctx) {
  await ctx.render('main', {
    title: 'CS Dashboard',
  });
}

export default {
  path: '/',
  route: handleRoute,
};
