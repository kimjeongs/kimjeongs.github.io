// clock
const clock = document.querySelector(".clock");

function time() {
	const date = new Date();
	let hour = date.getHours();
	const minutes = String(date.getMinutes()).padStart(2,"0");
	const seconds = String(date.getSeconds()).padStart(2,"0");	
	let ampm;
	console.log(typeof minutes)

	if ( hour > 12) {
		ampm = "PM";
		hour = String(hour - 12).padStart(2,"0");
	} else {
		ampm = "AM";
	}

	clock.innerText = `${ampm} ${hour}시 ${minutes}분 ${seconds}초`;
}
time();
setInterval(time, 1000);