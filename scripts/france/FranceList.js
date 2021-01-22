import { useCityCollection, useCelebrityCollection, useLandmarkCollection } from "./FranceDataProvider.js";
import { France } from "./France.js";

let franceContainer = document.querySelector("#main-content");

let cityCollectionArray = useCityCollection();
let celebrityCollectionArray = useCelebrityCollection();
let landmarkCollectionArray = useLandmarkCollection();

function buildCityListHTML(cityCollection){
  let cityListHTML = "";

  for(let i = 0; i < cityCollection.length; i++){
    cityListHTML += France(cityCollection[i]);
  }

  return cityListHTML;
}

function buildCelebrityListHTML(celebrityCollection){
  let celebrityListHTML = "";

  for(let i = 0; i < celebrityCollection.length; i++){
    celebrityListHTML += France(celebrityCollection[i]);
  }

  return celebrityListHTML;
}

function buildLandmarkListHTML(landmarkCollection){
  let landmarkListHTML = "";

  for(let i = 0; i < landmarkCollection.length; i++){
    landmarkListHTML += France(landmarkCollection[i]);
  }

  return landmarkListHTML;
}

export function FranceList() {
  const franceCityCollection = useCityCollection();
  const franceCelebrityCollection = useCelebrityCollection();
  const franceLandmarkCollection = useLandmarkCollection();

  const franceCityHTML = buildCityListHTML(franceCityCollection);
  const franceCelebrityHTML = buildCelebrityListHTML(franceCelebrityCollection);
  const franceLandmarkHTML = buildLandmarkListHTML(franceLandmarkCollection);


  franceContainer.innerHTML = `<div class="card-text"><h2>Cities</h2>${franceCityHTML}</div>`;
  franceContainer.innerHTML += `<div class="card-text"><h2>Celebrities</h2>${franceCelebrityHTML}</div>`;
  franceContainer.innerHTML += `<div class="card-text"><h2>Landmarks</h2>${franceLandmarkHTML}</div>`;
}



