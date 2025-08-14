// routes/aiRoutes.js
const express = require("express");
const { processChatMessage } = require("../controllers/aiController");

const router = express.Router();

// Endpoint para comunicação de IA via texto
router.post("/chat", processChatMessage);

module.exports = router;