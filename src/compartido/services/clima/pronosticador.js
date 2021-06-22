import { formatedTime } from './timeHandler.js'
import axios from 'axios'

class Pronosticador {
  constructor (apiKey) {
    this.apiKey = apiKey
  }

  getWeatherData(latitud, longitud){
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&appid=${this.apiKey}&units=metric&lang=es`)
  }

  // lat = -36.0 <----> lon = -60.0 BS AS

  async getCurrentWeatherData (latitud, longitud) {
    const res = await this.getWeatherData(latitud, longitud)
    return this.formatExtendedWeatherData(res.data)
  };
  
  async formatExtendedWeatherData (data) {
    const dailyData = [...data.daily]
    const formatedData = dailyData.map((item) => {
      const { dt, humidity, temp, wind_speed, weather } = item
      return {
        date: formatedTime(dt),
        humidity,
        min: temp.min,
        max: temp.max,
        wind_speed,
        icon: weather[0].icon
      }
    })
    return formatedData
  }
  
  async getWeather (date, latitud, longitud) {
    const daysArray = await this.getCurrentWeatherData(latitud, longitud)
    const result = daysArray.filter(day => day.date === date)[0]
    return result
  }
  
}

export default Pronosticador