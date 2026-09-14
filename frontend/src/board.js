
async function findAllCards() {
    const response = await fetch(`/cards`, {
        method: "GET",
        headers: authHeaders
    });

    const cards_recordsets = await response.json();
    const cards = cards_recordsets.recordset;
    console.log(cards);

    $("#cards").DataTable({
        data: cards,
        columns: [
            { data: "id" },
            { data: "board_id" },
            { data: "column_id" },
            { data: "swimlane_id" },
            { data: "stato" },
            { data: "data_creazione" },
            { data: "data_aggiornamento" },
            { data: "titolo" },
            { data: "sottotitolo" },
            { data: "assegnatario" },
            { data: "responsabile" },
            { data: "creatore" },
            { data: "id_user_esecutore" },
            { data: "note" },
            { data: "position" },
            { data: "parent_card_id" },
            { data: "priority_id" },
            { data: "scadenza" },
            { data: "data_fine" },
            { data: "data_fine_prevista" }
        ]
    });
}

findAllCards();

document.getElementById("findForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = new FormData(event.target).get("id");

    const response = await fetch(`/cards/${id}`, {
        method: "GET",
        headers: authHeaders
    });

    const result = await response.json();

    const profileResult = document.getElementById("findResult");
    profileResult.textContent = JSON.stringify(result);
    profileResult.classList.remove("d-none");
});

document.getElementById("updateForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const id = new FormData(form).get("id");
    const body = new URLSearchParams(new FormData(form));

    const response = await fetch(`/cards/${id}`, {
        method: "PUT",
        headers: {
            ...authHeaders,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: body
    });

    const result = await response.json();

    console.log(result);
});

document.getElementById("deleteForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = new FormData(event.target).get("id");

    const response = await fetch(`/cards/${id}`, {
        method: "DELETE",
        headers: authHeaders
    });

    const result = await response.json();

    console.log(result);
});

const registerForm = document.getElementById("createForm");

registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const response = await fetch("/cards", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            ...authHeaders
        },
        body: new URLSearchParams(new FormData(registerForm))
    });

    const result = await response.json();

    const resultDiv = document.getElementById("createResult");

    resultDiv.textContent = result.message;
    resultDiv.classList.remove("d-none");
});

document.getElementById("userCardsForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = new FormData(event.target).get("id");

    const response = await fetch(`/users/${id}/cards`, {
        method: "GET",
        headers: authHeaders
    });

    const result = await response.json();

    const resultDiv = document.getElementById("userCardsResult");

    resultDiv.textContent = JSON.stringify(result);
    resultDiv.classList.remove("d-none");

    console.log(result);
});

async function getBoardByUserId() {
    const id = sessionStorage.getItem("idUser");
    const response = await fetch(`/boards/user/${id}`, {
        method: "GET",
        headers: authHeaders
    });

    const result = await response.json();
    const boards = result.recordset;
    const boardSelect = document.getElementById("selectBoardId");

    boards.forEach(board => {
        const option = document.createElement("option");
        option.value = board.board_id;
        option.textContent = board.nome;
        boardSelect.appendChild(option);
    });

}
getBoardByUserId();


async function getBoardColumns(idBoard) {
    console.log("ID BOARD:", idBoard);
    const response = await fetch(`/columns/board/${idBoard}`, {
        method: "GET",
        headers: authHeaders
    });
    console.log("STATUS COLUMNS:", response.status);
    const result = await response.json();
    console.log("RESULT COLUMNS:", result);
    return result.recordset;
}

async function getBoardSwimlanes(idBoard) {
    const response = await fetch(`/swimlanes/board/${idBoard}`, {
        method: "GET",
        headers: authHeaders
    });

    const result = await response.json();
    return result.recordset;
}

function buildKanbanBoard(columns, swimlanes) {
    const kanbanBoard = document.getElementById("kanban-board");
    const columnTemplate = document.getElementById("kanban-column-template");
    const swimlaneTemplate = document.getElementById("kanban-swimlane-template");

    kanbanBoard.innerHTML = "";

    columns.forEach(column => {
        const columnElement = columnTemplate.content.cloneNode(true);

        columnElement.querySelector(".column-name").textContent = column.nome;

        swimlanes.forEach(swimlane => {
            const swimlaneElement = swimlaneTemplate.content.cloneNode(true);

            swimlaneElement.querySelector(".swimlane-name").textContent = swimlane.nome;

            swimlaneElement.querySelector(".kanban-cards").dataset.columnId = column.column_id;
            swimlaneElement.querySelector(".kanban-cards").dataset.swimlaneId = swimlane.swimlane_id;

            columnElement.querySelector(".swimlanes").appendChild(swimlaneElement);
        });

        kanbanBoard.appendChild(columnElement);
    });
}

document.getElementById("selectBoardId").addEventListener("change", async function(event) {
    const idBoard = event.target.value;

    const columns = await getBoardColumns(idBoard);
    const swimlanes = await getBoardSwimlanes(idBoard);

    buildKanbanBoard(columns, swimlanes);
});