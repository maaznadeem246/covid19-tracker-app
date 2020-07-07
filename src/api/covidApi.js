export const getAllCountries = async () => {
    
    try{
        const response = await fetch("https://disease.sh/v3/covid-19/countries")
        const responseJson = await response.json()

        const allCon = [...responseJson]
            allCon.forEach((v,i,ar)=>{
                ar[i] = { 'country': v.country, 'countryInfo': v.countryInfo}
            })    

        return allCon
    }
    catch(er){
        return er
    }

}