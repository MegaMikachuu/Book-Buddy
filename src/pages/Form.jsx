import { useState } from "react";


function Form(props){

    const [formData, setFormData] = useState({
        searchterm:"",
    });

    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search term to booksearch prop, which is apps getBook function
        props.BookSearch(formData.searchterm);
      };

    return (<div>
        <form onSubmit = {handleSubmit}>
            <label>Search By Title: </label>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
            <input type="submit" value = "submit" />          
        </form>
    </div>
)}
export default Form;