let zambiaCityInfo = ["Lusaka", "Kitwe", "Ndola"];

let zambiaLandmarkInfo = [
  "Victoria Falls",
  "Kafue National Park",
  "Kariba Dam",
];

let zambiaCitizenInfo = [
  "Thokozile Muwamba",
  "Wilbur A. Smith",
  "Robert Earnshaw",
];

export function useCityCollection(){
    return zambiaCityInfo.slice();
}

export function useLandmarkInfo(){
    return zambiaLandmarkInfo.slice()
}


export function useCitizenInfo(){
    return zambiaCitizenInfo.slice()
}
