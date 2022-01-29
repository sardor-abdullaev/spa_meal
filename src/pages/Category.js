import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilterByCategory } from '../api';
import Loader from '../components/Loader';
import MealList from '../components/MealList';

export default function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilterByCategory(name).then(data => setMeals(data.meals))
    }, [name])
    return (
        <>
            {!meals.length ? <Loader /> : <MealList meals={meals} />}
        </>
    )
}
