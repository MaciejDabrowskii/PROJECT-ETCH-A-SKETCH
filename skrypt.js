let numberOfSquares = 16;
let divNumber = 0;
let divMain = document.querySelector('.mainDiv');
function addDivs() {
    for (let i = 0; i < numberOfSquares; i++) {
        let divrow = document.createElement(`div`);
        divrow.classList.add(`divRow`);
        divrow.style.width = `${countingPixels()}px`;
        divrow.style.height = "960px";
        divMain.appendChild(divrow);

        for (let j = 0; j < numberOfSquares; j++) {
            let div = document.createElement('div');
            div.classList.add('pola');
            divrow.appendChild(div);
            divNumber =+ 1;

        };
        
        }
}
console.log(addDivs());

function countingPixels() {
    let pixels = 960/numberOfSquares;
    return pixels;
}