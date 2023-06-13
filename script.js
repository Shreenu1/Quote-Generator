const quotes = [
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    quote: "If you want to achieve greatness stop asking for permission.",
    author: "Anonymous"
  },
  {
    quote: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
];

const quoteText = document.getElementById("quote-text");
const author = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = randomQuote.quote;
  author.textContent = "- " + randomQuote.author;
});
