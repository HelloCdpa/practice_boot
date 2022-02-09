const clock = document.querySelector('#clock')
//interval 매번 일어나야 하는 것 setInterval(funtion,ms)
//함수를 2초마다 실행 setInterval(funtion,2000)
//milliseconds
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerHTML =`${hours} : ${minutes} : ${seconds}`;
    
    
    
}
//바로 실행되게 ()로 실행해줌 (즉시 호출)
getClock();
setInterval(getClock,1000)

