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

        // IDs Translation array
        let translator = {};

        // Map data to echarts format
        echartsSeriesData(people, translator);
        echartsSeriesLink(relationships, translator);
    })
}

/**
 * Converts people array to echarts graph
 * data objects
 * @param people array of people structs
 * generated from LSLinked project
 * @param translator map of people's IDs with ID
 * of the series_data array
 */
function echartsSeriesData(people, translator) {
    let series_data = [];
    people.forEach( (person) => {
        series_data.push(new EchartsSeriesData(
            person.id,
            person.name,
            0,
        ));
        // Save the array ID to that person's ID
        translator[person.id] = series_data.length - 1;
    });

    // Save to vuex
    store.commit('setGraphsData', series_data);
}

/**
 * Converts relationships array to echarts graph
 * links objects
 * @param relationships array of relationship structs
 * generated from LSLinked project
 * @param translator map of people's IDs with ID
 * of the series_data array
 */
function echartsSeriesLink(relationships, translator) {
    let series_links = [];
    let user_followers = {};
    relationships.forEach( (relation) => {
        series_links.push(new EchartsSeriesLink(
            translator[relation.origin],
            translator[relation.destination]
        ));

        // Number of followers a person has
        user_followers[relation.destination] = relation.destination in user_followers ?
            (user_followers[relation.destination] + 1) : 1;
    });

    store.commit('setUserFollowers', user_followers);
    // Save to vuex
    store.commit('setGraphsLinks', series_links);
}

export { parseGraph };