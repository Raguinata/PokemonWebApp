import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import './style.css'; // Importando o arquivo de estilos CSS

export default function PokemonCard({ name, image, types }) {
    const nomeMaiusculo = name.charAt(0).toUpperCase() + name.slice(1); // Transforma a primeira letra do nome em maiúscula

    const tipos = () => {
        if (types[1]) {
            return types[0].type.name + ' | ' + types[1].type.name;
        }
        return types[0].type.name;
    };

    return (
        <Card className="pokemon-card" sx={{ maxWidth: 345,
        borderRadius: 5,
        backgroundColor: 'black',
        border: '2px solid white'
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="170"
                    image={image}
                    alt={nomeMaiusculo}
                />
                <CardContent>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography className="pokemon-nome" gutterBottom variant="h5" component="div">
                            {nomeMaiusculo}
                        </Typography>
                        <Typography className="pokemon-tipos" variant="caption" component="div">
                            {tipos()}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
