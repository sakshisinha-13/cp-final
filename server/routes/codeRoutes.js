const express = require("express");
const router = express.Router();
const { executeCode } = require("../controllers/codeController");

router.post("/", executeCode);

module.exports = router;
