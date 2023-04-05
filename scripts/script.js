// let buttonRef = document.querySelector("#clickMe");

// function alertUser() {
//   alert("You Clicked!!!");
//   //   buttonRef.removeEventListener("click", alertUser);
// }

// // buttonRef.addEventListener("click", alertUser, { once: true });

// function changeBGPink() {
//   //   document.body.style.backgroundColor = "pink";
//   document.body.classList.add("pinkBG");
// }
// buttonRef.addEventListener("click", changeBGPink);

// function changeText() {
//   // if the button says "Click me !" change the textContent to Clicked!
//   if (buttonRef.textContent === "Click Me!") {
//     buttonRef.textContent = "Clicked!";
//   } else {
//     //else if it says "Clicked!" update it to "Click Me!"
//     buttonRef.textContent = "Click Me!";
//   }
// }
// buttonRef.addEventListener("click", changeText);

// function updateImage(event) {
//   console.log(event);
//   const image = document.querySelector("#shoppingCart");
//   image.setAttribute("src", "images/shopping-cart.png");
//   image.setAttribute("width", 50);
//   image.setAttribute("height", 50);
//   image.setAttribute("alt", "shopping cart icon");
// }
// buttonRef.addEventListener("click", updateImage);
//1. find the div
const buttonContainer = document.querySelector(".button-container");
//2. define changeBGGreen function
function changeBGGreen(event) {
    console.log("clicked")
  if (event.target.tagName === "BUTTON") {
    // event.target is the element that we clicked on
    // event.target.style.backgroundColor = "green"
    event.target.classList.add("greenBG");
  }
}
function changeTextColor(event){
  if (event.target.tagName ==="BUTTON"){
   
    event.target.style.color = event.target.textContent;
  }
}
function createButton(event){
  if (event.target.textContent === "click me!"){
    let clickMe = document.createElement("button");
    let para = document.createElement("p");
    para.textContent = "purple";
    clickMe.appendChild(para);
    buttonContainer.appendChild(clickMe);
    clickMe.textContent = "something";
  }
}
function AddNewElements(){
  //createElement x3 
  const NewButton = document.createElement("button");
  const newP = document.createElement("p");
  NewButton.addEventListener("mouseover", changeBGGreen);
  document.body.appendChild(newP);
  document.body.appendChild(NewButton);
  NewButton.textContent = "purple";
  newP.textContent = "something"
}
buttonContainer.addEventListener("mouseover", changeBGGreen);
buttonContainer.addEventListener("click", changeTextColor);
buttonContainer.addEventListener("click", AddNewElements);

