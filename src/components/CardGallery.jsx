import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PokemonCard from './PokemonCard';
import { useState, useEffect } from 'react';

const CardGallery = ({ searchTerm }) => {

const [pokemonCards, setPokemonCards] = useState([]);

 useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
      const data = await response.json();

      const pokemonData = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        return response.json();
      });

      const pokemonDataResolved = await Promise.all(pokemonData);

      const pokemons = pokemonDataResolved.map((pokemon) => {
        return {
          image: pokemon.sprites.front_default,
          name: pokemon.name,
          type: pokemon.types[0].type.name,
          level: pokemon.base_experience,
        };
      });

      setPokemonCards(pokemons);
    };

    fetchData();
 }, []);

 const filteredCards = pokemonCards.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <Row>
        {filteredCards.map((pokemon, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <PokemonCard image={pokemon.image} name={pokemon.name} type={pokemon.type} level={pokemon.level}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGallery;

