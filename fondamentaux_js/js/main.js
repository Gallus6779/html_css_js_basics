// let myHeading;

// myHeading = document.querySelector('h1');

// myHeading.textContent = 'Bonjour tout le monde !';

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


// Structures conditionnelles

// let iceCream = 'chocolat';
// if (iceCream === 'chocolat') {
//   alert("J'adore la glace au chocolat !");
// } else {
//   alert("Ooooh, mais j'aurais préféré au chocolat.");
// }


function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

console.log(multiply(3,6));

// Evenement
// document.querySelector('html').addEventListener('click', function() {
//   alert('Aïe, arrêtez de cliquer !!');
// });

// Faire un exercice : Realiser la liste suivante constituée de 5 lignes
/**
 * Titre : Liste des meilleurs fruits de la region du Littoral
 * 1 - Pasteques
 * 2 - Oranges
 * 3 - Ananas
 * 4 - Citrons
 * 5 - Pamplemousse
 * 
 * Au click de l'element de la liste, le texte de ce dernier prend la couleur rouge
 */

// function changeToRedColor(selecteur){
//   let line = document.querySelector(selecteur).addEventListener('click', function(){
//     line.
//   });
  // line.add
// }

const btn = document.getElementById('liste');

btn.addEventListener('click', function onClick(event) {
  // Change text color for clicked element only
  event.target.style.color = 'salmon';
  // alert(event.target.html.value);
  console.log(event.target.style);
});

// Booster mon page
let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Mozilla est cool, ' + myName;
}


if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Mozilla est cool, ' + storedName;
}

myButton.addEventListener('click', function() {
  setUserName();
});

