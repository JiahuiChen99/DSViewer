let graphGLConfig = {
    title: {
        text: 'LS Linked Graph',
        left: 20,
        top: 20
    },
    tooltip: {},
    animation: false,
    series: [
        {
            type: 'graphGL',
            roam: true,
            lineStyle: {
                color: 'rgba(255,255,255,1)'
            },
            itemStyle: {
                opacity: 1
            },
            emphasis: {
                label: {
                    show: true
                },
                lineStyle: {
                    opacity: 0.5,
                    width: 4
                }
            },
            forceAtlas2: {
                steps: 1,
                stopThreshold: 20,
                jitterTolerence: 10,
                edgeWeight: [0.2, 1],
                gravity: 5,
                edgeWeightInfluence: 0,
            },
            data: [],
            links: [],
        }
    ]
};

export default graphGLConfig;