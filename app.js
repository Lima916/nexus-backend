const express = require("express");
const connectToDatabase = require("./config/database"); // Caminho relativo para o arquivo de conexão

const app = express();
app.use(express.json()); // Middleware para reconhecer JSON

// Conecta ao MongoDB
connectToDatabase();

// Rotas de exemplo
app.use("/auth", require("./routes/UserRoutes")); // Rotas de autenticação
app.use("/users", require("./routes/userRoutes")); // Rotas de usuários
app.use("/ai", require("./routes/aiRoutes")); // Comunicação IA

// Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});