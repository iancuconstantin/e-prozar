import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Cupon = ({discountValue,changeDiscountValue, applyDiscount, selectedLang}) => {
    
    return(
        <>
            <TextField
                id="outlined-required"
                label={selectedLang.couponPlaceHolder}
                size="small"
                value = {discountValue}
                onChange = {changeDiscountValue}
            />
            <Button 
                className="btn"
                variant="contained"
                color = "success"
                startIcon = {<LocalOfferIcon/>}
                size="small"
                onClick={applyDiscount}
                >
                {selectedLang.couponButton}
            </Button>
        </>

    )
}


export default Cupon