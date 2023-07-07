import React, { useCallback, useState } from "react";
import "./SearchBar.css";


function SearchBar() {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback ((e) => {
        setTerm(e.target.value);
    }, []);

    return (
        <div className="SearchBar">
         <input placeholder="Enter a Song, Album or Artist" onChange={handleTermChange}></input>
         <button>SEARCH</button>
        </div>
    )
}

export default SearchBar;