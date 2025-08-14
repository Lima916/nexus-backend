const mongoose = require("mongoose");
require("dotenv").config(); // Carrega as variáveis do arquivo .env

const connectToDatabase = async () => {
  try {
    const uri = process.env.MONGO_URI; // Pega a URI do arquivo .env
    if (!uri) {
      throw new Error("❌ MONGO_URI não está definido no arquivo .env");
    }

    // Conecta ao MongoDB com opções recomendadas
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Conexão ao MongoDB estabelecida com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error.message);
    process.exit(1); // Encerra o processo em caso de erro sério
  }
};

module.exports = connectToDatabase;