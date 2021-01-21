import { useCityCollection, useCelebrityCollection, useLandmarkCollection } from "./FranceDataProvider.js";
import { France } from "./France.js";

let franceContainer = document.querySelector("#main-content");

let cityCollectionArray = useCityCollection();
let celebrityCollectionArray = useCelebrityCollection();

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

export function FranceList() {
  const franceCityCollection = useCityCollection();
  const franceCelebrityCollection = useCelebrityCollection();

  const franceCityHTML = buildCityListHTML(franceCityCollection);
  const franceCelebrityHTML = buildCelebrityListHTML(franceCelebrityCollection);


  franceContainer.innerHTML = `
  <h2>Cities</h2>${franceCityHTML}
  <h2>Celebrities</h2>${franceCelebrityHTML}
`
}



