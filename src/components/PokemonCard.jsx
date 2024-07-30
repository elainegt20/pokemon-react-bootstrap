import React from 'react';
import { Card } from 'react-bootstrap';

const PokemonCard = ({ image, name, type, level }) => {
  return (
    <Card className="mb-4" style={{backgroundColor:'lightgray'}}>
      <div className='custom-card-img-container'>
      <Card.Img variant="top" src={image} className='custom-card-img' style={{backgroundColor:'white'}}/>
      </div>
      <Card.Body>
        <Card.Title>{name.charAt(0).toUpperCase() + name.slice(1)}</Card.Title>
        <Card.Text>Type: {type}</Card.Text>
        <Card.Text>Level: {level}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;