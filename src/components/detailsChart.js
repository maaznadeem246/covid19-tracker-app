import React from "react"
import { Grid, makeStyles, createMuiTheme, Card, CardContent } from '@material-ui/core';
import {Line} from "react-chartjs-2"
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

const theme = createMuiTheme()

const useStyles = makeStyles((theme)=>({
    root: {
        padding: '20px 5px 15px 5px',
        [theme.breakpoints.down('xs')]: {
            paddingRight: 0,
            paddingLeft: 0,
        },
    },
    chartCcontainer:{
        position: 'relative',
        margin: 'auto',
        height:'370px',
        [theme.breakpoints.down('sm')]: {
            height: 260,
        },
        // [theme.breakpoints.only('sm')]: {
        //     width: 500,
        //     height: 300,
        // },
    },
    roott: {
        // padding: '20px 5px 15px 5px',
        marginTop:20,
        marginBottom:20,
        margin: 'auto',
        width:'90%',
        boxShadow: theme.shadows[5],
        borderRadius: 7,
        [theme.breakpoints.down('xs')]: {
            paddingRight: 0,
            paddingLeft: 0,
        },
    },

}));



const Chart = ({ dailyDateReader, width}) => {
    const chartDetail = dailyDateReader()
    let chartDetails = chartDetail ? chartDetail : {cases:[],deaths:[],recovered:[], active:[]}
    console.log(chartDetails)
    console.log(theme.breakpoints.width('sm'))
    const classes = useStyles();
    const LineChart = (
        <Line 
            options={{
                responsive: true, 
                scales : { xAxes : [{ gridLines: { display: false } }], yAxes: [{ gridLines: { display: true} }]}, 
                maintainAspectRatio:false,
                
                title: {
                    display: true,
                    fontSize:20,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans- serif',
                    fontStyle:'normal',
                    fontColor:'black',
                    text: 'Historical Data Chart of Covid19'
                },
                legend: {
                    display: true,
                    lineCap:'round',
                    
                    labels: {
                        fontSize: isWidthDown('sm', width) ? 11 : 15, 
                        boxWidth: isWidthDown('sm', width) ? 30 : 40,
                        
                    }
                }
            }}  
            data={{
                labels: Object.keys(chartDetails.cases),
                datasets:[{
                    data: Object.values(chartDetails.cases),
                    label:'Confirmed',
                    borderColor:'rgb(30, 144, 255)',
                    // backgroundColor:'rgb(30, 144, 255,0.2)',
                    fill:true,
                    pointStyle: 'line',
                    
                   
                } , {
                        data: Object.values(chartDetails.recovered),
                        label: 'Recoverd',
                        borderColor: 'rgb(0, 255, 127)',
                        backgroundColor: 'rgb(0, 255, 127, 0.2)',
                        fill: true,
                        pointStyle:'line'
                    }, {
                        data: Object.values(chartDetails.deaths),
                        label: 'Deaths',
                        borderColor: 'rgb(255, 99, 71)',
                        backgroundColor: 'rgb(255, 99, 71, 0.4)',
                        fill: true,
                        pointStyle: 'line'
                    }
                ]
            }}
        />
    )

    return (
        <Card className={classes.roott}>
            <CardContent className={classes.root}>
            <Grid container   justify="center">
            <Grid xs={11} sm={11} md={10} lg={10} item >
                <div className={classes.chartCcontainer}>
                    {LineChart}
                </div>
            </Grid>
        </Grid>
            </CardContent></Card>
    )
}


export default withWidth()(Chart)