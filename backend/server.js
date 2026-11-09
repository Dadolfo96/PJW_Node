process.loadEnvFile();

const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
const boardsRouter = require("./routes/boards");
const homeRouter = require("./routes/home");
const columnsRouter = require("./routes/columns");
const swimlanesRouter = require("./routes/swimlanes");
const { authenticateJWT } = require("./config/auth");

const app = express();
const port = 6060;

    // Autorizza le richieste provenienti dall'app Angular
    app.use(cors({
        origin: "http://localhost:4200"
    }));    
    app.use(express.json());
    const path = require("path");

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "../frontend/src")));

    // Rotte pubbliche
    app.use("/", homeRouter);

    // Middleware di autenticazione
    app.use(authenticateJWT);

    // Rotte protette
    app.use("/users", usersRouter);
    app.use("/cards", cardsRouter);
    app.use("/boards", boardsRouter);
    app.use("/columns", columnsRouter);
    app.use("/swimlanes", swimlanesRouter);


    // Start the server
    app.listen(port, () => {
        console.log(`Il server è in ascolto --> http://localhost:${port}`);
    });
