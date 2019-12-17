import React, { Component } from 'react'

export default class FavoritesForm extends Component {

    state = {
        user_id: "",
        episode_id: ""
        

    }

    handleChange = (event) => {
        const {user_id, episode_id} = event.target
        this.setState({
            [user_id]: episode_id
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addFavorite(this.state)
        this.setState({
            
        })

    }
    render (){
       
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Put it In Here</label>
                    <input 
                    name='title' 
                    value={this.state.title}
                    onChange={this.handleChange}
                    />
                    <audio 
                        ref='audio_tag' 
                        crossOrigin src='https://www.thesoundarchive.com/play-wav-files.asp?sound=archer-sounds/hey-phrasing.mp3' 
                        controls autoPlay
                        />
                    <input type='submit' />

            </form>
        )
    }
}