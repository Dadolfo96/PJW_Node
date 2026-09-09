const Card = require("../models/Card");
const path = require("path");
const renderPage = require("../utils/renderPage");

class CardController {

    #cardService;

    constructor(cardService) {
        this.#cardService = cardService;
    }

    async createCard(req, res) {
        const card = new Card(
            req.body.board_id,
            req.body.column_id,
            req.body.swimlane_id ? Number(req.body.swimlane_id) : null,
            req.body.stato,
            req.body.titolo,
            req.body.sottotitolo,
            Number(req.body.assegnatario),
            Number(req.body.responsabile),
            Number(req.body.creatore),
            req.body.id_user_esecutore ? Number(req.body.id_user_esecutore) : null,
            req.body.note,
            Number(req.body.position),
            req.body.parent_card_id ? Number(req.body.parent_card_id) : null,
            req.body.priority_id ? Number(req.body.priority_id) : null,
            req.body.scadenza,
            req.body.data_fine,
            req.body.data_fine_prevista
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
        const id = Number(req.params.id);
        const card = new Card(
            req.body.board_id,
            req.body.column_id,
            req.body.swimlane_id,
            req.body.stato,
            req.body.titolo,
            req.body.sottotitolo,
            Number(req.body.assegnatario),
            Number(req.body.responsabile),
            Number(req.body.creatore),
            req.body.id_user_esecutore ? Number(req.body.id_user_esecutore) : null,
            req.body.note,
            Number(req.body.position),
            req.body.parent_card_id ? Number(req.body.parent_card_id) : null,
            req.body.priority_id ? Number(req.body.priority_id) : null,
            req.body.scadenza,
            req.body.data_fine,
            req.body.data_fine_prevista
        );
        const updatedCard = await this.#cardService.updateCard(card, id);
        res.json(updatedCard);
    }
    
    static boardPage(req, res) {
        res.send(renderPage("board.html"));
    }
}

module.exports = CardController;