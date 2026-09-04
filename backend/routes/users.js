const express = require("express");

const Database = require("../config/Database");
const UserRepository = require("../app/repositories/UserRepository");
const UserService = require("../app/services/UserService");
const UserController = require("../app/controllers/UserController");

const router = express.Router();

const database = new Database();
const userRepository = new UserRepository(database);
const userService = new UserService(userRepository);
const userController = new UserController(userService);


// GET tutte le users
router.get("/", async (req, res) => {
    await userController.findAllUsers(req, res);
});


// GET user tramite ID
router.get("/:id", async (req, res) => {
    await userController.findUserById(req, res);
});


// PUT modifica user
router.put("/:id", async (req, res) => {
    await userController.updateUser(req, res);
});


// DELETE user
router.delete("/:id", async (req, res) => {
    await userController.deleteUserById(req, res);
});


// GET user-cards tramite ID utente
router.get("/:id/cards", async (req, res) => {
    await userController.getUserCards(req, res);
});



module.exports = router;