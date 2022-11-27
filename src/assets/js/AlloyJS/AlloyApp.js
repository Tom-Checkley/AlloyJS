

export class AlloyApp {
    /**
     * @description Instatiates a new Alloy app
     * @param {array} dependencies array of AlloyControllers
     */
    constructor (dependencies) {
        this.dependencies = dependencies;
    }

    /**
     * @description Initiates all dependencies of the AlloyApp
     */
    init() {
        console.log("New AlloyApp");
        this.dependencies.forEach(dependency => dependency.init());
    }
}