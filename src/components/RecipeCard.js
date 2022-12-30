import { Link } from 'react-router-dom'
import { ingredients } from '../pages/Homepage'

export default function RecipeCard (props) {

    return (
        <div className='recipeCardContainer'>
            <h1>{props.title}</h1>
             
        </div>

    )
}