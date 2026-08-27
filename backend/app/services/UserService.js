class UserService {

    #userRepository;

    constructor(userRepository) {
        this.#userRepository = userRepository;
    }

    async createUser(user) {
        const newUser = await this.#userRepository.createUser(user);
        return newUser;
    }

    async findUserById(id) {
        const user = await this.#userRepository.findUserById(id);
        return user;
    }
    
    async findUserByEmail(email) {
        const user = await this.#userRepository.findUserByEmail(email);
        return user;
    }

    async findAllUsers() {
        const users = await this.#userRepository.findAllUsers();
        return users;
    }

    async deleteUserById(id) {
        const deletedUser = await this.#userRepository.deleteUserById(id);
        return deletedUser;
    }
    async updateUser(user, id) {
        const updatedUser = await this.#userRepository.updateUser(user, id);
        return updatedUser;
    }

    
}

module.exports = UserService;