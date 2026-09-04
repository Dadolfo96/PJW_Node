const Swimlane=require("../models/Swimlane");
class SwimlaneService {
    #repository;
    constructor(repository) {
        this.#repository=repository;
    }
    async findAll() {
        const rows=await this.#repository.findAll();
        return rows.map(row=>Swimlane.fromDatabase(row));
    }
    async findById(id) {
        const row=await this.#repository.findById(id);
        return row?Swimlane.fromDatabase(row):null;
    }
    async create(nome) {
        const row=await this.#repository.create(nome);
        return Swimlane.fromDatabase(row);
    }
    async update(id,nome) {
        const row=await this.#repository.update(id,nome);
        return row?Swimlane.fromDatabase(row):null;
    }
    async delete(id) {
        const row=await this.#repository.delete(id);
        return row?Swimlane.fromDatabase(row):null;
    }
}
module.exports=SwimlaneService;