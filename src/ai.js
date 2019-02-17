import {Trie, PTrie} from 'dawg-lookup';

export default class AI {
  /** returns (& generates) alphabet array */
  get alphabet() {
    if (!this._a) {
      this._a = [];
      let i = 'a'.charCodeAt(0), j = 'z'.charCodeAt(0);

      for (;i <= j;++i) this._a.push(String.fromCharCode(i));
    }

    return this._a;
  }
  /** provides current level board size */
  get boardSize() { return this._boardSize;}
  /** provides current level usedWords */
  get usedWords() { return this._usedWords;}
  /** provides current level board */
  get board() { return this._board;}
  /** provides added dictionaries */
  get dictionaries() { return this._dictionaries;}
  /**
   * Generates an instanse of the Words AI library
   * @constructor
   */
  constructor() {
    this._dictionaries = {};
    this.endBoard();
  }
  /**
   * Add main dictionary to the library.
   * @param {string} name - unique name for the dictionary.
   * @param {string} string - dictionary string.
   * */
  addMainDictionary(name, string) {
    this._addDictionary(name, string);

    this._mainDictionary = this._dictionaries[name];
  }
  /**
   * Add secondary dictionary to the library.
   * @param {string} name - unique name for the dictionary.
   * @param {string} string - dictionary string.
   * */
  addSecondaryDictionary(name, string) {
    this._addDictionary(name, string);
    this._secondaryDictionary = this._dictionaries[name];
  }
  /**
   * Start Board(Level) with intial center word.
   * @param {number} boardSize - Board Size.
   */
  startBoard(boardSize = this._defaultBoardSize) {
    this._boardSize = boardSize;
    this._cleanBoard();

    this._setInitialRandomWord();
  }
  /**
   * End Board(Level).
   * - clean the board;
   * - clean used words;
   * - clean current main/secondary dictionary
   * - etc.
   */
  endBoard() {
    this._boardSize = this._defaultBoardSize;
    this._usedWords = [];
    this._mainDictionary = null;
    this._secondaryDictionary = null;

    this._cleanBoard();
  }
  /** check if word already was used in current level */
  isUsedWord(word) {
    return !word || !this._usedWords || this._usedWords.find(
      function (element) {
        return element.toLowerCase() === word.toLowerCase();
      }
    );
  }
  /** check if word exists in main dictionary */
  doesWordExist(word) {
    if (!word) return false;

    let firstLetterID = this._getLetterID([...word][0]);

    let wordsArray = this._getWordsArrayByLetterID(firstLetterID);

    return wordsArray.find(function (element) { return element.toLowerCase() === word.toLowerCase(); });
  }
  /**
   *
   * check if selected cells are possible for a word
   * @param {number} startX - first letter column
   * @param {number} startY - first letter row
   * @param {boolean} vertical - is word vertical or horizontal
   * @param {number} amount - amount of selected cells
   */
  checkPossibleCells(startX, startY, vertical, amount) {
    if (startX < 0 || startY < 0 || (vertical ? startY : startX) + amount > this._boardSize) return false;

    let blockersCounter = 0;
    let lettersCounter = 0;

    for (let i = 0; i < amount; i++) {
      let checkX = vertical ? startX : startX + i;
      let checkY = vertical ? startY + i : startY;
      let element = this._board[checkY][checkX];

      if (this._isAString(element)) lettersCounter++;
      else if (element >= 3 || vertical && element === 1 || !vertical && element === 2) blockersCounter++;
    }

    if (lettersCounter === amount || blockersCounter || !lettersCounter && this._usedWords.length) return false;
    return true;
  }
  /**
   * Add Word to the board.
   * @param {number} startX - first letter column
   * @param {number} startY - first letter row
   * @param {string} word - word
   * @param {boolean} vertical - is word vertical or horizontal
   * @returns {boolean} - was word added or not.
   */
  addWord(startX, startY, word, vertical = false) {
    if (!word || !word.length || word.length < 3) {
      console.log('word length is less than 3 letters!');
      return false;
    }

    if (!this.checkPossibleCells(startX, startY, vertical, word.length)) {
      console.log('possible cells check failed!');
      return false;
    }

    if (!this._checkPossibleLetters(startX, startY, word, vertical)) {
      console.log('possible letters check failed!');
      return false;
    }

    if (this.isUsedWord(word)) {
      console.log('word is already used');
      return false;
    }

    if (!this.doesWordExist(word)) {
      console.log("word doesn't exist in dictionary");
      return false;
    }

    /**
     * Blockers based on number:
     * 1 - for vertical
     * 2 - for horizantal
     * 3 - for all
     * */

    [...word].forEach(function (element, index) {
      var elementY = startY + (vertical ? index : 0);
      var elementX = startX + (vertical ? 0 : index);

      this._board[elementY][elementX] = element.toLowerCase();

      for (let i = 0; i < 2; i++) {
        let targetX = elementX + (vertical ? i ? 1 : -1 : 0);
        let targetY = elementY + (vertical ? 0 : i ? 1 : -1);

        if (targetX < 0 || targetX >= this._boardSize || targetY < 0 || targetY >= this._boardSize) continue;
        let targetElement = this._board[targetY][targetX];

        if (vertical && !this._isAVerticalBlocker(targetElement)) this._board[targetY][targetX] += 1;
        if (!vertical && !this._isAHorizontalBlocker(targetElement)) this._board[targetY][targetX] += 2;
      }
    });

    if (vertical) {
      if (startY) this._board[startY - 1][startX] = 3;
      if (startY + word.length < this._boardSize) this._board[startY + word.length][startX] = 3;
    } else {
      if (startX) this._board[startY][startX - 1] = 3;
      if (startX + word.length < this._boardSize) this._board[startY][startX + word.length] = 3;
    }

    this._usedWords.push(word);

    return true;
  }
  /**
   * Provide a possible hint structure:
   * {
   *    x: 0,
   *    y: 0,
   *    word: null,
   *    vertical: false
   * }
   */
  getHintWord() {
    let returnElement = {
      x: 0,
      y: 0,
      vertical: false,
      word: null
    };
    var currentElement = returnElement;

    for (let y = 0; y < this._boardSize; y++) {
      for (let x = 0; x < this._boardSize; x++) {
        let element = this._board[y][x];

        if (this._isAString(element)) currentElement = this._findPossibleWord(x, y);
        else continue;

        if (currentElement.word &&
            (!returnElement.word ||
              returnElement.word &&
              currentElement.word.length > returnElement.word.length)
        ) returnElement = currentElement;

        if (returnElement.word && returnElement.word.length === this._boardSize) return returnElement;
      }
    }

    return returnElement;
  }

  /**
   * Private methods
   */
  /** check if element is a string */
  _isAString(element) { return typeof element === 'string'; }
  /** check if element is a number */
  _isANumber(element) { return !this._isAString(element); }
  /** check if a cell is a vertical blocker */
  _isAVerticalBlocker(element) {return !this._isANumber(element) || element === 1 || element >= 3;}
  /** check if a cell is a horizontal blocker */
  _isAHorizontalBlocker(element) {return !this._isANumber(element) || element === 2 || element >= 3;}
  /**
   * check if word letters intersects existing letters
   * @param {number} startX - first letter column
   * @param {number} startY - first letter row
   * @param {string} word  - word
   * @param {boolean} vertical - is word vertical or horizontal
   */
  _checkPossibleLetters(startX, startY, word, vertical = false) {
    for (let i = 0; i < word.length; i++) {
      let checkX = vertical ? startX : startX + i;
      let checkY = vertical ? startY + i : startY;
      let element = this._board[checkY][checkX];

      if (this._isAString(element) && element !== [...word][i]) return false;
    }

    return true;
  }
  /** default board size */
  get _defaultBoardSize() { return 11;}
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
  /** clean board */
  _cleanBoard() {
    this._board = [];

    for (let y = 0; y < this._boardSize; y++) {
      let _array = [];

      for (let x = 0; x < this._boardSize; x++) {
        _array.push(0);
      }

      this._board.push(_array);
    }
  }
  /** add initial horizontal centered word */
  _setInitialRandomWord() {
    let word = null;
    let randomLetterID = Math.floor(Math.random() * (this.alphabet.length - 2));

    while (!word) {
      let randomWords = this._getWordsArrayByLetterID(randomLetterID, 1);

      for (let i = 0; i < randomWords.length; i++) {
        let randomWord = randomWords[i];

        if (this.isUsedWord(randomWord) ||
            randomWord.length < Math.floor(this._boardSize * 0.5) ||
            randomWord.length >= Math.floor(this._boardSize)) continue;
        else { word = randomWord; break;}
      }

      randomLetterID = randomLetterID < this.alphabet.length - 1 ? randomLetterID + 1 : 0;
    }

    let x = Math.floor((this._boardSize - word.length) * 0.5);
    let y = Math.floor(this._boardSize * 0.4 + Math.random() * (this._boardSize * 0.2));

    this.addWord(x, y, word);
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
  /**
   * provides words array based on letter id and dictionary type
   * @param {number} letterID - Letter ID in the alphabet
   * @param {number} dictionaryType:
   * 0 - main dictionary (default)
   * 1 - secondary dictionary
   */
  _getWordsArrayByLetterID(letterID, dictionaryType = 0) {
    let currentLetter = this.alphabet[letterID];
    let nextLetter = this.alphabet[letterID < this.alphabet.length - 1 ? letterID + 1 : 0];
    let words = [];
    let dictionary = dictionaryType ? this._secondaryDictionary : this._mainDictionary;

    if (dictionary) words = dictionary.words(currentLetter, nextLetter);

    dictionary = null;

    return words;
  }
  /**
   * Find possible word for a cell
   * @param {number} x - column value for a cell
   * @param {number} y - row value for a cell
   * @returns structure:
   * {
   *    x: 0,
   *    y: 0,
   *    word: null,
   *    vertical: false
   * }
   */
  _findPossibleWord(x, y) {
    let regExpObject = null;
    let returnWord = null;
    let returnX = 0;
    let returnY = 0;
    let vertical = false;

    for (let i = 0; i < 2; i++) {
      vertical = !!i;

      regExpObject = this._generateRegExp(x, y, vertical);
      if (!regExpObject) continue;

      returnWord = this._findWordByRegExp(regExpObject.regExp);
      if (!returnWord) continue;

      for (let l = 0; l <= regExpObject.before + 1; l++) {
        if (l < returnWord.length &&
            returnWord[l].toString() === this._board[y][x].toString() &&
            (vertical ? y : x) - l >= 0 && (vertical ? y : x) - l + returnWord.length <= this._boardSize) {
          let checkX = vertical ? x : x + regExpObject.between + (regExpObject.between ? 1 : 0);
          let checkY = vertical ? y + regExpObject.between + (regExpObject.between ? 1 : 0) : y;

          if (this._board[checkY][checkX] === returnWord[l + regExpObject.between + (regExpObject.between ? 1 : 0)]) {
            returnX = vertical ? x : x - l;
            returnY = vertical ? y - l : y;
            break;
          }
        }
      }

      if (returnWord) break;
    }

    return {
      x: returnX,
      y: returnY,
      word: returnWord,
      vertical: vertical
    };
  }
  /**
   * Provdes possible regular expression for cell
   * @param {number} x - start letter column
   * @param {number} y - start letter row
   * @param {boolean} vertical - is word vertical or horizontal
   * @returns structure:
   * {
   * before     {number} -> amount of empty cells before first letter
   * between    {number} -> amount of empty cells between letters
   * totalFree  {number} -> total free cells
   * regExp     {string} -> regular expression
   * }
   * OR
   * NULL -> in case reg exp is impossible
   */
  _generateRegExp(x, y, vertical = false) {
    var regExp = '';
    var iDiff = Math.max(this._boardSize - (vertical ? y : x), vertical ? y : x);
    var wordArray = new Array(this._boardSize);

    wordArray[vertical ? y : x] = this._board[y][x];
    let isTopBlocked = false;
    let isBottomBlocked = false;
    let lettersCounter = 0;

    for (let i = 1; i < iDiff; i++) {
      // check movement top/left
      if ((vertical ? y : x) - i >= 0 && !isTopBlocked) {
        let element = this._board[vertical ? y - i : y][vertical ? x : x - i];

        if (vertical && this._isAVerticalBlocker(element) || !vertical && this._isAHorizontalBlocker(element)) {
          if (this._isAString(element) && !lettersCounter) {
            wordArray[vertical ? y - i : x - i] = element;
            lettersCounter++;
          } else {
            isTopBlocked = true;
            if (i > 1 && this._isAString(element)) wordArray[vertical ? y - i + 1 : x - i + 1] = null;
          }
        } else {
          wordArray[vertical ? y - i : x - i] = '[a-z]';
        }
      }
      // check movement bottom/right
      if ((vertical ? y : x) + i < this._boardSize && !isBottomBlocked) {
        let _element = this._board[vertical ? y + i : y][vertical ? x : x + i];

        if (vertical && this._isAVerticalBlocker(_element) || !vertical && this._isAHorizontalBlocker(_element)) {
          if (this._isAString(_element) && !lettersCounter) {
            wordArray[vertical ? y + i : x + i] = _element;
            lettersCounter++;
          } else {
            isBottomBlocked = true;
            if (i > 1 && this._isAString(_element)) wordArray[vertical ? y + i - 1 : x + i - 1] = null;
          }
        } else {
          wordArray[vertical ? y + i : x + i] = '[a-z]';
        }
      }
    }
    // geenerate regular expression

    regExp += '^(';
    let beforeLetterCounter = 0;
    let anyCounter = 0;
    let totalFreeCounter = 0;
    let betweenLettersCounter = 0;

    lettersCounter = 0;
    wordArray.forEach(function (element, index) {
      if (element && element === '[a-z]') anyCounter++;
      else if (element) {

        if (!lettersCounter) beforeLetterCounter = anyCounter;

        lettersCounter++;

        if (lettersCounter === 1) regExp += '[a-z]{0,' + anyCounter + '}' + element.toLowerCase();
        else if (lettersCounter === 2) {
          betweenLettersCounter = anyCounter;
          regExp += '[a-z]{' + anyCounter + '}' + element.toLowerCase();
        }
        totalFreeCounter += anyCounter;
        anyCounter = 0;
      }
    });

    totalFreeCounter += anyCounter;
    if (anyCounter) regExp += '[a-z]{0,' + anyCounter + '}';

    regExp += ')$';

    if (!totalFreeCounter) return null;

    return {
      before: beforeLetterCounter,
      between: betweenLettersCounter,
      totalFree: totalFreeCounter,
      regExp: regExp
    };
  }
  /**
   * Provides a possible word by reg exp
   * @param {string} regExp - regular expression
   */
  _findWordByRegExp(regExp) {
    let word = null;
    let startLetterID = Math.floor(Math.random() * (this.alphabet.length - 2));
    let randomLetterID = startLetterID;
    let regularExpression = new RegExp(regExp);

    // var _this = this;

    while (!word) {
      let randomWords = this._getWordsArrayByLetterID(randomLetterID, 1);
      /**
       * Faster way but only small words come first.
       */
      // word = randomWords.find((el)=>{
      //   return el.match(regularExpression) &&
      //          el.length >= 3 &&
      //          !_this.isUsedWord(el);
      // }) || null;

      word = null;
      randomWords.forEach(function (element) {
        if (element.match(regularExpression) && element.length >= 3 &&
            !this.isUsedWord(element) && (!word || element.length > word.length)) {
          word = element;
        }
      });

      if (word) break;

      randomLetterID = randomLetterID < this.alphabet.length - 1 ? randomLetterID + 1 : 0;
      if (randomLetterID === startLetterID) break;
    }

    return word;
  }
}
