class Board {
    #id;
    #workspaceId;
    #projectId;
    #nome;
    #dataCreazione;
    #dataAggiornamento;
    constructor(workspaceId,projectId,nome) {
        this.#workspaceId=workspaceId;
        this.#projectId=projectId;
        this.#nome=nome;
    }
    static fromDatabase(row) {
        const board=new Board(row.workspace_id,row.project_id,row.nome);
        board.#id=row.id;
        board.#dataCreazione=row.data_creazione;
        board.#dataAggiornamento=row.data_aggiornamento;
        return board;
    }
    getId() {
        return this.#id;
    }
    getWorkspaceId() {
        return this.#workspaceId;
    }
    getProjectId() {
        return this.#projectId;
    }
    getNome() {
        return this.#nome;
    }
    getDataCreazione() {
        return this.#dataCreazione;
    }
    getDataAggiornamento() {
        return this.#dataAggiornamento;
    }
    setWorkspaceId(workspaceId) {
        this.#workspaceId=workspaceId;
    }
    setProjectId(projectId) {
        this.#projectId=projectId;
    }
    setNome(nome) {
        this.#nome=nome;
    }
}
module.exports=Board;