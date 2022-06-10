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
          href="#"
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
        <button onClick={() => {
           datadogRum.addAction('action 1', {
              action: 'some click 1'
           });
        }}>Action 1</button>
                <button onClick={() => {
           datadogRum.addAction('action 2', {
              action: 'some click 2'
           });
        }}>Action 2</button>

      </header>
    </div>
  );
}

export default App;
