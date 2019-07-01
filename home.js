let target = document.getElementById("typing");
let text = 'Hi, my name is Ethan and I am a Developer';
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
  return false;
};
var typeEffect = setTimeout(typer, 500);

function changer(){
  target.innerHTML = 'ehsuhglsfdihguidfshglifdshgiludh';
  return false;
}


let navHome = document.getElementById("Home");
let navAbout = document.getElementById("About");
let navProjects = document.getElementById("Projects");
let navContact = document.getElementById("Contact");

function displayName(element, word){
  element.innerHTML = 'word';
}
function displayIcon(element, icon){
  element.innerHTML = `<i class="fa fa-${icon}" ></i>`;

}


window.addEventListener('mouseover', displayName(navHome, 'home'));
window.addEventListener('mouseout', displayIcon(navHome, 'home'));
window.document.onload = typer();
