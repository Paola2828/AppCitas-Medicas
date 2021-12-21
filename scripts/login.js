

 const user = document.getElementById('usuario');
 const pass = document.getElementById('password');
 const form = document.getElementById('form');
 const parrafo = document.getElementById('warning');


 form.addEventListener('submit', e => {
     e.preventDefault();

    

     if (user.value == "Maria" && pass.value == "4444") {
        
         window.location= "index.html";
         
     }
   
     else{
         parrafo.innerHTML = `El nombre o la contraseña no es valido <br>`
        }
 })

