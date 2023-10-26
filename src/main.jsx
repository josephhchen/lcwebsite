import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import TermsOfService from './components/TermsOfService';
import GoogleAds from './components/GoogleAds';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <App />
  <Routes>
  <Route path="/app-ads.txt" component={GoogleAds} />
    </Routes>
  </Router>
</React.StrictMode>
);