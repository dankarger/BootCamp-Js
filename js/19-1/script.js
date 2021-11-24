

    const start = document.querySelector('.start-here');
    // const start = document.getElementsByClassName('start-here')
    start.textContent = 'Main Title';
    console.log(start)
    start.nextElementSibling.firstElementChild.lastElementChild.insertAdjacentHTML("afterend", '<li>Sub Title4</li>')
    start.nextElementSibling.nextElementSibling.remove();
    start.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.textContent="Master of DOM"
    start.parentElement.nextElementSibling.firstElementChild.textContent="Something else"