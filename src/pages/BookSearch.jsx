import './BookSearch.css'
import { useState } from 'react';

function BookSearch({book}){
  const  [bookList, setBookList] = useState ([]);
    const loaded = () => {
        var Poster = book.docs[0].isbn[1]
        //console.log(book.docs[0].title)
        var bookList = [];
        var url = "https://covers.openlibrary.org/b/isbn/"
        var ending = "-M.jpg"

        function Favorite(){
          const title = book.docs[0].title;
          setBookList(prevBookList => [...prevBookList, title]);
            alert("Added to Favorites")
           // bookList.push(book.docs[0].title)
            console.log(title)
            bookList.push(title);
            //return bookList;
            console.log(setBookList)
        }
        function Share (){
            alert("Ready to Share (But not Really)")
        }

        function Description (){
          <p>This is where the book description goes</p>
        }

        return (
          <div  className="Book-Border"> 
            <h2>{book.docs[0].title}</h2>
            <img src= {url + Poster + ending }></img>
            <h3>Publishing Year: {book.docs[0].first_publish_year}</h3>
            <h3>Author: {book.docs[0].author_name}</h3>
            <h3>ISBN: {book.docs[0].isbn[0]}</h3>
            <h3 className='hidden'>{Description}</h3>

            <button onClick={Description}>Book Description</button>

            <div className="FavBar">
    
                <button onClick={Favorite}>Add To Favorites</button>
                <br/>
                <button onClick={Share}>Share</button>
            </div>
           
          </div>
        );
      };
 //function to return loading JSX
 const loading = () => {
    return <h1>No Book to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  return book ? loaded() : loading();
};

export default BookSearch;