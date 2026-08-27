const { verificaToken } = require('C:/Users/d.carulli/progetti/PJW_Node/backend/config/auth.js');
const bcrypt = require('bcrypt');

class UserControllerTest {

    #userService;

    constructor(userService) {
        this.#userService = userService;
    }

    async createUser(user) {
        if (user && user.getPassword()) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(user.getPassword(), saltRounds);
            user.setPassword(hashedPassword);
        }
        await this.#userService.createUser(user);
    }

    async findUserById(id, token) {
        verificaToken(token);
        const user = await this.#userService.findUserById(id);
        return user;
    }

    async findUserByEmail(email) {
        const user = await this.#userService.findUserByEmail(email);
        return user;
    }

    async findAllUsers(token) {
        verificaToken(token);
        const users = await this.#userService.findAllUsers();
        return users;
    }

    async deleteUserById(id, token) {
        verificaToken(token);
        const user = await this.#userService.deleteUserById(id);
        return user;
    }

    async updateUser(user, id, token) {
        verificaToken(token);
        if (user && user.password) {
            const saltRounds = 10;
            user.password = await bcrypt.hash(user.password, saltRounds);
        }
        const updatedUser = await this.#userService.updateUser(user, id);
        return updatedUser;
    }
}

module.exports = UserControllerTest;