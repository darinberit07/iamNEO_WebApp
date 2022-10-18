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
                                <NavLink /*className="btn btn-light btn-outline-info"*/ to='/home'>
                                {/*<button type = "button" class="btn btn-info">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                                </button>  */}
                                <button class="btn btn-info"><i class="fa-solid fa-home"></i> Home</button>
                                </NavLink>
                            </li>
                            <li className="nav-item- m-1">
                                <NavLink /*className="btn btn-light btn-outline-primary"*/ to='/users'>
                                    {/*<button type="button" className="btn btn-info">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg>
                                    </button>*/}
                                    <button class="btn btn-info"><i class="fa-solid fa-user-plus"></i> Users</button>
                                </NavLink>
                            </li>
                      </ul>      
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}