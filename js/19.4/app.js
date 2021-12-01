const header = document.createElement('h1')
const card = document.createElement('div')
const subHeader = document.createElement('h3')
const mainSection = document.createElement('main')
let button = document.createElement('button')
button.innerHTML = 'Change Background'


button.addEventListener('click',()=>{
    document.body.classList.toggle('blue-background')
})

header.innerHTML = 'Hello'
subHeader.innerHTML = 'Bla Bla Bla'
const ulElement = document.createElement('ul')
ulElement.classList.add('blue-background')
ulElement.style.padding = '10rem'
ulElement.style.display="flex";
ulElement.style.justifyContent='center';


for(let i = 0; i < 5; i++){
    let li = document.createElement('li')
     li.innerHTML = `<li class="li-item">Item  ${i}</li>`
    li.style.color = i%2===0? 'white':'red';

    li.style.fontSize ="3rem";
    li.style.margin="2rem";
    li.style.fontFamily ='Verdana, sans-serif';
    ulElement.appendChild(li);
}

function injectText(element,text) {
    element.textContent= text
    console.log(element)
}

injectText(subHeader,'hiihiihi')
// injectText(header,'hhhhh')

// document.body.classList.add('light-background')
document.body.classList.add('flex-column')
document.body.prepend(header,subHeader,ulElement,button)