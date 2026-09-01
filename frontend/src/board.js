async function findAllCards() {    // Lavagna: findAllCards
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
            { data: "stato" },
            { data: "data_creazione" },
            { data: "data_aggiornamento" },
            { data: "titolo" },
            { data: "sottotitolo" },
            { data: "assegnatario" },
            { data: "responsabile" },
            { data: "id_user_esecutore" },
            { data: "note" }
        ]
    });
}
findAllCards();
    
// FIND BY ID
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


// UPDATE BY ID
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

// DELETE BY ID
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

//create new Card



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

