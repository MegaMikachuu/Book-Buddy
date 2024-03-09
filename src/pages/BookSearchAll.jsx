// import { useState, useEffect } from 'react'

// function BookSearchAll(){
//     const [data, setData] = useState("");
//     useEffect(() => {
//         fetch(`https://openlibrary.org/search.json?title=${searchTerm}`)
//         .then((response) => response.json())
//         .then((data) => setData(data));
    
// }, []);
// console.log(data.docs[0].title);

// return <div className='AllSearch'>{JSON.stringify(data)}</div>;
// }



// export default BookSearchAll;
import './BookSearch.css'

import { useState, useEffect } from 'react';

function BookSearchAll({ searchTerm }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!searchTerm) return; // Make sure there's a search term before making the request

        fetch(`https://openlibrary.org/search.json?title=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => setData(data));

    }, [searchTerm]); // Include searchTerm in the dependency array to trigger the effect on searchTerm change

    
    return (
        <div className='AllSearch'>
            {data && data.docs.map((book, index) => (
                <div key={index}>{book.title}</div>
            ))}
        </div>
    );
}

export default BookSearchAll;