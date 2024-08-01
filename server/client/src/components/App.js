import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
import Map from "./Map"
import SignUp from "./SignUp"


class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/landing" component={Landing} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/map" component={Map} />
                        <Route exact path="/signup" component={SignUp} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App)