export function minMaxYear(dataset) {
    // get list of all possible years
    let years = dataset.map(entry => entry['Date'].getFullYear());

    // removes NaN years
    years = years.filter(function(entry) {return !isNaN(entry)});

    return {min: Math.min(...years), max: Math.max(...years)}
}

export function extractUniqueNames(dataset, propName) {
    let allNames = dataset.map(entry => entry[propName]);
    let names = Array.from(new Set(allNames));
    return names;
}

export function extractUniqueNamesFromList(dataset, propName) {
    let uniqueNames = [];
    let allNames = dataset.map(entry => entry[propName]);
    for (let list of allNames) {
        for (let element of list) {
            if (element != '') {
                uniqueNames.push(element);
            }
        }
    }
    uniqueNames = Array.from(new Set(uniqueNames));
    return uniqueNames;
}