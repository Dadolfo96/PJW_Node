class Card { 
 
    #id; 
    #stato;
    #titolo; 
    #sottotitolo; 
    #assegnatario; 
    #responsabile; 
    #id_user_esecutore; 
    #note; 
 
    constructor(stato, titolo, sottotitolo, assegnatario, responsabile, id_user_esecutore, note) { //constructor() { } è l'equivalente in Java di public Card() {} 
 
 
        if (typeof stato !== "string" || !["Pianificato", "In lavorazione", "Completato"].includes(stato)) {
            throw new TypeError("Lo stato deve essere 'Pianificato', 'In lavorazione' oppure 'Completato'");
        }

        if (typeof titolo !== "string" || titolo.length === 0 || titolo.length > 100) { 
            throw new TypeError("Il titolo deve essere una stringa di massimo 100 caratteri e non può essere vuoto"); 
        } 
 
        if (sottotitolo !== null && sottotitolo !== undefined && 
            (typeof sottotitolo !== "string" || sottotitolo.length > 200)) { 
            throw new TypeError("Il sottotitolo deve essere una stringa di massimo 200 caratteri"); 
        } 
 
        if (typeof assegnatario !== "string" || assegnatario.length === 0 || assegnatario.length > 50) { 
            throw new TypeError("L'assegnatario deve essere una stringa di massimo 50 caratteri e non può essere vuoto"); 
        } 
 
        if (typeof responsabile !== "string" || responsabile.length === 0 || responsabile.length > 50) { 
            throw new TypeError("Il responsabile deve essere una stringa di massimo 50 caratteri e non può essere vuoto"); 
        } 
 
        if (!Number.isInteger(id_user_esecutore) || id_user_esecutore < 0) { 
            throw new TypeError("L'id dell'utente esecutore deve essere un numero intero non negativo"); 
        } 
 
        if (note !== null && note !== undefined && 
            (typeof note !== "string" || note.length > 1000)) { 
            throw new TypeError("Le note devono essere una stringa di massimo 1000 caratteri"); 
        }  
 
        this.#stato = stato;
        this.#titolo = titolo; 
        this.#sottotitolo = sottotitolo; 
        this.#assegnatario = assegnatario; 
        this.#responsabile = responsabile; 
        this.#id_user_esecutore = id_user_esecutore; 
        this.#note = note; 
    }

    toJSON() {
        return {
            id: this.#id,
            stato: this.#stato,
            titolo: this.#titolo,
            sottotitolo: this.#sottotitolo,
            assegnatario: this.#assegnatario,
            responsabile: this.#responsabile,
            id_user_esecutore: this.#id_user_esecutore
        };
    }

 
    getId() { 
        return this.#id; 
    } 

    getStato() {
        return this.#stato;
    }
 
    getTitolo() { 
        return this.#titolo; 
    } 
 
    getSottotitolo() { 
        return this.#sottotitolo; 
    } 
 
    getAssegnatario() { 
        return this.#assegnatario; 
    } 
 
    getResponsabile() { 
        return this.#responsabile; 
    } 
 
    getIdUserEsecutore() { 
        return this.#id_user_esecutore; 
    } 
 
    getNote() { 
        return this.#note; 
    } 
 

    setStato(stato) {
        if (typeof stato !== "string" || !["Pianificato", "In lavorazione", "Completato"].includes(stato)) {
            throw new TypeError("Lo stato deve essere 'Pianificato', 'In lavorazione' oppure 'Completato'");
        }

        this.#stato = stato;
    }
 
    setTitolo(titolo) { 
 
        if (typeof titolo !== "string" || titolo.length === 0 || titolo.length > 100) { 
            throw new TypeError("Il titolo deve essere una stringa di massimo 100 caratteri e non può essere vuoto"); 
        } 
 
        this.#titolo = titolo; 
    } 
 
    setSottotitolo(sottotitolo) { 
 
        if (sottotitolo !== null && sottotitolo !== undefined && 
            (typeof sottotitolo !== "string" || sottotitolo.length > 200)) { 
            throw new TypeError("Il sottotitolo deve essere una stringa di massimo 200 caratteri"); 
        } 
 
        this.#sottotitolo = sottotitolo; 
    } 
 
    setAssegnatario(assegnatario) { 
 
        if (typeof assegnatario !== "string" || assegnatario.length === 0 || assegnatario.length > 50) { 
            throw new TypeError("L'assegnatario deve essere una stringa di massimo 50 caratteri e non può essere vuoto"); 
        } 
 
        this.#assegnatario = assegnatario; 
    } 
 
    setResponsabile(responsabile) { 
 
        if (typeof responsabile !== "string" || responsabile.length === 0 || responsabile.length > 50) { 
            throw new TypeError("Il responsabile deve essere una stringa di massimo 50 caratteri e non può essere vuoto"); 
        } 
 
        this.#responsabile = responsabile; 
    } 
 
    setIdUserEsecutore(id_user_esecutore) { 
 
        if (!Number.isInteger(id_user_esecutore) || id_user_esecutore < 0) { 
            throw new TypeError("L'id dell'utente esecutore deve essere un numero intero non negativo"); 
        } 
 
        this.#id_user_esecutore = id_user_esecutore; 
    } 
 
    setNote(note) { 
 
        if (note !== null && note !== undefined && 
            (typeof note !== "string" || note.length > 1000)) { 
            throw new TypeError("Le note devono essere una stringa di massimo 1000 caratteri"); 
        } 
 
        this.#note = note; 
    } 
} 

module.exports = Card;