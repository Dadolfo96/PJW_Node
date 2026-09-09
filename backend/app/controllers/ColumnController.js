class ColumnController {
    #columnService;
    constructor(columnService) {
        this.#columnService = columnService;
    }
    async findAll(req, res) {
        const columns = await this.#columnService.findAll();
        res.json(columns);
    }
    async findById(req, res) {
        const column = await this.#columnService.findById(parseInt(req.params.id));
        res.json(column);
    }
    async create(req, res) {
        const { nome, wipLimit } = req.body;
        const column = await this.#columnService.create(nome, wipLimit);
        res.status(201).json(column);
    }
    async update(req, res) {
        const { nome, wipLimit } = req.body;
        const column = await this.#columnService.update(parseInt(req.params.id), nome, wipLimit);
        res.json(column);
    }
    async delete(req, res) {
        const column = await this.#columnService.delete(parseInt(req.params.id));
        res.json(column);
    }
    async getColumnByBoardId(req,res) {

        const id = Number(req.params.id);
        const columns = await this.#columnService.getColumnByBoardId(id);
        res.json(columns);        
    }      
}
module.exports = ColumnController;