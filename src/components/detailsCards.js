import React from 'react';
import { Typography,Grid, Paper, Card, CardContent, makeStyles } from '@material-ui/core';
import CountUp  from "react-countup"

const useStyles = makeStyles((theme)=>({
    mainGrid:{
        padding:'20px 10px 10px 10px',
 
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin:'auto',
            padding:0,
            paddingTop: '10px'
        },
        [theme.breakpoints.between('sm', 'md')]: {
        width: '100%',
        }
    },
    root:{
        boxShadow: theme.shadows[3],
        borderRadius:7,
        margin:'auto',
        textAlign: 'center',
        [theme.breakpoints.only('xs')]: {
                width:'90%'
        },
    },
    roott: {
        margin:'auto',
        maxWidth:'90%',
        boxShadow:theme.shadows[5],
        borderRadius:7,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
        [theme.breakpoints.down('sm')]: {
          
        },
    },
    casesNumber:{
        paddingBottom:4,
        [theme.breakpoints.down('sm')]: {
            fontSize:'1.3rem',
        },
    },
    mainTitle:{
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
    },
    date:{
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
        },
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
            <Typography className={classes.casesNumber} variant="h5" component="h2">
                <CountUp 
                    start={0}
                    end={value}
                    duration={3}
                    delay={0.2}
                    separator=","
                />
            </Typography>
            <Typography className={classes.date}>
                {date}
            </Typography>
        </CardContent>
    </Card>
)

const DetailsCard = ({ totalDetailsReader}) => {

    
    const classes = useStyles();

    const totalDetails = totalDetailsReader('all')
 
    const values = Object.values(totalDetails.details)
    const keys = Object.keys(totalDetails.details)



    return (
        <Card  className={classes.roott}> 
        <CardContent>
            <Grid container justify="center" className={classes.mainGrid} spacing={3}>
                <Grid justify="center" item  container  xs={12} sm={12} md={12} lg={12}>
                    <Typography gutterBottom className={classes.mainTitle} justify="center" variant="h5" component="h2">
                             Covid19 Cases Statistics
                    </Typography>
                </Grid>
                {
                    values.map((v,i)=>(
                        <Grid key={i} xs={12} sm={3}  md={6} justify="center"  item>
                        {/* new Date(totalDetails.lastUpdate).toDateString() */}
                            <CardDet classes={classes} name={capFirstLe(keys[i])} date={new Date(totalDetails.lastUpdate).toDateString()} value={v} />
                        </Grid>
                    ))
                }
            </Grid>
        </CardContent>
        </Card>
    )

}

export default DetailsCard;