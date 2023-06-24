import express from 'express';
import { getRecipes, getRecipeById, addRecipe, editRecipe, deleteRecipe } from '../controller/user-controller.js';

const router = express.Router();

router.get('/', getRecipes);
router.post('/add', addRecipe);
router.get('/:id', getRecipeById);
router.put('/:id', editRecipe);
router.delete('/:id', deleteRecipe);

export default router;