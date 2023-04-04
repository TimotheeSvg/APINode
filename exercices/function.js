const ex1 = (nbr1, nbr2) => {
    return parseInt(nbr1) + parseInt(nbr2)
}

const exo2 = (arr) => Math.max(...arr)

const exo3 = (str) => {
    ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'].forEach(element => str = str.replaceAll(element, ''))
}

const exo4 = (arr) => arr.sort()

const exo5 = (nbr) => {
    strDecimal = ["Un", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf"]
    strDecimal2 = ["Onze", "Douze", "Treize", "Quatorze", "Quinze", "Seize", "dix-sept", "dix-huit", "dix-neuf"]
    strDecimalBase = ["Vingt", "Trente", "Quarante", "Cinquante", "Soixante", "Soixante-Dix", "Quatre-Vingt", "Quatre-Vingt-Dix"]

    tensDecimal = parseInt(nbr / 10)

    if (dizaine > 0) {
        base = nbr - tensDecimal * 10
        
        if (tensDecimal === 1) {
            return strDecimal2[base - 1]
        } else {
            if (dizaine !== 7 && dizaine !== 9) {
                return strDecimalBase[tensDecimal - 2] + '-' + strDecimal[base-1]

            } else {
                return strDecimalBase[tensDecimal - 2] + '-' + strDecimal[base-1]
            }
        }
    } else {
       return strDecimal[nbr - 1]
    }


}

const exo6 = (arr, key) => {
    let response = []

    arr.forEach(element => {
        response.push(element[key])    
    });

    return response
}

const exo7 = (arrNbr) => {
    return arrNbr.sort((a,b) => {return b.toLowerCase() - a.toLowerCase()})
}

const exo8 = (str) => {
    ['a', 'e', 'i', 'o', 'u'].forEach(element => str = str.replaceAll(element, element.toUpperCase()))
    
    return str
}

const exo9 = (str) => {
    let strLower = str.toLowerCase()

    return strLower.match(new RegExp("[aeiou]", 'g')).length
}

const exo10 = (str) => {
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let response = ''

    for(let i = 0; i < str.length; i++) {
        if (!vowel.includes(str[i])) {
            response += str[i].toUpperCase()
        } else {
            response += str[i]
        }
    }

    return response
}


