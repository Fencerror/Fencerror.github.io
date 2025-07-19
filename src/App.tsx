  import React from 'react';
  import { BrowserRouter as Router } from 'react-router-dom';
  import { RouterProvider } from './app/providers/router';
  import './app/styles/fonts.css';
  const App: React.FC = () => {
    return (
      <Router>
        <RouterProvider />
      </Router>
    );
  };

  export default App;