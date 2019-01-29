var toggle = document.getElementById("js-toggle");
var list = document.getElementById("list-js");

toggle.addEventListener("click", function() {
  toggle.classList.toggle("fa-bars-clicked");
  list.classList.toggle("active");
});

// toggle.addEventListener('click', function(){
//     if(list.style.display !=="flex"){
//        list.style.cssText= "display: flex; opacity: 1; transition: opacity 2s;";
//     }
//     else{
//         list.style.cssText= "display: none; opacity: 0";

//     }

// }
