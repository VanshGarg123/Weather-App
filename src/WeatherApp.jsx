import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Sample",
        temp: 24,
        tempMax : 27,
        tempMin : 22,
        humidity : 67,
        feelsLike : 23,
        weather : "haze"
    })

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}