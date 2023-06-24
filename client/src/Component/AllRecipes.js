import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getRecipes, deleteRecipe } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllRecipes = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllRecipes();
    }, []);

    const deleteUserData = async (id) => {
        await deleteRecipe(id);
        getAllRecipes();
    }

    const getAllRecipes = async () => {
        let response = await getRecipes();
        setUsers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Recipe Title</TableCell>
                    <TableCell>Ingregients</TableCell>
                    <TableCell>Instructions</TableCell>
                    <TableCell>Upload Photo</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.recipe_title}</TableCell>
                        <TableCell>{user.ingredients}</TableCell>
                        <TableCell>{user.instructions}</TableCell>
                        <TableCell>{user.photo}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllRecipes;