const express = require("express");

const UserController = require('../controllers/user');

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

router.get("/order-details", UserController.getOrderDetails);

router.get("/get-users", UserController.getAllUsers);

module.exports = router;