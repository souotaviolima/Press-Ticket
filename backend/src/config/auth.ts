export default {
  secret: process.env.JWT_SECRET || "mysecret",
  expiresIn: "30m",
  refreshSecret: process.env.JWT_REFRESH_SECRET || "myanothersecret",
  refreshExpiresIn: "8h"
};
