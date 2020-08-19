const quoteContainer = document.getElementById('quote-contaner');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


// Get Quote From API

async function getQuote() {
    const proxyUrl = 'https://nameless-meadow-30358.herokuapp.com/'
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json()
        authorText.innerText = data.quoteAuthor
        quoteText.innerText = data.quoteText
    } catch (error)
    {
        getQuote();
    }
}


// On Load

getQuote();