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


    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id != id);
        // crea un nuevo array con la condicion de la funcion
        // dentro del filter. Se crea un array con todos menos
        // la tarea con el id que queremos eliminar

        setTareas(tareasActualizadas);
    }

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id == id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        }

        );

        setTareas(tareasActualizadas);
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
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}

                        />

                    })

                }

            </div>


        </>
    );
}

export default ListaTareas;