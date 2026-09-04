const path = require("path");
const sql = require("mssql/msnodesqlv8");

require("dotenv").config({
    path: path.join(__dirname, "../.env")
});

class Database {
    #config;
    #connection;

    constructor() {
        this.#config = {
            server: process.env.DB_SERVER,
            database: process.env.DB_DATABASE,
            options: {
                trustedConnection: true,
                trustServerCertificate: true,
            },
            driver: process.env.DB_DRIVER
        };
    }
    async connect() {
        if (!this.#connection) {
            this.#connection = await sql.connect(this.#config);
        }
        return this.#connection;
    }
    async query(query, parameters = {}) {
        const connection = await this.connect();
        const request = connection.request();
        for (const [nome, valore] of Object.entries(parameters)) {
            request.input(nome, valore);
        }
        return await request.query(query);
    }

    async executeUserCards(id) {
        const connection = await this.connect();
        const result = await connection.request()
        .input("idUtente", sql.Int, id)
        .execute("getUserCards");
        
        return result;
    }
}
module.exports = Database;