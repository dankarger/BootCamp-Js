const inputText = document.querySelector('input[type=number]')
const smileyDiv = document.querySelector('.smileyDiv')
const submitButton = document.querySelector('input[type=submit]')
let numberOfSmileys = 0;

submitButton.addEventListener('click', () => {
    smileyDiv.innerHTML = ''
    numberOfSmileys = inputText.value
    for (let i = 0; i < numberOfSmileys; i++) {
        smileyDiv.append('😃')
    }
})