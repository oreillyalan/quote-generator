const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show loading

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}


// Hide Loading

function complete(){
    if (!loader.hidden){
    quoteContainer.hidden = false;
    loader.hidden = true;
}
}

// Get Quote From API

async function getQuote() {

    const proxyUrl = 'https://nameless-meadow-30358.herokuapp.com/'
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    try {
        loading();
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json()
        //If author is blank, use placeholder 'Unknown'
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknown';
        }else {
        authorText.innerText = data.quoteAuthor
        }
        //Reduce font size for long quotes
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        }
        else{
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText
        complete();
    } catch (error)
    {
        getQuote();
    }
}

// Tweet Quote

function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

// Event Listener
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On Load

getQuote();
