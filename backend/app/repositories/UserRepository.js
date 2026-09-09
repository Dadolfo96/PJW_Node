
const queries = require("../query/queries.json")
const User = require("../models/User");

class UserRepository {

    #database;

    constructor(database) {
        this.#database = database;
    }
    async createUser(user) {
        const parameters = {
            nome: user.getNome(),
            cognome: user.getCognome(),
            mail: user.getMail(),
            username: user.getUsername(),
            password: user.getPassword(),
            ruolo: user.getRuolo()
        };    
        return await this.#database.query(queries.createUser, parameters);
    }
    async findUserById(id) {
        const result = await this.#database.query(queries.findUserById, { id: id });
        const row = result.recordset[0];

        if (!row) {
            return null;
        }

        const user = new User(
            row.nome,
            row.cognome,
            row.mail,
            row.username,
            row.ruolo,
            row.password
        );

        return user;
    }

    async findUserByEmail(email) {
        const result = await this.#database.query(queries.findUserByEmail, { mail: email });
        const row = result.recordset[0];

        if (!row) {
            return null;
        }

        const user = new User(
            row.nome,
            row.cognome,
            row.mail,
            row.username,
            row.ruolo,
            row.password
        );


        return row;
    }

    async findAllUsers() {
        const users = await this.#database.query(queries.findAllUsers);
        return users;
    }

    async deleteUserById(id) {
        const deletedUser = await this.#database.query(queries.deleteUserById, { id: id });
        return deletedUser;
    }
    async updateUser(user, id) {

        const parameters = {
            id: id,
            nome: user.getNome(),
            cognome: user.getCognome(),
            mail: user.getMail(),
            username: user.getUsername(),
            ruolo: user.getRuolo()
        };

        return await this.#database.query(queries.updateUser, parameters);
    }
    async getUserCards(id) {
        return this.#database.executeUserCards(id);
    }
}

module.exports = UserRepository;