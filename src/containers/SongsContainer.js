import React, {Component} from 'react';
import SongList from '../components/SongList.js'

class SongsContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            topSongs: [],
            selectedSong: ''
        }
    }

    componentDidMount(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => this.setState({topSongs: songs.feed.entry}))
        .catch(err => console.error)
    }

    render(){
        return(
            <SongList topSongs={ this.state.topSongs }/>
        )
    }

} 

export default SongsContainer;