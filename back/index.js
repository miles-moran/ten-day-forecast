exports.handler = async (event) => {
    const axios = require('axios')
    const {forecastKey, geoCacheKey } = process.env
    
    const headers = {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }
        
    const getLatLong = async (zip) => {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${geoCacheKey}`
        const cords = await axios.get(url)
        const {lat, lng} = cords.data.results[0].geometry.location
        const address = cords.data.results[0].formatted_address
        return {
            cords: `${lat},${lng}`,
            address
        }
    }
    const getForecast = async (latLong) => {
         const date = new Date()
         date.setDate(date.getDate() + 10);
        const endTime = date.toISOString()
        const url = `https://api.tomorrow.io/v4/timelines?location=${latLong}&endTime=${endTime}&fields=windSpeed&fields=precipitationIntensity&fields=windDirection&fields=cloudBase&fields=temperature&fields=temperatureApparent&fields=precipitationType&fields=windGust&fields=cloudCover&fields=cloudCeiling&fields=weatherCode&units=metric&timesteps=1d&timesteps=current&apikey=${forecastKey}`
        const forecast = await axios.get(url)
        return forecast
    }
    
    try{
        const zip = event.queryStringParameters["zipcode"];
        const latLongData = await getLatLong(zip)
        const forecast = await getForecast(latLongData.cords)
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({...forecast.data, address: latLongData.address}),
        };
    } catch (e) {
           return {
            statusCode: 400,
            headers,
            body: JSON.stringify(e),
        };
    }
};
