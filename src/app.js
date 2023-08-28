let now = new Date();  
let hour = now.getHours();
let mins = now.getMinutes();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"];
let day = days [now.getDay ()]
let h2 = document.querySelector ("h2");
h2.innerHTML = `${day} ${hour}:${mins}`;


function search (event){
  event.preventDefault();
  let searchInput= document.querySelector("#form-control");

let apiKey = "1266ad07b66517497b1acf79ea5a6a64";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=imperial`;
  axios.get(`${apiURL}&appid=${apiKey}`).then(showTemp);

  
}

function showTemp(response) {
  let city = response.data.name;
  let temp = Math.round(response.data.main.temp);
  let humid = response.data.main.humidity;
  let wind = response.data.wind.speed;
  let feels = response.data.main.feels_like;


  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city}`;
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${temp}`;
  let currentHumid = document.querySelector("#current-humid");
  currentHumid.innerHTML = `${humid}`;
  let currentWind = document.querySelector("#current-wind");
  currentWind.innerHTML = `${wind}`;
  let currentFeels = document.querySelector("#current-feels");
  currentFeels.innerHTML = `${feels}`;
 

}

function currentLocation(){
navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "1266ad07b66517497b1acf79ea5a6a64";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial`;
  axios.get(`${apiURL}&appid=${apiKey}`).then(showTemp);

});}


let form = document.querySelector("#search-form")
form.addEventListener("submit",search)


let currentButton= document.querySelector("#current-button")
currentButton.addEventListener("click",currentLocation)

