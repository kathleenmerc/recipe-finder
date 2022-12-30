import { useState, useEffect } from 'react'


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
        <div className="form">
            <h1>form</h1>
            <form onSubmit={handleSubmit}>
                <label>Search ingredients:</label>
                <input className="search" type="text" name="ingredients" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            {
                error ? <p>Please enter an ingredient</p> : ""
            }
        </div>
    )
};