let numberOfSquares = 16;
let divNumber = 0;
let divMain = document.querySelector('.mainDiv');
let pola = document.querySelectorAll('pola');
let button = document.querySelector('button');
let numberOfResets = 0;
addDivs();

button.addEventListener('click', function (e) {
    removeMainDiv();
    addMainDiv();
    addDivs();
})

function removeMainDiv() {
    let body = document.querySelector('.napisPole');
    body.removeChild(divMain);
} 

function addMainDiv() {
    let body = document.querySelector('.napisPole');
    divMain = document.createElement('div');
    divMain.classList.add('mainDiv');
    body.appendChild(divMain);
    
}

function countingPixels() {
    let pixels = 960/numberOfSquares;
    return pixels;
}

function addDivs() {
    if(numberOfResets >= 1){
        let enteredNumber = Number(prompt('Podaj ilość pól w lini MAX = 100'));
            if(enteredNumber > 100 || enteredNumber < 0 || isNaN(enteredNumber)) {
                alert('Wprowadzona wartość nie miesci się w zakresie 1-100 lub nie jest numerem');
                return addDivs();
            } else if (enteredNumber === 0) {
                alert('Anulowano');
                return 0;
        };
        numberOfSquares = enteredNumber;
    }
    for (let i = 0; i < numberOfSquares; i++) {
        let divrow = document.createElement(`div`);
        divrow.classList.add(`divRow`);
        divrow.style.width = `${countingPixels()}px`;
        divrow.style.height = "960px";
        divMain.appendChild(divrow);

        for (let j = 0; j < numberOfSquares; j++) {
            let div = document.createElement('div');
            div.classList.add('pola');
            div.addEventListener("mouseenter", function (e) {
            div.classList.replace('pola', 'polaColor');
            })
            divrow.appendChild(div);
        };
        
        }
    numberOfResets += 1;
}

