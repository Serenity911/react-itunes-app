import React from 'react';

function SongDetail(props) {
    // if(!props.songs) return null;
    return(
        // <li>{props.song.category.attributes.label}</li>

        <li>
            <header> {props.song["im:artist"].label} </header>
            <main>  {props.song["im:name"].label} </main>
           
            
        </li>
    )

}
export default SongDetail
