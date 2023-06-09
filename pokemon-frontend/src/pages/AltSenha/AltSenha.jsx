import React, { useState } from 'react';
import '../CSS/AltSenha.css';
import altSenhaGif from '../../components/Imagens/AltSenhaGif.gif'
import logoPokedex from '../../components/Imagens/logoPokedex.png';
import axios from 'axios';

function AltSenha() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password,
            password2: password2
        };

        axios.post('http://127.0.0.1:8000/api/alterar-senha/', userData)
            .then(response => {
                // Senha alterada com sucesso
                console.log(response.data.message);
                setErrorMessage('');
            })
            .catch(error => {
                // Erro ao alterar a senha
                if (error.response && error.response.data && error.response.data.message) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage('Ocorreu um erro ao processar a solicitação.');
                }
            });
    };

    return (
        <div className='altSenha altSenha-div-principal'>
            <div className='altSenha altSenha-div-direito'>
                <div className='altSenha altSenha-div-conteudo-direito'>
                    <img className='altSenha altSenha-img' src={altSenhaGif} alt="Snorlax altSenha" />
                </div>
            </div>
            <div className='altSenha altSenha-div-esquerdo'>
                <img className='altSenha altSenha-img-logo-pokedex' src={logoPokedex} alt="Pikachu Login" />
                <div className='altSenha altSenha-div-conteudo-esquerdo'>
                    <form onSubmit={handleSubmit}>
                        <div className="altSenha altSenha-div-form">
                            <label className='altSenha altSenha-label' htmlFor="email">Email</label>
                            <input
                                className='altSenha altSenha-input'
                                type="text"
                                id="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="altSenha-div-form">
                            <label className='altSenha altSenha-label' htmlFor="password">Senha</label>
                            <input
                                className='altSenha altSenha-input'
                                type="password"
                                autoComplete="new-password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="altSenha-div-form">
                            <label className='altSenha cadastro-label' htmlFor="password">Repita a senha</label>
                            <input
                                className='altSenha altSenha-input'
                                type="password"
                                id="password2"
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
                            />
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button className='btn-paginas' type="submit">Alterar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AltSenha;
