// creating the typing effect
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
};
setTimeout(typer, 500);
