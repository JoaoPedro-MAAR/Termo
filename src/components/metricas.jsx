import { useState } from "react";
import ProgressBar from "./progressbar";
import './metrica.css';

export default function Metricas({
    showMsgErro,
    msgErro,
    palavra,
    totalPartidas,
    pctWin, 
    pctTry1, 
    pctTry2, 
    pctTry3, 
    pctTry4, 
    pctTry5, 
    pctTry6
}) {
    
    function capitalizeFirstLetter(string) {
        if (!string) return string;
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return (
        <div>
            {showMsgErro? <p className="error-message">Erro: {msgErro}</p>:null}
            
            <h1 className="titulo">Palavra: {palavra.length===5?capitalizeFirstLetter(palavra):"-"}</h1>

            <h1 className="titulo">Total de Partidas: {totalPartidas}</h1>

            <h1 className="titulo">Vitorias: {pctWin}%</h1>

            <h1 className="titulo">Indice de Tentativas</h1>

            <ProgressBar percentual={pctTry1} nome="T1" />

            <ProgressBar percentual={pctTry2} nome='T2' />

            <ProgressBar percentual={pctTry3} nome='T3' />

            <ProgressBar percentual={pctTry4} nome='T4' />

            <ProgressBar percentual={pctTry5} nome='T5' />

            <ProgressBar percentual={pctTry6} nome='T6' />
        </div>
    );
}
