import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
    const element = (
        <div>
            <h1>Привет, мир!</h1>
            <h2>Сейчас {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('sandbox')
    );
}

setInterval(tick, 1000);
