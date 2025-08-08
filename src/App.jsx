import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
        <h3>Welcome to the Application</h3>
        <Navigation />
        <Home_page />
      </div>
  )
}

function Navigation() {
  return (
    <nav className='navigation'>
      <div className='logo'>
        {/* In furture change the pizza logo */}
        <p>logo</p>
      </div>
      <div>
        <p>Home</p>
        <p>Menu</p>
        <p>Services</p>
        <p>Blog</p>
        <p>About</p>
        <p>Contect us</p>
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
        <div className='home_page4'>
          <button>View menu</button>
        </div>
      </div>
      <div className="homepage_container2">
        {/* In future replace the loge at the "pizza" text  */}
        <h3>WELCOME TO PIZZA RESTAURANT</h3>
        {/* then at more contant or discribe the restaurant */}
      </div>
    </div>
  )
}






export default App
