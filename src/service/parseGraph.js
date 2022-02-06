import store from "@/vuex/store";
import {EchartsSeriesData, EchartsSeriesLink} from "@/service/model/Echarts";

const file_reader = new FileReader();

/**
 * Parses the selected graph file
 * generated from LSLinked project
 * @param data_file graph file
 */
function parseGraph(data_file) {
    // Read selected graph file
    file_reader.readAsText(data_file);

    /**
     * Load file event handler
     * @type {FileReader.onload}
     */
    file_reader.onload = (ev => {
        let data = JSON.parse(ev.target.result);

        // { people: Array of Person, relationships: Array of Relation }
        let people = data['people'];
        let relationships = data['relationships'];

        // Map data to echarts format
        echartsSeriesData(people);
        echartsSeriesLink(relationships)
    })
}

/**
 * Converts people array to echarts graph
 * data objects
 * @param people array of people structs
 * generated from LSLinked project
 */
function echartsSeriesData(people) {
    let series_data = [];
    people.forEach( (person) => {
        series_data.push(new EchartsSeriesData(
            person.id,
            person.name,
            0,
        ));
    });

    // Save to vuex
    store.commit('setGraphsData', series_data);
}

/**
 * Converts relationships array to echarts graph
 * links objects
 * @param relationships array of relationship structs
 * generated from LSLinked project
 */
function echartsSeriesLink(relationships) {
    let series_links = [];
    relationships.forEach( (relation) => {
        series_links.push(new EchartsSeriesLink(
            relation.origin,
            relation.destination
        ));
    });

    // Save to vuex
    store.commit('setGraphsLinks', series_links);
}

export { parseGraph };