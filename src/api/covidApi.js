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






export const getTotalDetails = async (cntry) => {
    console.log(cntry)
    try {
        let url = "https://corona.lmao.ninja/v2/all?yesterday"
        if(cntry != 'all'){
            url =`https://corona.lmao.ninja/v2/countries/${cntry}?yesterday&strict&query`
        }

        const response = await fetch(url)
        const responseJson  = await response.json()
        const { cases, deaths, recovered, updated } = responseJson 
            
        return { details: { confirmed: cases, deaths, recovered }, lastUpdate: updated}
    }
    catch (er) {
        return er
    }

}



export const dailyDate = async (cntry) => {
    try{
        let url = 'https://corona.lmao.ninja/v2/historical/all?lastdays=all';

        if(cntry != 'all'){
            url = `https://corona.lmao.ninja/v2/historical/${cntry}?lastdays=all`
        }
        const response = await fetch(url);
        const responseJson = await response.json()
        const mData = cntry == 'all' ? responseJson : responseJson.timeline
        await console.log(mData)
        return mData
    }catch(er){

    }
}


//https://covid19.mathdro.id/api