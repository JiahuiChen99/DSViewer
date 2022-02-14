let treeConfig = {
    title: {
        text: 'LS Linked Tree',
        left: 20,
        top: 20
    },
    tooltip: {},
    animation: false,
    series: [
        {
            type: 'tree',
            layout: 'orthogonal',
            orient: 'LR',
            roam: true,
            data: [],
            label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 9
            },
            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },
            emphasis: {
                focus: 'descendant'
            },
            expandAndCollapse: true,
        }
    ]
};

export default treeConfig;