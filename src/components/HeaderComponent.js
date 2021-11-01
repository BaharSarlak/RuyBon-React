import React , {Component} from 'react';
import {Nav, Navbar,NavbarBrand, NavItem, NavbarToggler,Collapse,Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {Fade} from 'react-animation-components'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isNavOpen: false
        }
    }

    toggleNav=() => this.setState({ isNavOpen: !this.state.isNavOpen})

    render() {
        return(
            <React.Fragment >
                 <Fade in>
                     <Jumbotron className="jumbotron py-5 my-0 sticky-top" >
                        <div className="  container-fluid">
                            <div className="row ">
                                <div className="appTitle col-6">
                                    <h1>RuyBon</h1>
                                    <h2>Consulting Engineers</h2>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <a role="button" className="btn btn-link" href="tel:16476874236"><i className="fa fa-phone fa-lg"/> </a>
                                    <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /></a>
                                </div>
                            </div>
                        </div>
                    </Jumbotron>
                 </Fade>
                <Fade in>
                    <Navbar className=" navbar mt-0" color="light" light expand="md" >
                        <NavbarBrand href="/"><img className='logo' src="/assets/images/logo.jpg" alt="logo" height="35" width="35" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                    <Fade in>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/home">
                                                <i className="fa fa-home fa-lg" /> Home
                                            </NavLink>
                                        </NavItem>
                                    </Fade>
                                    <Fade in delay={200}>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/about">
                                                <i className="fa fa-info fa-lg" /> About
                                            </NavLink>
                                        </NavItem>
                                    </Fade>
                                    <Fade in delay={400}>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/projects">
                                                <i className="fa fa-briefcase fa-lg" /> Projects
                                             </NavLink>
                                        </NavItem>
                                    </Fade>
                                    <Fade in delay={600}>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/contact">
                                                <i className="fa fa-id-card fa-lg" /> Contact
                                             </NavLink>
                                        </NavItem>
                                    </Fade>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Fade>
            </React.Fragment>
        )
    }
}

export default Header