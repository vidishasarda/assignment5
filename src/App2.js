import React, { Component } from 'react'
import ProductContainer from './ProductContainer'
import NavBar from './NavBar'
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
          <NavBar />
          <ProductContainer />
      </div>
    );
  }
}

export default App