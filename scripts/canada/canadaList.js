import { useCelebrity, useCity, useLandmark } from './canadaDataProvider.js'
import { Canada } from "./canada.js"

let canadaContainer = document.querySelector("#main-content");

let cityCollectionArray = useCity();
let celebrityCollectionArray = useCelebrity();
let landmarkCollectionArray = useLandmark();

 function buildCityListHTML(cityCollection){
    let cityListHTMLString = "";

    for(let i =0; i < cityCollection.length; i++){
        cityListHTMLString += Canada(cityCollection[i]);
    }
    return cityListHTMLString;
};

function buildCelebrityListHTML(celebrityCollection){
    let celebrityListHTMLString = "";

    for(let i =0; i < celebrityCollection.length; i++){
        celebrityListHTMLString += Canada(celebrityCollection[i]);
    }
    return celebrityListHTMLString;
};

function buildLandmarkListHTML(landmarkCollection){
    let landmarkListHTMLString = "";

    for(let i =0; i < landmarkCollection.length; i++){
        landmarkListHTMLString += Canada(landmarkCollection[i]);
    }
    return landmarkListHTMLString;
};

export function CanadaList(){
    const canadaCityCollection = useCity();
    const canadaCelebrityCollection = useCelebrity();
    const canadaLandmarkCollection = useLandmark();


    const canadaCityHTML = buildCityListHTML(canadaCityCollection);
    const canadaCelebrityHTML = buildCelebrityListHTML(canadaCelebrityCollection);
    const canadaLandmarkHTML = buildLandmarkListHTML(canadaLandmarkCollection);
    canadaContainer.innerHTML = `
    <div class="card-text"><h2>Cities</h2>${canadaCityHTML}</div>
    <div class="card-text"><h2>Celebrities</h2>${canadaCelebrityHTML}</div>
    <div class="card-text"><h2>Landmarks</h2>${canadaLandmarkHTML}</div>`
};
