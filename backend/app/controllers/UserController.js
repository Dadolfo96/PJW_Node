const bcrypt = require("bcrypt");
const User = require("../models/User");

class UserController {

    #userService;

    constructor(userService) {
        this.#userService = userService;
    }

    async home(req, res) {

        res.send("Benvenuto nel server PJW_Node");
    }

    async createUser(req, res) {

        const user = new User(
            req.body.nome,
            req.body.cognome,
            req.body.mail,
            req.body.username,
            req.body.ruolo,
            req.body.password
        );

        if (user.getPassword()) {

            const saltRounds = 10;

            const hashedPassword = await bcrypt.hash(
                user.getPassword(),
                saltRounds
            );

            user.setPassword(hashedPassword);
        }

        await this.#userService.createUser(user);

        res.json({
            message: "Registrazione completata"
        });
    }

    async findUserById(req, res) {

        const id = req.params.id;

        const user = await this.#userService.findUserById(id);

        res.json(user);
    }

    async findUserByEmail(email) {

        const user = await this.#userService.findUserByEmail(email);

        return user;
    }

    async findAllUsers(req, res) {

        const users = await this.#userService.findAllUsers();

        res.json(users);
    }

    async deleteUserById(req, res) {

        const id = req.params.id;

        const user = await this.#userService.deleteUserById(id);

        res.json(user);
    }

    async updateUser(req, res) {

        const id = req.params.id;

        const user = new User(
            req.body.nome,
            req.body.cognome,
            req.body.mail,
            req.body.username,
            req.body.ruolo,
            req.body.password
        );

        if (user.getPassword()) {

            const saltRounds = 10;

            const hashedPassword = await bcrypt.hash(
                user.getPassword(),
                saltRounds
            );

            user.setPassword(hashedPassword);
        }

        const updatedUser = await this.#userService.updateUser(user, id);

        res.json(updatedUser);
    }
}

module.exports = UserController;