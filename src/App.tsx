import { useEffect, useState } from 'react';
import axios from 'axios'

interface IWeatherMain {
  temp: number;
  feels_like: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
  pressure: number;
}

interface IWeather {
  name: string;
  main: IWeatherMain;
  weather: [
    {
      main: string;
      description: string;
    }
  ]
}

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState<IWeather>();

  async function getWeather(lat: Number, long: Number) {
    const res = await axios.get<IWeather>('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    })

    console.log(res.data)
    setWeather(res.data);
    
  }

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude)
      setLocation(true)
    })
  },[])


  return (
    <div className="App">
        {
          location ? (
            <>
              <h3>Clima nas suas coordenadas</h3>
              <ul>
                <li>Local: {weather?.name}</li>
                <li>Temperatura atual: {weather?.main.temp}</li>
                <li>Sensação termica: {weather?.main.feels_like}</li>
                <li>Temperatura máxima: {weather?.main.temp_max}</li>
                <li>Temperatura minima: {weather?.main.temp_min}</li>
                <li>Pressão: {weather?.main.pressure} hpa</li>
                <li>Umidade: {weather?.main.humidity}%</li>
                <li>{weather?.weather[0].description}</li>
              </ul>
            </>
          ) : (
            <>
              Você precisa habilitar a localização no browser
            </>
          )
        }
    </div>
  );
}

export default App;
