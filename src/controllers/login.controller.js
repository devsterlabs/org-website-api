const bcrypt = require("bcryptjs");
const { UserModel } = require("../models");
const { generateToken } = require("../common");

class LoginController {
  async login(req, res) {
    const { username, password } = req.body;

    try {
      const user = await UserModel.findOne({ username });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      const token = generateToken(user);

      return res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = { LoginController };
