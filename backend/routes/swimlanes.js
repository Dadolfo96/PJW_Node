const express = require("express");
const Database = require("../config/Database");
const SwimlaneRepository = require("../app/repositories/SwimlaneRepository");
const SwimlaneService = require("../app/services/SwimlaneService");
const SwimlaneController = require("../app/controllers/SwimlaneController");

const router = express.Router();

const database = new Database();
const swimlaneRepository = new SwimlaneRepository(database);
const swimlaneService = new SwimlaneService(swimlaneRepository);
const swimlaneController = new SwimlaneController(swimlaneService);

router.get("/board/:id", async (req, res) => {
    await swimlaneController.getSwimlanesByIdBoard(req, res);
});

module.exports = router;