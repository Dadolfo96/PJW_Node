const express = require("express");

const Database = require("../config/Database");
const BoardRepository = require("../app/repositories/BoardRepository");
const BoardService = require("../app/services/BoardService");
const BoardController = require("../app/controllers/BoardController");

const router = express.Router();

const database = new Database();
const boardRepository = new BoardRepository(database);
const boardService = new BoardService(boardRepository);
const boardController = new BoardController(boardService);

// board acces --> ATTENZIONE: Questa è una rotta specifica e non dinamica 
// quindi deve andare prima delle rotte dinamiche altrimenti verrebbe 
// interpretata come valore dinamico andando in conflitto con eventuali 
// tipi di variabili o paramentri nei metodi dei controller richiamati


// GET tutte le board
router.get("/", async (req, res) => {
    await boardController.findAllBoards(req, res);
});
// GET tutte le board
router.get("/user/:id", async (req, res) => {
    await boardController.getBoardByUserId(req, res);
});


// GET board tramite ID
router.get("/:id", async (req, res) => {
    await boardController.findBoardById(req, res);
});


// POST creazione board
router.post("/", async (req, res) => {
    await boardController.createBoard(req, res);
});


// PUT modifica board
router.put("/:id", async (req, res) => {
    await boardController.updateBoard(req, res);
});


// DELETE board
router.delete("/:id", async (req, res) => {
    await boardController.deleteBoardById(req, res);
});


module.exports = router;