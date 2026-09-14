class ColumnService {
    #columnRepository;
    constructor(columnRepository) {
        this.#columnRepository = columnRepository;
    }
    async createColumn(column) {
        const newColumn = await this.#columnRepository.createColumn(column);
        return newColumn;
    }
    async findColumnById(id) {
        const column = await this.#columnRepository.findColumnById(id);
        return column;
    }
    async findAllColumns() {
        const columns = await this.#columnRepository.findAllColumns();
        return columns;
    }
    async deleteColumnById(id) {
        const deletedColumn = await this.#columnRepository.deleteColumnById(id);
        return deletedColumn;
    }
    async updateColumn(column, id) {
        const updatedColumn = await this.#columnRepository.updateColumn(column, id);
        return updatedColumn;
    }
    async getColumnsByIdBoard(id) {
        const columns = await this.#columnRepository.getColumnsByIdBoard(id);
        return columns;
    }
}
module.exports = ColumnService;