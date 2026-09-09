const Board = require("../models/Board");
const path = require("path");
const renderPage = require("../utils/renderPage");


class BoardController {
    #boardService;
    constructor(boardService) {
        this.#boardService = boardService;
    }
    async findAllBoards(req, res) {
        const boards = await this.#boardService.findAllBoards();
        res.json(boards);
    }
    async findBoardById(req, res) {
        const board = await this.#boardService.findById(parseInt(req.params.id));
        res.json(board);
    }
    async createBoard(req, res) {
        const { workspaceId, projectId, nome } = req.body;
        const board = await this.#boardService.create(workspaceId, projectId, nome);
        res.status(201).json(board);
    }
    async updateBoard(req, res) {
        const { workspaceId, projectId, nome } = req.body;
        const board = await this.#boardService.update(parseInt(req.params.id), workspaceId, projectId, nome);
        res.json(board);
    }
    async deleteBoardById(req, res) {
        const board = await this.#boardService.delete(parseInt(req.params.id));
        res.json(board);
    }
    async getBoardByUserId(req,res) {

        const id = Number(req.params.id);
        const boards = await this.#boardService.getBoardByUserId(id);
        res.json(boards);


    }        
}
module.exports = BoardController;