let target = document.getElementById("animation");
let text = 'Hey, Im ethan welcome to my website';
let i=0;

function typer(){
  if(i==0){
    target.innerHTML = '<h1>';
  };
  if(0 < i < text.length - 1){
    let buffer = text.charAt(i);
    target.innerHTML +=  buffer ;
    i++;
    setTimeout(typer, 75);
  };
  if(i == text.length - 1){
    target.innerHTML += text.charAt(i) + '</h1>';
    i++;
    setTimeout(typer, 75);
  };
  return false;
}


window.document.onload = typer();
