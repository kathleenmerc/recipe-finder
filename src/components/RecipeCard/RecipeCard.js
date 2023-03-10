import styles from './RecipeCard.module.css'
import { useState } from 'react'
import { FiPlusCircle } from "react-icons/fi";


export default function RecipeCard(props) {

    const [favoriteData, setFavoriteData] = useState({
        title: props.title,
        image: props.image,
        id: props.id,
        spoonacularSourceUrl: props.spoonacularSourceUrl,
    })

    const [error, setError] = useState('')

    const handleChange = (evt) => {
        setFavoriteData({ ...favoriteData, [evt.target.name]: props.value })
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            console.log('fav data id')
            console.log(favoriteData.id)
            props.getFavorite(favoriteData.id, props.user)
            alert(`Added ${favoriteData.title} to your favorites`)
        } catch {
            setError('Unable to add to your favorites')
            console.log(error)
        }
    }

    return (
        <div className={styles.recipeCard}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={`${styles.recipeTitle} ${styles.truncate}`}>{props.title}</h2>
                <img src={props.image} alt="image" />
                <button className={styles.favButton} type="submit" value={props} onChange={handleChange}><FiPlusCircle className={styles.addIcon} /> Add to favorites</button>
            </form>
        </div>
    )
}