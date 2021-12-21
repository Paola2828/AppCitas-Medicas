
let formulario = document.getElementById('formulario');
let listarCita = document.getElementById('listarCita');
let buscar = document.getElementById('btnBuscar');
let busqueda = document.getElementById('busqueda');
let citas = [];

const capturaDatos = () => {
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;

   
   //Guarda cada unode los valores y los guard en un objeto 
    let registro = {
        nombre,
        fecha,
        hora,
        sintomas
    }
    // el unshift lo agrega al principio y con push lo agrega al final, se guarda en un array
    citas.unshift(registro);
    //console.log(citas);
    localStorage.setItem('citas',JSON.stringify(citas));
    //getLocalStorage();
    console.log('aqui')
  
}

formulario.addEventListener('submit', e => {
    e.preventDefault();
    // llamamos funcion capDatos donde se genera objeto con valores en input  
    capturaDatos();
    // una vez se genera evento submit con btn se borran los inputs
    e.target.reset()
    // llama funcion getLocal donde se crea historial de citas agendadas
    getLocalStorage()

})

 //cambia de string a objetocon JSON.parse
//recorrer el objeto con for each o con .map
//desestructurar el objeto

const getLocalStorage = () =>{

    listarCita.innerHTML = '';

   
    let citasLocalStorage = JSON.parse(localStorage.getItem('citas'));
    //console.log(citasLocalStorage);


    
      citasLocalStorage.map(cita => {  
         
           const {nombre,fecha,hora,sintomas} = cita;
           listarCita.innerHTML += `
           
                        <tr>
                             <td>${nombre}</td>
                             <td>${fecha}</td>
                             <td>${hora}</td>
                             <td>${sintomas}</td>
                        </tr>
                  
         `   
     })
 }






buscar.addEventListener('click', e => {
    e.preventDefault();
    let input = document.getElementById('inputBuscar').value;
    let data = JSON.parse(localStorage.getItem('citas'));
    let filtro = data.filter(cita => cita.nombre.toLowerCase()  === input.toLowerCase())
    busqueda.innerHTML = '';  
    console.log(filtro)  
   
     filtro.length === 0 ?
          busqueda.innerHTML += `<div style="color:white;">El nombre ${input} no existe</div>`
          :
          (
            filtro.map(cita => { 
                const {nombre,fecha,hora,sintomas} = cita;
                busqueda.innerHTML += `
                                    <div style="color:white;">${nombre}</div>
                                    <div style="color:white;">${fecha}</div>
                                    <div style="color:white;">${hora}</div>
                                    <div style="color:white;">${sintomas}
                                    <button>Borrar</Button></div><br>             
                `   
             })
          )
})

document.addEventListener('DOMContentLoaded', getLocalStorage);