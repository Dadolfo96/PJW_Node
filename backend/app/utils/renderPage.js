const fs = require("fs");
const path = require("path");

function renderPage(page) {

    const navbar = fs.readFileSync(
        path.join(__dirname, "../../../frontend/src/header.html"),
        "utf8"
    );

    const content = fs.readFileSync(
        path.join(__dirname, "../../../frontend/src", page),
        "utf8"
    );

    const footer = fs.readFileSync(
        path.join(__dirname, "../../../frontend/src/footer.html"),
        "utf8"
    );


    return navbar + content + footer;
}

module.exports = renderPage;