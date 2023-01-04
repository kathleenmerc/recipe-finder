import styles from './FavoriteCard.module.css'
import { useState, useEffect } from "react"
import * as favoritesAPI from '../../utilities/favorites-api'
import { Link } from "react-router-dom"
import { FiXCircle } from "react-icons/fi";

export default function FavoriteCard(props) {

    const [fav, setFav] = useState({
        title: props.title,
        image: props.image,
        id: props.id,
        spoonacularSourceUrl: props.spoonacularSourceUrl
    })

    const handleClick = async (evt) => {
        setFav({ ...fav, [evt.target.name]: props.value })
        evt.preventDefault()
        await favoritesAPI.deleteFavorite(props.id)
        props.getFavorites()

    }
    // const handleSubmit = async (evt) => {
    //     evt.preventDefault()
    //     await favoritesAPI.deleteFavorite(props.id)
    // }

    // const handleClickEdit = (evt) => {
    //     setFav

    // }
    // const handleSubmitEdit = async (evt) => {
    //     evt.preventDefault()
    //     await favoritesAPI.updateFavorite(props.id)
    // }



    return (
        <div className={styles.favoritesCard}>
                <FiXCircle className={styles.closebutton} onClick={handleClick} value={props}/>
            
            
            <div className={styles.recipe}>
                <a href={props.spoonacularSourceUrl} target="_blank" className={styles.link}>
                    <div className={styles.truncate}>{props.title}</div>
                    <img src={props.image} alt="food image" />
                </a>
            </div>




            {/* <form onSubmit={handleSubmitEdit}>
                    <button type="submit" onClick={handleClickEdit} value={props}>edit</button>
                </form> */}

        </div>
    )
}


