const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/* backend starts here */
/* mongoose (from MongoDB) connection create */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tasks');
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

var Task = require("../models/task");

// Add new post
app.post('/tasks', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_task = new Task({
    title: title,
    description: description
  })

  new_task.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Task saved successfully!'
    })
  })
})

// Fetch all posts
app.get('/tasks', (req, res) => {
  Task.find({}, 'title description', function (error, tasks) {
    if (error) { console.error(error); }
    res.send({
      tasks: tasks
    })
  }).sort({_id:-1})
})

// Fetch single post
app.get('/task/:id', (req, res) => {
  var db = req.db;
  Task.findById(req.params.id, 'title description', function (error, task) {
    if (error) { console.error(error); }
    res.send(task)
  })
})

// Update a post
app.put('/tasks/:id', (req, res) => {
  var db = req.db;
  Task.findById(req.params.id, 'title description', function (error, task) {
    if (error) { console.error(error); }
    task.title = req.body.title
    task.description = req.body.description
    task.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete a post
app.delete('/tasks/:id', (req, res) => {
  var db = req.db;
  Task.remove({
    _id: req.params.id
  }, function(err, task){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

app.listen(process.env.PORT || 8081)
