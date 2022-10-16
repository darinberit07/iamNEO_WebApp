import React,{Component} from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Button,Form} from 'react-bootstrap';
export class Navigationbar extends Component{
    render(){
        return(
            <Navbar variant = "dark" bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar navbar-expand-sm bg-light navbar-light">
                        <ul className="navbar-nav">
                            <li className="nav-item- m-1">
                                <NavLink className="btn btn-light btn-outline-primary" to='/home'>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item- m-1">
                                <NavLink className="btn btn-light btn-outline-primary" to='/users'>
                                    Users
                                </NavLink>
                            </li>
                      </ul>      
                    </Nav>
    {/*<div class = "container-fluid">
  <form class="d-flex">
    <input class="me-2" type="search" placeholder="Search by User ID" aria-label="Search"></input>
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
        </div> 
  <div class = "container-fluid">
  <form class="d-flex">
    <input class="me-2" type="search" placeholder="Search by User Name" aria-label="Search"></input>
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
        </div>*/}
                
                </Navbar.Collapse>
            </Navbar>
        )
    }
}