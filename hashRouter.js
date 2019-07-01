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
    if(hashLocation == 'home'){
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


    }
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
