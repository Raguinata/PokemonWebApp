import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pokemons } from '../pages/Pokemons'
import { PerfilPokemon } from '../pages/PerfilPokemon'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import Erro from '../pages/Erro/Erro'
import AltSenha from '../pages/AltSenha/AltSenha'
import store from '../store'

export const Router = () => {
  const [pokemonData, setPokemonData] = useState();
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/*' element={<Erro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/alterarSenha' element={<AltSenha/>} />
        <Route path='/pokemons' element={<Pokemons setPokemonData={setPokemonData}/>} />
        <Route path='/perfilPokemon' element={<PerfilPokemon pokemonData={pokemonData}/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};
