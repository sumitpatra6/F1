import React, { Component } from "react";
import '../sidebar.css';
import person from '../icons/user.png';
import Race from '../icons/races.png';
import Championship from '../icons/championships.png';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import WelcomePage from '../components/WelcomePage'
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <div className='container'>Racers</div>

    },
    {
        path: '/racers',
        exact: true,
        main: () => <WelcomePage />
    },
    {
        path: '/races',
        exact: true,
        main: () => <div className='container'>Racers</div>
    },
    {
        path: '/championships',
        exact: true,
        main: () => <div className='container'>Racers</div>
    }
]

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler(event) {
        console.log(event)
        console.log(event.target)
        $('.icons').css('border', 'none');
        event.currentTarget.style.borderLeft = '2px solid red';
        return true;
    }

    render() {
        return (
            <Router>
                <div style={{ display: 'flex' }}>
                    <div className='sideBarContainer'>

                        <div className='icons'>&nbsp;</div>
                        <Link to='/racers'><div className='icons' onClick={this.clickHandler.bind(this)}> <img src={person} alt="Person Icon" /></div>
                        </Link>
                        <Link to='/races'>
                            <div className='icons' onClick={this.clickHandler.bind(this)}><img src={Race} alt="Races" /></div>
                        </Link>
                        <Link to='/championships'>
                            <div className='icons' onClick={this.clickHandler.bind(this)}><img src={Championship} alt="Championships" /></div>
                        </Link>



                    </div>

                    <div className='container'>
                        {routes.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        );
    }
};

export default Sidebar;