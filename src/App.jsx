import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BookList from "./components/BookList"
import BookDetails from "./components/BookDetails"
import NavBar from "./components/NavBar" 
import Footer from "./components/Footer" 
import Favorites from './components/Favorites'
import SearchBook from './components/SearchBook'
import AppContextProvider from './components/context/appContext'

function App() {

  return (
      <div className='App-Wrapper'>
        <AppContextProvider>
        <NavBar/>
        <Routes>
          <Route path = "/" element = {<SearchBook/>}/>
          <Route path = "/BookList" element = {<BookList/>}/>
          <Route path = "/book/:id" element = {<BookDetails/>}/>
          <Route path = "/favorites" element = {<Favorites/>}/>
        </Routes>
        <Footer/>
        </AppContextProvider>
      </div>
  )
}

export default App
