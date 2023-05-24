import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pokemons } from '../pages/Pokemons'
import { PerfilPokemon } from '../pages/PerfilPokemon'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import Erro from '../pages/Erro/Erro'

export const Router = () => {
  const [pokemonData, setPokemonData] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/*' element={<Erro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/pokemons' element={<Pokemons setPokemonData={setPokemonData}/>} />
        <Route path='/perfilPokemon' element={<PerfilPokemon pokemonData={pokemonData}/>} />
      </Routes>
    </BrowserRouter>
  );
};
