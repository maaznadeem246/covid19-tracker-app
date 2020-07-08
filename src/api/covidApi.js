export const getAllCountries = async () => {
    
    try{
        const response = await fetch("https://covid19.mathdro.id/api/countries")
        const responseJson = await response.json()
        console.log(responseJson)
        return responseJson
    }
    catch(er){
        return er
    }

}






export const getTotalDetails = async () => {

    try {
        const response = await fetch("https://covid19.mathdro.id/api")
        const { confirmed, deaths, recovered} = await response.json()
        return { confirmed, deaths, recovered}
    }
    catch (er) {
        return er
    }

}