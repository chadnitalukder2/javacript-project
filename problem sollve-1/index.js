//problem-1  ludu khelar guti 1-6 kivabe ashe
/*function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  console.log(getRndInteger(1,6));*/

//problem-2  kivabe alpabet onujaiye shajanu jay
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);*/

//problem-3
/*const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);*/

// problem-4 lip year
/*let num = parseInt(prompt("Enten a year"));
if((num % 4 === 0) && (num % 100 !== 0) || (num % 400 === 0) ){
  console.log(`${num} is a leap year`);
}
else{
  console.log(`${num} is not a leap year`);
}*/

//problem-5 vowel nirnoy
/*const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
function countVowels(sentence){
  let count = 0;
  const letters = Array.from(sentence);

  letters.forEach(function (value){
    if(vowels.includes(value)){
      count++
    }
  });
  return count;
}
console.log(countVowels("I love Bangladesh"));*/

// problem-6 find duplicate number
/*const numbers =[1, 2, 3, 4, 5, 6,9,5,5 ,4, 3, 5, 7, 8,8 ,8 ]
const duplicate = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index
});
console.log(duplicate);*/

//problem-7 nicher sentence kotogula same word ace and koto number gore 1st word ace

/*const sentence =
  " A paragraph is a series of sentences that are a organized and coherent, and are all a related to a single topic. Almost every piece of writing a you do that is longer than a few sentences should be organized into a paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.";

// const matches = sentence.match(/a/gi);
// const ocurances = matches.length;
// console.log(matches);
// console.log(ocurances);

const matches = sentence.match(/sumit/gi);
const ocurances = matches ? matches.length: 0;
console.log(ocurances);

// const position = sentence.search(/a/i);
// console.log(position);

let position = sentence.search(/sumit/i);
position = position >= 0 ? position : "not found!";

console.log(position);*/



