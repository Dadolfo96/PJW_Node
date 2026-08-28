process.loadEnvFile();

const express = require("express");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
const homeRouter = require("./routes/home");
const { authenticateJWT } = require("./config/auth");

const app = express();
const port = 3000;

app.use(express.json());
const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend/src")));

// Rotte pubbliche
app.use("/", homeRouter);

// Middleware di autenticazione
app.use(authenticateJWT);

// Rotte protette
app.use("/users", usersRouter);
app.use("/cards", cardsRouter);


// Start the server
app.listen(port, () => {
    console.log(`Il server è in ascolto --> http://localhost:${port}`);
});