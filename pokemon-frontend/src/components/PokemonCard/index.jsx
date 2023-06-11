import React, { useState } from 'react';
import './style.css';
import { tipos } from '../../utils';
import CoracaoV from '../Imagens/CoracaoV.png';
import CoracaoC from '../Imagens/CoracaoC.png';
import { useDispatch } from 'react-redux';
import { addCard, addToCollection } from '../../store/index';

export default function PokemonCard({ name, image, types }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const nomeMaiusculo = name.charAt(0).toUpperCase() + name.slice(1);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleHeartClick = (event) => {
    event.stopPropagation();
    setIsClicked(!isClicked);

    const card = { name, image, types };
    dispatch(addCard(card));
    dispatch(addToCollection(card));
  };

  return (
    <div
      className={`pokemon-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pokemon-card-div-btn-img">
        <img
          src={isClicked ? CoracaoC : CoracaoV}
          className="pokemon-card-btn-img"
          onClick={handleHeartClick}
        />
      </div>
      <div className="pokemon-card-conteudo-img">
        <img src={image} alt={nomeMaiusculo} height="170" />
      </div>
      <div className="pokemon-card-conteudo-nome-tipo">
        <h5>{nomeMaiusculo}</h5>
        <h6>{tipos(types)}</h6>
      </div>
    </div>
  );
}