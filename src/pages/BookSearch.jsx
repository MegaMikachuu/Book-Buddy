

function BookSearch({book}){
    const loaded = () => {
        var Poster = book.docs[0].isbn[2]
        console.log(book.docs[0].title)
        console.log(1407157868)
        var url = "https://covers.openlibrary.org/b/isbn/"
        var ending = "-M.jpg"

        function Favorite(){
            alert("Added to Favorites")
        }

        return (
          <div  className="Book Border"> 
            <h1>{book.docs[0].title}</h1>
            <img src= {url + Poster + ending }></img>
            <h2>{book.docs[0].first_publish_year}</h2>
            <h2>{book.docs[0].author_name}</h2>
            <h2>{book.docs[0].isbn[0]}</h2>

            <div className="FavBar">
    
                <button onClick={Favorite}>Add To Favorites</button>
                <br/>
                <button>Share</button>
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