import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navigation from './Navigation';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Navigation />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
