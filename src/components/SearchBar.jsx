import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Paper , IconButton} from "@mui/material";
import {Search} from '@mui/icons-material';
const SearchBar = () =>{

    const F = () =>{}

    return(
        <Paper component={"form"} onSubmit={F} sx={{borderRadius:20, border:'1px solid #E3E3E3',pl:2,boxShadow:'none',mr:{sm:5}}}>
            <input className={'search-bar'} placeholder={'search...'} value={''} onChange={F}/>
            <IconButton typeof={'submit'} sx={{p:'10px',color:'red'}}>
                <Search/>
            </IconButton>
        </Paper>
    );
}

export default SearchBar;