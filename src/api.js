import { API_URL } from "./config";

const getMealById = async (mealId) => {
    const response = await fetch(API_URL + `lookup.php?i=${mealId}`);
    return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return response.json();
}

const getFilterByCategory = async (category) => {
    const response = await fetch(API_URL + `filter.php?c=${category}`);
    return response.json();
}
export { getMealById, getAllCategories, getFilterByCategory };