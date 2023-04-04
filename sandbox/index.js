//Exec avec Node [fichier]


console.log("la")

//variable a porter globale
var a = 12;

//
let b = 12;
const c = 12;

function maFunction(params) {
    return params * 2;
}

const maFunction = function (params) {
    return params * 2;
}

//Bonne facon
const maFunction = (params) => {
    return params * 2;
}

//return implicite
const maFunction = (params) => params * 2;

const maFunction = params => params * 2;

const test = setTimeout(() => {
    
}, timeout)








