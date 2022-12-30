import { Link } from 'react-router-dom'
import { ingredients } from '../pages/Homepage'
import { useState } from 'react'
import * as favoritesAPI from '../utilities/favorites-api'
export default function RecipeCard (props) {

    const [favorite, setFavorite] = useState({
        title: "",
    })

    const handleChange = (evt) => {
        setFavorite({...favorite, [evt.target.name] : evt.target.value})
    }

    const handleSubmit =  async (evt) => {
        evt.preventDefault()
        const favorite = await favoritesAPI.addFavorite()
        console.log(favorite)
    }

    return (
        <div className='recipeCardContainer'>
            <form onSubmit={handleSubmit}>
                <label>{props.title}</label>
                <button type="submit" name="title" value={props.title} onChange={handleChange}>Add to favorites</button>
            </form>
        </div>

    )
}