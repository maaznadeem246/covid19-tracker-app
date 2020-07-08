import React from 'react';
import { Typography,Grid, Card, CardContent, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        minWidth: 200,
        textAlign:'center'
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
});


function capFirstLe(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const CardDet = ({classes, name, value}) => (
    <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {name}
            </Typography>
            <Typography variant="h5" component="h2">
                {value}
        </Typography>
        </CardContent>
    </Card>
)

const DetailsCard = ({totalDetailsReader}) => {

    const classes = useStyles();

    const totalDetails = totalDetailsReader()
    console.log(totalDetails)
    const values = Object.values(totalDetails)
    const keys = Object.keys(totalDetails)
    console.log(keys)
    console.log(values)
    return (
        <div>
            <Grid container justify="center" spacing={3}>
                {
                    values.map((v,i)=>(
                        <Grid key={i} item>
                            <CardDet classes={classes} name={capFirstLe(keys[i])} value={v.value} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )

}

export default DetailsCard;