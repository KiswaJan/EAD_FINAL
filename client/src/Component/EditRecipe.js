import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getRecipes, editRecipe } from '../Service/api';

const initialValue = {
    recipe_title: '',
    ingredients: '',
    instructions: '',
    photo: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditRecipe = () => {
    const [user, setUser] = useState(initialValue);
    const { recipe_title, ingredients, instructions, photo } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    });

    const loadUserDetails = async() => {
        const response = await getRecipes(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editRecipe(id, user);
        navigate(response.data);
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.recipe_title]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Recipe Edit</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Recipe Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='recipe title' value={recipe_title} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Ingredients</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ingredients' value={ingredients} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Instructions</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='instructions' value={instructions} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Photo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='photo' value={photo} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditRecipe;