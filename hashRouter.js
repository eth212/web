class IndexView {
  constructor(){
    window.addEventListener("hashchange", e => this.onRouteChange(e));
    this.slot = document.querySelector('#pageChange');
  }
  onRouteChange(e) {
    var target;
    const hashLocation = window.location.hash.substring(1);
    console.log(hashLocation);
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
