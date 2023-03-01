let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName;
}

myHeading.textContent = 'Bonjour, monde !';
let iceCream = 'chocolat';
if (iceCream === 'chocolat') {
  alert("J'adore la glace au chocolat !");
} else {
  alert("Ooooh, mais j'aurais préféré au chocolat.");
}
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }
document.querySelector('html').addEventListener('click', function() {
    alert('Aïe, arrêtez de cliquer !!');
});

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'https://us.123rf.com/450wm/sergeyyy/sergeyyy1804/sergeyyy180400003/98558666-ic%C3%B4ne-de-caca-visage-surprise-%C3%A9motic%C3%B4ne-caca-isol%C3%A9-sur-fond-blanc.jpg') {
      myImage.setAttribute('src', 'https://www.shutterstock.com/image-vector/confused-poo-emoticon-emoji-poop-260nw-703004374.jpg');
    } else {
      myImage.setAttribute('src', 'https://us.123rf.com/450wm/sergeyyy/sergeyyy1804/sergeyyy180400003/98558666-ic%C3%B4ne-de-caca-visage-surprise-%C3%A9motic%C3%B4ne-caca-isol%C3%A9-sur-fond-blanc.jpg');
    }
});
function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
}

myButton.addEventListener('click', function() {
    setUserName();
});