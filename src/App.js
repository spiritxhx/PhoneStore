import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';


class App extends React.Component{
  render()
  {
    return (
     <React.Fragment>
       <Navbar />
     </React.Fragment> 
    );
  }
}

export default App;
