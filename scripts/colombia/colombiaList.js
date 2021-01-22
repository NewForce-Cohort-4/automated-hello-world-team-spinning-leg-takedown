import { cities, landmarks, celebs } from "./colombiaDataProvider.js"

let colombiaContainer = document.querySelector("#main-content");

function buildColombiaCity(colombiaCities){
    let buildCityHTML = "";
    for(let i = 0; i < colombiaCities.length; i++){
                buildCityHTML += `<li>${colombiaCities[i].city}</li>`
    };
    return buildCityHTML
};

function buildColombiaLandmark(colombiaLandmarks){
    let buildLanmarkHTML = "";
        for(let x = 0; x < colombiaLandmarks.length; x++){
        buildLanmarkHTML += `<li>${colombiaLandmarks[x].landmark}</li>`
    };
    return buildLanmarkHTML
}

function buildColombiaCelb(colombiaCelebs){
    let buildCelebHTML = "";
    for(let z = 0; z < colombiaCelebs.length; z++){
        buildCelebHTML += `<li>${colombiaCelebs[z].celeb}</li>`
    };
    return buildCelebHTML
}

export function printCity() {
    let city = cities();
     const cityHTML = buildColombiaCity(city);

     return cityHTML
}

export function printLandmark(){
    let landmark = landmarks();
    const landmarkHTML = buildColombiaLandmark(landmark);

    return landmarkHTML
}

export function printCelb(){
    let celeb = celebs();
    const celebHTML = buildColombiaCelb(celeb);

    return celebHTML
}

export function colombiaInfo(){
    let printedCity = printCity();
    let printedLandmark = printLandmark();
    let printedCeleb = printCelb();

    colombiaContainer.innerHTML = `
    <h3>Famous Cities</h3>
    <ul>
    ${printedCity}
    </ul>
    <h3>Famous Landmarks</h3>
    <ul>
    ${printedLandmark}
    </ul>
    <h3>Famous Celebs</h3>
    <ul>
    ${printedCeleb}
    </ul>
    `   
}


