// build your `/api/tasks` router here
// build your `/api/Tasks` router here
const express = require("express");
const { getTasks, addTask } = require("./model");
const { getProjectById } = require("../project/model");

const router = express.Router();

router.get("/", (req, res) => {
  getTasks()
    .then(data => {
      for (let i in data) {
        if (data[i].completed === 0) {
          data[i].completed = false
        } else {
          data[i].completed = true;
        }
      }
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})

router.post("/", (req, res) => {
  if (!req.body.project_id || !req.body.description) {
    res.status(400).json(`You need a project_id and description.`)
  } else {
     getProjectById(req.body.project_id)
    .then(data => {
      if (data.length > 0) {
        addTask(req.body)
        .then(data => {
          if (data[0].completed === 0) {
            data[0].completed = false
          } else {
            data[0].completed = true;
          }
          res.status(201).json(data[0]);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        })
    
    
      } else {
        res.status(404).json(`Could not find project.`)
      }
    })
  }
 

})
// function taskValidation(req, res, next) {
//   if (!req.body.project_id) {
//     res.status(400).json(`You need a project_id.`)
//   }
//   getProjectById(req.body.project_id)
//     .then(data => {
//       console.log(data)
//       if (data.length > 0) {
//         next()
//       } else {
//         res.status(404).json(`Could not find project.`)
//       }
//     })
// }
module.exports = router;