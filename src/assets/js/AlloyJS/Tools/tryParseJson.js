/**
 * @description Attempts to parse a string to JSON
 * @param str (string) sting to try to parse
 * @output JSON or false
 */
const _tryParseJson = (str) => {
    try {
        const output = JSON.parse(str);
        return output;
    } catch (err) {
        console.error(err);
        return false;
    }
}

export const TryParseJson = _tryParseJson;