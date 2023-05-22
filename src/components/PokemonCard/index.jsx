import React, { useState } from 'react';
import './style.css'; // Importando o arquivo de estilos CSS

export default function PokemonCard({ name, image, types }) {
    const [isHovered, setIsHovered] = useState(false); // Estado para controlar o hover

    const nomeMaiusculo = name.charAt(0).toUpperCase() + name.slice(1); // Transforma a primeira letra do nome em maiúscula

    const tipos = () => {
        if (types[1]) {
            return types[0].type.name + ' | ' + types[1].type.name;
        }
        return types[0].type.name;
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`pokemon-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="pokemon-card-conteudo-img">
                <img src={image} alt={nomeMaiusculo} height="170" />
            </div>
            <div className="pokemon-card-conteudo-nome-tipo">
                <h5>{nomeMaiusculo}</h5>
                <h6>{tipos()}</h6>
            </div>
        </div>
    );
}
