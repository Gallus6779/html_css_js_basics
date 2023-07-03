let myHeading;

myHeading = document.querySelector('h1');

myHeading.textContent = 'Bonjour tout le monde !';

let arrayOfValue = ['Taleau 1', 'Tableau 2', 'Tableau 3'];


for(i=0; i<=2; i++){
  let ulLlist;
  ulLlist = document.querySelector('.list' + i);

  ulLlist.textContent = arrayOfValue[i];
}

/*
1- Commentaires pour
plusiuers lignes
*/

// 2- Commentaire sur une seule ligne

// tester les conditions
let variableTest = 5;

// === : strictement egale (Reponses false)
console.log(variableTest === 4);
console.log(variableTest === '5');

console.log(variableTest === 5); // (Reponse true)

// !== : Strictement different (Reponse false)
console.log(variableTest !== 5);

// ! : Negation (Reponse true)
console.log(!(variableTest !== 5));

