const Constant = {
    that: this,
    colorMaps: {
        'single_blue': d3.interpolateBlues,
        'single_greens': d3.interpolateGreens,
        'single_grey': d3.interpolateGreys,
        'inferno': d3.interpolateInferno,
        'heat': d3.interpolateYlOrRd, // multi hue : from yellow to red
        'plasma': d3.interpolatePlasma,
        'viridis': d3.interpolateViridis,
        'brewer_yellow-green-blue': d3.interpolateYlGnBu,
    },

    centralityName: {
        "deg": "Degree",
        "deg_log": "Degree",
        "cls": "cls",
        "page": "page",
        "btw": "Betweenness"
    },
};

// https://github.com/d3/d3-scale-chromatic


const dataNames = [
    "dolphins", "lesmis", "football"
];

const centralityNames = [
    "deg", "btw", "cls", "page"
];

const colorMapNames = [
    'single_blue', 'single_greens', 'single_grey', 'inferno',
    'heat', 'plasma', 'viridis', 'brewer_yellow-green-blue'
];
console.log(Constant);
