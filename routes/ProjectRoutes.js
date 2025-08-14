const express = require("express");
const { createProject, getAllProjects } = require("../controllers/ProjectController");

const router = express.Router();

router.post("/", createProject); // Criar projeto
router.get("/", getAllProjects); // Listar projetos

module.exports = router;