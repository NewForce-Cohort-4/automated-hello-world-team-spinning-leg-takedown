//These three array hold the information for canada.html 
const cityCollection = ["Toronto", "Vancouver", "Montreal"
];

const landmarkCollection = ["Banff National Park", "Niagara Falls", "Hopewell Rocks"
];

const celebrityCollection = ["Seth Rogan", "Hayden Christensen", "Keanu Reeves"
];

// The functions below will export to canadaList.js so we can use the information and print it to the DOM
export function useCity(){
    return cityCollection.slice()
};

export function useLandmark(){
    return landmarkCollection.slice()
};

export function useCelebrity(){
    return celebrityCollection.slice()
};