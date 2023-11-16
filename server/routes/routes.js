
const express = require('express')
const router = express.Router();

// importing controllers
const {register,login} = require("../controllers/auth")

// send response to server to default route
router.post("/",login)

// send response to server to custom route
router.post("/register",register)

module.exports = router;