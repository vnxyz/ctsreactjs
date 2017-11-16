var express = require('express')
var cors = require('cors');
var bodyParser = require('body-parser')


var app = express()
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var courses = [
    {"name": "ReactJS"},
    {"name": "Angular"},
    {"name" : "NodeJS"}
]
var todos =[];
app.get('/courses', function (req, res) {
  res.json(courses);
})

app.post('/courses', function (req, res) {
    var course = req.body;
    console.log(course);
    courses.push(course);
    res.json(courses);
  })
 
  app.post('/todo', function (req, res) {
    var todo = req.body;
    console.log(todo);
    todos.push(todo);
    res.json(todos);
  })

  app.post('/auth', function (req, res) {
    var email = req.body.email;
    var pwd = req.body.pwd;
    console.log(email, pwd)
    if(email === pwd){
        res.json({auth: true})
    }
    else{
        res.json({auth: false})
    }
  })
  app.get('/todo', function (req, res) {
    res.json(todos);
  })

  app.delete('/todo/:index', function(req, res){
      var index =req.params.index;
      console.log(index)
      todos.splice(index,1)
      res.json(todos);
  })


app.listen(3000)