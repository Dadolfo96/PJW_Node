class BoardController {
    #service;
    constructor(service) {
        this.#service=service;
    }
    async findAll(req,res) {
        try {
            const boards=await this.#service.findAll();
            res.json(boards);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nel recupero delle board."});
        }
    }
    async findById(req,res) {
        try {
            const board=await this.#service.findById(parseInt(req.params.id));
            if(!board) {
                return res.status(404).json({message:"Board non trovata."});
            }
            res.json(board);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nel recupero della board."});
        }
    }
    async create(req,res) {
        try {
            const {workspaceId,projectId,nome}=req.body;
            const board=await this.#service.create(workspaceId,projectId,nome);
            res.status(201).json(board);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nella creazione della board."});
        }
    }
    async update(req,res) {
        try {
            const {workspaceId,projectId,nome}=req.body;
            const board=await this.#service.update(parseInt(req.params.id),workspaceId,projectId,nome);
            if(!board) {
                return res.status(404).json({message:"Board non trovata."});
            }
            res.json(board);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nella modifica della board."});
        }
    }
    async delete(req,res) {
        try {
            const board=await this.#service.delete(parseInt(req.params.id));
            if(!board) {
                return res.status(404).json({message:"Board non trovata."});
            }
            res.json(board);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nella cancellazione della board."});
        }
    }
}
module.exports=BoardController;