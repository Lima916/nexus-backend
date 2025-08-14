const connectToDatabase = require("./config/database"); // Ajuste o caminho se necessário

(async () => {
  await connectToDatabase();
})();