function Hangperson(word) {
    this.word = word;
    this.wordLength = word.length;
    this.guessed = [];
    this.guessesRemaining = 10;
    this.maxGuesses = 10;
}

Hangperson.prototype.serialize = function() {
    var result = {};
    result.wordLength = this.wordLength;
    result.guessed = this.guessed;
    result.guessesRemaining = this.guessesRemaining;
    result.maxGuesses = this.maxGuesses;

    if (includeWord) {
        result.word = this.word;
    }
    return result;
}

Hangperson.prototype.isGameOver = function() {
    return this.isWordGuessed() || this.guessesRemaining == 0;
}

Hangperson.prototype.isWordGuessed = function() {
    for (var i = 0; i < this.wordLength; i++) {
        var thisLetter = this.word.charAt(i);
        if (this.guessed.indexOf(thisLetter) < 0) {
            return false;
        }
    }
    return true;
}

Hangperson.prototype.guess = function(letter) {
    if (this.guessed.indexOf(letter) > -1) {
        return;
    }

    this.guessed.push(letter);
    if (this.word.indexOf(letter) < 0) {
        this.guessesRemaining--;
    }

}

/*
word to guess
length of word to guessed
guessed letters
guessed remaining
*/

module.exports = Hangperson;
