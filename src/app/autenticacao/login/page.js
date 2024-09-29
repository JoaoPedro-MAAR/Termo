import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = JSON.parse(localStorage.getItem('users')) || [];
        const usuario = userData.find(user => user.email === email && user.senha === senha);

        if (usuario) {
            setSuccessMessage('Login realizado com sucesso!');
            setError(null);
            window.location.href = '/'; 
        } else {
            setError('Credenciais incorretas.'); 
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <h1 className="titulo">
                <Link className="linktitulo" href="/">Wordle PT-BR</Link>
            </h1>
            <div className="card">
                <h2 className="titulo-secundario">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    </div>
                    <button type="submit">Login</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                <p className="paragrafo">
                    Não tem uma conta?
                    <Link href="/autenticacao/registro">Cadastre-se aqui</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
