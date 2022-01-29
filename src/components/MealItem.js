import React from 'react';
import { Link } from 'react-router-dom';

export default function MealItem(props) {
    const { idMeal, strMeal, strMealThumb } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title"><b>{strMeal}</b></span>
                <p>...</p>
            </div>
            <div className='card-action'>
                <Link
                    to={`/meal/${idMeal}`}
                    className='btn'>
                    Watch Receipe
                </Link>
            </div>
        </div>
    )
}
