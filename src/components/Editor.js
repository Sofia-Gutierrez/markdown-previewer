import React, { useState } from "react";
import "../assets/css/Editor.css";
import ReactMarkdown from 'react-markdown';

function Editor() {

    const defaultValue = ("# Bienvenido a mi 'Markdown Previewer'\n## aqui puedes ver tu texto con lenguaje markdown \n**Markdown** es una forma sencilla de agregar formato a textos en la web y funciona incorporando algunos caracteres a nuestro contenido.\n\nPuedes poner [links](https://sofia-gutierrez-portfolio.vercel.app/)\n\n> Una cita en bloque!\n\nCodigo en linea ``<div></div>``\n```\n//Codigo en bloque\n\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n}\n}\n```\n- Una lista\n  - Desordenada\n    - Con distintos niveles\n \n **Texto  en negrita**   \n\nTambien puedes poner imagenes: \n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n Puedes investigar mas aquí: [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)");

    const [ editor, setEditor ] = useState(defaultValue);

    const addText = txt => {
        const text = txt.target.value;
        setEditor(text)
    };
    

    return(
        <div className="markdown-previewer">
            <div className="editor-container">
                <h2 className="editor-header">Editor</h2>
                <textarea id="editor" onChange={addText} defaultValue={defaultValue}></textarea>
            </div>
            <div className="previewer-container">
                <h2 className="previewer-header">Previewer</h2>
                <div id="preview"><ReactMarkdown>{editor}</ReactMarkdown></div>
           </div>
        </div>
    )
}

export default Editor;