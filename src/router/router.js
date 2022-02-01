import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import TreePage from "@/pages/Tree/TreePage";
import GraphPage from "@/pages/Graph/GraphPage";
import ImportDataPage from "@/pages/ImportData/ImportDataPage";

const routes = [
    {
        path: '/',
        component: ImportDataPage,
    },
    {
        path: '/import_data',
        name: 'import_data',
        component: ImportDataPage,
    },
    {
        path: '/graph',
        name: "graph",
        component: GraphPage,
    },
    {
        path: '/tree',
        name: "tree",
        component: TreePage,
    }
];

const router = createRouter({
    // https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/commonIssues.html#blank-screen-on-builds-but-works-fine-on-serve
    history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
    routes,
});

export default router;