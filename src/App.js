import React, { Suspense ,useState} from 'react';
import './App.css';
import {MainHeading,CountrySelector} from "./components"
import { Grid } from '@material-ui/core';
import { dataReader} from "./api/dataReader"
import { getAllCountries } from "./api/covidApi"

function App() {
  const [countryReader] = useState(() => dataReader(getAllCountries));

  return (
    <div >
      <Grid container >
        <Grid item justify="center" xs={12}>
          
          <MainHeading />
        </Grid>
        <Grid item justify="center"  container xs={12}>
          <Suspense fallback={<h1>Loading Pending Todos...</h1>} >
          <CountrySelector countryReader={countryReader} />
          </Suspense>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
