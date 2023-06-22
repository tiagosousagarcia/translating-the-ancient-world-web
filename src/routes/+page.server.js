import {base} from '$app/paths'
import {csvParse} from 'd3'

export async function load({fetch}) {
    let csvString = await fetch(`${base}/Dataset.csv`).then(function(response) {
        if (response.ok) {
            return response.text();
        }
    })
    
    // turns csv into a list of json objects, type casting and data unfolding can be done in the assessor function, see: https://d3-wiki.readthedocs.io/zh_CN/master/CSV/?q=filter&check_keywords=yes&area=default#parse 
    // @ts-ignore
    let datasetJson = csvParse(csvString, function(d) {
        return {...d,
            'Date': new Date(+d['Date'], 0, 1),
            'Translator': d['Translator'].split(' ; ')
        }
    });
    return {dataset: datasetJson}
}