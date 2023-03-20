const input = document.querySelector('.weather__header-input')
const button = document.querySelector('.weather__header-button')
const warning = document.querySelector('.weather__header-warning')
const cityName = document.querySelector('.weather__main-top-city')
const currentDate = document.querySelector('.weather__main-top-date')
const weatherIcon = document.querySelector('.weather__main-middle-icon')
const weatherDescription = document.querySelector('.value-description')
const currentTemperature = document.querySelector('.value-temperature')
const currentPressure = document.querySelector('.value-pressure')
const currentHumidity = document.querySelector('.value-humidity')
const currentWind = document.querySelector('.value-wind')
const currentFeelTemp = document.querySelector('.value-feel-temp')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=dca2cbeccdf9e75225ebe67b5f301f72'
const API_UNITS = '&units=metric'
const city = input.value || 'Kraków'
const URL = API_LINK + city + API_KEY + API_UNITS

const getWeather = () => {
	axios
		.get(URL)
		.then(res => {
			console.log(res.data)
			const temp = Math.round(res.data.main.temp)
			const feelsTemp = Math.round(res.data.main.feels_like)
			const pressure = res.data.main.pressure
			const humidity = res.data.main.humidity
			const wind = Math.round((res.data.wind.speed * 10 * 3600) / 1000)
			const date = new Date(res.data.dt * 1000).toLocaleDateString()
			const status = Object.assign({}, ...res.data.weather)
			console.log(status)

			cityName.textContent = res.data.name
			currentDate.textContent = date
			currentTemperature.textContent = temp + ' °C'
			currentFeelTemp.textContent = feelsTemp + ' °C'
			currentPressure.textContent = pressure + ' hPa'
			currentWind.textContent = wind + ' km/h'
			currentHumidity.textContent = humidity + ' %'
            weatherDescription.textContent = status.main
		})
		.catch(() => (warning.textContent = 'Wpisz poprawną nazwę miasta!'))
}

const enterCheck = e => {
	if (e.key === 'Enter') {
		getWeather()
	}
}

getWeather()
