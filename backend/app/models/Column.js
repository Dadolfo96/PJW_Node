class Column {
    #id;
    #nome;
    #wipLimit;
    constructor(nome,wipLimit=null) {
        this.#nome=nome;
        this.#wipLimit=wipLimit;
    }
    static fromDatabase(row) {
        const column=new Column(row.nome,row.wip_limit);
        column.#id=row.id;
        return column;
    }
    getId() {
        return this.#id;
    }
    getNome() {
        return this.#nome;
    }
    getWipLimit() {
        return this.#wipLimit;
    }
    setNome(nome) {
        this.#nome=nome;
    }
    setWipLimit(wipLimit) {
        this.#wipLimit=wipLimit;
    }
}
module.exports=Column;