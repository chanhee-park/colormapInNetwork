// animation
function animation(igmUrl, numOfImg) {
    // imgUrl = 'image/degree/network_diagram-degree_';
    const $diagramImg = $('#diagram-img');
    const imgFormat = '.svg';
    let imgNum = 0;

    setInterval(function () {
        imgNum = (imgNum < numOfImg) ? (imgNum + 1) : 0;
        $diagramImg.attr("src", imgUrl + imgNum + imgFormat);
    }, 750);
}



