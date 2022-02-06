import { createStore } from 'vuex';

const store = createStore( {
    state() {
        return {
            data_structure: '',
            // Echarts Graph Data
            echarts_graph_series_data: [],
            echarts_graph_series_links: [],
        }
    },
    mutations: {
        /**
         * Selects the DS to generate from
         * the input source file
         * @param state
         * @param ds selected DS
         */
        select_ds: function (state, ds) {
            this.state.data_structure = ds
        },
        setGraphsData: function (state, data) {
            this.state.echarts_graph_series_data = data;
        },
        setGraphsLinks: function (state, links) {
            this.state.echarts_graph_series_links = links;
        }
    }
});

export default store;