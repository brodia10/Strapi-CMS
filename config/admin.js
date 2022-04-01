module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '30ddffa9cd06b0b535e4f4fdd8fe6675'),
  },
});
