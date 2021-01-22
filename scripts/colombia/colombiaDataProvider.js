let colombiaCities = [
    {
       city: "Barranquilla"
    },
    {
        city: "Medellin"
    },
    {
        city: "Bogota"
    }
];

let colombiaLandmarks = [
    {
        landmark: "Rosario Islands"
    },
    {
        landmark: "Cocora Valley"
    },
    {
        landmark: "Catedral de Sal"
    }
];

let colombiaCelebs = [
    {
        celeb: "J. Balvin"
    },
    {
        celeb: "Shakira"
    },
    {
        celeb: "Sofia Vergara"
    }
];

export function cities(){
    return colombiaCities.slice()
};

export function landmarks(){
    return colombiaLandmarks.slice()
};

export function celebs(){
    return colombiaCelebs.slice()
};