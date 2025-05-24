import { useState, useEffect } from 'react'
import { WeatherForecast } from './types/WeatherForecast'
import { weatherService } from './services/weatherService'
import './App.css'

function App() {
  const [forecasts, setForecasts] = useState<WeatherForecast[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await weatherService.getWeatherForecast()
        setForecasts(data)
      } catch (err) {
        setError('Failed to fetch weather data')
        console.error('Error fetching weather:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="App">
      <header className="App-header">
        <h1>My App - Weather Forecast</h1>
        <div className="weather-grid">
          {forecasts.map((forecast, index) => (
            <div key={index} className="weather-card">
              <h3>{forecast.date}</h3>
              <p>Temperature: {forecast.temperatureC}°C / {forecast.temperatureF}°F</p>
              <p>Summary: {forecast.summary}</p>
            </div>
          ))}
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </header>
    </div>
  )
}

export default App