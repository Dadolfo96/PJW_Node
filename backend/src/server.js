const Database = require("C:/Users/d.carulli/progetti/PJW_Node/backend/config/Database.js")


async function main() {
    const db = new Database();
    const connection = await db.connect()
    console.log(connection)
}

main();
