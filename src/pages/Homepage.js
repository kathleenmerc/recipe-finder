import { useState, useEffect } from "react"
import SearchForm from "../components/SearchForm"
import RecipeCard from "../components/RecipeCard"
import FavoritesPage from "./FavoritesPage"
import { addFavorite } from "../utilities/favorites-api"


export default function Homepage(props) {
    const [ingredients, setIngredients] = useState(null)
    const [favorite, setFavorite] = useState([])

    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
    
    const getFavorite = async (id) => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${REACT_APP_API_KEY}&includeNutrition=false`)
            const favInfo = await response.json()
            setFavorite(favInfo)
            console.log(favInfo)
            //console.log(favorite)
            

            const newFavorite = await addFavorite(favInfo)
            console.log(newFavorite)

        } catch (err) {
            console.log(err)
        }
    }

    const getIngredients = async (searchTerm) => {
        try {
            console.log('working before string')
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${searchTerm}&number=2`)

            console.log('working after string')
            const data = await response.json()
            console.log('working after data json')
            setIngredients(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }



    //  //This will run on the first render but not on subsquent renders
    // // useEffect(() => {
    // //     getIngredients()
    // // }, [])

    const loaded = () => {
        return (
            <div>

                <div>
                    {ingredients.map((recipe) => {
                        return (
                            <div key={recipe.id}>
                                <div><RecipeCard title={recipe.title} image={recipe.image} id={recipe.id} getFavorite={getFavorite} favorite={favorite}/></div>
                                
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
        <div className="homepage">
            <h1>homepage</h1>
            <SearchForm getIngredients={getIngredients} />
            <div>
                {ingredients ? loaded() : loading()}
            </div>


        </div>
    )
}