import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addRecipe } from '../Service/api';
import { useNavigate } from 'react-router-dom';

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
        margin-top: 20px;
`;

const AddRecipe = () => {
    const [user, setUser] = useState(initialValue);
    const { recipe_title, ingredients, instructions, photo } = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addRecipe(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add Recipes</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Recipe Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='recipe_title' value={recipe_title} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Ingredients</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ingredients' value={ingredients} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Instructions</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='instructions' value={instructions} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">photo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='photo' value={photo} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Recipe</Button>
            </FormControl>
        </Container>
    )
}

export default AddRecipe;