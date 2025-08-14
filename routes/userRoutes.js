const express = require("express");
const { registerUser, loginUser } = require("../controllers/UserController");

const router = express.Router();

// Rotas de autenticação
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;