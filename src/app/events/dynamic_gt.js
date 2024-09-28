/*import React, { useRef } from 'react';  
const pegar_grid_tentativas = () => { return gridRef.current; }
const gridRef = useRef(null);*/

import React, { useState } from 'react';

const GridComponent = ({blocos, Attbloco }) => {

  return (
    <>
      <div className="gridTentativas">
        {blocos.map(bloco => (
          <div 
            key={bloco.id} 
            className={bloco.className} 
            estadoatual={bloco.estadoatual} 
            dataletter={bloco.dataletter}
            >
            
          </div>
        ))}
      </div>
    </>
  );
};

export { GridComponent }; //, pegar_grid_tentativas};