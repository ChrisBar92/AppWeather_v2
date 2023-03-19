const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=dca2cbeccdf9e75225ebe67b5f301f72'
const API_UNITS = '&units=metric'
const city = 'Kraków'
const URL = API_LINK + city + API_KEY + API_UNITS

axios.get(URL).then(res => {
	console.log(res.data)
})

const time = () => {
	setInterval(() => {
		let unix = 1679188658
		let newTime = new Date(unix * 1000)
		console.log(newTime)
	}, 100000000000)
}

time()
