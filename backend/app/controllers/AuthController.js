const bcrypt = require('bcrypt');
const { generaToken } = require('C:/Users/d.carulli/progetti/PJW_Node/backend/config/auth.js');

class AuthController {

    #userController;

    constructor(userController) {
        this.#userController = userController;
    }

    async login(email, passwordInChiaro) {
        const utente = await this.#userController.findUserByEmail(email);

        if (!utente) {
            throw new Error("Credenziali errate! Utente non registrato.");
        }

        const corrisponde = await bcrypt.compare(
            passwordInChiaro,
            utente.getPassword()
        );

        if (!corrisponde) {
            throw new Error("Credenziali errate! Password errata.");
        }

        const token = generaToken(utente);
        return token;
    }
}

module.exports = AuthController;