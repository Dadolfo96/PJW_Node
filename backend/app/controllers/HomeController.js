const path = require("path");

class HomeController {

    static homePage(req, res) {

        res.sendFile(
            path.join(__dirname, "../../../frontend/src/index.html")
        );

    }

}

module.exports = HomeController;