import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '8f1ad3a0-3b17-47ad-85c9-75e8cc95605d',
    clientToken: 'pub943902bca4a1ad8c1fe9e6ef5c8f366a',
    site: 'datadoghq.com',
    service:'sample-app',
    
    // Specify a version number to identify the deployed version of your application in Datadog 
    version: '1.0.0',
    sampleRate: 100,
    premiumSampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel:'mask-user-input',
    // 'usr.id': 123,
    // 'usr.name': 'randomName',
    // 'usr.email': 'abc@gmail.com'
});

datadogRum.setUser({
  id: '1234',
  name: 'John Doe',
  email: 'john@doe.com',
  plan: 'premium',
})
    
datadogRum.startSessionReplayRecording();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
