const Project = require("../models/Project.model");
const Task = require("../models/Task.model");

express = require("express");
const router = express.Router();

router.post("/", (req, res)=>{
  Task.create(req.body)
  .then((newTask)=>{
    Project.findByIdAndUpdate(newTask.project, {$push: {tasks: newTask._id}})
    .then((_)=>{res.json(newTask)})
  })
  .catch((err)=>{res.json(err)})
})

router.put("/:taskId", (req, res)=>{

  const {title, description} = req.body; //delete req.body.project
  Task.findByIdAndUpdate(req.params.taskId, {title, description}, {new: true}) //req.body
  .then((updatedTask)=>{res.json(updatedTask)})
  .catch((err)=>{res.json(updatedTask)})

  // Task.findById(req.params.taskId).then((task) => {
  //   const oldProject = task.project;
  //   const newProject = req.body.project;
  //   Project.findByIdAndUpdate(oldProject, { $pull: { tasks: task._id } }).then(
  //     (_) => {
  //       Project.findByIdAndUpdate(newProject, { $push: { tasks: task._id } });
  //     }
  //   );
  //   const {title, description} = req.body;
  //   task.title = title;
  //   task.description = description;
  //   task.save()
  //   .then((updatedTask)=>{res.json(updatedTask)})
  // });
  // delete from old project .then()
  // $push to new project
})

module.exports = router;