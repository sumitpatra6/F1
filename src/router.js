import React from 'react';
import WelcomePage from './components/WelcomePage'
const routes = [
    {
        path : '/',
        exact : true,
        main: () => <WelcomePage />

    },
    {
        path : '/racers',
        exact : true,
        main: () => <WelcomePage />
    },
    {
        path : '/races',
        exact : true,
        main: () => <div className= 'container'>Racers</div>
    },
    {
        path : '/championships',
        exact : true,
        main: () => <div className= 'container'>Racers</div>
    }
]
export default routes;