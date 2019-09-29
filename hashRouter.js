let target = document.getElementById("animation");
let text = 'Hey, Im ethan welcome to my website';
let i=0;
let e = 0;


function typer(){
  if(i==0){
    target.innerHTML = '<h1>';
  };
  if(0 < i < text.length - 1){
    if( e == 0){
      let buffer = text.charAt(i);
      target.innerHTML +=  buffer ;
      i++;
      setTimeout(typer, 75);
    }
  };
  if(i == text.length - 1){
    target.innerHTML += text.charAt(i) + '</h1>';
    i++;
    setTimeout(typer, 75);
  };
  return false;
};
window.addEventListener("load", () => {typer()});
window.addEventListener("load", () => {
  window.location.href = "#home";
});
window.addEventListener("hashchange", () => {
  e += 1;
});
window.addEventListener("beforeload", () => {
  window.scrollTo(0, 0);
})

class IndexView {
  constructor(){
    window.addEventListener("hashchange", e => this.onRouteChange(e));
    this.slot = document.getElementById("display");
    window.scrollTo(0, 0);
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
