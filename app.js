// Importações principais
const express = require("express");
const connectToDatabase = require("./config/database"); // Caminho relativo da conexão com MongoDB
require("dotenv").config(); // Carregar variáveis do .env
const cors = require("cors");

// Inicializando o app
const app = express();

// Middlewares
app.use(express.json()); // Permitir parse de JSON
app.use(cors()); // Permitir requisições de diferentes origens

// Conectar ao MongoDB
connectToDatabase();

// Rotas do projeto
app.use("/auth", require("./routes/UserRoutes")); // Rota de autenticação/usuários
app.use("/ai", require("./routes/aiRoutes")); // Rota de IA

// Endpoint para verificar se o servidor está vivo
app.get("/", (req, res) => {
  res.send("✅ Backend Nexus Empire funcionando!");
});

// Inicializar o servidor
const PORT = process.env.PORT || 3000; // Porta configurável no .env, padrão: 3000
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});