import styles from './Homepage.module.css'
import { useState, useEffect } from "react"
import SearchForm from "../../components/SearchForm/SearchForm"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import Nav from "../../components/Nav/Nav"
import { addFavorite } from "../../utilities/favorites-api"


export default function Homepage(props) {
    const [ingredients, setIngredients] = useState(null)
    const [favorite, setFavorite] = useState([])

    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

    const getFavorite = async (id) => {
        try {
            // CODE FLOW TO GET AND SET RECIPE DATA FOR NEW FAVORITE:
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${REACT_APP_API_KEY}&includeNutrition=false`)
            const favInfo = await response.json()
            setFavorite(favInfo)
            console.log(favInfo)
            //console.log(favorite)

            // CODE FLOW TO ADD FAVORITE TO DATABASE:
            const newFavorite = await addFavorite(favInfo)
            console.log(newFavorite)



        } catch (err) {
            console.log(err)
        }
    }

    const getIngredients = async (searchTerm) => {
        try {
            // CODE FLOW TO GET RECIPES FROM SEARCHING INGREDIENTS:
            //console.log('working before string')
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_API_KEY}&ingredients=${searchTerm}&number=9`)

            //console.log('working after string')
            const data = await response.json()
            //console.log('working after data json')
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

            <div className={styles.recipeCardContainer}>
                    {ingredients.map((recipe) => {
                        return (
                            <div key={recipe.id}>
                                <div><RecipeCard title={recipe.title} image={recipe.image} id={recipe.id} spoonacularSourceUrl={recipe.spoonacularSourceUrl} getFavorite={getFavorite} favorite={favorite} /></div>
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
        <div className={styles.homepage}>
            <div className={styles.headerContainer}>
                <h1 className={styles.header}>Recipe Finder</h1>
            </div>
            <Nav />

            <SearchForm getIngredients={getIngredients} />
            <div>
                {ingredients ? loaded() : loading()}
            </div>
        </div>
    )
}