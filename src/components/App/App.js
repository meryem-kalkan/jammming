import React, {useState, useCallback} from "react";
import "./App.css";
import Spotify from "../../util/Spotify";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
const [searchResults, setSearchResults] = useState([{name: "artist name",
artist: "artist",
album: "album",
id: 1}, {name: "artist name2",
artist: "artist2",
album: "album2",
id: 2}]);
const [playlistName, setPlaylistName] = useState("New Playlist");
const [playlistTracks, setPlaylistTracks] = useState([]);

const changePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const addTrack = useCallback((track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) 
    return;

    setPlaylistTracks((prevTracks) => [...prevTracks, track])
  }, [playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

    return (
        <div>
            <h1>
                Ja<span className="highlight">mmm</span>ing
                </h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                       <SearchResults searchResults={searchResults} onAdd={addTrack}/>
                       <Playlist 
                       playlistName={playlistName}
                       playlistTracks={playlistTracks}
                       onNameChange={changePlaylistName}
                       onRemove={removeTrack}
                       />
                    </div>
                </div>
            </div>
    )
}

export default App;