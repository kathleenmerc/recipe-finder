import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as favoritesAPI from '../utilities/favorites-api'


export default function RecipeCard (props) {

    const [favoriteData, setFavoriteData] = useState({
        title: props.title,
        image: props.image,
        id: props.id,
        sourceUrl: props.sourceUrl

    })

    const [error, setError] = useState(false)

    const handleChange = (evt) => {
        // setFavoriteData({...favoriteData, [evt.target.name] : evt.target.value})
        setFavoriteData({...favoriteData, [evt.target.name] : props.value})
        
    }

    const handleSubmit =  async (evt) => {
        evt.preventDefault()
        try {
            setError(false)
            props.getFavorite(favoriteData.id)
            // const favorite = await favoritesAPI.addFavorite(props)
            // console.log(favorite)
            // console.log(props)
        } catch {
            setError(true)
        }
    }

    return (
        <div className='recipeCardContainer'>
            <form onSubmit={handleSubmit}>
                <label>{props.title}</label>
                <img src={props.image} alt="image" />

                <button type="submit" value={props} onChange={handleChange}>Add to favorites</button>
            </form>
        </div>

    )
}