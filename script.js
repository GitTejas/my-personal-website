const h2 = document.createElement("h2");
h2.textContent = "Thank you for the inspiration!";

document.querySelector("body").appendChild(h2);

document.addEventListener("DOMContentLoaded", () => console.log("we are up!"));


const bPress = document.getElementById('wordz');
function clickAlert() {
  alert('YOU SHOWED LUV!');
}
bPress.onclick('click', clickAlert);
