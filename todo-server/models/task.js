let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TaskSchema = new Schema({
  title: String,
  description: String
});

let Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
