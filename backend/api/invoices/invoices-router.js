const express = require("express");

const router = express.Router();

const { restricted } = require("../auth/auth-middleware");

router.get("/:id", restricted, (req, res) => {
  res.status(200).json("get by id");
});

router.post("/", restricted, (req, res) => {
  res.status(200).json("create an invoice");
});

router.put("/", restricted, (req, res) => {
  res.status(200).json("update an invoice");
});

router.delete("/", restricted, (req, res) => {
  res.status(200).json("delete an invoice");
});

module.exports = router;
