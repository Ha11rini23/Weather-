const apiKey = 'd8433ad440d78d16bdd97ed604212469'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0];
      const temp = data.main.temp;
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>${temp}°C</strong> - ${weather.description}</p>
        <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}" />
      `;
      document.getElementById('weatherResult').innerHTML = result;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
