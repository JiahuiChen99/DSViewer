let graphConfig = {
    title: {
        text: 'LS Linked Graph',
        left: 20,
        top: 20
    },
    tooltip: {},
    animation: false,
    series: [
        {
            type: 'graph',
            layout: 'force',
            animation: false,
            force: {
                repulsion: 20
            },
            symbolSize: 5,
            roam: true,
            label: {
                show: false
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [1, 10],
            edgeLabel: {
                fontSize: 5
            },
            data: [],
            links: [],
            lineStyle: {
                opacity: 0.5,
                width: 2,
            }
        }
    ]
};

export default graphConfig;