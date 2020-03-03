import React from 'react';

function SongSelected (props) {
    if(!props.selectedSong) return null;

    return(
        <section>
            <article>
                <img src= 
                    {props.selectedSong["im:image"][0].label}
                    /> 
            </article>
        </section>
    )
}

export default SongSelected;