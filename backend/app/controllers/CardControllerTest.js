const { verificaToken } = require('./auth');

class CardControllerTest {

    #cardService;

    constructor(cardService) {
        this.#cardService = cardService;
    }

    async createCard(card, token) {
        verificaToken(token);
        await this.#cardService.createCard(card);
        return console.log("Creazione card completata");
    }

    async findCardById(id, token) {
        verificaToken(token);
        const card = await this.#cardService.findCardById(id);
        return card;
    }

    async findAllCards(token) {
        verificaToken(token);
        const cards = await this.#cardService.findAllCards();
        return cards;
    }

    async deleteCardById(id, token) {
        verificaToken(token);
        const card = await this.#cardService.deleteCardById(id);
        return card;
    }

    async updateCard(card, id, token) {
        verificaToken(token);
        return await this.#cardService.updateCard(card, id);
    }
}

module.exports = CardControllerTest;