const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "O nome é obrigatório!"],
  },
  email: {
    type: String,
    required: [true, "O e-mail é obrigatório!"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Forneça um e-mail válido!"],
  },
  password: {
    type: String,
    required: [true, "A senha é obrigatória!"],
    minlength: [6, "A senha deve ter no mínimo 6 caracteres."],
  },
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);
module.exports = User;