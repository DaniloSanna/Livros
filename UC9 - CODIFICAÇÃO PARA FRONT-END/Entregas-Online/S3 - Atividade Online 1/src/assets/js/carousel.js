
function carouselAdd(a, b) {
    imageSrc.push(a);
    imageAlt.push(b);
    indexCarousel = indexCarousel + 1;
    console.log('valor de index(func): ' + indexCarousel);
}


function carouselExibir() {

    for (let i = 0; i < indexCarousel; i++) {

        resposta = resposta + "<img src='" + imageSrc[i] + "' alt='" + imageAlt[i] + "' class='carrouselitem' id='car" + "'>"
        console.log(resposta);
        // console.log('valor de i: ' + i);
        // console.log('valor de imageSrc[i]: ' + imageSrc[i]);
        // console.log('valor de imageAlt[i]: ' + imageAlt[i]);
    }
    return resposta;
}