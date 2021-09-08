window.onload = init;


function init(){
   var contactos = document.getElementById("btnMasky").addEventListener("click", btnMasky);
   var menu = document.getElementById("btnContactos").addEventListener("click", btnMenu)


}
function btnMasky(){

    location.href= "sobreNosotros.html";

}
function btnMenu(){
    
    location.href= "contactos.html";
}
