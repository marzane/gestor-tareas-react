import React from "react";
import "../css/Tarea.css";
import { RxCrossCircled } from "react-icons/rx";

function Tarea({ texto }) {
    return (
        <div className="tarea-contenedor">
            <div className="tarea-texto">
                {texto}
            </div>
            <div className="tarea-icono">
                <RxCrossCircled />
            </div>
        </div>
    );
}

export default Tarea;