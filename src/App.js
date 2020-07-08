import React, { Suspense ,useState} from 'react';
import './App.css';
import {MainHeading,CountrySelector,DetailsCards, DetailsChart} from "./components"
import { Grid } from '@material-ui/core';
import { dataReader} from "./api/dataReader"
import { getAllCountries, getTotalDetails, dailyDate } from "./api/covidApi"

function App() {
  const [countryReader] = useState(() => dataReader(getAllCountries));
  const [totalDetailsReader] = useState(() => dataReader(getTotalDetails));
  const [dailyDateReader] = useState(() => dataReader(dailyDate));

  return (
    <div >
      <Grid container >
        <Grid item justify="center" xs={12}>
          
          <MainHeading />
        </Grid>
        <Grid item justify="center"  container xs={12}>
          <Suspense fallback={<h1>Loading Countries</h1>} >
          <CountrySelector countryReader={countryReader} />
          </Suspense>
        </Grid>
        <Grid item justify="center" container xs={12}>
          <Suspense fallback={<h1>Loading Detials</h1>} >
            <DetailsCards totalDetailsReader={totalDetailsReader} />
          </Suspense>
        </Grid>
        <Grid item justify="center" container xs={12}>
          <Suspense fallback={<h1>Loading Chart</h1>} >
            <DetailsChart dailyDateReader={dailyDateReader} />
          </Suspense>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
