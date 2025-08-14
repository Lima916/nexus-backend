const bcrypt = require("bcrypt"); // Criptografia de senha
const User = require("../models/UserModel"); // Modelo de usuário

// Registrar Usuário
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar dados recebidos
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "O e-mail já está em uso." });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar novo usuário
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Usuário registrado com sucesso!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar o usuário", error: error.message });
  }
};

// Login do Usuário
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar credenciais enviadas
    if (!email || !password) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    // Verificar a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Senha incorreta." });
    }

    res.status(200).json({ message: "Login bem-sucedido!", user });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login", error: error.message });
  }
};

module.exports = { registerUser, loginUser };