import React from 'react'

export default function FavoritesList(props){

    const createFavorites = props.favorites.map((favorites, i) => ( 
        <li key={i}><Favorite  favorite={favorite}/></li>
    ))

    return (
        <div className="container">
            <ul className="list">
                {createFavorites}
            </ul>
        </div>
    )
}