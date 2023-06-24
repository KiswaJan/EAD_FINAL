

import { Box, Typography, styled } from '@mui/material';


const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;



const RecipeManagement = () => {

    return (
        <Header>
            <Typography variant="h4">Recipe Mangement</Typography>
            <Box style={{display: 'flex'}}/>
                
        </Header>
    )
}

export default RecipeManagement;