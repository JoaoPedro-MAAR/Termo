// Objective: create a keyboard component with dynamic keys
import { Clique_teclado_virtual } from "@/app/events/normalEvents.js";
import teclas from "@/app/model/keyboard.js";
import React from 'react';
const teclasAteP = teclas.slice(0, teclas.findIndex(tecla => tecla.id === 'p') + 1);
const teclasA_backspace = teclas.slice(teclas.findIndex(tecla => tecla.id === 'p') + 1, teclas.findIndex(tecla => tecla.id === 'backspace') + 1);
const resto_teclas = teclas.slice(teclas.findIndex(tecla => tecla.id === 'backspace') + 1);

const KeyboardComponent = () => {
  return (
    <div className="teclado">
      <div className="row">
      {teclasAteP.map((e) => (
        <button className="key" data-key={e.id} key={e.id} onClick={Clique_teclado_virtual}>
          {e.id}
        </button>
      ))}
      </div>
      <div className="row">
      {teclasA_backspace.map((e) => (
        <button className="key" data-key={e.id} key={e.id} onClick={Clique_teclado_virtual}>
          {e.icone}
        </button>
      ))}
      </div>
      <div className="row">
      {resto_teclas.map((e) => (
        <button className="key" data-key={e.id} key={e.id} onClick={Clique_teclado_virtual}>
          {e.id}
        </button>
      ))}
      </div>
    </div>
  );
};

export default KeyboardComponent;
