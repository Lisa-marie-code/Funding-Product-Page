const body = document.querySelector("body");
const mobile = document.querySelector(".mobile-menu");
const modalContainer = document.querySelector(".modal-container");
const buttons = document.querySelectorAll("main .btn-primary");
const radioButtons = document.querySelectorAll(".modal input[type ='radio']");
const modalPledge = document.querySelector(".modal-pledge");
const close = document.getElementById(".close-modal");
const bookmark = document.querySelector(".bookmark input");
var bookmarkText = document.querySelector(".bookmark label span");
// modalCover = container



// Hamburger
function openMobile() {
  document.querySelector(".nav-list").classList.add("open");
  document.body.classList.add("overlay");
  mobile.removeEventListener("click", openMobile);
  mobile.addEventListener("click", closeMobile);
  console.log(mobile);
  mobile.childNodes[0].src = "./images/icon-close-menu.svg";
}
mobile.addEventListener("click", openMobile);

function closeMobile() {
  document.querySelector(".nav-list").classList.remove("open");
  document.body.classList.remove("overlay");
  mobile.removeEventListener("click", closeMobile);
  mobile.addEventListener("click", openMobile);
  mobile.childNodes[0].src = "./images/icon-hamburger.svg";
}




// MODAL
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", openModal);
}

function openModal(e) {
  if (e.target.id == "no-reward-btn") {
    let radiobtns = document.querySelectorAll(".card input[type='radio']");
    for (let i = 0; i < radiobtns.length; i++) {
      radiobtns[i].checked = false;
    }
    let pledgebox = document.getElementById("no-reward-card");
    clearPledgeBoxes();
    // pledgebox.classList.toggle("selected");
  }
  if (e.target.id == "bamboo-reward-btn") {
    let radiobtn = document.getElementById("bamboo-reward");
    radiobtn.checked = true;
    let pledgebox = document.getElementById("bamboo-reward-card");
    clearPledgeBoxes();
    pledgebox.classList.toggle("selected");
  }
  if (e.target.id == "blackedition-reward-btn") {
    let radiobtn = document.getElementById("blackedition-reward");
    radiobtn.checked = true;
    let pledgebox = document.getElementById("blackedition-reward-card");
    clearPledgeBoxes();
    pledgebox.classList.toggle("selected");
  }

  modalContainer.style.display = "grid";
  modalPledge.style.display = "block";
}




// radio pledges
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("change", radioPledge);
}

function radioPledge(e) {
if(e.target.id == "no-reward"){
    let pledgebox = document.getElementById("no-reward-card")
    clearPledgeBoxes();
    pledgebox.classList.toggle('selected');
}
if(e.target.id == "bamboo-reward"){
    let pledgebox = document.getElementById("bamboo-reward-card")
    clearPledgeBoxes();
    pledgebox.classList.toggle('selected');
}
if(e.target.id == "blackedition-reward"){
    let pledgebox = document.getElementById("blackedition-reward-card")
    clearPledgeBoxes();
    pledgebox.classList.toggle('selected');
}
}



// remove selected
function clearPledgeBoxes() {
    let pledgeBoxes = document.querySelectorAll(".card.selected");
    for (let i = 0; i < pledgeBoxes.length; i++) {
      pledgeBoxes[i].classList.remove("selected");
    }
  }




  // bookmark text
function bookmarked(){
    if(bookmark.checked){
        bookmarkText.innerHTML = "Bookmarked";
    }else{
        bookmarkText.innerHTML = "Bookmark";
    }
}
  bookmark.addEventListener('click',bookmarked);




  
//closes modal
  close.addEventListener("click", closeModal);
function closeModal() {
   modalContainer.style.display = "none";
}

