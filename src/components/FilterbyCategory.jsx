import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const FilterCategory = ({categoryFilter, onChangeCategory, selectedLang,data}) =>{
    const category = data.map(item=>item.category);
    const uniqueChars = [...new Set(category)];
    
    return(
        <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="demo-simple-select-label">
                {selectedLang.categoryText}
            </InputLabel>
            <Select
                id="category"
                label="Category"
                value={categoryFilter}
                onChange={onChangeCategory}
                size="small"
                >
                <MenuItem value="-" key="0">-</MenuItem>
                {uniqueChars.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default FilterCategory;