import TextField from '@mui/material/TextField';

const FilterName = ({nameFilter, onChange, selectedLang}) => {

    return(
        <TextField
            id="outlined-required"
            label = {selectedLang.filterByNamePlaceholder}
            size="small"
            value ={nameFilter}
            onChange={onChange}
        />
    )
}

export default FilterName;