process.loadEnvFile();

const Database = require("../config/Database");
const UserControllerTest = require("../app/controllers/UserControllerTest");
const UserRepository = require("../app/repositories/UserRepository");
const UserService = require("../app/services/UserService");
const AuthController = require("../app/controllers/AuthController");
const User = require("../app/models/User");

const database = new Database();
const userRepository = new UserRepository(database);
const userService = new UserService(userRepository);
const userControllerTest = new UserControllerTest(userService);
const authController = new AuthController(userControllerTest);

async function main() {
    
    /* const user = new User(
        "Gianni",
        "Rossi",
        "gianni@email.it",
        "mrossi",
        "Admin",
        "passwordSicura456"
    );

    await userControllerTest.createUser(user); */

    const token = await authController.login("gianni_modificato@email.it", "passwordSicura456");
    console.log("Token ottenuto:", token);

    const foundUser = await userControllerTest.findUserById(0, token);
    console.log(foundUser);

    await userControllerTest.deleteUserById(0, token)

    /* foundUser.setNome("Gianni modificato");
    foundUser.setMail("gianni_modificato@email.it"); */

    /* const updatedUser = await userControllerTest.updateUser(foundUser, 1, token);
    console.log(updatedUser); */

    const users = await userControllerTest.findAllUsers(token);
    console.log(users);
}

main();