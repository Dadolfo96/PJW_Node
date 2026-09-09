const queries = require("../query/queries.json");
const Card = require("../models/Card");

class CardRepository {

    #database;

    constructor(database) {
        this.#database = database;
    }

    async createCard(card) {

        const parameters = {
                board_id: card.getBoardId(),
                column_id: card.getColumnId(),
                swimlane_id: card.getSwimlaneId(),
                stato: card.getStato(),
                titolo: card.getTitolo(),
                sottotitolo: card.getSottotitolo(),
                assegnatario: card.getAssegnatario(),
                responsabile: card.getResponsabile(),
                creatore: card.getCreatore(),
                id_user_esecutore: card.getIdUserEsecutore(),
                note: card.getNote(),
                position: card.getPosition(),
                parent_card_id: card.getParentCardId(),
                priority_id: card.getPriorityId(),
                scadenza: card.getScadenza(),
                data_fine: card.getDataFine(),
                data_fine_prevista: card.getDataFinePrevista()
        };
        return await this.#database.query(queries.createCard, parameters);
    }


    async findCardById(id) {
        const result = await this.#database.query(queries.findCardById, { id: id });
        const row = result.recordset[0];

        if (!row) {
            return null;
        }

        const card = new Card(
            row.board_id,
            row.column_id,
            row.swimlane_id,
            row.stato,
            row.titolo,
            row.sottotitolo,
            row.assegnatario,
            row.responsabile,
            row.creatore,
            row.id_user_esecutore,
            row.note,
            row.position,
            row.parent_card_id,
            row.priority_id,
            row.scadenza,
            row.data_fine,
            row.data_fine_prevista
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
            board_id: card.getBoardId(),
            column_id: card.getColumnId(),
            swimlane_id: card.getSwimlaneId(),
            stato: card.getStato(),
            titolo: card.getTitolo(),
            sottotitolo: card.getSottotitolo(),
            assegnatario: card.getAssegnatario(),
            responsabile: card.getResponsabile(),
            creatore: card.getCreatore(),
            id_user_esecutore: card.getIdUserEsecutore(),
            note: card.getNote(),
            position: card.getPosition(),
            parent_card_id: card.getParentCardId(),
            priority_id: card.getPriorityId(),
            scadenza: card.getScadenza(),
            data_fine: card.getDataFine(),
            data_fine_prevista: card.getDataFinePrevista()
        };
        return await this.#database.query(queries.updateCard, parameters);
    }
}

module.exports = CardRepository;