import styles from './SearchForm.module.css'
import { useState, useEffect } from 'react'

export default function SearchForm(props) {
    const [formData, setFormData] = useState({
        searchterm: ""
    })

    const [error, setError] = useState(false)

    const handleChange = (event) => {
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


            <div className={styles.steps}>
                <h5>Step 1: Add your ingredients</h5>
                <h5>Step 2: Hit Search</h5>
                <h5>Step 3: Choose your favorite recipes</h5>
            </div>
            <form onSubmit={handleSubmit} className={styles.searchContainer}>
                <input className={styles.searchbar} type="text" name="ingredients" onChange={handleChange} placeholder="chicken, apples, butter" />
                <button type="submit" className={styles.searchbutton}>Search</button>
            </form>

            {error ? <p>Please enter an ingredient</p> : ""}
        </div>
    )
};