import { Link } from 'react-router-dom'
import * as favoritesAPI from '../utilities/favorites-api'
import { favorite } from '../pages/Homepage'


export default function FavoriteCard (props) {

    return (
        <div className='FavoriteCardContainer'>
                <label>{props.title}</label>
                <img src={props.image} alt="image" />
        </div>

    )
}