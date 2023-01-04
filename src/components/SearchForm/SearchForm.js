import styles from './SearchForm.module.css'
import { useState, useEffect } from 'react'
const tomatoes = require('../../images/tomatoes.jpg')


export default function SearchForm(props) {
    const [formData, setFormData] = useState({
        searchterm: ""
    })

    const [error, setError] = useState(false)


    const handleChange = (event) => {
        // let string = event.target.value
        // let newString = string.replace(/,/g, ',+')
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (formData.ingredients) {
            setError(false)
            props.getIngredients(formData.ingredients)
        } else {
            setError(true)
        }
    }

    return (
        <div className={styles.searchform}>
            <div className={styles.subtitlesContainer}>
                <h3>What's in your kitchen?</h3>
                <h5>Find tasty recipes to make with the ingredients you have now</h5>
            </div>

            <div className={styles.steps}>
                <h5>Step 1: Add your ingredients</h5>
                <h5>Step 2: Hit Search</h5>
                <h5>Step 3: Choose your favorite recipes</h5>
            </div>


            <form onSubmit={handleSubmit} className={styles.searchContainer}>
                <input className={styles.searchbar} type="text" name="ingredients" onChange={handleChange} placeholder="chicken, apples, butter" />
                <button type="submit" className={styles.searchbutton}>Search</button>
            </form>

            {
                error ? <p>Please enter an ingredient</p> : ""
            }
        </div>
    )
};