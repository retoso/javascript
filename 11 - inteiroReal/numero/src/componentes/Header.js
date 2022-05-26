import React from "react"
import Logo from './imgs/retoso.png'

export default function Corpo(){
    return(
        <header>
            <img className="imagem" src={Logo}/>
            <h1>Lista de exercicios</h1>
        </header>
    )
}
