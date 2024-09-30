import React from 'react';
import Link from 'next/link';
import { Quit } from './events/normalEvents';

const ButtonComponent = () => {
    return (
        <div className="button-container">

            <Link href="/estatisticas">
                <button className="action-button">Estatisticas</button>
            </Link>
                <button className="action-button" onClick={Quit}>Sair</button>
            
        </div>

    );
};

export default ButtonComponent;