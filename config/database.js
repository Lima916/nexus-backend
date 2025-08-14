const mongoose = require("mongoose");
require("dotenv").config(); // Carrega variáveis do .env

const connectToDatabase = async () => {
  try {
    const uri = process.env.MONGO_URI; // URI de configuração no .env
    if (!uri) {
      throw new Error("❌ MONGO_URI não está definido no arquivo .env");
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    });

    console.log("✅ Conexão ao MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error.message);
    process.exit(1); // Encerra o processo caso não consiga conectar
  }
};

module.exports = connectToDatabase;