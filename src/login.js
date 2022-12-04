//login
const loginForm = document.querySelector(".login-form");
const loginInput  = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const NAME = "name";

//스토리지 이름 저장
function loginSubmit(e) {
	e.preventDefault();
	const loginInputVlaue = loginInput.value;
	localStorage.setItem(NAME, loginInputVlaue);
	painting(loginInputVlaue);
}

//이름 뿌리기
function painting(loginInputVlaue) {
	loginForm.classList.add("hidden");
	greeting.innerText = `안녕하세요! ${loginInputVlaue}입니다.`
}

const savedName = localStorage.getItem(NAME);

if (savedName === null) {//스토리지에 이름 없으면
	loginForm.addEventListener("submit",loginSubmit);
} else { //스토리지에 이름 있으면
	painting(savedName); 
}

