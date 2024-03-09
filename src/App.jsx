import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import BubbaShrimp from './pages/BookList'
import BookSearch from './pages/BookSearch'
import BookSearchAll from './pages/BookSearchAll'
import Form from  './pages/Form'
//import {Routes, Route} from 'react-router-dom'


function App() {
  //const [count, setCount] = useState(0)

  const apiKey = 0;
  const [book, setBook] = useState(null);

  const getBook = async (searchTerm) => {
    try {
    const response= await fetch(`https://openlibrary.org/search.json?title=${searchTerm} `);

    const data = await response.json();

    setBook(data)
  }
  catch(event){
    console.error(event)
  }
}
  useEffect(() => {getBook("")}, []);


  return (

  <div className='App'>
    <Home />

  <Form BookSearch = {getBook}/>
  <div className='Card'>
  <BookSearch book={book} />
  </div>
  
  </div>
  )
     // <Home/>
     // <BubbaShrimp/>
      //<BookSearch/>
      //<BookSearch book={book} />


}

export default App
