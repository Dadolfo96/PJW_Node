class SwimlaneController {
    #service;
    constructor(service) {
        this.#service=service;
    }
    async findAll(req,res) {
        try {
            const swimlanes=await this.#service.findAll();
            res.json(swimlanes);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nel recupero delle swimlanes."});
        }
    }
    async findById(req,res) {
        try {
            const swimlane=await this.#service.findById(parseInt(req.params.id));
            if(!swimlane) {
                return res.status(404).json({message:"Swimlane non trovata."});
            }
            res.json(swimlane);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nel recupero della swimlane."});
        }
    }
    async create(req,res) {
        try {
            const swimlane=await this.#service.create(req.body.nome);
            res.status(201).json(swimlane);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nella creazione della swimlane."});
        }
    }
    async update(req,res) {
        try {
            const swimlane=await this.#service.update(parseInt(req.params.id),req.body.nome);
            if(!swimlane) {
                return res.status(404).json({message:"Swimlane non trovata."});
            }
            res.json(swimlane);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nella modifica della swimlane."});
        }
    }
    async delete(req,res) {
        try {
            const swimlane=await this.#service.delete(parseInt(req.params.id));
            if(!swimlane) {
                return res.status(404).json({message:"Swimlane non trovata."});
            }
            res.json(swimlane);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nella cancellazione della swimlane."});
        }
    }
}
module.exports=SwimlaneController;