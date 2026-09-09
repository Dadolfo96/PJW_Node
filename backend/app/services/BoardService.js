const Board=require("../models/Board");

class BoardService {
    #boardRepository;
    constructor(boardRepository) {
        this.#boardRepository=boardRepository;
    }
    async findAllBoards() {
        const rows=await this.#boardRepository.findAllBoards();
        return rows;
    }
    async findBoardById(id) {
        const row=await this.#boardRepository.findBoardById(id);
        return row;
    }
    async createBoard(workspaceId,projectId,nome) {
        const board=new Board(workspaceId,projectId,nome);
        return await this.#boardRepository.createBoard(board);
    }
    async updateBoard(id,workspaceId,projectId,nome) {
        const board=new Board(workspaceId,projectId,nome);
        return await this.#boardRepository.updateBoard(board,id);
    }
    async deleteBoardById(id) {
        return await this.#boardRepository.deleteBoardById(id);
    }
    async getBoardByUserId(id) {
        return this.#boardRepository.getBoardByUserId(id);
    }         
}
module.exports=BoardService;