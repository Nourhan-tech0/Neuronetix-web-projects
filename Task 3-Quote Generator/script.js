// Fixed list of quotes categorized by themes
const quotes = {
  inspirational: [
    { content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { content: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { content: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown, Jr." },
    { content: "Confidence comes from discipline and training.", author: "Robert Kiyosaki" }
  ],
  humorous: [
    { content: "I'm not arguing, I'm just explaining why I'm right.", author: "Unknown" },
    { content: "Life is short. Smile while you still have teeth.", author: "Unknown" },
    { content: "When your friends begin to flatter you on how young you look, it's a sure sign you're getting old.", author: "Mark Twain" },
    { content: "Common sense is like deodorant. The people who need it most never use it.", author: "Unknown" },
  ],
  wisdom: [
    { content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { content: "It is not length of life, but depth of life.", author: "Ralph Waldo Emerson" },
    { content: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { content: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" }
  ]
};

// Function to get a random quote based on the selected category
function getRandomQuote() {
  const category = document.getElementById('category').value;
  let selectedQuotes = [];
  
  if (category === 'all') {
    selectedQuotes = [...quotes.inspirational, ...quotes.humorous, ...quotes.wisdom];
  } else {
    selectedQuotes = quotes[category];
  }

  const randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
  document.getElementById('quote').textContent = `"${randomQuote.content}"`;
  document.getElementById('author').textContent = `- ${randomQuote.author}`;
}

document.getElementById('new-quote').addEventListener('click', getRandomQuote);

// Trigger fetching of a quote when the page loads
getRandomQuote();
