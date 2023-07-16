import React, {useState, useCallback} from "react";
import "./App.css";
import Spotify from "../../util/Spotify";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
const [searchResults, setSearchResults] = useState([]);
const [playlistName, setPlaylistName] = useState("New Playlist");
const [playlistTracks, setPlaylistTracks] = useState([]);

const search = useCallback((term) => {
  if(term) {
Spotify.search(term).then(setSearchResults); }
}, []);

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

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

    return (
        <div>
            <h1>
                Ja<span className="highlight">mmm</span>ing
                </h1>
                <div className="App">
                    <SearchBar onSearch={search}/>
                    <div className="App-playlist">
                       <SearchResults searchResults={searchResults} onAdd={addTrack}/>
                       <Playlist 
                       playlistName={playlistName}
                       playlistTracks={playlistTracks}
                       onNameChange={changePlaylistName}
                       onRemove={removeTrack}
                       onSave={savePlaylist}
                       />
                    </div>
                </div>
            </div>
    )
}

export default App;