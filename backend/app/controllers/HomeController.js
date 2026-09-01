
const path = require("path");
const renderPage = require("../utils/renderPage");

class HomeController {

    static homePage(req, res) {

        res.send(renderPage("index.html"));

    }

    static profilePage(req, res) {
        res.send(renderPage("profile.html"));
}

}

module.exports = HomeController;