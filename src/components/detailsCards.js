import React from 'react';
import { Typography,Grid, Paper, Card, CardContent, makeStyles } from '@material-ui/core';
import CountUp  from "react-countup"

const useStyles = makeStyles((theme)=>({
    mainGrid:{
        padding:'20px 10px 10px 10px',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            margin:'auto',
            paddingTop:'10px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
        width: '100%',
        }
    },
    root: {


    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
}));


function capFirstLe(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const CardDet = ({classes, name, value, date}) => (
    <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {name}
            </Typography>
            <Typography variant="h5" component="h2">
                <CountUp 
                    start={0}
                    end={value}
                    duration={3}
                    delay={0.2}
                    separator=","
                />
            </Typography>
            <Typography>
                {date}
            </Typography>
        </CardContent>
    </Card>
)

const DetailsCard = ({totalDetailsReader}) => {

    
    const classes = useStyles();

    const totalDetails = totalDetailsReader('all')
  
    const values = Object.values(totalDetails.details)
    const keys = Object.keys(totalDetails.details)



    return (
        <div>
            <Grid container justify="center" className={classes.mainGrid} spacing={2}>
                
                {
                    values.map((v,i)=>(
                        <Grid key={i} xs={12} sm={6} md={6} justify="center"  item>
                        {/* new Date(totalDetails.lastUpdate).toDateString() */}
                            <CardDet classes={classes} name={capFirstLe(keys[i])} date={new Date(totalDetails.lastUpdate).toDateString()} value={v} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )

}

export default DetailsCard;