import React from 'react';
import ReactDOM from 'react-dom';

require('./scss/main.scss');

function App() {
  return (
    <div className="container">
      <h1 className="first-timer">Good to go.</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
