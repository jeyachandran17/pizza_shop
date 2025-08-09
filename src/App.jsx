import { useState } from 'react'
import pizzaLogo from "./images/pizza_logo.png"
import './App.css'

function App() {

  return (
    <div>
      <Application />
    </div>
  )
}

function Application() {

    return (
      <div className='main_container'>
        <Navigation />
        <Home_page />
      </div>
  )
}

function Navigation() {
  return (
    <nav className='navigation'>
      <div className='navigation_container'>
        <div className="log-container">
          {/* In furture change the pizza logo */}
          <img className='logo-img' src={pizzaLogo} alt="" srcset="" />
        </div>
        {/* <div className="nav-profile">
          <p>profile name</p>
          <p>profile image</p>
        </div> */}
      </div>
      <div className='manuBar-container'>
        <button>Pizza</button>
        <button>Drink</button>
        <button>Pasta</button>
        <button>Burger</button>
      </div>
    </nav>
  )
}


function Home_page() {
  return (
    <div className="homepage_Main-container">
      <div className="homepage_container1">
        <div className='home_page1'>
          <p>Welcome to Our Pizza Place</p>
        </div>
        <div className='home_page2'>
          <h3>Delicious pizzas made with love and fresh ingredients.</h3>
        </div>
        <div className='home_page3'>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
        </div>
      </div>
    </div>
  )
}



export default App
