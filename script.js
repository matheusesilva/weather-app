const weatherKey = "e3307c5b32f54213bab194514242805";
const pixabayKey = "44154418-b73da856a57f11905686aef12";

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    const coordinates =
      position.coords.latitude + "," + position.coords.longitude;
    getData(coordinates);
  });
} else {
  getData("auto:ip");
}

async function getPhoto(weather, local) {
  const search = weather.split(" ").join("+").toLowerCase();
  const url = `https://pixabay.com/api/?key=${pixabayKey}&q=${local}+${search}&image_type=photo&min_width=1920&editors_choice=true`;
  const response = await fetch(url);
  const result = await response.json();
  loadPhoto(result.hits[0]);
}

async function getData(local) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${local}&days=5&aqi=no&alerts=no`;
  const response = await fetch(url);
  const result = await response.json();
  getPhoto(result.current.condition.text, local);
  loadData(result);
  console.log(result);
}

const searchBtn = document.querySelector("button");
searchBtn.addEventListener("click", () => {
  let input = document.querySelector("input");
  if (input.value !== "") {
    getData(input.value);
    input.value = "";
  }
});

function loadData(data) {
  document.getElementById("city").textContent = data.location.name;
  document.getElementById("region").textContent = data.location.region;
  document.getElementById("now-temperature").textContent =
    data.current.temp_c + "°C";
  document.getElementById("condition").textContent =
    data.current.condition.text;
  document.getElementById("now-icon").src = data.current.condition.icon;
  const week = document.querySelector("div.week");
  week.innerHTML = "";
  data.forecast.forecastday.forEach((day) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const date = document.createElement("h3");
    const icon = document.createElement("img");
    const condition = document.createElement("h4");
    const minTemp = document.createElement("div");
    const maxTemp = document.createElement("div");

    date.textContent = day.date;
    icon.src = day.day.condition.icon;
    condition.textContent = day.day.condition.text;
    minTemp.textContent = "Max: " + day.day.mintemp_c + "°C";
    maxTemp.textContent = "Min: " + day.day.maxtemp_c + "°C";

    card.append(date, icon, condition, minTemp, maxTemp);
    week.append(card);
  });
}

function loadPhoto(photo) {
  const photoURL = photo.largeImageURL;
  document.querySelector("body").style.backgroundImage = `url(${photoURL})`;
  document.querySelector(
    "#photo-credit"
  ).innerHTML = `<a href="${photo.pageURL}">Photo by ${photo.user}</a>`;
}
