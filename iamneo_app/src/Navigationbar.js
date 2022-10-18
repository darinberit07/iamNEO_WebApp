import React,{Component} from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
export class Navigationbar extends Component{
    render(){
        return(
            <Navbar variant = "dark" bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar navbar-expand-sm bg-light navbar-light">
                        <ul className="navbar-nav">
                            <li className="nav-item- m-1">
                                <NavLink className="btn btn-light btn-outline-info  " to='/home'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                                    
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