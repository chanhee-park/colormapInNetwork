const Constant = {
    that: this,
    colorMaps: {
        'single_blue': d3.interpolateBlues,
        'single_greens': d3.interpolateGreens,
        'single_grey': d3.interpolateGreys,
        'inferno': d3.interpolateInferno,
        // 'heat': d3.interpolateYlOrRd, // multi hue : from yellow to red
        'divergent_red_blue': d3.interpolateRdYlBu,
        'plasma': d3.interpolatePlasma,
        'viridis': d3.interpolateViridis,
        'brewer_yellow-green-blue': d3.interpolateYlGnBu,
    },
};

// https://github.com/d3/d3-scale-chromatic
//  d3.interpolateSinebow(t)
const dataNames = [
    "dolphins", "lesmis", "football"
];

const centralityNames = [
    "deg_log", "btw", "page", "random"
];

const colorMapNames = [
    'single_blue', 'single_greens', 'single_grey', 'inferno',
    'divergent_red_blue', 'plasma', 'viridis', 'brewer_yellow-green-blue'
];

const Data = new function () {
    this.dataset = {};
    const allDataNames = ['dolphins', 'football', 'karate', 'lesmis', 'netscience'];
    const that = this;

    this.road = async () => {
        for (let i = 0; i < allDataNames.length; i++) {
            that.dataset[allDataNames[i]] = await $.getJSON('./data/' + allDataNames[i] + '.json');
        }
    };

    this.getData = (dataName) => {
        return that.dataset[dataName];
    };

    return this;
};

Data.road();

console.log(Constant);
