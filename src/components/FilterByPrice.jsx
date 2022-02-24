import TextField from '@mui/material/TextField';

const FilterPrice = ({priceFilter, onChangePrice, selectedLang}) => {

    return(
        <TextField
            id="outlined-number"
            label={
                selectedLang.filterByPricePlaceholder}
            type="number"
            value={priceFilter}
            onChange={onChangePrice}
            InputLabelProps={{
                shrink: true,
            }}
            size="small"
        />
    )
}

export default FilterPrice;