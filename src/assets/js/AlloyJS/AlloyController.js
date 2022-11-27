import { State } from "./Utils/state/state.js";

export class AlloyController {
    constructor(name) {
        this.name = name;
        this.state = new State();
    }
}