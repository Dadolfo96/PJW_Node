class ColumnController {
    #service;
    constructor(service) {
        this.#service=service;
    }
    async findAll(req,res) {
        try {
            const columns=await this.#service.findAll();
            res.json(columns);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nel recupero delle colonne."});
        }
    }
    async findById(req,res) {
        try {
            const column=await this.#service.findById(parseInt(req.params.id));
            if(!column) {
                return res.status(404).json({message:"Colonna non trovata."});
            }
            res.json(column);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nel recupero della colonna."});
        }
    }
    async create(req,res) {
        try {
            const {nome,wipLimit}=req.body;
            const column=await this.#service.create(nome,wipLimit);
            res.status(201).json(column);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nella creazione della colonna."});
        }
    }
    async update(req,res) {
        try {
            const {nome,wipLimit}=req.body;
            const column=await this.#service.update(parseInt(req.params.id),nome,wipLimit);
            if(!column) {
                return res.status(404).json({message:"Colonna non trovata."});
            }
            res.json(column);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nella modifica della colonna."});
        }
    }
    async delete(req,res) {
        try {
            const column=await this.#service.delete(parseInt(req.params.id));
            if(!column) {
                return res.status(404).json({message:"Colonna non trovata."});
            }
            res.json(column);
        } catch(error) {
            console.error(error);
            res.status(500).json({message:"Errore nella cancellazione della colonna."});
        }
    }
}
module.exports=ColumnController;