const quotes = [
    "Believe in yourself.",
    "Work hard in silence.",
    "Dream big, stay focused.",
    "Success starts with self-discipline.",
    "Small steps every day."
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}