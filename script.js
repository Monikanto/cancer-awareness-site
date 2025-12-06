async function fetchQuote() {
    try {
        const res = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"));
        const data = await res.json();

  
        const actualData = JSON.parse(data.contents);

        const quote = actualData[0].q;
        const author = actualData[0].a;

        document.getElementById("quoteText").innerText = `"${quote}"`;
        document.getElementById("quoteAuthor").innerText = `- ${author}`;
    } catch (error) {
        document.getElementById("quoteText").innerText = "Failed to load quote.";
        document.getElementById("quoteAuthor").innerText = "";
        console.log(error);
    }
}

fetchQuote();
document.getElementById("newQuoteBtn").addEventListener("click", fetchQuote);
