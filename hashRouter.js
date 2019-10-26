let target = document.getElementById("display");
let anim = document.getElementById("animation");
let list = document.getElementById("list");
let text = ' Hey,  Im  ethan  welcome  to  my  website';
let i=0;
let e = 0;
let timer = false;

var scrollTop = function() {
    window.scrollTo(0, 0);
};

// make non recursive
function typer(){
  if(i==0){
    anim.classList.add("title");
    anim.innerHTML = '<h1>';
  };
  if(0 < i < text.length - 1){
    if( e == 0){
      let buffer = text.charAt(i);
      anim.innerHTML +=  buffer ;
      i++;
      setTimeout(typer, 75);
    }
  };
  if(i == text.length - 1){
    anim.innerHTML += text.charAt(i) + '</h1>';
    i++;
    setTimeout(typer, 75);
  };
  return false;
};


function placeLetter(letter){
   anim.innerHTML += letter;
};


window.addEventListener("load", () => {
  window.location.href = "#home";
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("load",()=> {
  fetch("/pages/home.html").then( r => r.text()).then(content => target.innerHTML += content);
});

window.addEventListener("load", () => {
  typer();
});



class IndexView {
  constructor(){
    window.addEventListener("hashchange", e => this.onRouteChange(e));
    this.slot = document.getElementById("display");
    scrollTop;
  }
  onRouteChange(e) {
    var target;
    const hashLocation = window.location.hash.substring(1);
    console.log(hashLocation);

    let animation = document.getElementById("animation")
    animation.innerHTML = "<h1>" + hashLocation + "<h1>";
    animation.classList.add("uri")
  //  target = document.getElementById(hashLocation);
    //setTimeout(() => {target.classList.add("clicked")},20 )

    //this.hoverIcon(hashLocation);

    this.loadContent(hashLocation);

  }

  loadContent(uri){
    var contentUri = `/pages/${uri}.html`;
    fetch(contentUri).then(r => r.text()).then(content => this.updateSlot(content));

  }



  updateSlot(content){
  this.slot.innerHTML = content;
  }

  /*hoverIcon(uri){
    var element = document.getElementById(uri);
    element.classList.add(".intro ul li:hover span");
  } */

}
new IndexView();
