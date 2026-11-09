const express = require("express");

const Database = require("../config/Database");
const UserRepository = require("../app/repositories/UserRepository");
const UserService = require("../app/services/UserService");
const UserController = require("../app/controllers/UserController");
const AuthController = require("../app/controllers/AuthController");
const HomeController = require("../app/controllers/HomeController");


const router = express.Router();

const database = new Database();
const userRepository = new UserRepository(database);
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const authController = new AuthController(userController);



// GET home
router.get("/home", async (req, res) => {

    await HomeController.homePage(req, res);

});

// POST registrazione
router.post("/register", async (req, res) => {
    await userController.createUser(req, res);
});


// POST login
router.post("/login", async (req, res) => {
    await authController.login(req, res);
});


router.get("/profile", (req, res) => {
    HomeController.profilePage(req, res);
});


router.get("/", async (req, res) => {
    await userController.home_test(req, res);
});
module.exports = router;