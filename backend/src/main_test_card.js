const Database = require("../config/Database");
const CardControllerTest = require("../app/controllers/CardControllerTest")
const CardRepository = require("../app/repositories/CardRepository");
const CardService = require("../app/services/CardService");
const Card = require("../app/models/Card");
const database = new Database();
const cardRepository = new CardRepository(database);
const cardService = new CardService(cardRepository);
const cardControllerTest = new CardControllerTest(cardService)


async function main() {
    const id_user_esecutore = 2
    const card = new Card(
        "Pianificato",
        "Nuova Card 1",
        "Card di ",
        "Mario Rossi",
        "Luigi Bianchi",
        id_user_esecutore,
        null
    );
    
    cardControllerTest.createCard(card)
    
    const foundCard = await cardControllerTest.findCardById(2)
    console.log(foundCard);

    foundCard.setTitolo("Titolo Modificato 2");
    foundCard.setAssegnatario("Assegnatario Modificato");

    await cardControllerTest.updateCard(foundCard,2);

    const modifiedCard = await cardControllerTest.findCardById(2)
    console.log(modifiedCard);


    const deletedCard = await cardControllerTest.deleteCardById(3)
    console.log(deletedCard);
    
    const cards = await cardControllerTest.findAllCards();
    console.log(cards); 
}

main();