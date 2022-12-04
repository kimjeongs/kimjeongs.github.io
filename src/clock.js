// clock
const clock = document.querySelector(".clock");

function time() {
	const date = new Date();
	let hour = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();	
	let ampm;

	if ( hour > 12) {
		ampm = "PM";
		hour = hour - 12;
	} else {
		ampm = "AM";
	}

	clock.innerText = `${ampm} ${hour}시 ${minutes}분 ${seconds}초`;
}
time();
setInterval(time, 1000);