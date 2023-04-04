//1

// const arr1 = [1,2,3,4,5,6,7,8,9,10]
// arr1.forEach(e => console.log(e))


//2

// const semaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
// console.log(semaine[0])


//3

// const arr3 = [2,4,6,8,10]
// let count = 0
// arr3.forEach(e => count += e)
// console.log(count)


//4

// const fruits = ["Pêche", "Fraise", "Pomme", "Banane", "Kiwi"]
// fruits.push("Orange")

// console.log(fruits)


//5 

// const note = [
//     [2,4,12,17],
//     [7,10,4],
//     [10,10,10,10],
//     [8,10,12],
// ]

// let temp = 0

// note.forEach(eleve => {
//     eleve.forEach(note => temp += note)
//         console.log(temp / eleve.length)
//         temp = 0
// })

//6 

const oiseaux = ["Pigeon", "Moineau"]

target = "Pigeon"

if (oiseaux.includes(target)) {
    console.log("Inclu")
} else {
    console.log("Pas inclu")
}