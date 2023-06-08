import React, { useState } from 'react';
import '../CSS/Cadastro.css';
import cadastroGif from '../../components/Imagens/CadastroGif.gif';
import logoPokedex from '../../components/Imagens/logoPokedex.png';
import axios from 'axios';

function Cadastro() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            username: username,
            password: password,
            email: email
        };

        axios.get('http://127.0.0.1:8000/api/verificar-duplicidade/', { params: { email, username } })
            .then(response => {
                if (response.data.exists) {
                    let errorMsg = '';
                    if (response.data.duplicateEmail) {
                        errorMsg = 'Este email já está em uso.';
                    }
                    if (response.data.duplicateUsername) {
                        errorMsg = 'Este nome de usuário já está em uso.';
                    }
                    setErrorMessage(errorMsg);
                } else {
                    axios.post('http://127.0.0.1:8000/api/cadastro/', userData)
                        .then(response => {
                            console.log(response.data);
                            // Lógica adicional após o cadastro
                        })
                        .catch(error => {
                            console.error(error);
                            // Lógica para lidar com erros
                        });
                }
            })
            .catch(error => {
                console.error(error);
                // Lógica para lidar com erros
            });
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
                            <label className='cadastro cadastro-label' htmlFor="username">Nome de Usuário</label>
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
                                autoComplete="new-password"
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
                        <button className='btn-paginas' type="submit">Cadastrar</button>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
