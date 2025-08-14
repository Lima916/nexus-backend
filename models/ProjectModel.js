const mongoose = require('mongoose');

// Estrutura do Esquema de Projetos
const ProjectSchema = new mongoose.Schema(
  {
    // Nome do Projeto
    name: {
      type: String,
      required: [true, 'O nome do projeto é obrigatório'],
      trim: true,
      minlength: [3, 'O nome do projeto deve ter pelo menos 3 caracteres'],
      maxlength: [50, 'O nome do projeto pode ter no máximo 50 caracteres'],
    },
    // Descrição do Projeto
    description: {
      type: String,
      required: [true, 'A descrição é obrigatória'],
      trim: true,
      minlength: [10, 'A descrição do projeto deve ter pelo menos 10 caracteres'],
      maxlength: [500, 'A descrição pode ter no máximo 500 caracteres'],
    },
    // Dono do Projeto (Relacionamento com a tabela User)
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Relaciona com o modelo "User"
      required: [true, 'O proprietário do projeto é obrigatório'],
    },
    // Status do Projeto
    status: {
      type: String,
      enum: ['Open', 'In Progress', 'Completed'], // Estados possíveis do projeto
      default: 'Open', // Valor padrão
    },
  },
  {
    timestamps: true, // Gera automaticamente os campos createdAt e updatedAt
  }
);

// Middleware de Pre-Save: Você pode adicionar lógica aqui caso necessário
ProjectSchema.pre('save', async function (next) {
  // Exemplo: Adicionar uma lógica personalizada antes de salvar
  // Por enquanto, não há mudanças necessárias
  next();
});

// Exportando o Modelo para o MongoDB
module.exports = mongoose.model('Project', ProjectSchema);