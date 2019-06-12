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
