if (process.env.Node_ENV === "prodevtion") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
