import React from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import Style from '../../../styles/additional/search/search.module.css'

const Search = () => {
    return (
        <>
            <Box 
                component="form" 
                className={Style.searchboxForm}>
                <TextField
                    placeholder="Search Twitter"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment
                                position="start" 
                                className={Style.searchIcon}
                            ><SearchIcon /></InputAdornment>
                        ),
                        disableUnderline: true
                    }}
                    variant="standard"
                    className={`${Style.searchbox} greyBg`}
                />
            </Box>
        </>
    )
}

export default Search