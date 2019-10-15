// Scope Exercises
// Some software developers were contracted to build some code, but there weren't quite clear yet on how scope works. Your job is to fix their code to stop all the errors from being thrown.

// // C is for Cookie
// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

// for (let x = 0; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }


// // Conjunction Function
// const conjunction = function (firstWord, secondWord) {
//     return `${firstWord} ${secondWord}`
// }

// const conjoinedWord = conjunction("Master", "Card")
// console.log(conjoinedWord)



// Mod Squad
// const ModSquad = {
//     "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//     "series": {
//         "start": "1968",
//         "end": "1973"
//     }
// }

// let HTMLRepresentation = `<h1>The Mod Squad</h1>`

// ModSquad.members.forEach(member => {
//     HTMLRepresentation += `<div>${member}</div>`
// })

// const modDiv = document.querySelector("#mod-container")
// const infoDiv = document.createElement('div')
// infoDiv.className = "show-info"
// modDiv.appendChild(infoDiv)
// console.log(document.querySelector(".show-info").innerHTML = HTMLRepresentation)



// Simon Says
// There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalidLocations = 0

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        invalidLocations += 1
        console.log("This location is invalid")
    }

}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${invalidLocations} invalid locations`)