/*cmd({
pattern: "hangman",
react: "🛸",
alias: ["hm"],
desc: "Play a game of Hangman",
category: "games",
filename: __filename
}, async (conn, mek, m, {
from,
quoted,
body,
isCmd,
command,
args,
q,
isGroup,
sender,
senderNumber,
botNumber2,
botNumber,
pushname,
isMe,
isOwner,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmins,
isAdmins,
reply
}) => {
try {
const words = [
"apple", "banana", "cherry", "date", "elderberry",
"facebook", "google", "instagram", "youtube", "twitter",
"javascript", "python", "java", "c++", "ruby",
"america", "canada", "mexico", "england", "france",
"applewatch", "samsung", "googlepixel", "oneplus", "huawei"
];
const word = words[Math.floor(Math.random() * words.length)];
const guesses = 6;
let guessedWord = Array(word.length).fill("_");
let guessedLetters = [];

reply(`Let's play Hangman! I'm thinking of a word that is ${word.length} letters long. You have ${guesses} guesses.\n\n${guessedWord.join(" ")}`);

const hangmanGame = async (guess) => {
if (guessedLetters.includes(guess)) {
reply("You already guessed that letter!");
return;
}

guessedLetters.push(guess);

let correctGuess = false;
for (let i = 0; i < word.length; i++) {
if (word[i] === guess) {
guessedWord[i] = guess;
correctGuess = true;
}
}

if (!correctGuess) {
guesses--;
reply(`Incorrect guess! You have ${guesses} guesses left😊.\n\n${guessedWord.join(" ")}`);
} else {
reply(`Correct guess!\n\n${guessedWord.join(" ")}`);
}

if (guesses === 0) {
reply(`Game over! The word was ${word}.`);
} else if (!guessedWord.includes("_")) {
reply(`Congratulations! You guessed the word ${word}.`);
}
};

conn.on("message", async (msg) => {
if (msg.key.remoteJid === from && msg.message.conversation) {
const guess = msg.message.conversation.toLowerCase();
await hangmanGame(guess);
}
});
} catch (e) {
console.error('Hangman command error:', e);
reply(`Error: ${e.message}`);
}
});
*/
