const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

function generateToken(user) {
  return jwt.sign({ id: user._id, username: user.username }, secretKey, {
    expiresIn: "1h",
  });
}

function verifyToken(token) {
  return jwt.verify(token, secretKey);
}

module.exports = { generateToken, verifyToken };
