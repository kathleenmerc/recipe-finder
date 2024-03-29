import styles from './SearchPage.module.css'
import { useState, useEffect } from "react"
import SearchForm from "../../components/SearchForm/SearchForm"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import Nav from "../../components/Nav/Nav"
import { addFavorite } from "../../utilities/favorites-api"


export default function SearchPage({ user, setUser }) {
    const [ingredients, setIngredients] = useState(null)
    const [favorite, setFavorite] = useState([])
    const [error, setError] = useState('')
    

    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

    const getFavorite = async (id, user) => {
        try {
            // CODE FLOW TO GET AND SET RECIPE DATA FOR NEW FAVORITE:
            // Use the recipe spoonacular id to fetch the favInfo:
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${REACT_APP_API_KEY}&includeNutrition=false`)
            const favInfo = await response.json()

            // Add the current User's userId to favInfo:
            console.log(user)
            favInfo.userId = user._id

            // Set a new Favorite using the favInfo from spoonacular, including the user's userId (favInfo.userId):
            setFavorite(favInfo)
            console.log('favinfo')
            console.log(favInfo)

            // CODE FLOW TO ADD THE NEW FAVORITE TO DATABASE:
            const newFavorite = await addFavorite(favInfo)
            console.log('new favorite here')
            console.log(newFavorite)

        } catch {
            setError('Unable to create a new favorite')
            console.log(error)
        }
    }

    const getIngredients = async (searchTerm) => {
        try {
            // CODE FLOW TO GET RECIPES FROM SEARCHING INGREDIENTS:
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${searchTerm}&number=9`)
            const data = await response.json()
            setIngredients(data)

            if (data.length === 0) {
                setError('No recipes found')
            } 
        } catch {
            setError('Unable to fetch recipes')
            console.log(error)
        }
    }

    // This will run on the first render but not on subsquent renders:
    // useEffect(() => {
    //     getIngredients()
    // }, [])

    const loaded = () => {
        return (
            <div>
                <div className={styles.recipeCardContainer}>
                    {ingredients.map((recipe) => {
                        return (
                            <div key={recipe.id}>
                                <div><RecipeCard user={user} setUser={setUser} title={recipe.title} image={recipe.image} id={recipe.id} spoonacularSourceUrl={recipe.spoonacularSourceUrl} getFavorite={getFavorite} favorite={favorite} /></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const loading = () => {
        return <></>
    }

    return (
        <div className={styles.searchPage}>

            <div className={styles.headerContainer}>
                <h1 className={styles.header}>Recipe Finder</h1>
            </div>

            <Nav setUser={setUser} />
            <SearchForm getIngredients={getIngredients} />

            <div>
                {ingredients ? loaded() : loading()}
            </div>

            <p className="error-message">{error}</p>
        </div>
    )
}