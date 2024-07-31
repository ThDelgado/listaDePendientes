var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]


document.addEventListener("DOMContentLoaded", function(){
    const verFormulario = document.getElementById("verFormulario");
    const formulario = document.getElementById("formulario");
    const tareaBtn = document.getElementById("tareaBtn");
    const nuevaTarea = document.getElementById("nuevaTarea");
    const tablaTarea = document.querySelector("#tablaTareas");

    //mostrar formulario

    verFormulario.addEventListener("click", function(){
        if(formulario.style.display === "none"){
            formulario.style.display = "block";
            verFormulario.textContent = "Ocultar formulario";
        }else{
            verFormulario.textContent = "Mostrar Formulario"
        }
    });

    //agregar tarea

    verFormulario.addEventListener("click", function(){
        const textoTarea = nuevaTarea.value.trim();
        
        if(textoTarea === ""){
            alert("Ingresa una tarea");
            return;
        }
        
        const lineaTabla = document.createElement("tr");
         lineaTabla.innerHTML = '<td>"${textoTarea}"</td><td ><button class="borrarTarea">Finalizar</button></td>';

            tablaTarea.appendChild(lineaTabla);
            nuevaTarea.value = "";

            lineaTabla.querySelector(".borrarTarea").addEventListener("click", function(){
                lineaTabla.remove();
            });

    });
});