import { cities, landmarks, celebs } from "./colombiaDataProvider.js"

let colombiaContainer = document.querySelector("#main-content");

//For cities - For loop running through each city
function buildColombiaCity(colombiaCities){
    let buildCityHTML = "";
    for(let i = 0; i < colombiaCities.length; i++){
                buildCityHTML += `<li>${colombiaCities[i].city}</li>`
    };
    return buildCityHTML
};

//For Landmarks - For loop running through each landmark
function buildColombiaLandmark(colombiaLandmarks){
    let buildLanmarkHTML = "";
        for(let x = 0; x < colombiaLandmarks.length; x++){
        buildLanmarkHTML += `<li>${colombiaLandmarks[x].landmark}</li>`
    };
    return buildLanmarkHTML
}

//For celebs - For loop running through each name
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

// pushing code into #main-content on HTML page
export function colombiaInfo(){
    let printedCity = printCity();
    let printedLandmark = printLandmark();
    let printedCeleb = printCelb();

    colombiaContainer.innerHTML = `
    <div class = "colombia-content">
    <div>
    <h3>Famous Cities</h3>
    <ul>
    ${printedCity}
    </ul>
    </div>
    <div>
    <h3>Famous Landmarks</h3>
    <ul>
    ${printedLandmark}
    </ul>
    </div>
    <div>
    <h3>Famous Celebs</h3>
    <ul>
    ${printedCeleb}
    </ul>
    </div>
    </div>
    `   
}


