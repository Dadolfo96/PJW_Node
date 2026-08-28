async function main() {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODc5MDQwMjgsImV4cCI6MTc4NzkwNzYyOH0.YbkeMHkVRYlVaUyeh1Qymx8fLUduB2rjwCHgL6fahFg";

    const response = await fetch("http://localhost:3000/cards", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            stato: "Pianificato",
            titolo: "asfvasv ",
            sottotitolo: "svsdfvs",
            assegnatario: "aasgvas Rossi",
            responsabile: "Luca Bianchi",
            id_user_esecutore: 1,
            note: "Definire asfsdfbrtgb..."
        })
    });

    const result = await response.json();

    console.log("Status:", response.status);
    console.log(result);
}

main();