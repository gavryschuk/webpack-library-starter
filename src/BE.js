import {Trie, PTrie} from 'dawg-lookup';
export default class BE {
  /** returns (& generates) alphabet array */
  get alphabet() {
    if (!this._a) {
      this._a = [];
      let i = 'a'.charCodeAt(0), j = 'z'.charCodeAt(0);

      for (;i <= j;++i) this._a.push(String.fromCharCode(i));
    }

    return this._a;
  }
  getMainDictionary() { return this._mainDictionary;};
  /** provides added secondary dictionaries names */
  getSecondaryDictionaries() { return Object.keys(this._dictionaries); }
  /**
   * Generates an instanse of the Words AI BE library
   * @constructor
   */
  constructor() {
    this._mainDictionary = null;
    this._dictionaries = {};
  }
  /**
   * Adds main dictionary to the library.
   * @param {string} string - dictionary string.
   * */
  loadMainDictionary(string) {
    let dict = new Trie(string);

    this._mainDictionary = new PTrie(dict.pack());
  }
  /**
   * Adds secondary dictionary to the library.
   * @param {string} name - unique name for the dictionary.
   * @param {string} string - dictionary string.
   * */
  loadSecondaryDictionary(name, string) {
    this._addDictionary(name, string);
  }
  /**
   * provides the biggest possible by regular epressions word.
   * @param {array} regExpArray - income array of possible regular expressions
   * @param {string} dictionaryName - dictionary name to use for word search
   * @return {array} - array of possible possible words
   */
  getHint(regExpArray, dictionaryName) {
    if (!this._mainDictionary || !Object.keys(this._dictionaries).length) {
      console.log('BE: there are some dictionaries absent in BE');
      return null;
    }
    if (!(dictionaryName in this._dictionaries)) {
      console.log('BE: dictionary name is absent in secondary dictionaries list. Used main dictionary instead.');
      dictionaryName = 'main';
    }

    let words = [];

    regExpArray.forEach(element=>{
      let w = this._getWordsByRegExp(element, dictionaryName);

      if (w.length) words = words.concat(w);
    }, this);

    words.sort(function (a, b) {
      // ASC  -> a.length - b.length
      // DESC -> b.length - a.length
      return b.length - a.length;
    });

    return words;
  }
  /**
   * Checks if word exists and if points added for this word
   * @param {string} word - income word
   * @param {string} dictionaryName - secondaru dictionary name to check points
   * @returns {object} : { exists: if word exists, points: how much points for a word}
   */
  getWordStats(word, dictionaryName) {
    let exists = false;
    let points = 0;

    let firstLetterID = this._getLetterID([...word][0]);

    let wordsArray = this._getWordsArrayByLetterID(firstLetterID);

    if (wordsArray.indexOf(word) >= 0) exists = true;

    if (dictionaryName) {
      wordsArray = this._getWordsArrayByLetterID(firstLetterID, dictionaryName);
      if (wordsArray.indexOf(word) >= 0) points = word.length;
    }

    return {exists: exists, points: points};

  }
  /**
   * Private methods
   */
  /**
   * add dictionary
   * Once dicitionary is preloaded library won't load dictionary again but use existing one by name.
   * @constructor
   * @param {string} name - unique name for the dictionary.
   * @param {string} string - dictionary string.
   * */
  _addDictionary(name, string) {
    if (name in this._dictionaries) return;
    let dict = new Trie(string);

    this._dictionaries[name] = new PTrie(dict.pack());
  }
  /**
   * Provides possible words in specific dictionary by regular expression
   * @param {string} regExp - regular expression to make search with
   * @param {string} dictionaryName - name of the dictionary to be used for a search
   * @return {array} - search result words array
   */
  _getWordsByRegExp(regExp, dictionaryName) {
    let words = [];
    let startLetterID = Math.floor(Math.random() * (this.alphabet.length - 2));
    let randomLetterID = startLetterID;
    let regularExpression = new RegExp(regExp);

    for (let i = 0; i < this.alphabet.length; i++) {
      let randomWords = this._getWordsArrayByLetterID(randomLetterID, dictionaryName);

      randomWords.forEach(function (element) {
        if (element.match(regularExpression)) words.push(element);
      }, this);

      randomLetterID = (randomLetterID + i) < (this.alphabet.length - 1) ? randomLetterID + i : 0;
    }
    return words;
  }
  /**
   * provides words array based on letter id and dictionary type
   * @param {number} letterID - Letter ID in the alphabet
   * @param {string} dictionaryName - dictionary name
   */
  _getWordsArrayByLetterID(letterID, dictionaryName) {
    let currentLetter = this.alphabet[letterID];
    let nextLetter = this.alphabet[letterID < this.alphabet.length - 1 ? letterID + 1 : 0];
    let words = [];

    let dictionary = this._mainDictionary;

    if (dictionaryName in this._dictionaries) dictionary = this._dictionaries[dictionaryName];

    words = dictionary.words(currentLetter, nextLetter);

    dictionary = null;

    return words;
  }
  /**
   * provides letter id in the alphabet
   * @param {char} letter - Letter.
   * */
  _getLetterID(letter) {
    for (let i = 0; i < this.alphabet.length; i++) {
      if (this.alphabet[i].toLowerCase() === letter.toLowerCase()) return i;
    }
    return 0;
  }
}
