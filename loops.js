// a program that 
const groupA = ['James', 'Mark', 'Mary'];
const groupB = ['Agness', 'Chibuike', 'Anthony'];
const venue = ['Kilinmanjaro', 'Chiken Republic', 'Malt-Ice', 'Kainji Ressort', 'Columbus Island'];
const date = Date()
// const randVenue = venue[Math.floor(Math.random()* venue.length)];

let text = '';
let x;

// a method that returns a formatted statemeent of persons going on a date at a random venue
function getDate(group) {
    for(x = 0; x<groupA.length; x++){
        text += `${group[x]} will be going on a dinner date at ${venue[Math.floor(Math.random()* venue.length)]}, at ${Date()} \n\n`;
    }
    // return document.getElementById('root').innerHTML = text;
    return text
}
console.log(getDate(groupA));
console.log(getDate(groupB));