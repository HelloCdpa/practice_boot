// 랜덤한 숫자를 얻어서 이미지를 고르고 이미지를 추가한다.
const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg",];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/img/${chosenImage}`
document.body.appendChild(bgImage);