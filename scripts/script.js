const menu = document.getElementById('mobile_menu');
        
function changeMenu(state) {
   if(state == 'close') {
         
         menu.style.display = 'none'
         
   } else {
         
         menu.style.display = 'flex'
         
   } 
   
}

window.addEventListener('resize', function() {
   var width = window.innerWidth;
   
   if(width > 920){
         menu.style.display = 'none'
   } 
   
});


// nao estamos usando, mas ele tem a funcao de executar um codigo quando a pagina carrega

// window.onload = function() {
//    var width = window.innerWidth;
   
//    if(width > 920){
//          menu.style.display = 'none'
//    } 
   
// };