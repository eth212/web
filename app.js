
// creating the typing effect
let target = document.getElementById("view");
let text = 'Hi, my name is Ethan and I am a Developer check';
let i=0;

function typer(){
  if(i==0){
    target.innerHTML = '<h1>';
  };
  if(0 < i < text.length - 1){
    let buffer = text.charAt(i);
    target.innerHTML +=  buffer ;
    i++;
    setTimeout(typer, 100);
  };
  if(i == text.length - 1){
    target.innerHTML += text.charAt(i) + '</h1>';
    i++;
    setTimeout(typer, 100);
  };
};
setTimeout(typer, 500);


let home = document.getElementById("home");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");
let resume = document.getElementById("resume");

function change(){
  box.style.backgroundColor = 'red';
};
function back(){
  box.style.backgroundColor = 'green';
};

function homefix(){
  home.style.fontWeight = 'bold';
};
