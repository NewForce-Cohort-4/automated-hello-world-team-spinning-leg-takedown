import {useCityCollection, useLandmarkInfo, useCitizenInfo} from "./zambiaDataProvider.js"
import {Zambia} from "./zambia.js"

let zambiaCountry = document.querySelector("#main-content")

let cityCollectionArray = useCityCollection();
let landmarkArray = useLandmarkInfo();
let citizenArray = useCitizenInfo();

function buildCityListHTML(zambiaCityInfo){
    let buildCityListHTML = "";

    for(let i = 0; i < zambiaCityInfo.length; i++){
        buildCityListHTML += Zambia(zambiaCityInfo[i]);
    }
    return buildCityListHTML;
}

function buildCelebrityListHTML(zambiaCitizenInfo){
    let buildCelebrityListHTML = "";

    for(let i = 0; i <zambiaCitizenInfo.length; i++){
        buildCelebrityListHTML += Zambia(zambiaCitizenInfo[i]);
    }
    return buildCelebrityListHTML;
}

function buildLandmarkListHTML(zambiaLandmarkInfo){
    let buildLandmarkListHTML = "";

    for(let i = 0; i < zambiaLandmarkInfo.length; i++){
        buildLandmarkListHTML += Zambia(zambiaLandmarkInfo[i]);
    }
    return buildLandmarkListHTML;
}

export function zambiaList(){
    const zambiaCityCollection = useCityCollection();
    const zambiaCitizenCollection = useCitizenInfo();
    const zambiaLandmarkCollection = useLandmarkInfo();

    const zambiaCityHTML = buildCityListHTML(zambiaCityCollection);
    const zambiaCelebrityHTML = buildCelebrityListHTML(zambiaCitizenCollection);
    const zambiaLandmarkHTML = buildLandmarkListHTML(zambiaLandmarkCollection);

    zambiaCountry.innerHTML += `<div class = "card-text"><h2>Cities</h2>${zambiaCityHTML}</div>`
    zambiaCountry.innerHTML += `<div class = "card-text"><h2>Celebrities</h2>${zambiaCelebrityHTML}</div>`
    zambiaCountry.innerHTML += `<div class = "card-text"><h2>Landmarks</h2>${zambiaLandmarkHTML}</div>`

}

