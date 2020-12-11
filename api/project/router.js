// build your `/api/projects` router here
const express = require("express");
const { getProjects, addProject } = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  getProjects()
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
  addProject(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})

module.exports = router;