module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '746535f325ece3b737b909d3e456c247'),
  },
});
