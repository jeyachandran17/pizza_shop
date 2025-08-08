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


export default App
