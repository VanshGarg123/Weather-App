import TextField from '@mui/material/TextField';
import './SearchBox.css'
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f5be0c417d7934db87d8b2822d963079";

    let [city, setCity] = useState("")
    let [ error, setError] = useState(false);


    let getWeatherInfo = async ()=>{
        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`) 
            let jsonResponse = await res.json();
            
            let result = {
                city : city,
                temp: jsonResponse.main.temp,
                tempMax : jsonResponse.main.temp_max,
                tempMin : jsonResponse.main.temp_min,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        }catch(err){
            console.log("Error");
            throw err;
        }
        
    }
    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            setCity("");
            setError(false);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(e){
            console.log(e);
            setError(true);
        }
        
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City" variant="outlined" value={city} onChange={handleChange} required/>
                <br /><br />
                <Button variant="contained" type='submit'>
                Search
                </Button>
            </form>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
        </div>

        
    )
}