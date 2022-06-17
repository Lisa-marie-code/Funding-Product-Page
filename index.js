const body = document.querySelector('body')
const mobile = document.querySelector('.mobile-menu');
const modalContainer = document.querySelector('.modal-container');
const buttons = document.querySelectorAll('main .btn-primary');
// modalCover = container


// Hamburger
function openMobile(){
    document.querySelector('.nav-list').classList.add('open');
    document.body.classList.add('overlay');
    mobile.removeEventListener('click',openMobile);
    mobile.addEventListener('click',closeMobile);
    console.log(mobile);
    mobile.childNodes[0].src = "./images/icon-close-menu.svg"
}
mobile.addEventListener('click',openMobile)

function closeMobile(){
    document.querySelector('.nav-list').classList.remove('open');
    document.body.classList.remove('overlay')
    mobile.removeEventListener('click',closeMobile);
    mobile.addEventListener('click',openMobile);
    mobile.childNodes[0].src = "./images/icon-hamburger.svg"
}

// MODAL
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",openModal)
}

function openModal(){


    modalContainer.style.display = "grid";
}