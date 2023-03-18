const API_LINK = 'http://api.openweathermap.org/data/2.5/weather?lat=50&lon=50&air_pollution?lat=50&lon=50'
const API_KEY = '&appid=dca2cbeccdf9e75225ebe67b5f301f72'
const API_UNITS = '&units=metric'
const city = 'Kraków'
const URL = API_LINK + API_KEY + API_UNITS

axios.get(URL).then(res => {
	console.log(res.data)
})
