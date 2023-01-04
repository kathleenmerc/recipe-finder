import styles from './FavoritesPage.module.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import * as favoritesAPI from '../../utilities/favorites-api'
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import Nav from '../../components/Nav/Nav';


export default function FavoritesPage(props) {
    const [favorites, setFavorites] = useState([])

    const getFavorites = async () => {
        try {
            const foundFavorites = await favoritesAPI.getFavoritesAPI()
            setFavorites(foundFavorites)
            console.log(foundFavorites)
            console.log('favorites inside getFavorites function')
            //console.log(favorites)
            console.log('im here in get favorites function')
        } catch (err) {
            console.log('error is in favorites page')
            console.log(err)
        }
    }


    useEffect(() => {
        getFavorites();
    }, [])

    console.log('favorites outside getFavorites fxn')
    console.log(favorites)

    // const handleDelete = async (evt) => {
    //     evt.preventDefault()
    //     await favoritesAPI.deleteFavorite(props.id)
    // }





    const loaded = () => {
        return (
            <div>
                <div className={styles.favoritesCardContainer}>
                    {favorites.map((favorite) => {
                        return (
                            <div key={favorite.id}>

                                <FavoriteCard title={favorite.title} image={favorite.image} id={favorite.id} spoonacularSourceUrl={favorite.spoonacularSourceUrl} getFavorites={getFavorites}/>
                                {/* <button type="submit" onClick={handleDelete}> delete</button> */}

                            </div>
                        )
                    })
                    }
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
            <Nav />
            {favorites ? loaded() : loading()}


        </div>
    )
}