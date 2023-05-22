import React, { useState } from 'react';
import '../CSS/Cadastro.css';
import cadastroGif from '../../components/Imagens/CadastroGif.gif';
import logoPokedex from '../../components/Imagens/logoPokedex.png';

function Cadastro() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para autenticação do usuário
    };

    return (
        <div className='cadastro cadastro-div-principal'>
            <div className='cadastro cadastro-div-direito'>
                <div className='cadastro cadastro-div-conteudo-direito'>
                    <img className='cadastro cadastro-img' src={cadastroGif} alt="Pikachu Login" />
                </div>
            </div>
            <div className='cadastro cadastro-div-esquerdo'>
                <img className='cadastro cadastro-img-logo-pokedex' src={logoPokedex} alt="Pikachu Login" />
                <div className='cadastro cadastro-div-conteudo-esquerdo'>
                    <form onSubmit={handleSubmit}>
                        <div className="cadastro cadastro-div-form">
                            <label className='cadastro cadastro-label' htmlFor="username">Username</label>
                            <input
                                className='cadastro cadastro-input'
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="cadastro-div-form">
                            <label className='cadastro cadastro-label' htmlFor="password">Senha</label>
                            <input
                                className='cadastro cadastro-input'
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="cadastro-div-form">
                            <label className='cadastro cadastro-label' htmlFor="email">Email</label>
                            <input
                                className='cadastro cadastro-input'
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;