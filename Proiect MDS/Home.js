function schimba_culoarea(id){

    document.body.style.background=document.getElementById(id).innerHTML;
    document.getElementById('header').style.backgroundColor =
    "yellow";
}

setInterval(() => {
    console.log("Hi!");
}, 1000);



const cm = document.querySelector(".context_menu");

function showContextMenu(show = true) {
  cm.style.display = show ? "block" : "none";
}


window.addEventListener("contextmenu", e => {
    e.preventDefault();
    showContextMenu();
    cm.style.top = event.offsetY + "px";
    cm.style.left = event.offsetX + "px";
   
  });
  
  window.addEventListener("click", () => {
    showContextMenu(false);
  });
 
function myFunction(){
    location.reload();
}
function myFunction2(){
    window.history.back();}

function myFunction3(){
    document.body.style.backgroundColor =  "grey";
}

