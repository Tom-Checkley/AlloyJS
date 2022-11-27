
/**
 * Gets the state for a controller.
 * @param {AlloyApp} app The base app containing all controllers.
 * @param {string} controller The name of the required controller to recieve state from.
 * @returns The state object of the required controller.
 */
export const getControllerState = (app, controller) => {
    const ctrl = app.controllers.filter(ctrl => ctrl.name == controller)[0]
    if (ctrl) {
        return ctrl.state;
    }
}