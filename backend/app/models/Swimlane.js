class Swimlane {
    #id;
    #nome;
    constructor(nome) {
        this.#nome=nome;
    }
    static fromDatabase(row) {
        const swimlane=new Swimlane(row.nome);
        swimlane.#id=row.id;
        return swimlane;
    }
    getId() {
        return this.#id;
    }
    getNome() {
        return this.#nome;
    }
    setNome(nome) {
        this.#nome=nome;
    }
}
module.exports=Swimlane;