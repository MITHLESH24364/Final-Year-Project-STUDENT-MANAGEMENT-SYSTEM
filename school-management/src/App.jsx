import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <Footer></Footer>

    </>
  )
}

export default App
