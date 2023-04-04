//1

const arr1 = [1,2,3,4,5,6,7,8,9,10]
arr1.forEach(e => console.log(e))


//2

const week = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
console.log(week[0])


//3

const arr3 = [2,4,6,8,10]
let count = 0
arr3.forEach(e => count += e)
console.log(count)


//4

const fruits = ["Pêche", "Fraise", "Pomme", "Banane", "Kiwi"]
fruits.push("Orange")

console.log(fruits)


//5 

const notes = [
    [2,4,12,17],
    [7,10,4],
    [10,10,10,10],
    [8,10,12],
    [4,2,9,18,17,19]
]

let temp = 0

notes.forEach(student => {
    student.forEach(note => temp += note)
    
   console.log(temp / eleve.length)
    temp = 0
})

//6 

const birds = ["Pigeon", "Moineau"]

target = "Pigeon"

if (birds.includes(target)) {
    console.log(`${target} OK !`)
} else {
    console.log(`${target} NOT OK !`)
}


//7

const countries = ["France", "Espagne", "Italie"]
console.log(countries.map(country => country.toLowerCase()).sort())

//8 

const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai"]
console.log(months[2])

//9
const arr9 = []
for (let i = 0; i < 10; i++) arr9.push(Math.floor(Math.random() * 100))

console.log(Math.min(...arr8), Math.max(...arr8))

//10
const arr10 = [
    "Je suis une phrase",
    "Je suis une phrase un peu plus logue",
    "Je suis une phr",
    "Je suis unease",
    "Je su phrase",
    "Je suis eaezezaune phrase",
]


let strMaxLenght = ""
arr9.forEach(str => {
    if (str.length > strMaxLenght.length) {
        strMaxLenght = str
    }
})

console.log(strMaxLenght)