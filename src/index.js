import React, { Component } from 'react';
import { render } from 'react-dom';

import './less/style.less';

class App extends Component {
    render() {
        return (
            <div id='app' className='app'>
                <h1>Hello World</h1>
            </div>
        );
    }
}

render(
    <App></App>,
    document.getElementById('root'),
);