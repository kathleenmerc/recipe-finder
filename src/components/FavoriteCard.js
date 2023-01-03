import { useState, useEffect } from "react"
import * as favoritesAPI from '../utilities/favorites-api'
import { Link } from "react-router-dom"

export default function FavoriteCard(props) {

    const [fav, setFav] = useState({
        title: props.title,
        image: props.image,
        id: props.id,
        sourceUrl: props.sourceUrl
    })
        

    const handleClick = (evt) => {
        setFav({...fav, [evt.target.name] : props.value})
        
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        await favoritesAPI.deleteFavorite(props.id)
    }



    return (
        <div className="favoritesCard">
            <h1>favorites card</h1>
            <a href={props.spoonacularSourceUrl} target="_blank">{props.title}</a>
            <img src={props.image} alt="food" />
            
            <form onSubmit={handleSubmit}>
                <button type="submit" onClick={handleClick} value={props}> delete</button>
            </form>
            
            

           


        </div>
    )
}


