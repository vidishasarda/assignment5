import React, { Component } from 'react'
import ProductContainer from './ProductContainer'
import NavBar from './NavBar'
import SearchBar from'./SearchBar'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        dynamicProducts: []
    }
  }

  

  updateSearchString(searchInput){
    this.setState({
      searchString: searchInput
    })
  }
  render(){
    return(
      <div className='App'>
          <SearchBar searchString={this.state.searchString} thisPropFunction_updateSearchString={(searchStringIn)=>this.updateSearchString()}/>
          <NavBar />
          <ProductContainer products = {this.state.dynamicProducts}/>
      </div>
    );
  }

  componentDidMount (){
    let self = this
    fetch('https://api.myjson.com/bins/12fv7q')
    .then(function(response){
        console.log("This is the Data from the API", response)
        return response.json()
    })
    .then(jsonResponse => {
        console.log("This is the JSON response", jsonResponse)
        self.setState({ dynamicProducts: jsonResponse})
    })
    .catch(function(error){
        console.log(error)
    })

  }
}

export default App