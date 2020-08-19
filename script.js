// Get Quote From API

async function getQuote() {
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&fomat=json';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
    } catch (error)
    {
        console.log('whoops, no quote', error);
    }
}


// On Load

getQuote();