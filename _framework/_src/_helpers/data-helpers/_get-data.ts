/**
* @param data (string) - element.dataset.data-item. Must start with "[o | a | s | n]," 
* o = object;
* a = array;
* s = string
* n = number or floating point number
* ! Objects and Arrays MUST be valid JSON
* @example data-alloy-component='n, 1'
* @example data-alloy-component='s, "Hello"'
* @example data-alloy-component='o, {"message": "Hello"}'
* @example data-alloy-component='a, [{"message": "Hello from item 1"}, {"message": "Hello from item 2"}]'
* ? Could enforce all data entries are JSON objects
* TODO: How can we pass in functions from controller to directive?
*/
export function GetData(data: string) {
    if (data) {
        let str: string = data.trim(); // remove any preceding or trailing whitespace
        const type: string = str.charAt(0); // get type declaration
        const toParse = str.replace(/^([oasn],)/, "").trim(); // remove type declaration and whitespace, could use /^([oasn],)/\s/ but would fail if space wasn't there
        let output: string | number | any[] | {any};

        switch (type) {
            case 'o':
            case 'a':
                try {
                    output = JSON.parse(toParse);
                } catch (err) {
                    console.error(`Data is not valid JSON \n ${err} \n ${toParse}`);
                    return false;
                }
                break;
            case 's':
            if (typeof(toParse) === 'string') {
                    output = toParse;
                } else {
                    console.error(`Not a valid string:\n${toParse}`);
                    return false
                }
                break;
            case 'n':
            if (typeof(parseFloat(toParse)) === 'number') {
                    output = parseFloat(toParse);
                } else {
                    console.error(`Not a number:\n${toParse}`);
                    return false;
                }
                break;
            default:
                console.error(`Types should be prefixed o | a | s | n\ne.g: data-alloy-example='o, {"name": "exampleName"}'\no = Object;\na = Array;\nn = Number;\ns = string\n You entered ${ toParse }`);
        }

        return output;
    } else {
        return {};
    }
}