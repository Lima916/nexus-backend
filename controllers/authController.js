// Controlador para login
exports.login = (req, res) => {
  const { email, senha } = req.body;

  // Simulação de autenticação
  if (email === "admin@email.com" && senha === "123456") {
    return res.status(200).json({ mensagem: "Login realizado com sucesso!", email });
  }

  res.status(401).json({ mensagem: "Credenciais inválidas!" });
};

// Controlador para registro de usuário
exports.registrar = (req, res) => {
  const { nome, email, senha } = req.body;

  // Simulação de registro (registre no banco em uma implementação real)
  const novoUsuario = { nome, email, senha };
  res.status(201).json({
    mensagem: "Usuário registrado com sucesso!",
    usuario: novoUsuario,
  });
};