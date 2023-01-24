
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import RegisterForm from '../pages/RegisterForm';


function FirstNav() {
  return (
    <BrowserRouter>
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<RegisterForm/>} />

      </Routes>
      
      </div>
    </div>
    </BrowserRouter>
  )
}

export default FirstNav