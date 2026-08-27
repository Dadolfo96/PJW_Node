const User = require("../models/User");

class UserController {

    #userService;

    constructor(userService) {
        this.#userService = userService;
    }

    async create(req, res) {

        const nome = req.body.nome;
        const cognome = req.body.cognome;
        const mail = req.body.mail;
        const username = req.body.username;
        const ruolo = req.body.ruolo;

        const user = new User(
            nome,
            cognome,
            mail,
            username,
            ruolo
        );

        const result = await this.#userService.create(user);

        res.json(result);
    }
}

module.exports = UserController;