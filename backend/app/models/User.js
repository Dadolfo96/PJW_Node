class User {
    #id;
    #nome;
    #cognome;
    #mail;
    #username;
    #password;
    #ruolo_id;
    
    constructor(nome, cognome, mail, username, ruolo_id, password) {
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

        if (ruolo_id !== null && ruolo_id !== undefined &&
            (!Number.isInteger(ruolo_id) || ruolo_id < 0)) {
            throw new TypeError("Il ruolo_id deve essere un numero intero non negativo");
        }   

        if (password !== null && password !== undefined &&
            (typeof password !== "string" || password.length === 0 || password.length > 255)) {
            throw new TypeError("La password deve essere una stringa non vuota di massimo 255 caratteri");
        }

        this.#nome = nome;
        this.#cognome = cognome;
        this.#mail = mail;
        this.#username = username;
        this.#ruolo_id = ruolo_id;
        this.#password = password;
    }

    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            cognome: this.#cognome,
            mail: this.#mail,
            username: this.#username,
            ruolo_id: this.#ruolo_id
        };
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
        return this.#ruolo_id;
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

    setRuolo(ruolo_id) {
        if (ruolo_id !== null && ruolo_id !== undefined &&
            (!Number.isInteger(ruolo_id) || ruolo_id < 0)) {
            throw new TypeError("Il ruolo_id deve essere un numero intero non negativo");
        }
        this.#ruolo_id = ruolo_id;
    }

    setPassword(password) {
        if (typeof password !== "string" || password.length === 0 || password.length > 255) {
            throw new TypeError("La password deve essere una stringa non vuota di massimo 255 caratteri");
        }
        this.#password = password;
    }
}

module.exports = User;