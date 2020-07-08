import React from "react"
import { Grid } from '@material-ui/core';
import {Line} from "react-chartjs-2"
const Chart = ({ dailyDateReader}) => {
    const chartDetails = dailyDateReader()
    console.log(chartDetails)
    const LineChart = (
        <Line 

            data={{
                labels: Object.keys(chartDetails.cases),
                datasets:[{
                    data: Object.values(chartDetails.cases),
                    label:'Confirmed',
                    borderColor:'#3333ff',
                    fill:true,
                }, {
                        data: Object.values(chartDetails.deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }
                    , {
                        data: Object.values(chartDetails.recovered),
                        label: 'Recoverd',
                        borderColor: 'green',
                        backgroundColor: 'green',
                        fill: false,
                        pointStyle:'line'
                    }
                ]
            }}
        />
    )

    return (
        <Grid container justify="center">
            {LineChart}
        </Grid>
    )
}


export default Chart