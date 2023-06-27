export function minMaxYear(dataset) {
    // get list of all possible years
    let years = dataset.map(entry => entry['Date'].getFullYear());

    // removes NaN years
    years = years.filter(function(entry) {return !isNaN(entry)});

    return {min: Math.min(...years), max: Math.max(...years)}
}

export function authorList(dataset) {
    let allAuthors = dataset.map(entry => entry['author']);
    let authors = Array.from(new Set(allAuthors));
    return authors;
}