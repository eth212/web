class IndexView {
  constructor(){
    window.addEventListener("hashchange", e => this.onRouteChange(e));
    this.slot = document.querySelector('#pageChange');
  }
  onRouteChange(e) {
    const hashLocation = window.location.hash.substring(1);
    console.log(hashLocation);
    setTimeout(() => {
      console.log(hashLocation)}, 2000);
    //this.hoverIcon(hashLocation);
    this.loadContent(hashLocation);

  }

  loadContent(uri){
    if(uri == "home"){
      console.log("this is the home page")
    } else{
    var contentUri = `/pages/${uri}.html`;
    console.log(contentUri);
    fetch(contentUri).then(r => r.text()).then(content => this.updateSlot(content));
  }
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
