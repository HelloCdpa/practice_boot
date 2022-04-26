const API_KEY = "482309f68467f0f5584302302ae944bf"

// 사용자의 위치 얻기
function onGeoOk(position){
    //위도와 경도 
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    fetch(url)
    // 서버의 응답을 기다린 후 이므로 then을 써야함 1. 내용 추출 2. 데이터 사용
        .then((response) => response.json())
        .then((data) =>{
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            city.innerText = data.name;
            weather.innerText =  `${data.weather[0].description} /${data.main.temp} `;
    })
}
function onGeoError(){
    alert("Can't find you. No weather for you")
}

//브라우저에 위치 표시
//2개의 파라미터가 필요함 ok됐을 때, error났을 때
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

//https://openweathermap.org/api 가입 후 api 얻기 -> Current Weather Data
