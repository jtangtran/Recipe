import React from 'react';
import '../CSS/Recipe.css';

const Recipe = ({title, image, ingredients}) => {
    return (
        <div className='recipe'>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li key={ingredient.foodId}>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt="" className='image'/>
        </div>
    )
}

export default Recipe;