
const API_KEY = "3bbc29b5718f3f165e47f38ef8c15a86";

function geoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url).then(response => response.json()).then((data => {
		const geo = document.querySelector('.geo');
		const weather = document.querySelector('.weather');
		geo.innerText = `${data.name} / `;
		weather.innerText = data.weather[0].main;
	}));
}

function geoError() {
	alert('날씨를 알 수 없어요 ㅠㅠ');
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);