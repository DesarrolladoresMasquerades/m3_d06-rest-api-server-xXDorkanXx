express = require("express");
const router = express.Router();
const Project = require("../models/Project.model");


router.get("/:projectId", (req, res)=>{
  Project.findById(req.params.projectId)
  .populate("tasks")
  .then((project)=>{res.json(project)})
  .catch((err)=>{res.json(err)})
})

router.put("/:projectId", (req, res)=>{
  Project.findByIdAndUpdate(req.params.projectId, req.body, {new: true})
  .then((updatedProject)=>{res.json(updatedProject)})
  .catch((err)=>{res.json(err)})
})

router.delete("/:projectId", (req, res)=>{
  Project.findByIdAndDelete(req.params.projectId)
  .then((deletedProject)=>{res.json(deletedProject)})
  .catch((err)=>{res.json(err)})
})

router.get("/", (req, res)=>{
  Project.find()
  .populate("tasks")
  .then((projects)=>{res.json(projects)})
  .catch((err)=>{res.json(err)})
})

router.post("/", (req, res)=>{
  Project.create(req.body)
  .then((newProject)=>{res.json(newProject)})
  .catch((err)=>{res.json(err)})
})

module.exports = router;