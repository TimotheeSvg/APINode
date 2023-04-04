const exo1 = (nbr1, nbr2) => {
    try {
        return parseInt(nbr1) + parseInt(nbr2);
    } catch (e) {
        return false
    }
}

const exo2 = (tab) => Math.max(...tab);

const exo3 = (str) => {
    ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'].forEach(element => str = str.replaceAll(element, ''))
}

const exo4 = (tab) => tab.sort()

const exo5 = (nbr) => {
    strChiffre = ["Un", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf"]
    strNombre = ["Onze", "Douze", "Treize", "Quatorze", "Quinze", "Seize", "dix-sept", "dix-huit", "dix-neuf"]
    strBase = ["Vingt", "Trente", "Quarante", "Cinquante", "Soixante", "Soixante-Dix", "Quatre-Vingt", "Quatre-Vingt-Dix"]

    dizaine = parseInt(nbr / 10)

    if (dizaine > 0) {
        base = nbr - dizaine * 10
        
        if (dizaine === 1) {
            return strNombre[base - 1]
        } else {
            if (dizaine !== 7 && dizaine !== 9) {
                return strBase[dizaine - 2] + '-' + strChiffre[base-1]

            } else {
                return strBase[dizaine - 2] + '-' + strChiffre[base-1]
            }
        }
    } else {
       return strChiffre[nbr - 1]
    }


}

const exo6 = (tab, key) => {
    let response = []

    tab.forEach(element => {
        response.push(element[key])    
    });

    return response
}

const exo7 = (tabNbr) => {
    return tabNbr.sort((a,b) => {return b - a})
}

const exo8 = (str) => {
    ['a', 'e', 'i', 'o', 'u'].forEach(element => str = str.replaceAll(element, element.toUpperCase()))
    
    return str
}

const exo9 = (str) => {
    let strLower = str.toLowerCase()

    return strLower.match(new RegExp("[aeiouAEIOU]", 'g')).length
}

const exo10 = (str) => {
    let voy = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let response = ''

    for(let i = 0; i < str.length; i++) {
        if (!voy.includes(str[i])) {
            response += str[i].toUpperCase()
        } else {
            response += str[i]
        }
    }

    return response
}

let str = "zadsqioezjfe"
let tabNbr = [1,2,4,32,3,4,5]
let tabStr = ["aez",'salut', 'bonjour', 'tu es', "lol"]
let tabTab = [
    {"test" : "test", "test2": "test2"},
    {"test" : "test", "test2": "test2"},
    {"test" : "test", "test2": "test2"},
    {"test" : "test", "test2": "test2"},
]

