import React from 'react';
import { Navbar, Nav, Form, FormControl,Button } from 'react-bootstrap';
import { useState } from 'react';

import logo from '../assets/pokeball-2.png';
const Header = ({onSearch}) => {

    
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(searchTerm);
      setSearchTerm('');
    };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img
          src={logo}
          alt="pokeball"
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
        />
        <span className="ml-2">Pokeverse | All Pokemon</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Form inline className="ml-auto" onSubmit={handleSearch}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
              
            />
            {/* <Button variant="outline-info" type="submit">Search</Button> */}
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;