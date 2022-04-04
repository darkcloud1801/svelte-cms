module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '19a031df82513c4b8232f4ed07cb77a4'),
  },
});
