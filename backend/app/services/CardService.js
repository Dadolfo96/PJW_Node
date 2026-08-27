class CardService {

    #cardRepository;

    constructor(cardRepository) {
        this.#cardRepository = cardRepository;
    }

    async createCard(card) {
        const newCard = await this.#cardRepository.createCard(card);
        return newCard;
    }

    async findCardById(id) {
        const card = await this.#cardRepository.findCardById(id);
        return card;
    }

    async findAllCards() {
        const cards = await this.#cardRepository.findAllCards();
        return cards;
    }

    async deleteCardById(id) {
        const deletedCard = await this.#cardRepository.deleteCardById(id);
        return deletedCard;
    }
    async updateCard(card, id) {
        const updatedCard = await this.#cardRepository.updateCard(card, id);
        return updatedCard;
    }   
}

module.exports = CardService;