import React from 'react';
import {Switch,Route} from 'react-router-dom';
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
       <Switch>
         
         <Route path="/details" Component={Details} />
         <Route path="/cart" Component={Cart} />
         <Route path="/" Component={ProductList} />
         <Route Component={Default} />
       </Switch>
     </React.Fragment> 
    );
  }
}

export default App;
