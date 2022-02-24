import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductList = ({onButtonClick, id, image, price, description, category, name, shortDescription, isBought, selectedLang}) => {
    
    const buttonTextRemoveSet = (selectedLang) => {
        return(
            selectedLang.removeCartButton
        )
    };
    const buttonTextAddSet = (selectedLang) => {
        return(
            selectedLang.addCartButton
        )
    
}
            return(
            <div id="card" key={id}>
                <hr />
                <img src={image} alt="prodDesc"/>
                <p><b>{selectedLang.filterByPricePlaceholder}</b> {price}</p>
                <p><b>{selectedLang.descriptionText}</b> {description}</p>
                <p><b>{selectedLang.categoryText}</b> {category}</p>
                <p><b>{selectedLang.nameText}</b> {name}</p>
                <p><b>{selectedLang.shortDescriptionText}</b> {shortDescription}</p>
                
                <Button 
                    className="btn"
                    variant="contained"
                    color = {isBought? "error" : "success"}
                    startIcon={isBought? <DeleteIcon /> : <AddShoppingCartIcon />}
                    size="small"
                    onClick={()=>onButtonClick(id)}
                    >
                    {isBought ? buttonTextRemoveSet(selectedLang) : buttonTextAddSet(selectedLang)}
                </Button>
            </div>
            )
        
    
}

export default ProductList;