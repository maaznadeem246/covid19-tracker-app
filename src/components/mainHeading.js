import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
        root:{
        fontFamily: "'Varela Round', sans- serif",
        padding:15,
        fontSize:35,

        [theme.breakpoints.down('sm')]: {
            fontSize: 27,
        },

        }
}))

const  MainHeading = () => {
    const classes = useStyles()
    return (
        <Typography className={classes.root} align="center" variant="h5">
            Covid19 Tracker 
        </Typography>
    )

}

export default MainHeading;