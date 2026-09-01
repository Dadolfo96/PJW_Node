const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {
event.preventDefault();

const formData = new FormData(loginForm);

const response = await fetch(loginForm.action, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        mail: formData.get("mail"),
        password: formData.get("password")
    })
});

const result = await response.json();

if (result.token) {
    sessionStorage.setItem("token", result.token);
    sessionStorage.setItem("ruolo", result.ruolo);

    window.location.href = "/profile";
}


});


// REGISTRAZIONE
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const response = await fetch("/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(new FormData(registerForm))
    });

    const result = await response.json();

    const resultDiv = document.getElementById("result");

    resultDiv.textContent = result.message;
    resultDiv.classList.remove("d-none");
});




