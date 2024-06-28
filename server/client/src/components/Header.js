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
                return <li><a href="/auth/google">Login</a></li>
            default:
                return <li><a href="/api/logout">Logout</a></li>
        }
    }
     
    render() {
        return (
            <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav> 
                        <Navbar.Brand>
                            <Link to={this.props.auth ? '/landing' : '/'}>
                                Logo 
                            </Link>
                        </Navbar.Brand>
                        <Nav.Link href="/dashboard" className="ms-auto justify-content-end">
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

// <Nav.Link href="/signup">Sign up</Nav.Link>