import { Link } from 'react-router-dom'
import { ingredients } from '../pages/Homepage'
import { useState } from 'react'
import * as favoritesAPI from '../utilities/favorites-api'


export default function RecipeCard (props) {

    const [favoriteData, setFavoriteData] = useState(null)

    const handleChange = (evt) => {
        setFavoriteData({...favoriteData, [evt.target.name] : evt.target.value})
        //setFavoriteData(evt.target.value)
        
    }

    const handleSubmit =  async (evt) => {
        evt.preventDefault()
        const favorite = await favoritesAPI.addFavorite(favoriteData)
        console.log(favorite)
        console.log(props)
    }

    return (
        <div className='recipeCardContainer'>
            <form onSubmit={handleSubmit}>
                <label>{props.title}</label>
                <img src={props.image} alt="image" />

                <button type="submit" onChange={handleChange}>Add to favorites</button>
            </form>
        </div>

    )
}