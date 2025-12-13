const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const prisma = require("../config/prismaClient");
const prisma = require("../prisma");
// const { PrismaClient } = require("../generated");
// // const prisma = require("../generated");
const { JWT_SECRET } = require("../config/config");


// exports.loginUser = async (req, res) => {
//   res.json({ message: "Logout success" });
// };

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login success", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.logoutUser = (req, res) => {
  res.json({ message: "Logout success" });
};

exports.resetPassword = (req, res) => {
  res.json({ message: "Password reset success" });
};