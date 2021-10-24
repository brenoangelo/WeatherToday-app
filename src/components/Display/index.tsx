
import { WiCloud } from 'react-icons/wi'
import { CgSun, CgMoon  } from 'react-icons/cg'

import styles from './styles.module.scss'

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

interface Props {
    weather: IWeather | null;
    date: string;
}

const now = new Date()

export function Display({ weather, date }: Props) {
    
    return (
        <header className={styles.display}>
            <div className={styles.content}>
                <h1>{weather?.main.temp}°</h1>
                <span>
                    <strong>
                        {now.getHours() > 16 ? (
                            <CgMoon size="50"/> 
                        ) : (
                            <CgSun size="50"/>
                        )}
                        {weather?.name}
                    </strong>
                    <small>{date}</small>
                </span>
                <span>
                    <WiCloud size="40"/>
                    <small>{weather?.weather[0].description}</small>
                </span>
            </div>
        </header>
    )
}