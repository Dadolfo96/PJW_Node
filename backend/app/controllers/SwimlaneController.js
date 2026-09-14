class SwimlaneController {
    #swimlaneService;
    constructor(swimlaneService) {
        this.#swimlaneService = swimlaneService;
    }
    async findAll(req, res) {
        const swimlanes = await this.#swimlaneService.findAll();
        res.json(swimlanes);
    }
    async findById(req, res) {
        const swimlane = await this.#swimlaneService.findById(parseInt(req.params.id));
        res.json(swimlane);
    }
    async create(req, res) {
        const swimlane = await this.#swimlaneService.create(req.body.nome);
        res.status(201).json(swimlane);
    }
    async update(req, res) {
        const swimlane = await this.#swimlaneService.update(parseInt(req.params.id), req.body.nome);
        res.json(swimlane);
    }
    async delete(req, res) {
        const swimlane = await this.#swimlaneService.delete(parseInt(req.params.id));
        res.json(swimlane);
    }
    async getSwimlanesByIdBoard(req,res) {

        const id = Number(req.params.id);
        const swimlane = await this.#swimlaneService.getSwimlanesByIdBoard(id);
        res.json(swimlane);        
    }       
}
module.exports = SwimlaneController;