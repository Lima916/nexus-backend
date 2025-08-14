// Listar produtos
exports.listarProdutos = (req, res) => {
  res.json({ mensagem: "Listando produtos disponíveis!" });
};

// Adicionar produto
exports.adicionarProduto = (req, res) => {
  const novoProduto = req.body;
  res.json({ mensagem: "Produto adicionado com sucesso!", produto: novoProduto });
};