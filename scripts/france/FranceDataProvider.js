
const cityCollection = ["Paris", "Marseille", "Lyon"];

const celebrityCollection = ["Napoleon Bonaparte", "Louis Vitton", "Coco Chanel"];

const landmarkCollection = ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"];


export function useCityCollection() {
  return cityCollection.slice();
}

export function useCelebrityCollection() {
  return celebrityCollection.slice();
}

export function useLandmarkCollection() {
  return landmarkCollection.slice();
}








