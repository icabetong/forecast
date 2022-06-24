export type Coordinates = {
  lat: number,
  lon: number
}

export type Location = {
  coord: Coordinates,
  country: string,
  id: number,
  name: string,
  population: number,
  sunrise: number,
  sunset: number,
  timezone: number
}

export type Wind = {
  speed: number,
  deg: number,
  gust: number
}

export type Temperature = {
  feels_like: number,
  grnd_level: number,
  humidity: number,
  pressure: number,
  sea_level: number,
  temp: number,
  temp_kf: number,
  temp_max: number,
  temp_min: number,
}

export type Cloud = {
  all: number
}

export type Weather = {
  description: string,
  icon: string,
  id: number,
  main: string,
}

export type Forecast = {
  clouds: Cloud,
  dt: number,
  dt_text: string,
  main: Temperature,
  pop: number,
  visibility: number,
  weather: Weather[],
  wind: Wind
}

export type OpenWeatherResponse = {
  city: Location,
  cnt: number,
  cod: string,
  list: Forecast[]
}