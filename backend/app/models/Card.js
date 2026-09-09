class Card {
    #id;
    #board_id;
    #column_id;
    #swimlane_id;
    #stato;
    #titolo;
    #sottotitolo;
    #assegnatario;
    #responsabile;
    #creatore;
    #id_user_esecutore;
    #note;
    #position;
    #parent_card_id;
    #priority_id;
    #scadenza;
    #data_fine;
    #data_fine_prevista;

    constructor(board_id, column_id, swimlane_id, stato, titolo, sottotitolo, assegnatario, responsabile, creatore, id_user_esecutore, note, position, parent_card_id, priority_id, scadenza, data_fine, data_fine_prevista) {
        if (!Number.isInteger(Number(board_id)) || Number(board_id) < 0) {
            throw new TypeError("L'id della board deve essere un numero intero non negativo");
        }
        if (!Number.isInteger(Number(column_id)) || Number(column_id) < 0) {
            throw new TypeError("L'id della column deve essere un numero intero non negativo");
        }
        if (swimlane_id !== null && swimlane_id !== undefined && (!Number.isInteger(Number(swimlane_id)) || Number(swimlane_id) < 0)) {
            throw new TypeError("L'id della swimlane deve essere un numero intero non negativo");
        }
        if (typeof stato !== "string" || !["Pianificato", "In lavorazione", "Completato"].includes(stato)) {
            throw new TypeError("Lo stato deve essere 'Pianificato', 'In lavorazione' oppure 'Completato'");
        }
        if (typeof titolo !== "string" || titolo.length === 0 || titolo.length > 100) {
            throw new TypeError("Il titolo deve essere una stringa di massimo 100 caratteri e non può essere vuoto");
        }
        if (sottotitolo !== null && sottotitolo !== undefined && (typeof sottotitolo !== "string" || sottotitolo.length > 200)) {
            throw new TypeError("Il sottotitolo deve essere una stringa di massimo 200 caratteri");
        }
        if (!Number.isInteger(Number(assegnatario)) || Number(assegnatario) < 0) {
            throw new TypeError("L'id dell'assegnatario deve essere un numero intero non negativo");
        }
        if (!Number.isInteger(Number(responsabile)) || Number(responsabile) < 0) {
            throw new TypeError("L'id del responsabile deve essere un numero intero non negativo");
        }
        if (!Number.isInteger(Number(creatore)) || Number(creatore) < 0) {
            throw new TypeError("L'id del creatore deve essere un numero intero non negativo");
        }
        if (id_user_esecutore !== null && id_user_esecutore !== undefined && (!Number.isInteger(Number(id_user_esecutore)) || Number(id_user_esecutore) < 0)) {
            throw new TypeError("L'id dell'utente esecutore deve essere un numero intero non negativo");
        }
        if (note !== null && note !== undefined && (typeof note !== "string" || note.length > 1000)) {
            throw new TypeError("Le note devono essere una stringa di massimo 1000 caratteri");
        }
        if (!Number.isInteger(Number(position)) || Number(position) < 0) {
            throw new TypeError("La position deve essere un numero intero non negativo");
        }
        if (parent_card_id !== null && parent_card_id !== undefined && (!Number.isInteger(Number(parent_card_id)) || Number(parent_card_id) < 0)) {
            throw new TypeError("L'id della parent card deve essere un numero intero non negativo");
        }
        if (priority_id !== null && priority_id !== undefined && (!Number.isInteger(Number(priority_id)) || Number(priority_id) < 0)) {
            throw new TypeError("L'id della priority deve essere un numero intero non negativo");
        }
        if (scadenza !== null && scadenza !== undefined && !(scadenza instanceof Date) && isNaN(Date.parse(scadenza))) {
            throw new TypeError("La scadenza deve essere una data valida");
        }
        if (data_fine !== null && data_fine !== undefined && !(data_fine instanceof Date) && isNaN(Date.parse(data_fine))) {
            throw new TypeError("La data di fine deve essere una data valida");
        }
        if (data_fine_prevista !== null && data_fine_prevista !== undefined && !(data_fine_prevista instanceof Date) && isNaN(Date.parse(data_fine_prevista))) {
            throw new TypeError("La data di fine prevista deve essere una data valida");
        }

        this.#board_id = Number(board_id);
        this.#column_id = Number(column_id);
        this.#swimlane_id = swimlane_id !== null && swimlane_id !== undefined ? Number(swimlane_id) : null;
        this.#stato = stato;
        this.#titolo = titolo;
        this.#sottotitolo = sottotitolo;
        this.#assegnatario = Number(assegnatario);
        this.#responsabile = Number(responsabile);
        this.#creatore = Number(creatore);
        this.#id_user_esecutore = id_user_esecutore !== null && id_user_esecutore !== undefined ? Number(id_user_esecutore) : null;
        this.#note = note;
        this.#position = Number(position);
        this.#parent_card_id = parent_card_id !== null && parent_card_id !== undefined ? Number(parent_card_id) : null;
        this.#priority_id = priority_id !== null && priority_id !== undefined ? Number(priority_id) : null;
        this.#scadenza = scadenza;
        this.#data_fine = data_fine;
        this.#data_fine_prevista = data_fine_prevista;
    }


    toJSON() {
        return {
            id: this.#id,
            board_id: this.#board_id,
            column_id: this.#column_id,
            swimlane_id: this.#swimlane_id,
            stato: this.#stato,
            titolo: this.#titolo,
            sottotitolo: this.#sottotitolo,
            assegnatario: this.#assegnatario,
            responsabile: this.#responsabile,
            creatore: this.#creatore,
            id_user_esecutore: this.#id_user_esecutore,
            note: this.#note,
            position: this.#position,
            parent_card_id: this.#parent_card_id,
            priority_id: this.#priority_id,
            scadenza: this.#scadenza,
            data_fine: this.#data_fine,
            data_fine_prevista: this.#data_fine_prevista
        };
    }

    getId() { return this.#id; }
    getBoardId() { return this.#board_id; }
    getColumnId() { return this.#column_id; }
    getSwimlaneId() { return this.#swimlane_id; }
    getStato() { return this.#stato; }
    getTitolo() { return this.#titolo; }
    getSottotitolo() { return this.#sottotitolo; }
    getAssegnatario() { return this.#assegnatario; }
    getResponsabile() { return this.#responsabile; }
    getCreatore() { return this.#creatore; }
    getIdUserEsecutore() { return this.#id_user_esecutore; }
    getNote() { return this.#note; }
    getPosition() { return this.#position; }
    getParentCardId() { return this.#parent_card_id; }
    getPriorityId() { return this.#priority_id; }
    getScadenza() { return this.#scadenza; }
    getDataFine() { return this.#data_fine; }
    getDataFinePrevista() { return this.#data_fine_prevista; }

    setBoardId(board_id) { this.#board_id = Number(board_id); }
    setColumnId(column_id) { this.#column_id = Number(column_id); }
    setSwimlaneId(swimlane_id) { this.#swimlane_id = swimlane_id !== null && swimlane_id !== undefined ? Number(swimlane_id) : null; }
    setStato(stato) { this.#stato = stato; }
    setTitolo(titolo) { this.#titolo = titolo; }
    setSottotitolo(sottotitolo) { this.#sottotitolo = sottotitolo; }
    setAssegnatario(assegnatario) { this.#assegnatario = Number(assegnatario); }
    setResponsabile(responsabile) { this.#responsabile = Number(responsabile); }
    setCreatore(creatore) { this.#creatore = Number(creatore); }
    setIdUserEsecutore(id_user_esecutore) { this.#id_user_esecutore = id_user_esecutore !== null && id_user_esecutore !== undefined ? Number(id_user_esecutore) : null; }
    setNote(note) { this.#note = note; }
    setPosition(position) { this.#position = Number(position); }
    setParentCardId(parent_card_id) { this.#parent_card_id = parent_card_id !== null && parent_card_id !== undefined ? Number(parent_card_id) : null; }
    setPriorityId(priority_id) { this.#priority_id = priority_id !== null && priority_id !== undefined ? Number(priority_id) : null; }
    setScadenza(scadenza) { this.#scadenza = scadenza; }
    setDataFine(data_fine) { this.#data_fine = data_fine; }
    setDataFinePrevista(data_fine_prevista) { this.#data_fine_prevista = data_fine_prevista; }
}

module.exports = Card;