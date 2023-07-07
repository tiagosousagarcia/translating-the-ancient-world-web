import {base} from '$app/paths'
import {csvParse} from 'd3'

import { authorList, extractNormalisedTitles, extractUniqueNames, extractUniqueNamesFromList, minMaxYear } from '../utils/dataWrangleUtils.js';

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
            'Translator': d['Translator'].split(' ; '),
            'Intermediary Translators': d['Intermediary Translators'].split(' ; '),
            'Other Authors': d['Other Authors'].split(' ; ')
        }
    });
    // example of filtering dataset
    // let special = datasetJson.filter(entry => entry.author === 'Xenophon')

    let years = minMaxYear(datasetJson);
    let authors = extractUniqueNames(datasetJson, 'author');
    let translators = extractUniqueNamesFromList(datasetJson, 'Translator');
    let intermediaryTranslators = extractUniqueNamesFromList(datasetJson, 'Intermediary Translators');
    let otherAuthors = extractUniqueNamesFromList(datasetJson, 'Other Authors');
    // This one might not be working as wxpected
    let normalisedTitles = extractNormalisedTitles(datasetJson);

    console.log(normalisedTitles);
    
    return {dataset: datasetJson, years: years, authors: authors, translators: translators, intermediaryTranslators: intermediaryTranslators, otherAuthors: otherAuthors};
}