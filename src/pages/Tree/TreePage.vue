<template>
    <section class="flex w-full h-full" id="tree">
    </section>
</template>

<script>
import treeConfig from "@/assets/echartsConfig/treeConfig";
import * as echarts from "echarts";

export default {
    name: "TreePage",
    mounted() {
        let treeID = document.getElementById('tree');
        let tree = echarts.init(treeID, null);

        this.load_series_data();

        this.tree_data.series[0].data = this.tree_series_data;

        tree.setOption(this.tree_data);
    },
    methods: {
        load_series_data: function () {
            this.tree_series_data = null
        }
    },
    data() {
        return {
            tree_data: treeConfig,
            tree_series_data: null,
        }
    }
}
</script>

<style scoped>

</style>