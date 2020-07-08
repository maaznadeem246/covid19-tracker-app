import React, {useState} from "react"
import { Select, FormControl, InputLabel, MenuItem, makeStyles } from "@material-ui/core"
import {countries} from "countries-list"

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        padding:20,    
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function CountrySelector({ countryReader}){
    const [country, setCountry] =  useState('all');

    const classes = useStyles();
    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const {countries} = countryReader()
    

    
    // console.log(Object.values(countries).length)
    return (
        
        <FormControl className={classes.formControl}>
            {/* <InputLabel id="countrySelectLabel">Country</InputLabel> */}
            <Select
                labelId="countrySelectLabel"
                id="countrySelects"
                value={country}
                onChange={handleChange}
            >
                <MenuItem value="all">All</MenuItem>
                {countries.map(v=>(
                    <MenuItem value={v.iso2}>{v.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}