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
    this.loadContent(hashLocation);

  }

  loadContent(uri){
    var contentUri = `${uri}.html`;
    console.log(contentUri);
    fetch(contentUri).then(r => r.text()).then(content => this.updateSlot(content));
  }

  updateSlot(content){
  this.slot.innerHTML = content;
  }

}
new IndexView();
