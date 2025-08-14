const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Cria novo usuário
        const user = await User.create({ username, email, password });
        res.status(201).json({ message: "Usuário registrado com sucesso!" });
    } catch (err) {
        res.status(400).json({ error: "Erro ao registrar usuário", details: err.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Procura usuário
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

        // Valida senha:
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ error: "Senha inválida" });

        // Cria o token JWT:
        const token = jwt.sign({ id: user._id }, "seusegredosuperseguro", { expiresIn: "1h" });

        res.json({ message: "Login bem-sucedido!", token });
    } catch (err) {
        res.status(500).json({ error: "Erro no login", details: err.message });
    }
};

module.exports = { registerUser, loginUser };