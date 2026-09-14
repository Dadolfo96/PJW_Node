const express = require("express");
const Database = require("../config/Database");
const ColumnRepository = require("../app/repositories/ColumnRepository");
const ColumnService = require("../app/services/ColumnService");
const ColumnController = require("../app/controllers/ColumnController");

const router = express.Router();

const database = new Database();
const columnRepository = new ColumnRepository(database);
const columnService = new ColumnService(columnRepository);
const columnController = new ColumnController(columnService);

router.get("/board/:id", async (req, res) => {
    await columnController.getColumnsByIdBoard(req, res);
});

module.exports = router;