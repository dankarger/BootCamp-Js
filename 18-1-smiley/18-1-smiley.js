
const inputText = document.querySelector('input[type=number]')
const smileyDiv = document.querySelector('.smileyDiv')
constsubmitButton = document.querySelector('input[type=submit]')

let numberOfSmileys = 0;

constsubmitButton.addEventListener('click',()=>{
    smileyDiv.innerHTML = ''
    numberOfSmileys = inputText.value
    for(let i=0;i<numberOfSmileys;i++) {
        smileyDiv.append('😃')
    }
})