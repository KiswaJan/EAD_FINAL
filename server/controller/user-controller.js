import User from '../controller/user-controller.js';

// Get all Recipes
export const getRecipes = async (request, response) => {
    try{
        const users = await User.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the Recipes in database
export const addRecipe = async (request, response) => {
    const user = request.body;
    
    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a Recipe by id
export const getRecipeById = async (request, response) => {
    try{
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Saving edited recipes in database
export const editRecipe = async (request, response) => {
    let user = request.body;

    const editRecipe = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editRecipe);
        response.status(201).json(editRecipe);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting recipes from database
export const deleteRecipe = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("Recipe deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}