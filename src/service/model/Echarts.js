class EchartsSeriesData {
    constructor(id, name, value) {
        this.id = id
        this.name = name;
        this.value = value;
    }
}

class EchartsSeriesLink {
    constructor(source, target) {
        this.source = source;
        this.target = target;
    }
}

export {
    EchartsSeriesData,
    EchartsSeriesLink
}