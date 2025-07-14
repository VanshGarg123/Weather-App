import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    let HOT_URL ="https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vubnl8ZW58MHx8MHx8fDA%3D";
    let COLD_URL = "https://media.istockphoto.com/id/2158819973/photo/aerial-view-of-beas-river-by-the-pine-trees-forest-in-manali-city-of-himachal-pradesh-of-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=BS4HPdoGoy9w8CIewGNBdoB-o8sEGoiebTSB7INiMuE=";
    let RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    return(
        <div className="InfoBox">
            <div className='CardBox'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {(info.humidity) > 80? RAIN_URL: (info.temp)>15?HOT_URL:COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <b>{info.city}</b>{(info.humidity) > 80? <ThunderstormIcon/>: (info.temp)>15?<SunnyIcon/>:<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Tempertaure : {info.temp}&deg;C </p>
                        <p>Humidity : {info.humidity} </p>
                        <p>Max Temp : {info.tempMax}&deg;C</p>
                        <p>Min Temp: {info.tempMin}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    )
}