import React, { useState } from 'react';
import '../CSS/Login.css';
import pokemonLogin from '../../components/Imagens/PikachuLogin.gif';
import logoPokedex from '../../components/Imagens/logoPokedex.png'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para autenticação do usuário
    };

    return (
        <div className='login login-div-principal'>
            <div className='login login-div-direito'>
                <div className='login login-div-conteudo-direito'>
                    <img className='login login-img-pikachu' src={pokemonLogin} alt="Pikachu Login" />
                </div>
            </div>
            <div className='login login-div-esquerdo'>
            <img className='login login-img-logo-pokedex' src={logoPokedex} alt="Pikachu Login" />
                <div className='login login-div-conteudo-esquerdo'>
                
                    <form  onSubmit={handleSubmit}>
                        
                        <div className="login login-div-form">
                            <label className='login login-label' htmlFor="username">Username</label>
                            <input
                                className='login login-input'
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div  className="login-div-form">
                            <label className='login login-label' htmlFor="password">Senha</label>
                            <input
                                className='login login-input'
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
