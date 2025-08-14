const Project = require("../mongoose/ProjectModel");

const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllProjects = async (req, res) => {
  const projects = await Project.find().populate("owner");
  res.json(projects);
};

module.exports = { createProject, getAllProjects };