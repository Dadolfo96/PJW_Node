const Board=require("../models/Board");
class BoardService {
    #repository;
    constructor(repository) {
        this.#repository=repository;
    }
    async findAll() {
        const rows=await this.#repository.findAll();
        return rows.map(row=>Board.fromDatabase(row));
    }
    async findById(id) {
        const row=await this.#repository.findById(id);
        return row?Board.fromDatabase(row):null;
    }
    async create(workspaceId,projectId,nome) {
        const row=await this.#repository.create(workspaceId,projectId,nome);
        return Board.fromDatabase(row);
    }
    async update(id,workspaceId,projectId,nome) {
        const row=await this.#repository.update(id,workspaceId,projectId,nome);
        return row?Board.fromDatabase(row):null;
    }
    async delete(id) {
        const row=await this.#repository.delete(id);
        return row?Board.fromDatabase(row):null;
    }
}
module.exports=BoardService;