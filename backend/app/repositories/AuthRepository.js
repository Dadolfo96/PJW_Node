const queries = require("../query/queries.json");
const Card = require("../models/Card");


class AuthRepository {
    #database;

    constructor(database) {
        this.#database = database;
    }

    async findUserByEmail(email) {
        const query = "SELECT id, username, mail, password, ruolo FROM Users WHERE mail = ?";
        const result = await this.#database.query(query, [email]);
        return result;
    }
}

module.exports = AuthRepository;