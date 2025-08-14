// controllers/aiController.js

// Controller para a IA processar mensagens de texto
const processChatMessage = (req, res) => {
    const { message } = req.body; // Pega a mensagem enviada pelo cliente

    if (!message) {
        return res.status(400).json({ error: "Por favor, envie uma mensagem." });
    }

    // Simulação de resposta da IA (mensagem fixa como exemplo)
    const response = `IA diz: "Você disse '${message}', e eu estou respondendo como esperado!"`;

    res.status(200).json({ message: response });
};

// Exporta o controller
module.exports = {
    processChatMessage,
};