import React from 'react'
import EpisodeCard from './EpisodeCard'

export default function Episodes (props) {

    const showEpisodes = props.episodes.map((episode, i) =>(
        <li key={i}><EpisodeCard episode={episode}/></li>
    ))

    return (
        <div className="episodeContainer">
            <ul className="episodeList">
                {showEpisodes}
            </ul>

        </div>
    )


}