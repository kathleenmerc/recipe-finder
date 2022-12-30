import { useState, useEffect } from "react"
import SearchForm from "../components/SearchForm"
import RecipeCard from "../components/RecipeCard"


export default function Homepage(props) {
    const [ingredients, setIngredients] = useState(null)

    //const MyApiKey = process.env.API_KEY

    const getIngredients = async (searchTerm) => {
        try {
            console.log('working before string')
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=fa9fcf5d3f1d4146b14d1b4acc7d55e1&ingredients=${searchTerm}&number=2`)

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
    // useEffect(() => {
    //     getIngredients()
    // }, [])

    const loaded = () => {
        return (
            <div>
                <h1>{ingredients[0].title}</h1>
                <h1>{ingredients[1].title}</h1>
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