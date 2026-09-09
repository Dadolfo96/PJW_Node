const queries = require("../query/queries.json");
const Column = require("../models/Column");

class ColumnRepository {
    #database;
    constructor(database) {
        this.#database = database;
    }
    async createColumn(column) {
        const parameters = {
            nome: column.getNome(),
            wip_limit: column.getWipLimit()
        };
        return await this.#database.query(queries.createColumn, parameters);
    }
    async findColumnById(id) {
        const result = await this.#database.query(queries.findColumnById, { id: id });
        const row = result.recordset[0];
        if (!row) {
            return null;
        }
        const column = new Column(row.nome, row.wip_limit);
        return column;
    }
    async findAllColumns() {
        const columns = await this.#database.query(queries.findAllColumns);
        return columns;
    }
    async deleteColumnById(id) {
        const deletedColumn = await this.#database.query(queries.deleteColumnById, { id: id });
        return deletedColumn;
    }
    async updateColumn(column, id) {
        const parameters = {
            id: id,
            nome: column.getNome(),
            wip_limit: column.getWipLimit()
        };
        return await this.#database.query(queries.updateColumn, parameters);
    }
    async getColumnsByIdBoard(id) {
        return this.#database.executeGetColumnsByIdBoard(id);
    }    
}
module.exports = ColumnRepository;