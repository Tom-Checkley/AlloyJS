// TODO - Maybe do with a regex?
export const GetDatasetKey = (str: string): string => {
    let strArr: string[] = str.split('-');

    // remove "data" so dataset is always alloyNameOfComponent
    if (strArr[0] === 'data') {
        strArr.splice(0,1);
    }

    let datasetKey: string;
    strArr.map((str: string, i: number) => {
        if (i === 0) {
            datasetKey = str;
        } else {
            // Capitalize the first letter of each word after the first
            const breakStringArr = str.split('');
            breakStringArr[0] = breakStringArr[0].toUpperCase();
            const capitalized = breakStringArr.join('');
            datasetKey += capitalized
        }
    });
    return datasetKey;
}