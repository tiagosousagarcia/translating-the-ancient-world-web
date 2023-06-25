import {base} from '$app/paths'
import {csvParse} from 'd3'

export async function load({fetch}) {
    let csvString = await fetch(`https://docs.google.com/spreadsheets/d/1puV33xy5x7-5ifiV6iYLIfwY2cRWEe9ms3R-yiMyv60/export?format=csv&gid=1304251320`).then(function(response) {
        if (response.ok) {
            return response.text();
        }
    })
    
    // turns csv into a list of json objects, type casting and data unfolding can be done in the assessor function, see: https://d3-wiki.readthedocs.io/zh_CN/master/CSV/?q=filter&check_keywords=yes&area=default#parse 
    let datasetJson = csvParse(csvString, function(d) {
        return {...d,
            'Date': new Date(+d['Date'], 0, 1),
            'Translator': d['Translator'].split(' ; ')
        }
    });
    // example of filtering dataset
    // let special = datasetJson.filter(entry => entry.author === 'Xenophon')

    // get list of all possible years
    let years = datasetJson.map(entry => entry['Date'].getFullYear());
    // removes NaN years
    years = years.filter(function(entry) {return !isNaN(entry)});

    return {dataset: datasetJson, years: {min: Math.min(...years), max: Math.max(...years)}}
}