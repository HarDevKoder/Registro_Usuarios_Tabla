'use strict';
// Funcion que difiere la carga del cóigoJS
function downloadJSAtOnload() {
    // Creamos un array vacío para guardar los registros realizados
    const datos=[];
    // capturamos el evento click del boton
    document.getElementById('btnRegistrar').addEventListener('click',()=>{
        // Creamos el constructor de objetos
        function Registro(nombre,edad){
            this.nombre=nombre;
            this.edad=edad;
        }
        // Referenciamos los delementos del Formulario
        const nombre=document.getElementById('txtNombre').value;
        const edad=document.getElementById('txtEdad').value;
        const formulario=document.getElementById('formulario');
        // tbody para escribir los resultados
        const resultados=document.getElementById('resultados');
        // Instaciamos un objeto
        const persona=new Registro(nombre,edad);
        // Guardamos cada objeto generado en el array
        datos.push(persona);
        // Adicionamos los elementos del array a la tabla
        resultados.innerHTML+=`<tr><td>${nombre}</td><td>${edad}</td></tr>`;
        formulario.reset();
    })
}

if (window.addEventListener)
    window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
