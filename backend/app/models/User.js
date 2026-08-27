class User {
    #id;
    #nome;
    #cognome;
    #mail;
    #username;
    #password;
    #ruolo;
    
    constructor(nome, cognome, mail, username, ruolo, password) {
        if (typeof nome !== "string" || nome.length === 0 || nome.length > 50) {
            throw new TypeError("Il nome deve essere una stringa di massimo 50 caratteri e non può essere vuoto");
        }

        if (cognome !== null && cognome !== undefined &&
            (typeof cognome !== "string" || cognome.length > 200)) {
            throw new TypeError("Il cognome deve essere una stringa di massimo 200 caratteri");
        }

        if (typeof mail !== "string" || mail.length === 0 || mail.length > 50) {
            throw new TypeError("La mail deve essere una stringa di massimo 50 caratteri e non può essere vuota");
        }

        if (typeof username !== "string" || username.length === 0 || username.length > 50) {
            throw new TypeError("Lo username deve essere una stringa di massimo 50 caratteri e non può essere vuoto");
        }

        if (ruolo !== null && ruolo !== undefined &&
            (typeof ruolo !== "string" || ruolo.length > 50)) {
            throw new TypeError("Il ruolo deve essere una stringa di massimo 50 caratteri");
        }      

        if (password !== null && password !== undefined &&
            (typeof password !== "string" || password.length === 0 || password.length > 255)) {
            throw new TypeError("La password deve essere una stringa non vuota di massimo 255 caratteri");
        }

        this.#nome = nome;
        this.#cognome = cognome;
        this.#mail = mail;
        this.#username = username;
        this.#ruolo = ruolo;
        this.#password = password;
    }

    getId() {
        return this.#id;
    }

    getNome() {
        return this.#nome;
    }

    getCognome() {
        return this.#cognome;
    }

    getMail() {
        return this.#mail;
    }

    getUsername() {
        return this.#username;
    }

    getRuolo() {
        return this.#ruolo;
    }

    getPassword() {
        return this.#password;
    }

    setNome(nome) {
        if (typeof nome !== "string" || nome.length === 0 || nome.length > 50) {
            throw new TypeError("Il nome deve essere una stringa di massimo 50 caratteri e non può essere vuoto");
        }
        this.#nome = nome;
    }

    setCognome(cognome) {
        if (cognome !== null && cognome !== undefined &&
            (typeof cognome !== "string" || cognome.length > 200)) {
            throw new TypeError("Il cognome deve essere una stringa di massimo 200 caratteri");
        }
        this.#cognome = cognome;
    }

    setMail(mail) {
        if (typeof mail !== "string" || mail.length === 0 || mail.length > 50) {
            throw new TypeError("La mail deve essere una stringa di massimo 50 caratteri e non può essere vuota");
        }
        this.#mail = mail;
    }

    setUsername(username) {
        if (typeof username !== "string" || username.length === 0 || username.length > 50) {
            throw new TypeError("Lo username deve essere una stringa di massimo 50 caratteri e non può essere vuoto");
        }
        this.#username = username;
    }

    setRuolo(ruolo) {
        if (ruolo !== null && ruolo !== undefined &&
            (typeof ruolo !== "string" || ruolo.length > 50)) {
            throw new TypeError("Il ruolo deve essere una stringa di massimo 50 caratteri");
        }
        this.#ruolo = ruolo;
    }

    setPassword(password) {
        if (typeof password !== "string" || password.length === 0 || password.length > 255) {
            throw new TypeError("La password deve essere una stringa non vuota di massimo 255 caratteri");
        }
        this.#password = password;
    }
}

module.exports = User;