const queries = require("../query/queries.json");
const Card = require("../models/Card");

class CardRepository {

    #database;

    constructor(database) {
        this.#database = database;
    }

    async createCard(card) {

        const parameters = {
            stato: card.getStato(),
            titolo: card.getTitolo(),
            sottotitolo: card.getSottotitolo(),
            assegnatario: card.getAssegnatario(),
            responsabile: card.getResponsabile(),
            id_user_esecutore: card.getIdUserEsecutore(),
            note: card.getNote()
        };

        return await this.#database.query(queries.createCard, parameters);
    }


    async findCardById(id) {
        const result = await this.#database.query(queries.findCardById, { id: id });
        const row = result.recordset[0];

        const card = new Card(
            row.stato,
            row.titolo,
            row.sottotitolo,
            row.assegnatario,
            row.responsabile,
            row.id_user_esecutore,
            row.note
        );

        return card;
    }

    async findAllCards() {
        const cards = await this.#database.query(queries.findAllCards);
        return cards;
    }

    async deleteCardById(id) {
        const deletedCard = await this.#database.query(queries.deleteCardById, { id: id });
        return deletedCard;
    }
    async updateCard(card, id) {
        const parameters = {
            id: id,
            titolo: card.getTitolo(),
            sottotitolo: card.getSottotitolo(),
            assegnatario: card.getAssegnatario(),
            responsabile: card.getResponsabile(),
            id_user_esecutore: card.getIdUserEsecutore(),
            note: card.getNote(),
            stato: card.getStato()
        };

        return await this.#database.query(queries.updateCard, parameters);
    }
}

module.exports = CardRepository;