const input = document.querySelector('.weather__header-input')
const button = document.querySelector('.weather__header-button')
const warning = document.querySelector('.weather__header-warning')
const cityName = document.querySelector('.weather__main-top-city')
const currentDate = document.querySelector('.weather__main-top-date')
const weatherIcon = document.querySelector('.weather__main-middle-icon')
const weatherDescription = document.querySelectorAll('.value-description')
const currentTemperature = document.querySelectorAll('.value-temperature')
const currentPressure = document.querySelectorAll('.value-pressure')
const currentHumidity = document.querySelectorAll('.value-humidity')
const currentWind = document.querySelectorAll('.value-wind')
const currentFeelTemp = document.querySelectorAll('.value-feel-temp')


const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&lang=pl&appid=dca2cbeccdf9e75225ebe67b5f301f72'
const API_UNITS = '&units=metric'

const getWeather = () => {
	const city = input.value || 'Kraków'
	const URL = API_LINK + city + API_KEY + API_UNITS

	axios
		.get(URL)
		.then(res => {
			const temp = Math.round(res.data.main.temp)
			const feelsTemp = Math.round(res.data.main.feels_like)
			const pressure = res.data.main.pressure
			const humidity = res.data.main.humidity
			const wind = Math.round((res.data.wind.speed * 3600) / 1000)
			const date = new Date(res.data.dt * 1000).toLocaleDateString()
			const status = Object.assign({}, ...res.data.weather)
			const icon = status.icon

			// console.log('../images/' + icon + '.png')

			cityName.textContent = res.data.name
			currentDate.textContent = date
			currentTemperature.forEach(item => (item.textContent = temp + ' °C'))
			currentFeelTemp.forEach(item => (item.textContent = feelsTemp + ' °C'))
			currentPressure.forEach(item => (item.textContent = pressure + ' hPa'))
			currentWind.forEach(item => (item.textContent = wind + ' km/h'))
			currentHumidity.forEach(item => (item.textContent = humidity + ' %'))
			weatherDescription.forEach(item => (item.textContent = status.description))

			warning.textContent = ''
			input.value = ''

			if (status.id >= 200 && status.id < 805) {
				weatherIcon.setAttribute('src', '../images/' + icon + '.png')
			} else {
				weatherIcon.setAttribute('src', './img/unknown.png')
			}
		})
		.catch(() => (warning.textContent = 'Wpisz poprawną nazwę miasta!'))
}

const enterCheck = e => {
	if (e.key === 'Enter') {
		getWeather()
	}
}

getWeather()
button.addEventListener('click', getWeather)
input.addEventListener('keyup', enterCheck)
