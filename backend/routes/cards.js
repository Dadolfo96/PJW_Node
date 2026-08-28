const express = require("express");

const Database = require("../config/Database");
const CardRepository = require("../app/repositories/CardRepository");
const CardService = require("../app/services/CardService");
const CardController = require("../app/controllers/CardController");

const router = express.Router();

const database = new Database();
const cardRepository = new CardRepository(database);
const cardService = new CardService(cardRepository);
const cardController = new CardController(cardService);


// GET tutte le card
router.get("/", async (req, res) => {
    await cardController.findAllCards(req, res);
});


// GET card tramite ID
router.get("/:id", async (req, res) => {
    await cardController.findCardById(req, res);
});


// POST creazione card
router.post("/", async (req, res) => {
    await cardController.createCard(req, res);
});


// PUT modifica card
router.put("/:id", async (req, res) => {
    await cardController.updateCard(req, res);
});


// DELETE card
router.delete("/:id", async (req, res) => {
    await cardController.deleteCardById(req, res);
});


module.exports = router;