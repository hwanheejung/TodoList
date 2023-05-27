const quotes = [
    {quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
     author:  "- 찰리 채플린"},
     {quote: "재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더많이 잃은 것이며, 용기를 잃은 사람은 모든것을 잃은 것이다.",
      author: "- 세르반테스"},
      {quote: "인생의 목적과 그것을 성취하는 방법을 깨닫는 것, 그것이 바로 지혜다.",
      author: "- 톨스토이"},
      {quote: "처음부터 겁먹지 말자. 막상 가보면 아무것도 아닌게 세상엔 참으로 많다.",
      author: "- 김연아"},
      {quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
      author: "- 엘사 맥스웰"},
      {quote: "가장 큰 약점은 약점을 보일 것에 대한 두려움이다.",
      author: "- 보쉬에"},
      {quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다.",
      author: "- 동아프리카 속담"},
      {quote: "우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할 일을 하라",
      author: "- 에픽 토테스"},
      {quote: "웃음이 없는 하루는 버린 하루다.",
      author: "- 찰리 채플린"},
      {quote: "물을 끓이는 건 마지막 1도. 포기하고 싶은 바로 그 1분을 참아내는 것이다.",
      author: "- 김연아"},
      {quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더많이 실험할수록 더나아진다",
      author: "- 랄프 왈도 에머슨"},
      {quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
      author: "- F.스콧 핏제랄드"},
      {quote: "Stay hungry. Stay foolish",
      author: "- Steve Jobs"},
      {quote: "할 수 있다고 믿는 사람은 그렇게 되고, 할 수 없다고 믿는 사람 역시 그렇게 된다.",
      author: "- 샤를 드골"},
      {quote: "He can do. She can do. Why not me?",
      author: "- 김태연 TYK그룹 회장"},
      {quote: "Connecting the dots.",
      author: "- Steve Jobs"}
    ];



function paintQuote(){
    const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
    document.querySelector('.quote').innerText = todaysQuote.quote;
    document.querySelector('.author').innerText = todaysQuote.author;    
}

const refresh = document.querySelector('.quote-box span svg');
refresh.addEventListener('click', paintQuote);
paintQuote();