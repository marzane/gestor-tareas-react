import React, { useState } from "react";
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";
import "../css/ListaTareas.css";

function ListaTareas() {

    const [tareas, setTareas] = useState([]);

    const añadirTarea = (tarea) => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }


    return (
        <>
            <TareaFormulario onSubmit={añadirTarea} />
            <div className="lista-tareas">
                {
                    tareas.map(tarea => {
                        return <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}

                        />

                    })

                }

            </div>


        </>
    );
}

export default ListaTareas;