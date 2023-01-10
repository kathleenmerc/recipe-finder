import styles from './FavoritesPage.module.css'
import { useState, useEffect } from 'react'
import * as favoritesAPI from '../../utilities/favorites-api'
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import Nav from '../../components/Nav/Nav';


export default function FavoritesPage(props) {
    const [favorites, setFavorites] = useState([])

    const getFavorites = async () => {
        try {
            const foundFavorites = await favoritesAPI.getFavoritesAPI()
            setFavorites(foundFavorites)
            console.log('foundfavorites')
            console.log(foundFavorites)

        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getFavorites();
    }, [])


    const loaded = () => {
        return (
            <div>
                <div className={styles.favoritesCardContainer}>
                    {favorites.map((favorite) => {
                        return (
                            <div key={favorite.id}>
                                <FavoriteCard cooked={favorite.cooked} title={favorite.title} image={favorite.image} id={favorite.id} spoonacularSourceUrl={favorite.spoonacularSourceUrl} getFavorites={getFavorites} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }


    return (
        <div className={styles.favoritesPage}>
            
            <div className={styles.headerContainer}>
                <h1 className={styles.header}>Favorite Recipes</h1>
            </div>

            <Nav setUser={props.setUser} />

            {favorites ? loaded() : loading()}
        </div>
    )
}