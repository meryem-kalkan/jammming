import React from "react";
import "./Tracklist.css";
import Track from "../Track/Track";

function Tracklist(props) {
return (
<div className="Tracklist">
{props.tracks.map((track) => {
    return (
        <Track 
          track={track}
          key={track.id}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
          isRemoval={props.isRemoval}
        />
    )
})}
</div>
)
}

export default Tracklist;