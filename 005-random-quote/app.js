const quotes = [
  {
    author: "William Shakespeare",
    quote: "To be, or not to be, that is the question."
  },
  {
    author: "Oscar Wilde",
    quote: "We are all in the gutter, but some of us are looking at the stars."
  },
  {
    author: "Mark Twain",
    quote:
      "All you need in this life is ignorance and confidence, and then success is sure."
  },
  {
    author: "Ernest Hemingway",
    quote:
      "The world breaks everyone, and afterward, many are strong at the broken places."
  },
  {
    author: "F. Scott Fitzgerald",
    quote:
      "So we beat on, boats against the current, borne back ceaselessly into the past."
  },
  {
    author: "J.D. Salinger",
    quote:
      "If you really want to hear about it, the first thing you'll probably want to know is where I was born, and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth."
  },
  {
    author: "George Orwell",
    quote:
      "If liberty means anything at all, it means the right to tell people what they do not want to hear."
  },
  {
    author: "Kurt Vonnegut",
    quote:
      "And I urge you to please notice when you are happy, and exclaim or murmur or think at some point, 'If this isn't nice, I don't know what is.'"
  },
  {
    author: "Ray Bradbury",
    quote: "You must stay drunk on writing so reality cannot destroy you."
  },
  {
    author: "John Steinbeck",
    quote:
      "The free, exploring mind of the individual human is the most valuable thing in the world."
  }
];

const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

btn.addEventListener("click", getQuote);

function getQuote() {
  const randomNumber = Math.floor(Math.random() * 10);

  const randomQuote = quotes[randomNumber];
  showQuote(randomQuote);
}

function showQuote(randomQuote) {
  quote.textContent = randomQuote.quote;
  author.textContent = randomQuote.author;
}
