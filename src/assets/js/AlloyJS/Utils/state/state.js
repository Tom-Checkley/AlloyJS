export class State {
    constructor() {
        // Ideally these would be private so could only be accessed from within the class
        this.listeners = [];
        this.state = {};
    }

    /**
     * We allow any key value pair to be added to the state object
     * @param {string} key 
     * @param {any} value 
     */
    modifyState = (key, value) => {
        this.state[key] = value;
        if (this.listeners.length) {
            this.listeners.map(listener => listener(this.state));
        }
    }

    /**
     * Get the state object or a single value
     * @param {any | optional} key if defined will return the specified key if it exists
     * @returns A key value if key is defined as an argument or a copy of the state object if not
     */
    getState = (key = undefined) => {
        if (key) {
            if (!key in this.state) {
                throw new error(`Key: ${ key } does not exist in this state.`)
            }
            // We return a copy of the key not the actual key value.
            // This is to prevent the value being unintentionally changed outside the class.
            // eg:
            // const someKey = ctrlState.getState(someKey);
            // someKey = "blah"; // this would update the key in the state object when modiy state should be used.
            const output = this.state[key];
            return output;
        }
        
        // Similarly to the single key, we retur a copy of the object to prevent outside modification.
        return { ...this.state }
    }

    /**
     * @description Add listeners that will fire everytime state changes
     * The function should only take one argument which reptesents the state that will be passed in.
     * @warn If using UCE custom components this should NOT be used within the component, the html attribute should be updated instead.
     * @param {Function} callback 
     */
    addListener = (callback) => {
        this.listeners.push(callback);
    }

    /**
     * @description Remove a listener when no longer required
     * @param {Function} listener 
     * @returns 
     */
    removeListener = (listener) => {
        const i = this.listeners.indexOf(listener)
        
        if (i == -1) {
            return;
        }
        this.listeners.splice(i, 1);
    }
}