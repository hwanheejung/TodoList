const quotes = [
    {quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
     author:  "- 찰리 채플린"},
     {quote: "재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더많이 잃은 것이며, 용기를 잃은 사람은 모든것을 잃은 것이다.",
      author: "- 세르반테스"},
      {quote: "인생의 목적과 그것을 성취하는 방법을 깨닫는 것, 그것이 바로 지혜다.",
      author: "- 톨스토이"},
      {quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다",
      author: "- 사무엘 존슨"},
      {quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
      author: "- 엘사 맥스웰"},
      {quote: "가장 큰 약점은 약점을 보일 것에 대한 두려움이다.",
      author: "- 보쉬에"},
      {quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다. ",
      author: "- 동아프리카 속담"},
      {quote: "우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할 일을 하라 ",
      author: "- 에픽 토테스"},
      {quote: "웃음이 없는 하루는 버린 하루다.",
      author: "- 찰리 채플린"},
      {quote: "무슨 일을 하기 전에는 그 일에 대해 기대를 가져야 한다.",
      author: "- 마이클 조던"}
];

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
document.querySelector('.quote').innerText = todaysQuote.quote;
document.querySelector('.author').innerText = todaysQuote.author;