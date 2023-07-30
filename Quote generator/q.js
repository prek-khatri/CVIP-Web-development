const quotes = {
    suits: [
        "Sometimes good guys gotta do bad things to make the bad guys pay. - Harvey Specter",
        "The only time success comes before work is in the dictionary. - Harvey Specter",
        "Don't raise your voice, improve your argument. - Harvey Specter",
        "I don't play the odds, I play the man. - Harvey Specter",
        "Winners don't make excuses when the other side plays the game. - Harvey Specter",
        "You always have a choice. You just don't always have a good one. - Harvey Specter",
        "The best way to gain someone's trust is to earn it. - Harvey Specter"
    ],
    modernFamily: [
        "The best thing about the worst time of your life is that you get to see the true colors of everyone. - Gloria Pritchett",
        "Family is family, whether it's the one you start out with or the one you end up with. - Jay Pritchett",
        "In every job that must be done, there is an element of fun. - Phil Dunphy",
        "The secret to success is not being afraid to fail. - Jay Pritchett",
        "Sometimes the only way to get through a tough time is with a sense of humor. - Claire Dunphy",
        "Being different is what makes us special, and we have so much to offer. - Cam Tucker",
        "Happiness is not about being perfect, but about seeing beyond imperfections. - Manny Delgado"
    ],
    friends: [
        "I'm not great at the advice. Can I interest you in a sarcastic comment? - Chandler Bing",
        "Welcome to the real world. It sucks. You're gonna love it! - Monica Geller",
        "It's not that common, it doesn't happen to every guy, and it is a big deal! - Rachel Green",
        "You can't just give up! Is that what a dinosaur would do? - Joey Tribbiani",
        "I'm hopeless and awkward and desperate for love! - Ross Geller",
        "It's never too late to start over. If you weren't happy with yesterday, try something different today. Don't stay stuck, do better.",
        "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
        "You have to figure out who you are and what you want. Chase after it with everything you've got.",
        "Don't be afraid to fail. Take chances, make mistakes. That's how you grow.",
        "There is no perfect job, perfect relationship, or perfect life. But if you love each other, work together, and laugh together, that's all that really matters.",
        "It's not about having the perfect plan. It's about taking the first step and figuring it out along the way."
    ],
    howIMetYourMother: [
        "Sometimes things have to fall apart to make way for better things. - Ted Mosby",
        "The only way to really know what something is, is to love it. - Barney Stinson",
        "If you're not scared and you're not taking a chance, then what the hell are you doing? - Ted Mosby",
        "You have to do the right thing, even if it's hard. - Lily Aldrin",
        "The only thing that's keeping you from getting what you want is the story you keep telling yourself. - Barney Stinson",
        "Sometimes, even when you know something's a mistake, you gotta make it anyway. - Marshall Eriksen",
        "You will be shocked kids, how easy it is in life to part ways with people forever. So, if you want to keep someone around, you have to do something about it. - Ted Mosby"
    ]
};

let currentShow = '';
let currentQuoteIndex = 0;

function setQuotes(show) {
    currentShow = show;
    currentQuoteIndex = 0;
    displayQuote();
}

function displayQuote() {
    const quoteElement = document.getElementById("quote");
    const showTitleElement = document.getElementById("showTitle");

    if (currentShow === '') {
        quoteElement.textContent = '';
        showTitleElement.textContent = 'Quote for the day';
        return;
    }

    const quoteArray = quotes[currentShow];
    const quote = quoteArray[currentQuoteIndex];

    quoteElement.textContent = quote;
    showTitleElement.textContent = currentShow.toUpperCase();
}

function nextQuote() {
    const quoteArray = quotes[currentShow];

    if (quoteArray && currentQuoteIndex < quoteArray.length - 1) {
        currentQuoteIndex++;
        displayQuote();
    }
}
