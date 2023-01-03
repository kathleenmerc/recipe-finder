import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
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
                {favorites.map((favorite, i) => {
                    return (
                        <div key={i}>
                            <FavoriteCard title={favorite.title} image={favorite.image} id={favorite.id} spoonacularSourceUrl={favorite.spoonacularSourceUrl} />
                            {/* <button type="submit" onClick={handleDelete}> delete</button> */}
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