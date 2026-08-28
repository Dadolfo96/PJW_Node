const Card = require("../models/Card");

class CardController {

    #cardService;

    constructor(cardService) {
        this.#cardService = cardService;
    }

    async createCard(req, res) {

        const card = new Card(
            req.body.stato,
            req.body.titolo,
            req.body.sottotitolo,
            req.body.assegnatario,
            req.body.responsabile,
            req.body.id_user_esecutore,
            req.body.note
        );

        await this.#cardService.createCard(card);

        res.json({
            message: "Creazione card completata"
        });
    }

    async findCardById(req, res) {

        const id = req.params.id;

        const card = await this.#cardService.findCardById(id);

        res.json(card);
    }

    async findAllCards(req, res) {

        const cards = await this.#cardService.findAllCards();

        res.json(cards);
    }

    async deleteCardById(req, res) {

        const id = req.params.id;

        const card = await this.#cardService.deleteCardById(id);

        res.json(card);
    }

    async updateCard(req, res) {

        const id = req.params.id;

        const card = new Card(
            req.body.stato,
            req.body.titolo,
            req.body.sottotitolo,
            req.body.assegnatario,
            req.body.responsabile,
            req.body.id_user_esecutore,
            req.body.id
        );

        const updatedCard = await this.#cardService.updateCard(card, id);

        res.json(updatedCard);
    }
}

module.exports = CardController;