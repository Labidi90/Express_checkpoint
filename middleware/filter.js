const path = require("path");

const filter = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  if (hour >= 9 && hour < 17 && day != 6 && day != 0) {
    next();
  } else {
    res.sendFile(path.join(__dirname, "../public", "notAvailable.html"));
  }
};

module.exports = filter;
