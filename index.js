const body = document.querySelector("body");
const mobile = document.querySelector(".mobile-menu");
const modalContainer = document.querySelector(".modal-container");
const buttons = document.querySelectorAll("main .btn-primary");
const radioButtons = document.querySelectorAll(".modal input[type ='radio']");
const modalPledge = document.querySelector(".modal-pledge");
const close = document.getElementById(".close-modal");
const bookmark = document.querySelector(".bookmark input");
const bookmarkText = document.querySelector(".bookmark label span");
const pledgeButtons = document.querySelectorAll(".pledge button");
const amountBacked = 89914;
const backers = 5007;
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



//pledgeSubmit
for(let i = 0; i < pledgeButtons.length; i++){
  pledgeButtons[i].addEventListener('click',submitPledge)
}
function submitPledge(e){
if(validateAmount(true)){
  let rewardLeft = document.querySelectorAll(".rewards .amount-left");
  if(e.target.id == "pledge1submit"){
    let addedAmount = e.target.previousElementSibing.childNodes[1].value;
    backers++;
    updateBackers(addedAmount,backers);
  }
  if(e.target.id == "pledge2submit"){
    let addedAmount = e.target.previousElementSibing.childNodes[1].value;
    backers++;
    rewardLeft[0].innerHTML = Number(rewardLeft[0].innerHTML) - 1;
  }
}
}



///update backers
function updateBackers(amount,backers){
  amountBacked += Number(amount);
  document.querySelector(".amount .number span").innerHTML = amountBacked.toLocaleString("en-US");
  if(amountBacked <= 100000){
    document.querySelector(".progress").style.width = "calc(" + String(amountBacked) + " / 100000 * 100%)"
   }else{
    document.querySelector(".progress").style.width = "100%";
   }
   document.querySelector(".backers .number").innerHTML = backers.toLocaleString("en-US");
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



//validate Form
function validateAmount(){
  let pledgevalid2 = document.getElementById("pledge2").value;
  let pledgevalid3 = document.getElementById("pledge3").value;
  if(pledgevalid2 == null || pledgevalid2 < 25){
    alert("Pledge must be $25 or higher");
    return false;
  }
  if(pledgevalid3 == null || pledgevalid3 < 75){
    alert("Pledge must be $75 or higher");
    return false;
  }else{
    return true;
  }

}

//closes modal
  close.addEventListener("click", closeModal);
function closeModal() {
   modalContainer.style.display = "none";
}

