import { useState } from 'react';
import Link from 'next/link';

const Registro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (senha !== confirmacaoSenha) {
            setError("As senhas não coincidem.");
            return;
        }
        
        
        const userData = JSON.parse(localStorage.getItem('users')) || [];
        userData.push({ nome, email, senha });
        localStorage.setItem('users', JSON.stringify(userData));

        alert('Usuário registrado com sucesso!');
        window.location.href = '/autenticacao/login'; 
    };

    return (
        <div>
            <h1 className="titulo">
                <Link className="linktitulo" href="/">Wordle PT-BR</Link>
            </h1>
            <div className="card">
                <h2 className="titulo-secundario">Registrar</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    </div>
                    <div>
                        <label>Confirmar Senha:</label>
                        <input type="password" value={confirmacaoSenha} onChange={(e) => setConfirmacaoSenha(e.target.value)} required />
                    </div>
                    <button type="submit">Registrar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p className="paragrafo">
                    Já tem uma conta?
                    <Link href="/autenticacao/login">Faça login aqui</Link>
                </p>
            </div>
        </div>
    );
};

export default Registro;
