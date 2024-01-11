import React from "react";
import "../css/GestorTareas.css";
import ListaTareas from "./ListaTareas";

function GestorTareas (){
    return (
        <div className="contenedor-tareas">
            <h1>Mis tareas</h1>
            <ListaTareas />
        </div>
    );
}

export default GestorTareas;