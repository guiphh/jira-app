import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col, NavbarBrand } from "react-bootstrap";
import IssueList from './components/IssueList'
import AppNavbar from './components/AppNavbar'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const App = () => (
  
  
  <Router>
    <div>
      <AppNavbar />
      <Grid>


      <Route exact path="/" component={Home}/>
      <Route path="/issues" component={IssueList}/>
      </Grid>
    </div>
  </Router>

)

export default App;
