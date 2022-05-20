import React from 'react'
import './App.css'
import Corpo from './componentes/Corpo'
import Header from './componentes/Header'
import Dados from './componentes/Dados'

export default function App(){
  return(
    <>
    <Header/>
    <Corpo/>
    <Dados numeroUm=' numero : ' numeroDois=' numero : ' numeroTres=' numero : '/>
 
    </>
  )
}
