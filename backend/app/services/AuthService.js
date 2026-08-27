class AuthController {
    #authService;

    constructor(authService) {
        this.#authService = authService;
    }

    async login(email, password) {
        const token = await this.#authService.login(email, password);
        return token;
    }
}

module.exports = AuthController;