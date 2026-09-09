class SwimlaneService {
    #swimlaneRepository;
    constructor(swimlaneRepository) {
        this.#swimlaneRepository = swimlaneRepository;
    }
    async createSwimlane(swimlane) {
        const newSwimlane = await this.#swimlaneRepository.createSwimlane(swimlane);
        return newSwimlane;
    }
    async findSwimlaneById(id) {
        const swimlane = await this.#swimlaneRepository.findSwimlaneById(id);
        return swimlane;
    }
    async findAllSwimlanes() {
        const swimlanes = await this.#swimlaneRepository.findAllSwimlanes();
        return swimlanes;
    }
    async deleteSwimlaneById(id) {
        const deletedSwimlane = await this.#swimlaneRepository.deleteSwimlaneById(id);
        return deletedSwimlane;
    }
    async updateSwimlane(swimlane, id) {
        const updatedSwimlane = await this.#swimlaneRepository.updateSwimlane(swimlane, id);
        return updatedSwimlane;
    }
    async getSwimlaneByBoardId(id) {
        const swimlanes = await this.#swimlaneRepository.getSwimlaneByBoardId(id);
        return swimlanes;
    }
}
module.exports = SwimlaneService;