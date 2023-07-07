import React, { useCallback } from "react";
import "./Playlist.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
   const  handleNameChange = useCallback((e) => {
    props.onNameChange(e.target.value);  
   }, [props.onNameChange]);

    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
            <Tracklist
             tracks={props.playlistTracks}
             isRemoval={true}
             onRemove={props.onRemove}
             />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
};

export default Playlist;