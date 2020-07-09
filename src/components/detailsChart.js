import React from "react"
import { Grid, makeStyles } from '@material-ui/core';
import {Line} from "react-chartjs-2"



const useStyles = makeStyles((theme)=>({
    root: {
        padding: '20px 5px 15px 5px',
    },
    chartCcontainer:{
        position: 'relative',
        margin: 'auto',
        height:'400px',
        [theme.breakpoints.down('sm')]: {
            height: 200,
        },
        // [theme.breakpoints.only('sm')]: {
        //     width: 500,
        //     height: 300,
        // },
    }
}));



const Chart = ({ dailyDateReader}) => {
    const chartDetail = dailyDateReader()
    let chartDetails = chartDetail ? chartDetail : {cases:[],deaths:[],recovered:[]}
    console.log(chartDetails)

    const classes = useStyles();
    const LineChart = (
        <Line 
            options={{
                responsive: true, 
                scales : { xAxes : [{ gridLines: { display: false } }], yAxes: [{ gridLines: { display: true} }]}, 
                maintainAspectRatio:false
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
        <Grid container justify="center">
            <Grid xs={11} sm={11} md={10} lg={10} className={classes.root} item >
                <div className={classes.chartCcontainer}>
                    {LineChart}
                </div>
            </Grid>
        </Grid>
    )
}


export default Chart