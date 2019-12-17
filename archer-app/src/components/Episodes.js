import React, { Component } from 'react'

export default class Episodes extends Component {
    render() {
        const {title, season, season_episode, writer} = this.props.episode
        return (
            <div id='card'>
                <h3 >
                    {title}
                </h3>
                <p>
                    Season: {season} , Episode: {season_episode}
                </p>
                <span>
                    Written By: {writer}
                </span>
            </div>
        )
    }
}

