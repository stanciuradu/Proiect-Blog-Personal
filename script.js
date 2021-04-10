const button= document.getElementById('Button');
function changeColor(){
  button.style.background='blue';
  button.style.width='166px';
  button.style.border='2px solid red';
}
button.addEventListener('mouseover',changeColor);
