import React from 'react';
import './App.css';
import './components/CardComponents/Card.css';
import './components/FooterComponents/Footer.css'
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';


const App = () => {
  return (
    <div className="appContainer">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
