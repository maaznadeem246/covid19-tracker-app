export const getAllCountries = async () => {
    
    try{
        const response = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort")
        const responseJson = await response.json()
        const countries = responseJson.map(v => ({name:v.country, iso2:v.countryInfo.iso2}))
     
        return countries
    }
    catch(er){
        return er
    }

}






export const getTotalDetails = async () => {

    try {
        const response = await fetch("https://corona.lmao.ninja/v2/all?yesterday")
        const responseJson  = await response.json()
        const { cases, deaths, recovered, updated } = responseJson 
            
        return { details: { confirmed: cases, deaths, recovered }, lastUpdate: updated}
    }
    catch (er) {
        return er
    }

}



export const dailyDate = async () => {
    try{
        const response = await fetch('https://corona.lmao.ninja/v2/historical/all?lastdays=all');
        const responseJson = await response.json()
        return responseJson
    }catch(er){

    }
}


//https://covid19.mathdro.id/api