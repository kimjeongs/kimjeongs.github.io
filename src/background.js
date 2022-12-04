const imgArr = ["1.jpeg","2.jpeg","3.jpeg"];
const img = document.createElement("img");
const random =  Math.floor(Math.random()*imgArr.length);

img.src = `img/${imgArr[random]}`;
document.body.appendChild(img);