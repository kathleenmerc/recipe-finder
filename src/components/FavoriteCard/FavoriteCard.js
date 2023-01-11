import styles from './FavoriteCard.module.css'
import { useState, useEffect } from "react"
import * as favoritesAPI from '../../utilities/favorites-api'
import { FiXCircle } from "react-icons/fi";


export default function FavoriteCard(props) {

    const [fav, setFav] = useState({
        title: props.title,
        image: props.image,
        id: props.id,
        spoonacularSourceUrl: props.spoonacularSourceUrl,
        cooked: "",
        userId: props.userId,
        objectId: props.objectId
    })

    const [error, setError] = useState('');

    const handleDelete = async (evt) => {
        try {
            setFav({ ...fav, [evt.target.name]: evt.target.value })
            evt.preventDefault()
            await favoritesAPI.deleteFavorite(props.objectId)
            console.log('props is here')
            console.log(props.objectId)
            props.getFavorites()
        } catch {
            setError('Unable to delete')
            console.log(error)
        }

    }


    const handleChange = async (evt) => {
        try {
            // Set cooked property to a true/false value using evt.target.checked:
            setFav({ ...fav, [evt.target.name]: evt.target.checked })

            // Create a copy of fav to use for the updated favorite:
            const favCopy = fav

            // Set favCopy.cooked to the current value of checkbox:
            favCopy.cooked = evt.target.checked

            // Update the Favorite using the information from favCopy:
            const update = await favoritesAPI.updateFavorite(props.id, favCopy)
            console.log('update here')
            console.log(update)

        } catch {
            setError('Unable to update')
            console.log(error)
        }
    }


    return (
        <div className={styles.favoritesCard}>
            <FiXCircle className={styles.closebutton} onClick={handleDelete} value={props} />

            <div className={styles.recipe}>
                <a href={props.spoonacularSourceUrl} target="_blank" className={styles.link}>
                    <div className={styles.truncate}>{props.title}</div>
                    <img src={props.image} alt="food image" />
                </a>
            </div>

            <div className={styles.checkbox}>
                <label>Cooked</label>
                {props.cooked === true ? <input type="checkbox" name="cooked" onChange={handleChange} defaultChecked /> : <input type="checkbox" name="cooked" onChange={handleChange}  />}
            </div>
        </div>
    )
}


