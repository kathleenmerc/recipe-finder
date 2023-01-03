import { useState, useEffect } from 'react'
import * as favoritesAPI from '../utilities/favorites-api'
import FavoriteCard from '../components/FavoriteCard';


export default function FavoritesPage(props) {

    const [favorites, setFavorites] = useState([])

    const getFavorites = async () => {
        try {
            const foundFavorites = await favoritesAPI.getFavoritesAPI()
            setFavorites(foundFavorites)
            console.log(foundFavorites)
            console.log('favorites inside getFavorites function')
            console.log(favorites)
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

    const loaded = () => {
        return (
            <div>
                {favorites.map((favorite, i) => {
                        return (
                            <div key={i}>
                               <FavoriteCard title={favorite.title} image={favorite.image} sourceUrl={favorite.sourceUrl} />
                            
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }


    return (
        <div className="favoritesPage">
            <h1>favorites page</h1>
            {favorites ? loaded() : loading()}
 
            
        </div>
    )
}