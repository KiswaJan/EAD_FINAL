import AllRecipes from './Component/AllRecipes';
import AddRecipe from './Component/AddRecipe';
import EditRecipe from './Component/EditRecipe';
import NavBar from './Component/NavBar';
import RecipeManagement from './Component/RecipeManagement';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<RecipeManagement /> } />
        <Route path="all" element={<AllRecipes /> } />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
