import React, { Component } from 'react';
import './App.css';


  class NavBar extends React.Component {
    render(){
      return(
        <div class="menuBar">
          <nav class="navbar navbar-default" data-size="small">
          <ul>
            <li class="women" id="women">
              <span class="text"> Women </span>
            </li>

            <li class="men" id="men">
            
              <span class="text"> Men </span>
            
            </li>

            <li class="home" id="home_bv">
            
              <span class="text"> Home </span>
          
            </li>

            <li class="ourWorld" id="world">
            
            <span class="text"><a href="https://www.bottegaveneta.com/us/unisex/our-world_grd30592" target="_self"> Our World </a></span>
          
            </li>
            </ul>
          </nav>
        </div>
    )

  }
}

class Shoe1 extends React.Component {
  render(){
    return(
      <div className="shoe">
            <div className="shoeImage">
              <img src={'https://media.yoox.biz/items/11/11477977IM_16_ep.jpg'}/>
            </div>
            <h2 className="shoeBrand">{"Bottega Veneta"}</h2>
            <h2 className="shoeName">{"Slip on Sneaker - Blue"}</h2>
            <h2 className="shoeCost">$ {750}</h2>
            <div className="shoeAdd">
                <button className="addBtn" type="button"> Add to the cart </button>
            </div>
      </div>
    )
  }
}

class Shoe2 extends React.Component {
  render(){
    return(
      <div className="shoe">
            <div className="shoeImage">
              <img src={'https://media.yoox.biz/items/11/11477992FS_16_ep.jpg'}/>
            </div>
            <h2 className="shoeBrand">{"Bottega Veneta"}</h2>
            <h2 className="shoeName">{"Low Top Sneaker"}</h2>
            <h2 className="shoeCost">$ {690}</h2>
            <div className="shoeAdd">
                <button className="addBtn" type="button"> Add to the cart </button>
            </div>
      </div>
    )
  }
}
class Shoe3 extends React.Component {
  render(){
    return(
      <div className="shoe">
            <div className="shoeImage">
              <img src={'https://media.yoox.biz/items/11/11489558ME_16_ep.jpg'}/>
            </div>
            <h2 className="shoeBrand">{"Bottega Veneta"}</h2>
            <h2 className="shoeName">{"ARCTIC SUEDE BV FELLOWS SNEAKER"}</h2>
            <h2 className="shoeCost">$ {830}</h2>
            <div className="shoeAdd">
                <button className="addBtn" type="button"> Add to the cart </button>
            </div>
      </div>
    )
  }
}

class Shoe4 extends React.Component {
  render(){
    return(
      <div className="shoe">
            <div className="shoeImage">
              <img src={'https://media.yoox.biz/items/11/11489558ME_16_ep.jpg'}/>
            </div>
            <h2 className="shoeBrand">{"Bottega Veneta"}</h2>
            <h2 className="shoeName">{"dodger sneaker"}</h2>
            <h2 className="shoeCost">$ {590}</h2>
            <div className="shoeAdd">
                <button className="addBtn" type="button"> Add to the cart </button>
            </div>
      </div>
    )
  }
}



class App extends React.Component{
  render(){
    return(

    <div className="shoes">
        <NavBar />
        <Shoe1 />
        <Shoe2 />
        <Shoe3 />
        <Shoe4 />
          

      
    </div>


    );
  }

}

export default App