
// FIND BY ID
document.getElementById("findForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = new FormData(event.target).get("id");

    const response = await fetch(`/users/${id}`, {
        method: "GET",
        headers: authHeaders
    });

    const result = await response.json();

    const profileResult = document.getElementById("profileResult");
    profileResult.textContent = JSON.stringify(result);
    profileResult.classList.remove("d-none");
});

// UPDATE BY ID
document.getElementById("updateForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const id = new FormData(form).get("id");
    const body = new URLSearchParams(new FormData(form));

    const response = await fetch(`/users/${id}`, {
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

    const response = await fetch(`/users/${id}`, {
        method: "DELETE",
        headers: authHeaders
    });

    const result = await response.json();

    console.log(result);
});

document.getElementById("logoutButton").addEventListener("click", () => {
    sessionStorage.removeItem("token");
    window.location.href = "/home";
});

// BOARD
// BOARD
document.getElementById("boardForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const response = await fetch("/cards/board", {
        method: "GET",
        headers: authHeaders
    });

    if (!response.ok) {
        console.log(await response.text());
        return;
    }

    const html = await response.text();

    document.open();
    document.write(html);
    document.close();
});

