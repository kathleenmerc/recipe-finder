import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeList( {recipeData} ) {


  return (
    <div>
        <h1>RecipeList</h1>
        {recipeData.ingredients.map((recipe) => {
            return(
                <RecipeCard title={props.title} id={props.id}/>
            )
        })}

    </div>
  )
}

