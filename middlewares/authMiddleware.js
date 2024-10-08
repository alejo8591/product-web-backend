const jwt = require("jsonwebtoken");
const config = require("./config.json");
const app = require("../app");

const verifyToken = (req, res, next) => {
  try {
    const bearerHeader = req.header('Authorization');
    const parts = bearerHeader.split(' ');
    
    if (parts) {
      if (parts && parts.length === 2) {
        const token = parts[1];
        jwt.verify(token, config.secret, (err, decoded) => {
          if (decoded) {
            next();
          } else {
            return res.status(401).json({error: "Invalid Token"});
          }
        });
      }
    }
  } catch (err) {
    return res.status(403).send({error: "Forbidden"});
  }
};

module.exports = verifyToken;