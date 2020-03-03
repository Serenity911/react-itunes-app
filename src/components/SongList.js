import React from 'react';
import SongDetail from './SongDetail.js'

function SongList(props) {

    const songObjects = props.topSongs.map(song => {
        return(
            <SongDetail song={song}></SongDetail>
        )
    })

    return(
        <ol>
            {songObjects}
        </ol>
    )
}

export default SongList