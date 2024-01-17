document.body
        .addEventListener('click', (e) => {
                if (e.target.classList.value === 'addcity') {
                        document.getElementById('search').style.display = 'block';
                } else if (e.target.classList.value !== 'addcity' && e.target.id !== 'search') {
                        document.getElementById('search').style.display = 'none';
                }
                // console.log(e.target.classList.value==='addcity');
        })
        document.getElementById('clock').innerText = new Date().toLocaleTimeString();
// clock
setInterval(() => {
        document.getElementById('clock').innerText = new Date().toLocaleTimeString();
    }, 1000);

// "23"-56

const fetchweatherData = async (city) => {
        try {
                document.getElementById('clock').innerHTML = 'loading...'
                const responses = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47c607ed486f7a0667d559989a9dc6f6`);

                document.getElementById('citycountry').innerHTML = `${responses.data.name} , ${responses.data.sys.country}`
                document.getElementById('temp').innerText = (responses.data.main.temp - 273.15).toFixed(2);
                document.getElementById('weather').innerHTML = responses.data.weather[0].main;
                document.getElementById('high').innerHTML = (responses.data.main.temp_max - 273.15).toFixed(2);
                document.getElementById('low').innerHTML = (responses.data.main.temp_min - 273.15).toFixed(2);
                document.getElementById('speed').innerHTML = ((responses.data.wind.speed * 18) / 5).toFixed(2);
        } catch (err) {
                console.log('Invalid city entered');
        }

}
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}


// search
document.getElementById('search').addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
                console.log(e.target.value);
                fetchweatherData(e.target.value);


        }
})