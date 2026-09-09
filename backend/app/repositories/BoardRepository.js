const queries = require("../query/queries.json");
const Board = require("../models/Board");

class BoardRepository {
    #database;
    constructor(database) {
        this.#database = database;
    }
    async createBoard(board) {
        const parameters = {
            workspace_id: board.getWorkspaceId(),
            project_id: board.getProjectId(),
            nome: board.getNome()
        };
        return await this.#database.query(queries.createBoard, parameters);
    }
    async findBoardById(id) {
        const result = await this.#database.query(queries.findBoardById, { id: id });
        const row = result.recordset[0];
        if (!row) {
            return null;
        }
        const board = new Board(row.workspace_id, row.project_id, row.nome);
        return board;
    }
    async findAllBoards() {
        const boards = await this.#database.query(queries.findAllBoards);
        return boards;
    }
    async deleteBoardById(id) {
        const deletedBoard = await this.#database.query(queries.deleteBoardById, { id: id });
        return deletedBoard;
    }
    async updateBoard(board, id) {
        const parameters = {
            id: id,
            workspace_id: board.getWorkspaceId(),
            project_id: board.getProjectId(),
            nome: board.getNome()
        };
        return await this.#database.query(queries.updateBoard, parameters);
    } 
    async getBoardByUserId(id) {
        return this.#database.executeGetBoardByUserId(id);
    }       
}
module.exports = BoardRepository;