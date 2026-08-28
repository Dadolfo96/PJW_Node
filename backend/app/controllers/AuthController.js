const bcrypt = require("bcrypt");
const { generaToken } = require("../../config/auth");

class AuthController {

    #userController;

    constructor(userController) {
        this.#userController = userController;
    }

    async login(req, res) {

        const email = req.body.mail;
        const passwordInChiaro = req.body.password;

        const utente = await this.#userController.findUserByEmail(email);

        if (!utente) {
            return res.status(401).json({
                message: "Credenziali errate! Utente non registrato."
            });
        }

        const corrisponde = await bcrypt.compare(
            passwordInChiaro,
            utente.getPassword()
        );

        if (!corrisponde) {
            return res.status(401).json({
                message: "Credenziali errate! Password errata."
            });
        }

        const token = generaToken(utente);

        res.json({
            token: token
        });
    }
}

module.exports = AuthController;