import './style.css'
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PokemonLogo from './Imagens/LogoPokemon.png'
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    display: 'flex', // Adicionado
    alignItems: 'center', // Adicionado
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0, // Adicionado
    left: 0, // Adicionado
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Navbar({ pokemonFiltro, esconderPesquisa }) {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <Box className='navbar-conteudo'>
                        <a href='/'>
                            <Box component="img" src={PokemonLogo} height="3em" />
                        </a>
                        <Box sx={{ display: 'flex', width: "100%" }}>
                            <a href='/pokemons'>
                                <button className='navbar navbar-btn' type="submit">Pokémons</button>
                            </a>
                            <a href='/minhaColecao'>
                                <button className='navbar navbar-btn' type="submit">Minha Coleção</button>
                            </a>
                        </Box>
                        {!esconderPesquisa && (
                        <Search onChange={(e) => pokemonFiltro(e.target.value)}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Pesquisando…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}