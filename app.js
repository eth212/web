








let home = document.getElementById("home");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");
let resume = document.getElementById("resume");

function change(){
  box.style.backgroundColor = 'red';
}
function back(){
  box.style.backgroundColor = 'green';
}

let box = document.getElementById("box");
box.addEventListener('mouseover', change);
box.addEventListener('mouseout', back);
