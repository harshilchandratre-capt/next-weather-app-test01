export const fetchWeatherData = async (cityName) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=`
    const apiKey = '0262b041fe50af75ac62fbebbe3bfb5a'
    const finalUrl = apiUrl + apiKey

    try{
        const response = await fetch(finalUrl)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching weather data: ', error)
        return null
    }
}