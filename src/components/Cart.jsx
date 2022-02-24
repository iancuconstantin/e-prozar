import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
},
}));

const Cart = ({numOfProd, bought, price, selectedLang}) =>{
    return(
        <>
            <IconButton aria-label="cart" onClick={bought}>
                <StyledBadge badgeContent={numOfProd} color="success">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
            <span><b>{selectedLang.totalPriceText} {price}</b></span>
        </>
    )
}

export default Cart;