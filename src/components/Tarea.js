import React from "react";
import "../css/Tarea.css";
import { RxCrossCircled } from "react-icons/rx";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={`tarea-contenedor ${completada ? "tarea-completada" : ""}`}
            id={id}>
            <div className="tarea-texto"
                onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className="tarea-icono"
                onClick={() => eliminarTarea(id)}>
                <RxCrossCircled />
            </div>
        </div>
    );
}

export default Tarea;