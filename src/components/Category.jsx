import { useParams } from "react-router-dom";
import { useState, useEffect,useContext } from 'react';
import getProductsForCategory from "../productList";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterByCategory from "./FilterbyCategory"
import FilterByName from "./FilterByName";
import FilterByPrice from "./FilterByPrice";
import Cart from "./Cart";
import Cupon from './Cupon';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import { languageContext } from '../context/languageContext';
import "../Style/Category.css";


const Category = () => {
    const {lang} = useContext(languageContext);
    
    // CONSTANTE
    const [categoryFilter, setCategoryFilter] = useState("");
    const [nameFilter, setNameFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState(0);
    const [onCart, setOnCart] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [numOfProd, setNumOfProd] = useState(0);
    const [discountValue, setDiscountValue]= useState("");
    const [open, setOpen] = useState(false);
    const {categoryId} = useParams();
    const [filterProducts, setFilterProducts] = useState([]);
    let data = getProductsForCategory(parseInt(categoryId));
    // FUNCTII
    const onChangeCategory = (e) => {
        const category = e.target.value;
        setCategoryFilter(category);
        let newArray = [];
        newArray = data.filter(
            (item) =>
            category === "-"?
            (nameFilter ? 
                item.name.toLowerCase().includes(nameFilter.toLowerCase())
                : true) &&
            (priceFilter ? 
                Number(item.price.substring(1)) > Number(priceFilter)
                : true) : 
            (item.category === category &&
            (nameFilter? 
                item.name.toLowerCase().includes(nameFilter.toLowerCase())
                : true) &&
            (priceFilter? 
                Number(item.price.substring(1)) > Number(priceFilter)
                : true))
        );
        setFilterProducts(newArray)
    }

    const onChangeName = (e) => {
        const name = e.target.value;
        setNameFilter(name);
        let newArr = [];
        newArr = data.filter(item=>
            item.name.toLowerCase().includes(name.toLowerCase())&&
                (categoryFilter?
                    item.category === categoryFilter:true) &&
                    (priceFilter?
                            Number(item.price.substring(1)) > Number(priceFilter):true
                    )
                );
        setFilterProducts(newArr);
    }

    const onChangePrice = (e) => {
        const price = e.target.value;
        if(parseInt(price)){
            setPriceFilter(price);
            let newArr = [];
            newArr= data.filter(item=>
                Number(item.price.substring(1)) > Number(price)&&
                (categoryFilter?
                    item.category === categoryFilter:true) &&
                (nameFilter?
                    item.name.toLowerCase().includes(nameFilter.toLowerCase()):true)
            );
            setFilterProducts(newArr);
        }
    }

    const resetAll = () =>{
        setFilterProducts(data.map(item=>{
            if(item.isBought===true){
                item.isBought = false;
            }
            return item;
        }))
        setCategoryFilter("");
        setNameFilter("");
        setPriceFilter(0);
        setOnCart(false);
        setTotalPrice(0)
        setNumOfProd(0)
        setDiscountValue("")
    }

    const bought = () => {
        if(numOfProd > 0){
            let newArr = [];
            newArr = filterProducts.filter(item=>{
                return item.isBought === true;
            })
            setOnCart(true);
            setFilterProducts(newArr)
        }
    }

    const onButtonClick = (id) => {
        let newArr = [...data];
        newArr.map(item=>{
            if(item.id === id){
                if(item.isBought === true){
                    item.isBought = false;
                    setNumOfProd(numOfProd-1);
                    setTotalPrice(totalPrice=>totalPrice - Number(item.price.substring(1)))
                } else {
                    item.isBought = true;
                    setNumOfProd(numOfProd+1);
                    setTotalPrice(totalPrice=>totalPrice + Number(item.price.substring(1)))
                }
            }
            return item;
        })
        setFilterProducts(newArr)
        if(onCart){
            bought()
        }
    }

    const applyDiscount = () => {
        if(parseInt(discountValue) > 0){
            let disc = totalPrice * discountValue/100;
            setTotalPrice(totalPrice - disc)
        } else {
            setOpen(true);
            setTimeout(() => {
                setOpen(false)
            }, 2000);
        }
    }

    const changeDiscountValue = (e) => {
        const discount = e.target.value;
        setDiscountValue(discount)
    }
    
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

    useEffect(()=>{
        let data = getProductsForCategory(parseInt(categoryId));
        setFilterProducts(data)
        resetAll()
        // eslint-disable-next-line
    },[categoryId]);

    return(
        <>
        <div style={{textAlign: "center"}} id="header-text">
            {  lang.headertext2 }
        </div>
        
        <div id="filterZone" className="p-3">

            {/* Filter By Category */}
            <FilterByCategory 
                onChangeCategory={onChangeCategory} 
                categoryFilter={categoryFilter}
                selectedLang={lang}
                categoryId={categoryId}
                data={data}
            />

            {/* FILTER BY Name */}
            <FilterByName 
                nameFilter={nameFilter} 
                onChange={onChangeName}
                selectedLang={lang}
            />


            {/* Filter By Price */}
            <FilterByPrice 
                priceFilter={priceFilter} 
                onChangePrice = {onChangePrice}
                selectedLang={lang}
            />

            {/* Reset filters button */}
            <Button onClick={resetAll}>
                {lang.resetFiltersButton}
            </Button>

            {/* CART */}
            <Cart 
                numOfProd={numOfProd} 
                bought={bought} 
                price={totalPrice}
                selectedLang={lang}
            />

            {/* CUPON */}
            <Cupon 
                discountValue={discountValue} 
                changeDiscountValue={changeDiscountValue} 
                applyDiscount={applyDiscount}
                selectedLang={lang}
            />

            {/* ALERT DIALOG */}
            
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Alert severity="error">
                    {lang.invalidCoupon}
                </Alert>
            </Dialog>

        </div>
        <div className="container category-container">
            { 
            filterProducts.map(item=>{
                return(
                <div className="card align-items-center" key={item.id}>
                    <img src={item.image} alt={item.id} />
                    <p><b>{lang.nameText}</b> {item.name}</p>
                    <p><b>{lang.categoryText}</b> {item.category}</p>
                    <p><b>{lang.descriptionText}</b> {item.description}</p>
                    <p><b>{lang.shortDescriptionText}</b> {item.shortDescription}</p>
                    <p><b>{lang.filterByPricePlaceholder}</b> {item.price}</p>
                    <Button 
                        className="btn"
                        variant="contained"
                        color = {item.isBought? "error" : "success"}
                        startIcon={item.isBought? <DeleteIcon /> : <AddShoppingCartIcon />}
                        size="small"
                        onClick={()=>onButtonClick(item.id)}
                        >
                        {item.isBought ? buttonTextRemoveSet(lang) : buttonTextAddSet(lang)}
                    </Button>
                </div>
                )
            }
            )}
            
        </div>
        </>
    )
}

export default Category;