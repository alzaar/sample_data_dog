import logo from './logo.svg';
import './App.css';
import { datadogRum } from '@datadog/browser-rum';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            datadogRum.addAction('checkout', {
              cart: {
                  amount: 42,
                  currency: '$',
                  nb_items: 2,
                  items: ['socks', 't-shirt'],
              },
           });
          }}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
