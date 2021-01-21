import {zambiaCitizenInfo, zambiaLandmarkInfo, zambiaCityInfo} from "./zambiaDataProvider.js"


let countryContainer = document.querySelector("#city-container")

function buildcountryListHTML (zambiaCityInfo){
    let countryListHTML = "";

    for(let i = 0; i < zambiaCityInfo.length; i++){
        countryListHTML += city(zambiaCityInfo[i]);
    }
}

