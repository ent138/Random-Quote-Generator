// HTML Element
var btn=document.getElementById('btn');
var quote=document.getElementById('quote');
var author=document.getElementById('author');
var quotes=[{
  quote:`“I'm selfish, impatient and a little insecure.  don't deserve me at my best.”`,
 author:`-- Marilyn Monroe`
},
{
  quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
 author:`-- Albert Einstein`
},
{
  quote:`“So many books, so little time.”`,
 author:`--Frank Zappa`
},
{
  quote:`“A room without books is like a body without a soul.”`,
 author:`-- Marcus Tullius Cicero`
},
{
  quote:`“Be who you are and say what you feel, because those who mind don't matter”`,
 author:`-- Bernard M. Baruch`
},
{
  quote:`“You've gotta dance like there's nobody watching”`,
 author:`-- William W. Purkey`
},
{
  quote:`"“You only live once, but if you do it right, once is enough.”"`,
 author:`-- Mae West`
},
{
  quote:`“If you want to know what a man's like, take a good ”`,
 author:`-- J.K. Rowling`
},
]


var oldRandom;
function btnClick(){
    // var random=Math.trunc(Math.random()*quotes.length);
    var random=Math.trunc(Math.random()*quotes.length);

 if(oldRandom!= random){

  quote.innerHTML=quotes[random].quote;
  author.innerHTML=quotes[random].author;
}else{
 btnClick();
}

 oldRandom = random;
  }
  

