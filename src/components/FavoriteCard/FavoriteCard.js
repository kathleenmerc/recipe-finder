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
        cooked: false
    })

    const [error, setError] = useState(false);

    const handleDelete = async (evt) => {
        try {
            setFav({ ...fav, [evt.target.name]: evt.target.value })
            evt.preventDefault()
            await favoritesAPI.deleteFavorite(props.id)
            props.getFavorites()
        } catch {
            setError({ error: "Unable to delete" });
        }

    }


    const handleChange = async (evt) => {
        // Still needs to be modified:
        try {
            if (evt.target.value === "on" || evt.target.value === "true") {
                evt.target.value = "true"
            } else if (evt.target.value === "off" || evt.target.value === "false") {
                evt.target.value = "true"
            }

            setFav({ ...fav, [evt.target.name]: evt.target.value })

            const update = await favoritesAPI.updateFavorite(props.id, fav)

            //setFav(update)
            //console.log(update)
            //console.log(props.cooked)

        } catch {
            setError({ error: "Unable to update" });
        }

    }

    // const handleSubmit = async (evt) => {
    //     evt.preventDefault()
    //     console.log('this is handlesubmit')
    //     try {
    //         const update = await favoritesAPI.updateFavorite(props.id, props.cooked)
    //         setFav(update)
    //         console.log(update)
    //     } catch {
    //         setError({ error: "Unable to update" });
    //     }

    // }

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
                <input type="checkbox" name="cooked" onChange={handleChange} />
            </div>
        </div>
    )
}


