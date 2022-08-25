let fromRep = document.querySelector("form");
let cardRep = document.querySelector(".container");
let btnRep = document.querySelectorAll(".circle");
let submitRep = document.querySelector(".submit");

let selected;

btnRep.forEach((btn) => {
    btn.addEventListener('click' , (normalEvevnt) => {
        normalEvevnt.preventDefault();
        selected = btn.value;
          changer();
    })
})


function changer(){
  btnRep.forEach((btn) => {
      //remove all clasese defeault to chnage one of the sleleted coclor to orange
      btn.classList.remove("is-selected");
    
 
      if(btn.getAttribute("value") === selected){
          //add the class back
          btn.classList.add("is-selected") ;
     }
  })
}


fromRep.addEventListener('submit' , (res) => {
   res.preventDefault();

   document.querySelector("#btn").style.backgroundColor = "white";
   document.querySelector("#btn").style.color = "orange";
   document.querySelector("#btn").style.fontWeight = 900;

   setTimeout ((function(){  

    if(selected != undefined){ 

      cardRep.innerHTML = `<div class="Thanks">
        <img src="images/illustration-thank-you.svg" id="thanks-icon" alt="">
  
          <p class="results">You selected ${selected} out of 5</p>
  
          <h1>Thank You!</h1>
          <p>We appreciate you taking the time to give a rating if you ever need more support don't hesistate to get in touch</p>
        </div>`;
   }
    }), 1000)



})