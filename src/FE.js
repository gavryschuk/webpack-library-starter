export default class FE {
  /** default board size */
  get defaultBoardSize() { return 11;}
  /** provides current level board size */
  get boardSize() { return this._boardSize;}
  /** provides current level usedWords */
  get usedWords() { return this._usedWords;}
  /** provides current level board */
  get board() { return this._board;}
  /** provides current level points */
  get points() {return this._points;}
  /**
   * Generates an instanse of the Words AI FE library
   * @constructor
   */
  constructor() {
    this.endBoard();
  }

  /**
   * Start Board(Level) with intial center word.
   * @param {number} boardSize - Board Size.
   */
  startBoard(boardSize) {
    this.endBoard();

    this._boardSize = boardSize;
    this._cleanBoard();
  }
  /**
   * End Board(Level).
   * - clean the board;
   * - clean used words;
   */
  endBoard() {
    this._points = 0;
    this._boardSize = 0;
    this._usedWords = [];

    this._cleanBoard();
  }
  /**
   * get all possible regular expressions on the board
   * @return {Array} - array of possible reg exp strings
   */
  getPossibleWordRegExp() {
    let array = [];

    if (!this._usedWords.length) {
      array.push('^([a-z]{3,' + Math.ceil(this._boardSize * 0.5) + '})$');
      return array;
    }

    for (let y = 0; y < this._boardSize; y++) {
      for (let x = 0; x < this._boardSize; x++) {
        let element = this._board[y][x];

        if (!this._isAString(element)) continue;

        let regExp = this._findPossibleRegExp(x, y);

        regExp.forEach(element=>{array.push(element);});
      }
    }

    return array;
  }
  /**
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

    if (vertical && startY && this._isAString(this._board[startY - 1][startX])) blockersCounter++;
    if (!vertical && startX && this._isAString(this._board[startY][startX - 1])) blockersCounter++;

    if (lettersCounter === amount || blockersCounter || !lettersCounter && this._usedWords.length) return false;
    return true;
  }
  /** check if word already was used on current board */
  isUsedWord(word) {
    if (!word) return false;
    word = word.toLowerCase();
    return !this._usedWords || this._usedWords.find(function (element) { return element === word; });
  }
  /**
   * Adds income word randomly to the board if possible
   * @param {string} word - income word
   * @return {boolean} - was word added or not
   */
  addWordRandomly(word, points = 0) {
    if (!word) return false;
    if (!this._usedWords.length) {
      let x = Math.floor((this._boardSize - word.length) * 0.5);
      let y = Math.ceil(this._boardSize * 0.5);

      this.addWord(x, y, word, false);
      return true;
    }

    for (let y = 0; y < this._boardSize; y++) {
      for (let x = 0; x < this._boardSize; x++) {
        let element = this._board[y][x];

        if (!this._isAString(element)) continue;

        for (let index = 0; index < word.length; index++) {
          let letter = word[index];

          if (letter === element) {
            for (let i = 1; i >= 0; i--) {
              let vertical = !!i;
              let searchX = vertical ? x : (x - index) ;
              let searchY = vertical ? (y - index) : y;

              if (this.addWord(searchX, searchY, word, vertical, points)) return true;
            }
          }
        }
      }
    }

    return false;

  }
  /**
   * Add Word to the board.
   * @param {number} startX - first letter column
   * @param {number} startY - first letter row
   * @param {string} word - word
   * @param {boolean} vertical - is word vertical or horizontal
   * @returns {boolean} - was word added or not.
   */
  addWord(startX, startY, word, vertical, points = 0) {
    if (!word || word.length < 3) {
      console.log('word length is less than 3 letters!');
      return false;
    }

    if (!this.checkPossibleCells(startX, startY, vertical, word.length)) {
      console.log('possible cells check failed!');
      return false;
    }

    if (this.isUsedWord(word)) {
      console.log('word is already used');
      return false;
    }

    if (!this._checkPossibleLetters(startX, startY, word, vertical)) {
      console.log('possible letters check failed!');
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
    }, this);

    if (vertical) {
      if (startY) this._board[startY - 1][startX] = 3;
      if (startY + word.length < this._boardSize) this._board[startY + word.length][startX] = 3;
    } else {
      if (startX) this._board[startY][startX - 1] = 3;
      if (startX + word.length < this._boardSize) this._board[startY][startX + word.length] = 3;
    }

    if (this._usedWords && this._usedWords.length > 1) this._points += points;

    this._usedWords.push(word);

    return true;
  }
  getHintFromWordsArray(words) {
    if (!words || !words.length) return null;
    let word = null;

    if (!this._usedWords.length) word = words[0];

    for (let i = 0; i < words.length; i++) {
      if (this._usedWords.indexOf(words[i]) < 0 && words.length > 3) {
        word = words[i];
        break;
      }

    }
    return word;
  }
  /**
   * Private methods
   */
  /** check if element is a string */
  _isAString(element) { return typeof element === 'string'; }
  /** check if element is a number */
  _isANumber(element) { return !this._isAString(element); }
  /** check if a cell is a vertical blocker */
  _isAVerticalBlocker(element) {return this._isAString(element) || element === 1 || element >= 3;}
  /** check if a cell is a horizontal blocker */
  _isAHorizontalBlocker(element) {return this._isAString(element) || element === 2 || element >= 3;}
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
  /** clean board */
  _cleanBoard() {
    this._board = [];

    if (!this._boardSize) return;

    for (let y = 0; y < this._boardSize; y++) {
      let _array = [];

      for (let x = 0; x < this._boardSize; x++) {
        _array.push(0);
      }

      this._board.push(_array);
    }
  }
  /**
   * Search for possible regular epressions for income cell
   * @param {number} x - search letter column
   * @param {number} y - search letter row
   * @return {array} of possible regular expressions
   */
  _findPossibleRegExp(x, y) {
    let array = [];
    let vertical = false;

    for (let i = 0; i < 2; i++) {
      vertical = !!i;
      let regExp = this._generateRegExp(x, y, vertical);

      if (regExp && array.indexOf(regExp) < 0) array.push(regExp);
    }
    return array;
  }
  /**
   * generate possible reg expression for income cell
   * @param {number} x - income cell column
   * @param {number} y - income cell row
   * @param {number} vertical - is vertical or horizontal
   * @return {string || null} - string regular expression or null
   */
  _generateRegExp(x, y, vertical) {
    let regExp = '';
    let iDiff = Math.max(this._boardSize - (vertical ? y : x), vertical ? y : x);
    let wordArray = new Array(this._boardSize);

    wordArray[vertical ? y : x] = this._board[y][x];
    let isTopBlocked = false;
    let isBottomBlocked = false;
    let lettersCounter = 0;

    let checkIfBlocker = (element) =>{
      let isVerticalBlocker = vertical && this._isAVerticalBlocker(element);
      let isHorizontalBlocker = !vertical && this._isAHorizontalBlocker(element);

      return (isVerticalBlocker || isHorizontalBlocker);
    };

    for (let i = 1; i <= iDiff; i++) {
      let letterID = null;
      let prevLetterID = null;
      let element = null;

      // check movement top/left
      if ((vertical ? y : x) - i >= 0 && !isTopBlocked) {
        element = this._board[vertical ? (y - i) : y][vertical ? x : (x - i)];
        letterID = vertical ? (y - i) : (x - i);
        prevLetterID = vertical ? (y - i + 1) : (x - i + 1);

        if (checkIfBlocker(element)) {
          if (this._isAString(element) && !lettersCounter) {
            wordArray[letterID] = element;
            lettersCounter++;
          } else {
            isTopBlocked = true;
            if (this._isAString(element)) wordArray[prevLetterID] = null;
          }
        } else {
          wordArray[letterID] = '[a-z]';
        }
      }

      // check movement bottom/right
      if ((vertical ? y : x) + i < this._boardSize && !isBottomBlocked) {
        element = this._board[vertical ? (y + i) : y][vertical ? x : (x + i)];
        letterID = vertical ? (y + i) : (x + i);
        prevLetterID = vertical ? (y + i - 1) : (x + i - 1);

        if (checkIfBlocker(element)) {
          if (this._isAString(element) && !lettersCounter) {
            wordArray[letterID] = element;
            lettersCounter++;
          } else {
            isBottomBlocked = true;
            if (this._isAString(element)) wordArray[prevLetterID] = null;
          }
        } else {
          wordArray[letterID] = '[a-z]';
        }
      }
    }

    // geenerate regular expression
    regExp += '^(';
    let anyCounter = 0;
    let totalFreeCounter = 0;

    lettersCounter = 0;
    wordArray.forEach(function (element, index) {
      if (element && element === '[a-z]') anyCounter++;
      else if (element) {
        lettersCounter++;

        if (lettersCounter === 1) regExp += '[a-z]{0,' + anyCounter + '}' + element.toLowerCase();
        else if (lettersCounter === 2) regExp += '[a-z]{' + anyCounter + '}' + element.toLowerCase();

        totalFreeCounter += anyCounter;
        anyCounter = 0;
      }
    }, this);

    totalFreeCounter += anyCounter;
    if (anyCounter) regExp += '[a-z]{0,' + anyCounter + '}';

    regExp += ')$';

    if (!totalFreeCounter) regExp = null;

    return regExp;

  }
}
