const Column=require("../models/Column");
class ColumnService {
    #repository;
    constructor(repository) {
        this.#repository=repository;
    }
    async findAll() {
        const rows=await this.#repository.findAll();
        return rows.map(row=>Column.fromDatabase(row));
    }
    async findById(id) {
        const row=await this.#repository.findById(id);
        return row?Column.fromDatabase(row):null;
    }
    async create(nome,wipLimit) {
        const row=await this.#repository.create(nome,wipLimit);
        return Column.fromDatabase(row);
    }
    async update(id,nome,wipLimit) {
        const row=await this.#repository.update(id,nome,wipLimit);
        return row?Column.fromDatabase(row):null;
    }
    async delete(id) {
        const row=await this.#repository.delete(id);
        return row?Column.fromDatabase(row):null;
    }
}
module.exports=ColumnService;