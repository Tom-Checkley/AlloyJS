/**
 * GET ELELMENTS
 * @param elName (string) html data attr
 * @example [data-alloy-commponent]
 * @param parent Optional parent element to search for child elements
 */

export const _getElements = (elName: string, parent?: HTMLElement): HTMLElement[] => {
    let elNodeList: NodeListOf<HTMLElement>;
    if (parent) {
        elNodeList = parent.querySelectorAll(`[${ elName }]`);
    } else {
        elNodeList = document.querySelectorAll(`[${ elName }]`);
    }

    if(elNodeList.length > 0) {
        return Array.from(elNodeList);
    } else {
        console.warn(`Warning: GetElements - No matching html elements with the attribute: ${ elName }. Don't import if not required!`);
    }
}