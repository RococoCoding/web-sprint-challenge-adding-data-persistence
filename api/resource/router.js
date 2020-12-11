// build your `/api/resources` router here
const express = require("express");
const { getResources, addResource } = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  getResources()
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
  addResource(req.body)
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
})

module.exports = router;