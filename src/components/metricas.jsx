import { useState } from "react";

export default function Metricas({
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
    return (
        <div>
            <h1 className="titulo">Palavra: {palavra.length===5?palavra:"-"}</h1>

            <h1 className="titulo">Total de Partidas: {totalPartidas}</h1>

            <h1 className="titulo">Vitorias: {pctWin}%</h1>

            <h1 className="titulo">No 1º chute: {pctTry1}%</h1>

            <h1 className="titulo">No 2º chute: {pctTry2}%</h1>

            <h1 className="titulo">No 3º chute: {pctTry3}%</h1>

            <h1 className="titulo">No 4º chute: {pctTry4}%</h1>

            <h1 className="titulo">No 5º chute: {pctTry5}%</h1>

            <h1 className="titulo">No 6º chute: {pctTry6}%</h1>
        </div>
    );
}
