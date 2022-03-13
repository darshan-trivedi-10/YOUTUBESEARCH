#!/usr/bin/env node
const opn = require('opn');
let inputArr = process.argv.slice(2);
// console.log(inputArr);

let mainLink = "https://www.youtube.com/results?search_query=";

let nSize = inputArr.length;
let join = "";
for (let i = 0; i < nSize; i++) {
    const element = inputArr[i];
    if (i == 0) {
        join = join + element;
    } else {
        join = join + "+" + element;
    }
}

console.log("Your Query : ", join," is Processing🤩");

mainLink = mainLink + join;
searchInYoutube(mainLink);

function searchInYoutube(url) {
    opn(url, { app: ['Chrome'] });

}