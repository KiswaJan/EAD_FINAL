import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:8080';

export const getRecipes = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addRecipe = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteRecipe = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editRecipe = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}