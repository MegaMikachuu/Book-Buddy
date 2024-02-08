import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import BubbaShrimp from './pages/BubbaShrimp'
import BookSearch from './pages/BookSearch'
import Form from  './pages/Form'


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
  useEffect(() => {getBook("Hunger Games")}, []);


  return (
  <div className='App'>
    <Home />
    
      <h1>Welcome to The Book Buddy App</h1>
  
  <Form BookSearch = {getBook}/>
  <BookSearch book={book} />
  
  
  </div>
  )
     // <Home/>
     // <BubbaShrimp/>
      //<BookSearch/>
    

}

export default App
