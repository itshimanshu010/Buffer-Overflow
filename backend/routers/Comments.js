const express = require("express");
const router = express.Router();

const commentDB = require("../models/Comments");

router.post("/:id", async (req, res) => {
  try {
    await commentDB
      .create({
        question_id: req.params.id,
        comment: req.body.comment,
        user: req.body.user,
      })
      .then((doc) => {
        res.status(201).send({
          status:true,
          message: "Comment added successfully",
        });
      })
      .catch((err) => {
        res.status(400).send({
          sataus:false,
          message: "Bad format",
        });
      });
  } catch (err) {
    res.status(500).send({
      status:false,
      message: "Error while adding comments",
    });
  }
});

module.exports = router;
