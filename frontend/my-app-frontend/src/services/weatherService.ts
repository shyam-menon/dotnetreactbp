import { WeatherForecast } from '../types/WeatherForecast';

const API_BASE_URL = 'http://localhost:5000/api';

export const weatherService = {
  async getWeatherForecast(): Promise<WeatherForecast[]> {
    const response = await fetch(`${API_BASE_URL}/weatherforecast`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  }
};