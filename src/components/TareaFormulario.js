import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../css/TareaFormulario.css";

function TareaFormulario(props) {

    const [input, setInput] = useState("");

    const actualizarInput = (e) => {
        setInput(e.target.value);
    }

    const enviarTarea = (e) => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        console.log("submit")
        props.onSubmit(tareaNueva);
    }

    return (
        <form className="form-tarea" onSubmit={enviarTarea}>
            <input type="text" placeholder="tarea..." name="texto" onChange={actualizarInput} />
            <input type="submit" value="crear" className="boton-form-tarea" />
        </form>
    );
}

export default TareaFormulario;