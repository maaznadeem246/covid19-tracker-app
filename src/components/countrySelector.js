import React, {useState} from "react"
import { Select, FormControl, InputLabel, MenuItem, makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width:300,
        padding:10,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            width: 300,
        },    
    },
    selectCountry:{
        
        '&>div':{
            padding: 10,
        }
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function CountrySelector({ countryReader,handleChange,country }){
    

    const classes = useStyles();
   

    const countries = countryReader()
    

    
    // console.log(Object.values(countries).length)
    return (
        
        <FormControl variant="outlined" className={classes.formControl}>
            {/* <InputLabel id="countrySelectLabel">Country</InputLabel> */}
            <Select
                labelId="countrySelectLabel"
                id="countrySelects"
                value={country}
                onChange={handleChange}
                className={classes.selectCountry}
            >
                <MenuItem  value="all">All</MenuItem>
                
                {countries.map(v=>(
                    <MenuItem className={classes.selectCountry} value={v.iso2}>{v.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}