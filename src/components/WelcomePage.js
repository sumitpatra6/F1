import React, { Component } from 'react';
import Axios from 'axios';
import SearchComponent from './searchComponent'
class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Axios.get('http://ergast.com/api/f1/drivers/alonso.json').
            then(function (response) {
                console.log(response)
            }).catch(function (err) {
                console.log(err);
            });
    }
    render() {
        return (
            <div className = 'container'>
                <SearchComponent buttonText = 'Search' style = {{width : '100%'}}/>
            </div>
        )
    }
}

export default WelcomePage;