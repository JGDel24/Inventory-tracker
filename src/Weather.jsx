import React, {useState, useEffect} from "react"

function Weather() {
   const [weather, setWeather] = useState(null);

   useEffect(() => {
        fetch('https://api.tomorrow.io/v4/weather?location=London&apikey=FAKE_API_KEY')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`${response.status}`)
                }
                response.json();
            })

            .then((data) => {
                setWeather(data)
            })

            .catch((error) => {
                console.error('Error fetching data', error)
            })
            
   }, []);

   return (
    <div>
        {weather ? (
            <>
                <h3>Weather in London</h3>
                <p>Temperature: {weather.data.temperature}</p>
                <p>Conditions: {weather.data.condition}</p>
            </>
        ) : (
            <p>Weather is Loading...</p>
        )}
    </div>
   )
}

'https://api.tomorrow.io/v4/weather?location=London&apikey=FAKE_API_KEY'

export default Weather

