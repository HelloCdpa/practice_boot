const quotes = [
    {
        quote: "There is nothing in the world so irresistibly contagious as laughter and good humor.",
        author: "Charles Dickens"
    },
    {
        quote: "배우는 길에 있어서는, 이제 그만하자고 끝을 맺을 때가 없는 것이다. 사람은 그 일생을 통하여 배워야 하고, 배우지 않으면 어두운 밤에 길을 걷는 사람처럼 길을 잃고 말 것이다. ",
        author : "태자"
    },
    {
        quote: "Who contrils the past controls the future. Who controls the present controls the past.",
        author : "George Orwell"
    },
    {
        quote: "교활한 사람은 학문을 경멸하고, 단순한 사람은 학문을 찬양하며, 현명한 사람은 학문을 이용한다.",
        author : "Francis Bacon"
    },
    {
        quote: "One man who has a mind and knows it acn always beat ten men who haven't and don't.",
        author : "George Bernard Shaw"
    },
    {
        quote: "만난 사람 모두에게서 무언가를 배울 수 있는 사람이 세상에서 제일 현명하다. ",
        author : "Talmud 中"
    },
    {
        quote: "컴퓨터랑 일하는 건 엄청 멋있다.누구랑 싸우지도 않고, 모든 것을 대신 기억해주고, 내 맥주를 뺏어 마시지도 않는다.",
        author : "Paul Leary"
    },
    {
        quote: "You can learn a little from victory, you can learn everything from defeat.",
        author : "Christy Mathewson"
    },
    {
        quote: "Only the person who has faith in himself is able to be faithful to others.",
        author : "Erich Fromm"
    },
    {
        quote: "There are two ways of spreading light, to be candle or the mirror that reflects it.",
        author : "Edith Wharton"
    },
    {
        quote: "하드웨어 : 사람이 발로 걷어찰 수 있는 컴퓨터의 부분",
        author : "Jeff Pesis, 프로그래머"
    },
    {
        quote: "소프트웨어 설계를 하는 두 가지 방법이 있다.하나는 빠진 게 없는지 쉽게 확인할 수 있도록 최대한 단순하게 만드는 것이고,또 한가지는 빠진 게 없는지 확인할 수 없도록 최대한 복잡하게 만드는 것이다.",
        author : "C.A.R. Hoare, Quick Sort의 고안자"
    },
    {
        quote: "좋은 소프트웨어의 기능이란 복잡한 것을 간단하게 보이도록 만드는 것이다.",
        author : "Grady Booch, UML 개발자"
    },
    {
        quote: "훌륭한 코드를 만들어내는 개발자는 일반적인 개발자보다 1만배 이상의 가치가 있다.",
        author : "Bill Gates"
    },
    {
        quote: "올바로 작동하지 않는다고 걱정하지 마라.모든 게 잘 되었다면, 내가 할 일이 없어진다.",
        author : "Mosher’s Law of Software Engineering"
    },
    {
        quote: "“코딩”이란 사회직업에서 “도굴”보다는 위이면서, “관리”의 바로 밑 어디엔가 위치하는 직업이다.",
        author : "Gerald Weinberg, 컴퓨터 과학자"
    },
    {
        quote: "세상에는 딱 두 가지 프로그래밍 언어가 있다. 사람들이 욕하는 언어와 아무도 사용하지 않는 언어.",
        author : "Bjarne Stroustrup, C++의 창시자"
    },
    {
        quote: "만일 디버깅이 벌레를 잡는 과정이라면, 프로그래밍은 그걸 집어넣는 과정이다.",
        author : "Edsger W. Dijkstra"
    }

// 출처 : https://subokim.wordpress.com/2015/03/12/101-great-computer-programming-quotes/



];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#author");
//랜덤함수
Math.floor(Math.random() *10)
//round
Math.round(1.1)
//ceil 올림
Math.ceil(1.1)
//floor 내림
Math.floor(1.1)

//랜덤으로 명언 뽑아내기
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML =  todayQuote.quote;
author.innerHTML = todayQuote.author;