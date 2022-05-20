import React from "react";

export default function Dados(props){
    return(
        <section>
            <p>Primeiro - {props.numeroUm}</p>
            <p>Segundo - {props.numeroDois}</p>
            <p>Terceiro - {props.numeroTres}</p>
        </section>
    )
    
}