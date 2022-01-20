module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '12917a44e06b390903fdbbd36bdaa513'),
  },
});
