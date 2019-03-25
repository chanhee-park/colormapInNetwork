// https://github.com/d3/d3-scale-chromatic
//  d3.interpolateSinebow(t)
const Constant = {
    that: this,
    colorMaps: {
        'single_blue': d3.interpolateBlues,
        'single_grey': d3.interpolateGreys,
        'inferno': d3.interpolateInferno,
        'divergent_red_blue': d3.interpolateRdYlBu,
        'viridis': d3.interpolateViridis,
        'brewer_yellow-green-blue': d3.interpolateYlGnBu,
        'rainbow': d3.interpolateRainbow,
        'magma': d3.interpolateMagma,
        'plasma': d3.interpolatePlasma,
        'single_greens': d3.interpolateGreens,
        'heat': d3.interpolateYlOrRd,
    },
};

const dataNames = [
     "lesmis", "football", "netscience",
];

const centralityNames = [
    "deg_log", "btw", "random"
];

const colorMapNames = ['single_blue', 'rainbow', 'divergent_red_blue','viridis'];
//    'single_grey', 'inferno','magma',  'brewer_yellow-green-blue'

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
