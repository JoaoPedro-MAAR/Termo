import React from 'react';
import Link from 'next/link';

const ButtonComponent = () => {
    return (
        <div className="button-container">
            <Link href="/autenticacao/login">
                <button className="action-button">Login</button>
            </Link>
            <Link href="/autenticacao/registro">
                <button className="action-button">Registrar</button>
            </Link>
        </div>
    );
};

export default ButtonComponent;