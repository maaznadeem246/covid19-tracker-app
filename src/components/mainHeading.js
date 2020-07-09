import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
        root:{
        fontFamily: "'Varela Round', sans- serif",
        padding:20,
        fontSize:42,


        }
})

const  MainHeading = () => {
    const classes = useStyles()
    return (
        <Typography className={classes.root} align="center" variant="h5">
            Covid19 Tracker 
        </Typography>
    )

}

export default MainHeading;