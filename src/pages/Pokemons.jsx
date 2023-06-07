import './CSS/Pokemons.css';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PokemonCard from '../components/PokemonCard'
import { Box, Container, Grid, Skeleton } from '@mui/material'
import axios from 'axios'
import { Skeletons } from '../components/Skeletons/indes';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const Pokemons = ({ setPokemonData }) => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    getPokemons()
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 150; i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const pokemonFiltro = (name) => {
    var pokemonsFiltrados = [];
    if (name === "") {
      getPokemons();
    } else {
      const lowercaseName = name.toLowerCase(); // Converter para minúsculas
      for (var i in pokemons) {
        const pokemonName = pokemons[i].data.name.toLowerCase(); // Converter para minúsculas
        if (pokemonName.includes(lowercaseName)) {
          pokemonsFiltrados.push(pokemons[i]);
        }
      }
      setPokemons(pokemonsFiltrados);
    }
  }

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigate("/perfilPokemon");
  }

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 3500,
      },
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      <div className='pokemons pokemons-div-principal'>
        <Navbar pokemonFiltro={pokemonFiltro} />
        <Container maxWidth="false">
          <Grid container spacing={3}>
            {pokemons.length === 0 ? (
              <Skeletons />
            ) : (
              pokemons.map((pokemon, key) => (
                <Grid item xs={12} sm={6} md={4} lg={2} xl={1} key={key}>
                  <Box onClick={() => pokemonPickHandler(pokemon.data)}>
                    <PokemonCard
                      name={pokemon.data.name}
                      image={pokemon.data.sprites.front_default}
                      types={pokemon.data.types}
                    />
                  </Box>
                </Grid>
              ))
            )}
          </Grid>
        </Container>
      </div>
    </ThemeProvider>

  )
}
