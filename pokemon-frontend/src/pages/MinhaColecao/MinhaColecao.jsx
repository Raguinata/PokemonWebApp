import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCollection } from '../../store/index';
import '../CSS/Pokemons.css';
import Navbar from '../../components/Navbar';
import PokemonCard from '../../components/PokemonCard';
import { Box, Container, Grid } from '@mui/material';
import { Skeletons } from '../../components/Skeletons/index';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const MinhaColecao = () => {
  const collection = useSelector((state) => state.collection);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCollection = localStorage.getItem('collection');
    if (storedCollection) {
      const parsedCollection = JSON.parse(storedCollection);
      dispatch(loadCollection(parsedCollection));
    }
  }, [dispatch]);


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
        <Navbar pokemonFiltro={() => {}} /> {/* Adicionei uma função vazia para evitar erros */}
        <Container maxWidth="false">
          <Grid container spacing={3}>
            {collection.length === 0 ? (
              <Skeletons />
            ) : (
              collection.map((pokemon, index) => (
                <Grid item xs={12} sm={6} md={4} lg={2} xl={1} key={index}>
                  <Box onClick={() => {}}>
                    <PokemonCard
                      name={pokemon.name}
                      image={pokemon.image}
                      types={pokemon.types}
                    />
                  </Box>
                </Grid>
              ))
            )}
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default MinhaColecao;
