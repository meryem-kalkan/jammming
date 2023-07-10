import React, { useCallback, useState } from "react";
import "./SearchBar.css";


function SearchBar(props) {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback ((e) => {
        setTerm(e.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
      }, [props.onSearch, term]);
      
    return (
        <div className="SearchBar">
         <input placeholder="Enter a Song, Album or Artist" onChange={handleTermChange}></input>
         <button onClick={search}>SEARCH</button>
        </div>
    )
}

export default SearchBar;