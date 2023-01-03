import { useState, useEffect } from "react"
import * as favoritesAPI from '../utilities/favorites-api'
import { Link } from "react-router-dom"

export default function FavoriteCard(props) {
    


    return (
        <div className="favoritesCard">
            <h1>favorites card</h1>
            {props.title}
            <img src={props.image} alt="food" />
    
           
        </div>
    )
}


    