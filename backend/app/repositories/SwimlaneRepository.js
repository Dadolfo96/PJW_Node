const queries = require("../query/queries.json");
const Swimlane = require("../models/Swimlane");

class SwimlaneRepository {
    #database;
    constructor(database) {
        this.#database = database;
    }
    async createSwimlane(swimlane) {
        const parameters = {
            nome: swimlane.getNome()
        };
        return await this.#database.query(queries.createSwimlane, parameters);
    }
    async findSwimlaneById(id) {
        const result = await this.#database.query(queries.findSwimlaneById, { id: id });
        const row = result.recordset[0];
        if (!row) {
            return null;
        }
        const swimlane = new Swimlane(row.nome);
        return swimlane;
    }
    async findAllSwimlanes() {
        const swimlanes = await this.#database.query(queries.findAllSwimlanes);
        return swimlanes;
    }
    async deleteSwimlaneById(id) {
        const deletedSwimlane = await this.#database.query(queries.deleteSwimlaneById, { id: id });
        return deletedSwimlane;
    }
    async updateSwimlane(swimlane, id) {
        const parameters = {
            id: id,
            nome: swimlane.getNome()
        };
        return await this.#database.query(queries.updateSwimlane, parameters);
    }
    async getSwimlanesByIdBoard(id) {
        return this.#database.executeGetSwimlanesByIdBoard(id);
    }

}
module.exports = SwimlaneRepository;