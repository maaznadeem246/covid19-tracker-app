import React, { Suspense, SuspenseList ,useState, useCallback} from 'react';
import './App.css';
import {MainHeading,CountrySelector,DetailsCards, DetailsChart} from "./components"
import { Grid } from '@material-ui/core';
import { dataReader} from "./api/dataReader"
import { getAllCountries, getTotalDetails, dailyDate } from "./api/covidApi"

function App() {
  const [country, setCountry] = useState('all');
  const [countryReader] = useState(() => dataReader(getAllCountries));
  const [totalDetailsReader, updateTotalDetailsReader] = useState(() => dataReader(getTotalDetails, country));
  const [dailyDateReader, updateDailyDateReader] = useState(() => dataReader(dailyDate, country));
  
  const updaterTotalDetails = useCallback((v) => {
    console.log(v)
    updateTotalDetailsReader(() => dataReader(getTotalDetails, v));
  },[]);

  const updaterDailyDate = useCallback((v) => {
    console.log(v)
    updateDailyDateReader(() => dataReader(dailyDate, v));
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value)
    setCountry(event.target.value);
    updaterTotalDetails(event.target.value)
    updaterDailyDate(event.target.value)
  };

  return (
    <div >
      <SuspenseList revealOrder="forwards" >
      <Grid container >
        <Grid item justify="center" xs={12}>
          <MainHeading />
        </Grid>
        <Grid item justify="center"  container xs={12}>
          <Suspense fallback={<h1>Loading Countries</h1>} >
            <CountrySelector  country={country} handleChange={handleChange} countryReader={countryReader} />
          </Suspense>
        </Grid>
        <Grid item justify="center" container>
          <Grid item justify="center" container xs={12} sm={12} md={5} lg={5}>
            <Suspense fallback={<h1>Loading Detials</h1>} >
              <DetailsCards  totalDetailsReader={totalDetailsReader} />
            </Suspense>
          </Grid>
          <Grid item justify="center" container xs={12} sm={12} md={7} lg={7}>
            <Suspense fallback={<h1>Loading Chart</h1>} >
              <DetailsChart dailyDateReader={dailyDateReader} />
            </Suspense>
          </Grid>  
        </Grid>
        
      </Grid>
      </SuspenseList>
    </div>
  );
}

export default App;
