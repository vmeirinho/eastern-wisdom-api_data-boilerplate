const express = require('express');
const cors = require('cors');
const quotes = require('./quotes.json');

const app = express();

app.set('json spaces', 2);
app.use(cors())

// Route to get a random quote
app.get('/random-quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex].quote;
    const author = quotes[randomIndex].author;
    res.json({ quote: randomQuote, author: author });
  });

// Route to get quotes by a given author
app.get('/author/:author', (req, res) => {
  const author = req.params.author;
  const authorQuotes = quotes.filter(quote => quote.author === author);
  res.json({ author: author, quotes: authorQuotes });
});

app.listen(3000, () => {
  console.log('API server is listening on port 3000');
});
