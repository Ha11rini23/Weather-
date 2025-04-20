const apiKey = 'ba59be2a775f07a3f868f6c40c103d5d'; // Replace this with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=&{city}&appid=ba59be2a775f07a3f868f6c40c103d5d&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const icon = data.weather[0].icon;
      resultDiv.innerHTML = `
        <p><strong>${data.name}</strong></p>
        <p>${temp}°C</p>
        <p>${desc}</p>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon" />
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = "Error: " + error.message;
    });
}
