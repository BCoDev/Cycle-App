import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Still deciding'
            case false: 
                return <li><Link to="/signup">Sign Up</Link></li> && <li><a href="/auth/google">Login</a></li>
            default:
                return <li><a href="/api/logout">Logout</a></li>
        }
    }
     
    render() {
        return (
            <div>
            <Navbar bg="dark" data-bs-theme="dark" id="Navbar-border">
                <Container>
                    <Nav> 
                        <Navbar.Brand>
                            <Link to={!this.props.auth ? '/landing' : '/dashboard'}>
                                Cycle-Lyft 
                            </Link>
                        </Navbar.Brand>
                        <Nav.Link href="/addbikes">
                            Add Bikes
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/signup">Sign up</Nav.Link>
                        <Nav.Link href="/dashboard">
                            {this.renderContent()}
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            </div>
        )
    }
}

function mapStateToProps({auth}) {
    return { auth }
}

export default connect(mapStateToProps)(Header)