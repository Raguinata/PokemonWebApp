import '../CSS/Pokemons.css';
import React from 'react';
import Navbar from '../../components/Navbar';
import PokemonCard from '../../components/PokemonCard';
import { Box, Container, Grid } from '@mui/material';

const MinhaColecao = ({ meusPokemons }) => {
  return (
    <div className="pokemons pokemons-div-principal">
      <Navbar />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {meusPokemons.map((pokemon, key) => (
            <Grid item xs={12} sm={6} md={4} lg={2} xl={1} key={key}>
              <Box>
                <PokemonCard
                  name={pokemon.name}
                  image={pokemon.image}
                  types={pokemon.types}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MinhaColecao;