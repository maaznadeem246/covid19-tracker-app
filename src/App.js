import React, { Suspense, SuspenseList ,useState, useCallback} from 'react';
import './App.css';
import {MainHeading,CountrySelector,DetailsCards, DetailsChart} from "./components"
import { Grid, CircularProgress } from '@material-ui/core';
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

      <Grid container >
        <Grid item justify="center" xs={12}>
          <MainHeading />
        </Grid>
        <SuspenseList revealOrder="forwards" >
            <Grid item justify="center"  container xs={12}>
              <Suspense fallback={<CircularProgress />} >
                <CountrySelector  country={country} handleChange={handleChange} countryReader={countryReader} />
              </Suspense>
            </Grid>
            <Grid item justify="center" container>
              <Grid item justify="center" container xs={12} sm={12} md={5} lg={5}>
                <Suspense fallback={<CircularProgress />} >
                  <DetailsCards country={country}  totalDetailsReader={totalDetailsReader} />
                </Suspense>
              </Grid>
              <Grid item justify="center" container xs={12} sm={12} md={7} lg={7}>
                <Suspense fallback={<CircularProgress />} >
                  <DetailsChart dailyDateReader={dailyDateReader} />
                </Suspense>
              </Grid>  
            </Grid>
        </SuspenseList>
 
      </Grid>

    </div>
  );
}

export default App;
