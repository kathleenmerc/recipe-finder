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
        userId: props.userId
    })

    const [error, setError] = useState(false);

    const handleDelete = async (evt) => {
        try {
            setFav({ ...fav, [evt.target.name]: evt.target.value })
            evt.preventDefault()
            await favoritesAPI.deleteFavorite(props._id)
            props.getFavorites()
        } catch {
            setError({ error: "Unable to delete" });
        }

    }


    const handleChange = async (evt) => {
        try {
            // changed evt.target.value to evt.target.checked
            // setFav({ ...fav, [evt.target.name]: evt.target.value })
            setFav({ ...fav, [evt.target.name]: evt.target.checked })
            const favCopy = fav

            // changed from value to checked
            // favCopy.cooked = evt.target.value
            favCopy.cooked = evt.target.checked

            console.log('LOOK HERE AT FAV')
            console.log(fav)
            const update = await favoritesAPI.updateFavorite(props.id, favCopy)

            //setFav(update)
            //console.log(update)
            //console.log(props.cooked)
            //props.getFavorites()
        } catch {
            setError({ error: "Unable to update" });
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


