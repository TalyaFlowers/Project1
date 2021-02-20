/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'You may not control all the events that happen to you, but you can decide not to be reduced by them', 
    source: 'Maya Angelou',
    citation: 'Letter to My Daughter',
    year: 2008
  },

  {
    quote: 'Now that I knew fear, I also knew it was not permanent. As powerful as I was, its grip on me would loosen. It would pass',
    source: 'Louise Erdrich',
    citation: 'The Round House',
    year: 2012 
  }, 

  {
    quote: 'Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare',
    source: 'Audre Lorde',
    citation: 'A burst of light',
    year: 1988
  }, 
  
  {
    quote: 'You are your best thing', 
    source: 'Toni Morrison',
    citation: 'Beloved',
    year: 1998
  }, 

  {
    quote: 'Finally I was able to see that if I had a contribution I wanted to make, I must do it, despite what others said. That I was OK the way that I was. That it was all right to be strong',
    source: 'Wangari Maathai',
    citation: 'Unbowed',
    year: 1991
  }, 

  {
    quote: 'There are opportunities even in the most difficult moments', 
    source: 'Wangari Maathai',
    citation: 'Unbowed',
    year: 2006
  },

  {
    quote: 'You belong here. As you are. From wherever and whomever you came from. Whatever shade of Brown or Black you represent is good and beautiful and necessary',
    source: 'Coco Fernandez',
    citation: 'Blog', 
    year: 2020
  },

  {
    quote: 'You are seen. You are heard. You are loved',
    source: 'Coco Fernandez',
    citation: 'Blog', 
    year: 2020

  }
  
]; 


/***
 * `getRandomQuote` function
***/ 

function getRandomQuote(array) { 
let randomQuote; 
let quoteList; 
  // Random number generator
   quoteList = Math.floor( Math.random() * quotes.length); 

  for (let i = 0; i < array.length; i++) { 
// array.length rather than the actual quotes variable makes this function a little bit more flexible

  randomQuote = array[quoteList]; 
    // Random quote variable with the index set to your random number variable 
  } 
  return randomQuote; // Returns random quote variable 
}

  
/***
 * `printQuote` function
***/

// Create the printQuote funtion and name it printQuote
function printQuote() {
 let display = "";     // Initializing the display variable with empty string
 let result = getRandomQuote(quotes);
  display = "<p class='quote'>" + result.quote + "</p>";
  display += "<p class='source'>" + result.source;
  display += "<span class='citation'>" + result.citation + "</span>";
  display += "<span class='year'>" + result.year + "</span>"
  display += "</p>"; 

  document.getElementById('quote-box').innerHTML = display;
}

printQuote(); // call the function once, so that the quote box is not empty. 



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false)//;