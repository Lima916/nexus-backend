const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.listarProdutos); // Rota para listar produtos
router.post("/", productController.adicionarProduto); // Rota para criar produto

module.exports = router;