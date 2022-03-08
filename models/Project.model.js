const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, maxLength: 500},
  tasks: [{type: Schema.Types.ObjectId, ref: "Task", default: []}]
});
//owner: {type: Schema.Types.ObjectId, ref: "User"},

const Project = model("Project", projectSchema);

module.exports = Project;