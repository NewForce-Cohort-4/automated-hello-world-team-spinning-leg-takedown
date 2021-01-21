const cityCollection = ["Toronto", "Vancouver", "Montreal"
];

const landmarkCollection = ["Banff National Park", "Niagara Falls", "Hopewell Rocks"
];

const celebrityCollection = ["Seth Rogan", "Hayden Christensen", "Keanu Reeves"
];

export function useCity(){
    return cityCollection.slice()
};

export function useLandmark(){
    return landmarkCollection.slice()
};

export function useCelebrity(){
    return celebrityCollection.slice()
};