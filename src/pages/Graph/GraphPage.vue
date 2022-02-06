<template>
    <section class="flex w-full h-full " id="graph">
    </section>
</template>

<script>
import * as echarts from "echarts";
import { GraphGLChart } from 'echarts-gl/charts';
import graphGLConfig from "@/assets/echartsConfig/graphGLConfig";

export default {
    name: "GraphPage",
    mounted() {
        let graphID = document.getElementById('graph');
        echarts.use([GraphGLChart]);
        let graph = echarts.init(graphID, null, { renderer: 'canvas' });

        this.load_series_data();
        this.load_series_links();

        this.graph_data.series[0].data = this.graph_series_data;
        this.graph_data.series[0].links = this.graph_series_links;
        graph.setOption(this.graph_data);
    },
    methods: {
        load_series_data: function () {
            this.graph_series_data = this.$store.state.echarts_graph_series_data;
        },
        load_series_links: function () {
            this.graph_series_links = this.$store.state.echarts_graph_series_links;
        }
    },
    data() {
        return {
            graph_data: graphGLConfig,
            graph_series_data: null,
            graph_series_links: null,
        }
    }
}
</script>

<style scoped>

</style>