import { createStore } from 'vuex';

const store = createStore( {
    state() {
        return {
            data_structure: '',
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
        }
    }
});

export default store;