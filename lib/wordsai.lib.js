(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("wordsai.lib", [], factory);
	else if(typeof exports === 'object')
		exports["wordsai.lib"] = factory();
	else
		root["wordsai.lib"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dawg-lookup/lib/alphacode.js":
/*!***************************************************!*\
  !*** ./node_modules/dawg-lookup/lib/alphacode.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.BASE = 36;
// Placeholder
var PTrie = (function () {
    function PTrie() {
    }
    return PTrie;
}());
exports.PTrie = PTrie;
// 0, 1, 2, ..., A, B, C, ..., 00, 01, ... AA, AB, AC, ..., AAA, AAB, ...
function toAlphaCode(n) {
    var s = '';
    var places = 1;
    for (var range = exports.BASE; n >= range; n -= range, places++, range *= exports.BASE) { }
    while (places--) {
        var d = n % exports.BASE;
        s = String.fromCharCode((d < 10 ? 48 : 55) + d) + s;
        n = (n - d) / exports.BASE;
    }
    return s;
}
exports.toAlphaCode = toAlphaCode;
function fromAlphaCode(s) {
    var n = 0;
    for (var places = 1, range = exports.BASE; places < s.length; n += range, places++, range *= exports.BASE) { }
    for (var i = s.length - 1, pow = 1; i >= 0; i--, pow *= exports.BASE) {
        var d = s.charCodeAt(i) - 48;
        if (d > 10) {
            d -= 7;
        }
        n += d * pow;
    }
    return n;
}
exports.fromAlphaCode = fromAlphaCode;
//# sourceMappingURL=alphacode.js.map

/***/ }),

/***/ "./node_modules/dawg-lookup/lib/histogram.js":
/*!***************************************************!*\
  !*** ./node_modules/dawg-lookup/lib/histogram.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var util_1 = __webpack_require__(/*! ./util */ "./node_modules/dawg-lookup/lib/util.js");
var Histogram = (function () {
    function Histogram() {
        this.counts = {};
    }
    Histogram.prototype.init = function (key, n) {
        if (n === void 0) { n = 0; }
        if (typeof key === 'number') {
            key = key.toString();
        }
        if (this.counts[key] === undefined) {
            this.counts[key] = 0;
        }
        this.counts[key] += n;
    };
    Histogram.prototype.add = function (key, n) {
        if (n === void 0) { n = 1; }
        this.init(key, n);
    };
    Histogram.prototype.countOf = function (key) {
        this.init(key);
        return this.counts[key];
    };
    Histogram.prototype.highest = function (top) {
        return util_1.sortByValues(this.counts, 'desc').slice(0, top);
    };
    return Histogram;
}());
exports.Histogram = Histogram;
//# sourceMappingURL=histogram.js.map

/***/ }),

/***/ "./node_modules/dawg-lookup/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/dawg-lookup/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var trie_1 = __webpack_require__(/*! ./trie */ "./node_modules/dawg-lookup/lib/trie.js");
exports.Trie = trie_1.Trie;
var ptrie_1 = __webpack_require__(/*! ./ptrie */ "./node_modules/dawg-lookup/lib/ptrie.js");
exports.PTrie = ptrie_1.PTrie;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/dawg-lookup/lib/node.js":
/*!**********************************************!*\
  !*** ./node_modules/dawg-lookup/lib/node.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/*
  Node

  Each node contains some special properties (begining with '_'), as well as
  arbitrary string properties for string fragments contained in the input word
  dictionary.

  String properties can be "terminal" (have a numeric value of 1), or can
  referance another child Node.

  Note that a Node containing a terminal '' (empty string) property, is itself
  marked as a terminal Node (the prefix leading to this node is a word in the
  dictionary.
*/
var Node = (function () {
    function Node() {
        // Number of child properties.
        this._p = 0;
    }
    Node.prototype.child = function (prop) {
        return this[prop];
    };
    Node.prototype.setChild = function (prop, value) {
        var self = this;
        if (prop !== this._g) {
            // delete self._g;
        }
        if (self[prop] !== undefined) {
            this._p += 1;
        }
        if (this._p === 1) {
            // this._g = prop;
        }
        self[prop] = value;
    };
    Node.prototype.deleteChild = function (prop) {
        var self = this;
        if (prop === this._g) {
            // delete this._g;
        }
        this._p -= 1;
        delete self[prop];
        if (this._p === 1) {
            // this._g = this.props()[0];
        }
    };
    // A property is a terminal string
    Node.prototype.isTerminalString = function (prop) {
        return typeof this.child(prop) === 'number';
    };
    // This node is a terminal node (the prefix string is a word in the
    // dictionary).
    Node.prototype.isTerminal = function () {
        return this.isTerminalString('');
    };
    // Well ordered list of properties in a node (string or object properties)
    // Use nodesOnly === true to return only properties of child nodes (not
    // terminal strings).
    Node.prototype.props = function (nodesOnly) {
        var me = this;
        var props = [];
        for (var prop in me) {
            if (!me.hasOwnProperty(prop)) {
                continue;
            }
            if (prop !== '' && prop[0] !== '_') {
                if (!nodesOnly || Node.isNode(this.child(prop))) {
                    props.push(prop);
                }
            }
        }
        props.sort();
        return props;
    };
    // Compute in-degree of all nodes and mark the
    // singleton nodes.
    Node.countDegree = function (root) {
        var walker = new Walker(root);
        walker.dfs(function (order, node) {
            if (order === 'post') {
                return;
            }
            if (node._d === undefined) {
                node._d = 0;
            }
            node._d++;
        });
    };
    // Node has just a single (non-special) property.
    Node.prototype.isSingleton = function () {
        return this._p === 1 && !this.isTerminal();
    };
    // This function can be used as a Type Guard (TypeScript)
    Node.isNode = function (n) {
        return n instanceof Node;
    };
    return Node;
}());
exports.Node = Node;
var Walker = (function () {
    function Walker(root) {
        this.root = root;
        this.visitMap = new Map();
    }
    Walker.prototype.reset = function () {
        this.visitMap = new Map();
        return this;
    };
    Walker.prototype.visit = function (node) {
        this.visitMap.set(node, true);
    };
    Walker.prototype.visited = function (node) {
        return this.visitMap.get(node) || false;
    };
    Walker.prototype.dfs = function (handler) {
        this.reset();
        this._dfs(this.root, null, '', handler);
    };
    // Depth-first search via callback handler.
    Walker.prototype._dfs = function (node, parent, propParent, handler) {
        // The handler can be called multiple times from different parents
        // since Nodes can form a multi-graph.
        handler('pre', node, parent, propParent);
        if (this.visited(node)) {
            return;
        }
        this.visit(node);
        var props = node.props(true);
        for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
            var prop = props_1[_i];
            this._dfs(node.child(prop), node, prop, handler);
        }
        handler('post', node, parent, propParent);
    };
    return Walker;
}());
exports.Walker = Walker;
//# sourceMappingURL=node.js.map

/***/ }),

/***/ "./node_modules/dawg-lookup/lib/ptrie.js":
/*!***********************************************!*\
  !*** ./node_modules/dawg-lookup/lib/ptrie.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var alphacode_1 = __webpack_require__(/*! ./alphacode */ "./node_modules/dawg-lookup/lib/alphacode.js");
exports.NODE_SEP = ';';
exports.STRING_SEP = ',';
exports.TERMINAL_PREFIX = '!';
exports.MIN_LETTER = 'a';
exports.MAX_LETTER = 'z';
exports.MAX_WORD = new Array(10).join(exports.MAX_LETTER);
var reNodePart = new RegExp('([' + exports.MIN_LETTER + '-' + exports.MAX_LETTER +
    ']+)(' + exports.STRING_SEP + '|[0-9A-Z]+|$)', 'g');
var reSymbol = new RegExp("([0-9A-Z]+):([0-9A-Z]+)");
/*
 * Packed Trie structure.
 *
 * This class can read in a packed Trie (actually DAWG) in the form
 * of a string encoding of a set of nodes.  It will then spilt it
 * into an array of strings, and use the resulting array to
 * resolve dictionary membership.
 *
 * Usage:
 *
 *   // Unpack a packed dictionary string for use.
 *   var ptrie = new PTrie(packedString);
 *
 *   // Test a word for membership in the dictionary.
 *   if (ptrie.isWord(myWord)) {
 *     ...
 *   }
 *
 *   // For command completion - find first 20 words that begin with a prefix.
 *   var words = ptrie.completions(prefix, 20);
 */
var PTrie = (function () {
    function PTrie(packed) {
        this.syms = [];
        this.nodes = packed.split(exports.NODE_SEP);
        this.syms = [];
        this.symCount = 0;
        while (true) {
            var m = reSymbol.exec(this.nodes[this.symCount]);
            if (!m) {
                break;
            }
            if (alphacode_1.fromAlphaCode(m[1]) !== this.symCount) {
                throw new Error("Invalid Symbol name - found " + m[1] +
                    " when expecting " + alphacode_1.toAlphaCode(this.symCount));
            }
            this.syms[this.symCount] = alphacode_1.fromAlphaCode(m[2]);
            this.symCount++;
        }
        this.nodes.splice(0, this.symCount);
    }
    // Is word in the dictionary (exact match).
    PTrie.prototype.isWord = function (word) {
        if (word === '') {
            return false;
        }
        return this.match(word) === word;
    };
    // Returns the longest match that is prefix of word.
    PTrie.prototype.match = function (word) {
        var matches = this.matches(word);
        if (matches.length === 0) {
            return '';
        }
        return matches[matches.length - 1];
    };
    // Return all entries that match a prefix of word (in order of increasing
    // length.
    PTrie.prototype.matches = function (word) {
        return this.words(word, word + exports.MIN_LETTER);
    };
    // Return all entries that begin with a prefix.
    PTrie.prototype.completions = function (prefix, limit) {
        return this.words(prefix, beyond(prefix), limit);
    };
    PTrie.prototype.words = function (from, beyond, limit) {
        var words = [];
        function catchWords(word, ctx) {
            if (limit !== undefined && words.length >= limit) {
                ctx.abort = true;
                return;
            }
            words.push(word);
        }
        this.enumerate(0, '', { from: from,
            beyond: beyond,
            fn: catchWords,
            prefixes: (from + exports.MIN_LETTER) === beyond
        });
        return words;
    };
    PTrie.prototype.enumerate = function (inode, prefix, ctx) {
        var _this = this;
        var node = this.nodes[inode];
        var cont = true;
        function emit(word) {
            if (ctx.prefixes) {
                if (word === ctx.from.slice(0, word.length)) {
                    ctx.fn(word, ctx);
                }
                return;
            }
            if (ctx.from <= word && word < ctx.beyond) {
                ctx.fn(word, ctx);
            }
        }
        if (node[0] === exports.TERMINAL_PREFIX) {
            emit(prefix);
            if (ctx.abort) {
                return;
            }
            node = node.slice(1);
        }
        node.replace(reNodePart, function (w, str, ref) {
            var match = prefix + str;
            // Done or no possible future match from str
            if (ctx.abort ||
                match >= ctx.beyond ||
                match < ctx.from.slice(0, match.length)) {
                return '';
            }
            var isTerminal = ref === exports.STRING_SEP || ref === '';
            if (isTerminal) {
                emit(match);
                return '';
            }
            _this.enumerate(_this.inodeFromRef(ref, inode), match, ctx);
            return '';
        });
    };
    // References are either absolute (symbol) or relative (1 based).
    PTrie.prototype.inodeFromRef = function (ref, inodeFrom) {
        var dnode = alphacode_1.fromAlphaCode(ref);
        if (dnode < this.symCount) {
            return this.syms[dnode];
        }
        dnode -= this.symCount;
        return inodeFrom + dnode + 1;
    };
    return PTrie;
}());
exports.PTrie = PTrie;
// Return a string that is the smallest string greater than
// any string which is prefixed with s.
function beyond(s) {
    if (s.length === 0) {
        return exports.MAX_WORD;
    }
    var code = s.charCodeAt(s.length - 1);
    return s.slice(0, -1) + String.fromCharCode(code + 1);
}
//# sourceMappingURL=ptrie.js.map

/***/ }),

/***/ "./node_modules/dawg-lookup/lib/trie.js":
/*!**********************************************!*\
  !*** ./node_modules/dawg-lookup/lib/trie.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/*
  A JavaScript implementation of a Trie search datastructure.

  Usage:

  trie = new Trie(dictionary-string);
  bool = trie.isWord(word);

  To use a packed (compressed) version of the trie stored as a string:

  compressed = trie.pack();
  ptrie = new PackedTrie(compressed);
  bool = ptrie.isWord(word)

*/
var ptrie = __webpack_require__(/*! ./ptrie */ "./node_modules/dawg-lookup/lib/ptrie.js");
var alphacode_1 = __webpack_require__(/*! ./alphacode */ "./node_modules/dawg-lookup/lib/alphacode.js");
var histogram_1 = __webpack_require__(/*! ./histogram */ "./node_modules/dawg-lookup/lib/histogram.js");
var util_1 = __webpack_require__(/*! ./util */ "./node_modules/dawg-lookup/lib/util.js");
var node_1 = __webpack_require__(/*! ./node */ "./node_modules/dawg-lookup/lib/node.js");
var DEBUG = false;
// Create a Trie data structure for searching for membership of strings
// in a dictionary in a very space efficient way.
var Trie = (function () {
    function Trie(words) {
        this.root = new node_1.Node();
        this.lastWord = '';
        this.suffixes = {};
        this.cNext = 1;
        this.wordCount = 0;
        this.vCur = 0;
        this.insertWords(words);
    }
    // Insert words from one big string, or from an array.
    Trie.prototype.insertWords = function (words) {
        var i;
        if (words === undefined) {
            return;
        }
        if (typeof words === 'string') {
            words = words.split(/[^a-zA-Z]+/);
        }
        for (i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase();
        }
        util_1.unique(words);
        for (i = 0; i < words.length; i++) {
            this.insert(words[i]);
        }
    };
    Trie.prototype.insert = function (word) {
        this._insert(word, this.root);
        var lastWord = this.lastWord;
        this.lastWord = word;
        var prefix = commonPrefix(word, lastWord);
        if (prefix === lastWord) {
            return;
        }
        var freeze = this.uniqueNode(lastWord, word, this.root);
        if (freeze) {
            this.combineSuffixNode(freeze);
        }
    };
    Trie.prototype._insert = function (word, node) {
        var i;
        var prefix;
        var next;
        var prop;
        // Duplicate word entry - ignore
        if (word.length === 0) {
            return;
        }
        // Do any existing props share a common prefix?
        for (prop in node) {
            if (!node.hasOwnProperty(prop)) {
                continue;
            }
            prefix = commonPrefix(word, prop);
            if (prefix.length === 0) {
                continue;
            }
            // Prop is a proper prefix - recurse to child node
            if (prop === prefix && node_1.Node.isNode(node.child(prop))) {
                this._insert(word.slice(prefix.length), node.child(prop));
                return;
            }
            // Duplicate terminal string - ignore
            if (prop === word && node.isTerminalString(prop)) {
                return;
            }
            next = new node_1.Node();
            next.setChild(prop.slice(prefix.length), node.child(prop));
            this.addTerminal(next, word = word.slice(prefix.length));
            node.deleteChild(prop);
            node.setChild(prefix, next);
            this.wordCount++;
            return;
        }
        // No shared prefix.  Enter the word here as a terminal string.
        this.addTerminal(node, word);
        this.wordCount++;
    };
    // Add a terminal string to node.
    // If 2 characters or less, just add with value === 1.
    // If more than 2 characters, point to shared node
    // Note - don't prematurely share suffixes - these
    // terminals may become split and joined with other
    // nodes in this part of the tree.
    Trie.prototype.addTerminal = function (node, prop) {
        if (prop.length <= 1) {
            node.setChild(prop, 1);
            return;
        }
        var next = new node_1.Node();
        node.setChild(prop[0], next);
        this.addTerminal(next, prop.slice(1));
    };
    Trie.prototype.optimize = function () {
        var scores = [];
        this.combineSuffixNode(this.root);
        this.prepDFS();
        this.countDegree(this.root);
        this.prepDFS();
        this.collapseChains(this.root);
    };
    // Convert Trie to a DAWG by sharing identical nodes
    Trie.prototype.combineSuffixNode = function (node) {
        // Frozen node - can't change.
        if (node._c) {
            return node;
        }
        // Make sure all children are combined and generate unique node
        // signature for this node.
        var sig = [];
        if (node.isTerminal()) {
            sig.push('!');
        }
        var props = node.props();
        for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            if (node_1.Node.isNode(node.child(prop))) {
                node.setChild(prop, this.combineSuffixNode(node.child(prop)));
                sig.push(prop);
                sig.push(node.child(prop)._c);
            }
            else {
                sig.push(prop);
            }
        }
        var sigString = sig.join('-');
        var shared = this.suffixes[sigString];
        if (shared) {
            return shared;
        }
        this.suffixes[sigString] = node;
        node._c = this.cNext++;
        return node;
    };
    Trie.prototype.prepDFS = function () {
        this.vCur++;
    };
    Trie.prototype.visited = function (node) {
        if (node._v === this.vCur) {
            return true;
        }
        node._v = this.vCur;
    };
    Trie.prototype.countDegree = function (node) {
        if (node._d === undefined) {
            node._d = 0;
        }
        node._d++;
        if (this.visited(node)) {
            return;
        }
        var props = node.props(true);
        for (var i = 0; i < props.length; i++) {
            this.countDegree(node.child(props[i]));
        }
    };
    // Remove intermediate singleton nodes by hoisting into their parent
    Trie.prototype.collapseChains = function (node) {
        var prop = '-invalid-';
        var props;
        var i;
        if (this.visited(node)) {
            return;
        }
        props = node.props();
        for (i = 0; i < props.length; i++) {
            prop = props[i];
            var child = node.child(prop);
            if (!node_1.Node.isNode(child)) {
                continue;
            }
            this.collapseChains(child);
            // Hoist the singleton child's single property to the parent
            if (child._g !== undefined && (child._d === 1 || child._g.length === 1)) {
                node.deleteChild(prop);
                prop += child._g;
                node.setChild(prop, child.child(child._g));
            }
        }
        // Identify singleton nodes
        if (props.length === 1 && !node.isTerminal()) {
            node._g = prop;
        }
    };
    Trie.prototype.isWord = function (word) {
        return this.isFragment(word, this.root);
    };
    Trie.prototype.isFragment = function (word, node) {
        if (word.length === 0) {
            return node.isTerminal();
        }
        if (node.child(word) === 1) {
            return true;
        }
        // Find a prefix of word reference to a child
        var props = node.props(true);
        for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            if (prop === word.slice(0, prop.length)) {
                return this.isFragment(word.slice(prop.length), node.child(prop));
            }
        }
        return false;
    };
    // Find highest node in Trie that is on the path to word
    // and that is NOT on the path to other.
    Trie.prototype.uniqueNode = function (word, other, node) {
        var props = node.props(true);
        for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            if (prop === word.slice(0, prop.length)) {
                if (prop !== other.slice(0, prop.length)) {
                    return node.child(prop);
                }
                return this.uniqueNode(word.slice(prop.length), other.slice(prop.length), node.child(prop));
            }
        }
        return undefined;
    };
    // Return packed representation of Trie as a string.
    //
    // Each node of the Trie is output on a single line.
    //
    // For example Trie("the them there thesis this"):
    // {
    //    "th": {
    //      "is": 1,
    //      "e": {
    //        "": 1,
    //        "m": 1,
    //        "re": 1,
    //        "sis": 1
    //      }
    //    }
    //  }
    //
    // Would be reperesented as:
    //
    // th0
    // e0is
    // !m,re,sis
    //
    // The line begins with a '!' iff it is a terminal node of the Trie.
    // For each string property in a node, the string is listed, along
    // with a (relative!) line number of the node that string references.
    // Terminal strings (those without child node references) are
    // separated by ',' characters.
    Trie.prototype.pack = function () {
        var self = this;
        var nodes = [];
        var nodeCount;
        var syms = {};
        var pos = 0;
        // Make sure we've combined all the common suffixes
        this.optimize();
        function nodeLine(node) {
            var line = '';
            var sep = '';
            if (node.isTerminal()) {
                line += ptrie.TERMINAL_PREFIX;
            }
            var props = node.props();
            for (var i = 0; i < props.length; i++) {
                var prop = props[i];
                if (node.isTerminalString(prop)) {
                    line += sep + prop;
                    sep = ptrie.STRING_SEP;
                    continue;
                }
                var child = node.child(prop);
                if (syms[child._n]) {
                    line += sep + prop + syms[child._n];
                    sep = '';
                    continue;
                }
                var ref = alphacode_1.toAlphaCode(node._n - child._n - 1 + symCount);
                // Large reference to smaller string suffix -> duplicate suffix
                if (child._g && ref.length >= child._g.length &&
                    node.isTerminalString(child._g)) {
                    ref = child._g;
                    line += sep + prop + ref;
                    sep = ptrie.STRING_SEP;
                    continue;
                }
                line += sep + prop + ref;
                sep = '';
            }
            return line;
        }
        // Topological sort into nodes array
        function numberNodes(node) {
            if (node._n !== undefined) {
                return;
            }
            var props = node.props(true);
            for (var i = 0; i < props.length; i++) {
                numberNodes(node.child(props[i]));
            }
            node._n = pos++;
            nodes.unshift(node);
        }
        var histAbs = new histogram_1.Histogram();
        var histRel = new histogram_1.Histogram();
        function analyzeRefs(node) {
            if (self.visited(node)) {
                return;
            }
            var props = node.props(true);
            for (var i = 0; i < props.length; i++) {
                var prop = props[i];
                var child = node.child(prop);
                var ref = node._n - child._n - 1;
                // Count the number of single-character relative refs
                if (ref < alphacode_1.BASE) {
                    histRel.add(ref);
                }
                // Count the number of characters saved by converting an absolute
                // reference to a one-character symbol.
                histAbs.add(child._n, alphacode_1.toAlphaCode(ref).length - 1);
                analyzeRefs(child);
            }
        }
        function symbolCount() {
            var topNodes = histAbs.highest(alphacode_1.BASE);
            var savings = [];
            savings[-1] = 0;
            var best = 0;
            var count = 0;
            var defSize = 3 + alphacode_1.toAlphaCode(nodeCount).length;
            for (var sym = 0; sym < alphacode_1.BASE; sym++) {
                if (topNodes[sym] === undefined) {
                    break;
                }
                // Cumulative savings of:
                //   saved characters in refs
                //   minus definition size
                //   minus relative size wrapping to 2 digits
                savings[sym] = topNodes[sym][1] - defSize -
                    histRel.countOf(alphacode_1.BASE - sym - 1) +
                    savings[sym - 1];
                log("savings[" + sym + "] " + savings[sym] + ' = ' +
                    savings[sym - 1] + ' +' +
                    topNodes[sym][1] + ' - ' + defSize + ' - ' +
                    histRel.countOf(alphacode_1.BASE - sym - 1) + ')');
                if (savings[sym] >= best) {
                    best = savings[sym];
                    count = sym + 1;
                }
            }
            return [count, topNodes];
        }
        numberNodes(this.root);
        nodeCount = nodes.length;
        this.prepDFS();
        analyzeRefs(this.root);
        var _a = symbolCount(), symCount = _a[0], topNodes = _a[1];
        var symDefs = [];
        for (var sym = 0; sym < symCount; sym++) {
            syms[topNodes[sym][0]] = alphacode_1.toAlphaCode(sym);
        }
        var nodeLines = [];
        for (var i = 0; i < nodeCount; i++) {
            nodeLines[i] = nodeLine(nodes[i]);
        }
        // Prepend symbols
        for (var sym = symCount - 1; sym >= 0; sym--) {
            nodeLines.unshift(alphacode_1.toAlphaCode(sym) + ':' +
                alphacode_1.toAlphaCode(nodeCount -
                    parseInt(topNodes[sym][0], 10) - 1));
        }
        return nodeLines.join(ptrie.NODE_SEP);
    };
    return Trie;
}());
exports.Trie = Trie;
function commonPrefix(w1, w2) {
    var i;
    var maxlen = Math.min(w1.length, w2.length);
    for (i = 0; i < maxlen && w1[i] === w2[i]; i++) { }
    return w1.slice(0, i);
}
function log(message) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (DEBUG) {
        console.log.apply(console, [message].concat(args));
    }
}
//# sourceMappingURL=trie.js.map

/***/ }),

/***/ "./node_modules/dawg-lookup/lib/util.js":
/*!**********************************************!*\
  !*** ./node_modules/dawg-lookup/lib/util.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function sortByValues(o, dir) {
    if (dir === void 0) { dir = 'asc'; }
    var result = [];
    for (var key in o) {
        result.push([key, o[key]]);
    }
    result.sort(function (a, b) {
        return cmpDefault(a[1], b[1], dir);
    });
    return result;
}
exports.sortByValues = sortByValues;
function cmpDefault(a, b, dir) {
    if (dir === void 0) { dir = 'asc'; }
    var result = 0;
    if (a < b) {
        result = -1;
    }
    else if (a > b) {
        result = 1;
    }
    return dir === 'asc' ? result : -result;
}
// Sort elements and remove duplicates from array (modified in place).
function unique(a, cmp) {
    if (cmp === void 0) { cmp = cmpDefault; }
    a.sort(cmp);
    for (var i = 1; i < a.length; i++) {
        if (cmp(a[i - 1], a[i]) === 0) {
            a.splice(i, 1);
        }
    }
}
exports.unique = unique;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dawgLookup = __webpack_require__(/*! dawg-lookup */ "./node_modules/dawg-lookup/lib/index.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AI =
/*#__PURE__*/
function () {
  _createClass(AI, [{
    key: "alphabet",

    /** returns (& generates) alphabet array */
    get: function get() {
      if (!this._a) {
        this._a = [];
        var i = 'a'.charCodeAt(0),
            j = 'z'.charCodeAt(0);

        for (; i <= j; ++i) {
          this._a.push(String.fromCharCode(i));
        }
      }

      return this._a;
    }
    /** provides current level board size */

  }, {
    key: "boardSize",
    get: function get() {
      return this._boardSize;
    }
    /** provides current level usedWords */

  }, {
    key: "usedWords",
    get: function get() {
      return this._usedWords;
    }
    /** provides current level board */

  }, {
    key: "board",
    get: function get() {
      return this._board;
    }
    /** provides added dictionaries */

  }, {
    key: "dictionaries",
    get: function get() {
      return this._dictionaries;
    }
    /**
     * Generates an instanse of the Words AI library
     * @constructor
     */

  }]);

  function AI() {
    _classCallCheck(this, AI);

    this._dictionaries = {};
    this.endBoard();
  }
  /**
   * Add main dictionary to the library.
   * @param {string} name - unique name for the dictionary.
   * @param {string} string - dictionary string.
   * */


  _createClass(AI, [{
    key: "addMainDictionary",
    value: function addMainDictionary(name, string) {
      this._addDictionary(name, string);

      this._mainDictionary = this._dictionaries[name];
    }
    /**
     * Add secondary dictionary to the library.
     * @param {string} name - unique name for the dictionary.
     * @param {string} string - dictionary string.
     * */

  }, {
    key: "addSecondaryDictionary",
    value: function addSecondaryDictionary(name, string) {
      this._addDictionary(name, string);

      this._secondaryDictionary = this._dictionaries[name];
    }
    /**
     * Start Board(Level) with intial center word.
     * @param {number} boardSize - Board Size.
     */

  }, {
    key: "startBoard",
    value: function startBoard() {
      var boardSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._defaultBoardSize;
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

  }, {
    key: "endBoard",
    value: function endBoard() {
      this._boardSize = this._defaultBoardSize;
      this._usedWords = [];
      this._mainDictionary = null;
      this._secondaryDictionary = null;

      this._cleanBoard();
    }
    /** check if word already was used in current level */

  }, {
    key: "isUsedWord",
    value: function isUsedWord(word) {
      return !word || !this._usedWords || this._usedWords.find(function (element) {
        return element.toLowerCase() === word.toLowerCase();
      });
    }
    /** check if word exists in main dictionary */

  }, {
    key: "doesWordExist",
    value: function doesWordExist(word) {
      if (!word) return false;

      var firstLetterID = this._getLetterID([].concat(_toConsumableArray(word))[0]);

      var wordsArray = this._getWordsArrayByLetterID(firstLetterID);

      return wordsArray.find(function (element) {
        return element.toLowerCase() === word.toLowerCase();
      });
    }
    /**
     *
     * check if selected cells are possible for a word
     * @param {number} startX - first letter column
     * @param {number} startY - first letter row
     * @param {boolean} vertical - is word vertical or horizontal
     * @param {number} amount - amount of selected cells
     */

  }, {
    key: "checkPossibleCells",
    value: function checkPossibleCells(startX, startY, vertical, amount) {
      if (startX < 0 || startY < 0 || (vertical ? startY : startX) + amount > this._boardSize) return false;
      var blockersCounter = 0;
      var lettersCounter = 0;

      for (var i = 0; i < amount; i++) {
        var checkX = vertical ? startX : startX + i;
        var checkY = vertical ? startY + i : startY;
        var element = this._board[checkY][checkX];
        if (this._isAString(element)) lettersCounter++;else if (element >= 3 || vertical && element === 1 || !vertical && element === 2) blockersCounter++;
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

  }, {
    key: "addWord",
    value: function addWord(startX, startY, word) {
      var vertical = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

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


      [].concat(_toConsumableArray(word)).forEach(function (element, index) {
        var elementY = startY + (vertical ? index : 0);
        var elementX = startX + (vertical ? 0 : index);
        this._board[elementY][elementX] = element.toLowerCase();

        for (var i = 0; i < 2; i++) {
          var targetX = elementX + (vertical ? i ? 1 : -1 : 0);
          var targetY = elementY + (vertical ? 0 : i ? 1 : -1);
          if (targetX < 0 || targetX >= this._boardSize || targetY < 0 || targetY >= this._boardSize) continue;
          var targetElement = this._board[targetY][targetX];
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

  }, {
    key: "getHintWord",
    value: function getHintWord() {
      var returnElement = {
        x: 0,
        y: 0,
        vertical: false,
        word: null
      };
      var currentElement = returnElement;

      for (var y = 0; y < this._boardSize; y++) {
        for (var x = 0; x < this._boardSize; x++) {
          var element = this._board[y][x];
          if (this._isAString(element)) currentElement = this._findPossibleWord(x, y);else continue;
          if (currentElement.word && (!returnElement.word || returnElement.word && currentElement.word.length > returnElement.word.length)) returnElement = currentElement;
          if (returnElement.word && returnElement.word.length === this._boardSize) return returnElement;
        }
      }

      return returnElement;
    }
    /**
     * Private methods
     */

    /** check if element is a string */

  }, {
    key: "_isAString",
    value: function _isAString(element) {
      return typeof element === 'string';
    }
    /** check if element is a number */

  }, {
    key: "_isANumber",
    value: function _isANumber(element) {
      return !this._isAString(element);
    }
    /** check if a cell is a vertical blocker */

  }, {
    key: "_isAVerticalBlocker",
    value: function _isAVerticalBlocker(element) {
      return !this._isANumber(element) || element === 1 || element >= 3;
    }
    /** check if a cell is a horizontal blocker */

  }, {
    key: "_isAHorizontalBlocker",
    value: function _isAHorizontalBlocker(element) {
      return !this._isANumber(element) || element === 2 || element >= 3;
    }
    /**
     * check if word letters intersects existing letters
     * @param {number} startX - first letter column
     * @param {number} startY - first letter row
     * @param {string} word  - word
     * @param {boolean} vertical - is word vertical or horizontal
     */

  }, {
    key: "_checkPossibleLetters",
    value: function _checkPossibleLetters(startX, startY, word) {
      var vertical = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      for (var i = 0; i < word.length; i++) {
        var checkX = vertical ? startX : startX + i;
        var checkY = vertical ? startY + i : startY;
        var element = this._board[checkY][checkX];
        if (this._isAString(element) && element !== [].concat(_toConsumableArray(word))[i]) return false;
      }

      return true;
    }
    /** default board size */

  }, {
    key: "_addDictionary",

    /**
     * add dictionary
     * Once dicitionary is preloaded library won't load dictionary again but use existing one by name.
     * @constructor
     * @param {string} name - unique name for the dictionary.
     * @param {string} string - dictionary string.
     * */
    value: function _addDictionary(name, string) {
      if (name in this._dictionaries) return;
      var dict = new _dawgLookup.Trie(string);
      this._dictionaries[name] = new _dawgLookup.PTrie(dict.pack());
    }
    /** clean board */

  }, {
    key: "_cleanBoard",
    value: function _cleanBoard() {
      this._board = [];

      for (var y = 0; y < this._boardSize; y++) {
        var _array = [];

        for (var x = 0; x < this._boardSize; x++) {
          _array.push(0);
        }

        this._board.push(_array);
      }
    }
    /** add initial horizontal centered word */

  }, {
    key: "_setInitialRandomWord",
    value: function _setInitialRandomWord() {
      var word = null;
      var randomLetterID = Math.floor(Math.random() * (this.alphabet.length - 2));

      while (!word) {
        var randomWords = this._getWordsArrayByLetterID(randomLetterID, 1);

        for (var i = 0; i < randomWords.length; i++) {
          var randomWord = randomWords[i];
          if (this.isUsedWord(randomWord) || randomWord.length < Math.floor(this._boardSize * 0.5) || randomWord.length >= Math.floor(this._boardSize)) continue;else {
            word = randomWord;
            break;
          }
        }

        randomLetterID = randomLetterID < this.alphabet.length - 1 ? randomLetterID + 1 : 0;
      }

      var x = Math.floor((this._boardSize - word.length) * 0.5);
      var y = Math.floor(this._boardSize * 0.4 + Math.random() * (this._boardSize * 0.2));
      this.addWord(x, y, word);
    }
    /**
     * provides letter id in the alphabet
     * @param {char} letter - Letter.
     * */

  }, {
    key: "_getLetterID",
    value: function _getLetterID(letter) {
      for (var i = 0; i < this.alphabet.length; i++) {
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

  }, {
    key: "_getWordsArrayByLetterID",
    value: function _getWordsArrayByLetterID(letterID) {
      var dictionaryType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var currentLetter = this.alphabet[letterID];
      var nextLetter = this.alphabet[letterID < this.alphabet.length - 1 ? letterID + 1 : 0];
      var words = [];
      var dictionary = dictionaryType ? this._secondaryDictionary : this._mainDictionary;
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

  }, {
    key: "_findPossibleWord",
    value: function _findPossibleWord(x, y) {
      var regExpObject = null;
      var returnWord = null;
      var returnX = 0;
      var returnY = 0;
      var vertical = false;

      for (var i = 0; i < 2; i++) {
        vertical = !!i;
        regExpObject = this._generateRegExp(x, y, vertical);
        if (!regExpObject) continue;
        returnWord = this._findWordByRegExp(regExpObject.regExp);
        if (!returnWord) continue;

        for (var l = 0; l <= regExpObject.before + 1; l++) {
          if (l < returnWord.length && returnWord[l].toString() === this._board[y][x].toString() && (vertical ? y : x) - l >= 0 && (vertical ? y : x) - l + returnWord.length <= this._boardSize) {
            var checkX = vertical ? x : x + regExpObject.between + (regExpObject.between ? 1 : 0);
            var checkY = vertical ? y + regExpObject.between + (regExpObject.between ? 1 : 0) : y;

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

  }, {
    key: "_generateRegExp",
    value: function _generateRegExp(x, y) {
      var vertical = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var regExp = '';
      var iDiff = Math.max(this._boardSize - (vertical ? y : x), vertical ? y : x);
      var wordArray = new Array(this._boardSize);
      wordArray[vertical ? y : x] = this._board[y][x];
      var isTopBlocked = false;
      var isBottomBlocked = false;
      var lettersCounter = 0;

      for (var i = 1; i < iDiff; i++) {
        // check movement top/left
        if ((vertical ? y : x) - i >= 0 && !isTopBlocked) {
          var element = this._board[vertical ? y - i : y][vertical ? x : x - i];

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
        } // check movement bottom/right


        if ((vertical ? y : x) + i < this._boardSize && !isBottomBlocked) {
          var _element = this._board[vertical ? y + i : y][vertical ? x : x + i];

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
      } // geenerate regular expression


      regExp += '^(';
      var beforeLetterCounter = 0;
      var anyCounter = 0;
      var totalFreeCounter = 0;
      var betweenLettersCounter = 0;
      lettersCounter = 0;
      wordArray.forEach(function (element, index) {
        if (element && element === '[a-z]') anyCounter++;else if (element) {
          if (!lettersCounter) beforeLetterCounter = anyCounter;
          lettersCounter++;
          if (lettersCounter === 1) regExp += '[a-z]{0,' + anyCounter + '}' + element.toLowerCase();else if (lettersCounter === 2) {
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

  }, {
    key: "_findWordByRegExp",
    value: function _findWordByRegExp(regExp) {
      var word = null;
      var startLetterID = Math.floor(Math.random() * (this.alphabet.length - 2));
      var randomLetterID = startLetterID;
      var regularExpression = new RegExp(regExp); // var _this = this;

      while (!word) {
        var randomWords = this._getWordsArrayByLetterID(randomLetterID, 1);
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
          if (element.match(regularExpression) && element.length >= 3 && !this.isUsedWord(element) && (!word || element.length > word.length)) {
            word = element;
          }
        });
        if (word) break;
        randomLetterID = randomLetterID < this.alphabet.length - 1 ? randomLetterID + 1 : 0;
        if (randomLetterID === startLetterID) break;
      }

      return word;
    }
  }, {
    key: "_defaultBoardSize",
    get: function get() {
      return 11;
    }
  }]);

  return AI;
}();

exports.default = AI;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AI", {
  enumerable: true,
  get: function get() {
    return _ai.default;
  }
});

var _ai = _interopRequireDefault(__webpack_require__(/*! ./ai */ "./src/ai.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jkc2FpLmxpYi93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd29yZHNhaS5saWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29yZHNhaS5saWIvLi9ub2RlX21vZHVsZXMvZGF3Zy1sb29rdXAvbGliL2FscGhhY29kZS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLmxpYi8uL25vZGVfbW9kdWxlcy9kYXdnLWxvb2t1cC9saWIvaGlzdG9ncmFtLmpzIiwid2VicGFjazovL3dvcmRzYWkubGliLy4vbm9kZV9tb2R1bGVzL2Rhd2ctbG9va3VwL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLmxpYi8uL25vZGVfbW9kdWxlcy9kYXdnLWxvb2t1cC9saWIvbm9kZS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLmxpYi8uL25vZGVfbW9kdWxlcy9kYXdnLWxvb2t1cC9saWIvcHRyaWUuanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS5saWIvLi9ub2RlX21vZHVsZXMvZGF3Zy1sb29rdXAvbGliL3RyaWUuanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS5saWIvLi9ub2RlX21vZHVsZXMvZGF3Zy1sb29rdXAvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS5saWIvLi9zcmMvYWkuanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS5saWIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQUkiLCJfYSIsImkiLCJjaGFyQ29kZUF0IiwiaiIsInB1c2giLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJfYm9hcmRTaXplIiwiX3VzZWRXb3JkcyIsIl9ib2FyZCIsIl9kaWN0aW9uYXJpZXMiLCJlbmRCb2FyZCIsIm5hbWUiLCJzdHJpbmciLCJfYWRkRGljdGlvbmFyeSIsIl9tYWluRGljdGlvbmFyeSIsIl9zZWNvbmRhcnlEaWN0aW9uYXJ5IiwiYm9hcmRTaXplIiwiX2RlZmF1bHRCb2FyZFNpemUiLCJfY2xlYW5Cb2FyZCIsIl9zZXRJbml0aWFsUmFuZG9tV29yZCIsIndvcmQiLCJmaW5kIiwiZWxlbWVudCIsInRvTG93ZXJDYXNlIiwiZmlyc3RMZXR0ZXJJRCIsIl9nZXRMZXR0ZXJJRCIsIndvcmRzQXJyYXkiLCJfZ2V0V29yZHNBcnJheUJ5TGV0dGVySUQiLCJzdGFydFgiLCJzdGFydFkiLCJ2ZXJ0aWNhbCIsImFtb3VudCIsImJsb2NrZXJzQ291bnRlciIsImxldHRlcnNDb3VudGVyIiwiY2hlY2tYIiwiY2hlY2tZIiwiX2lzQVN0cmluZyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja1Bvc3NpYmxlQ2VsbHMiLCJfY2hlY2tQb3NzaWJsZUxldHRlcnMiLCJpc1VzZWRXb3JkIiwiZG9lc1dvcmRFeGlzdCIsImZvckVhY2giLCJpbmRleCIsImVsZW1lbnRZIiwiZWxlbWVudFgiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsInRhcmdldEVsZW1lbnQiLCJfaXNBVmVydGljYWxCbG9ja2VyIiwiX2lzQUhvcml6b250YWxCbG9ja2VyIiwicmV0dXJuRWxlbWVudCIsIngiLCJ5IiwiY3VycmVudEVsZW1lbnQiLCJfZmluZFBvc3NpYmxlV29yZCIsIl9pc0FOdW1iZXIiLCJkaWN0IiwicGFjayIsIl9hcnJheSIsInJhbmRvbUxldHRlcklEIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYWxwaGFiZXQiLCJyYW5kb21Xb3JkcyIsInJhbmRvbVdvcmQiLCJhZGRXb3JkIiwibGV0dGVyIiwibGV0dGVySUQiLCJkaWN0aW9uYXJ5VHlwZSIsImN1cnJlbnRMZXR0ZXIiLCJuZXh0TGV0dGVyIiwid29yZHMiLCJkaWN0aW9uYXJ5IiwicmVnRXhwT2JqZWN0IiwicmV0dXJuV29yZCIsInJldHVyblgiLCJyZXR1cm5ZIiwiX2dlbmVyYXRlUmVnRXhwIiwiX2ZpbmRXb3JkQnlSZWdFeHAiLCJyZWdFeHAiLCJsIiwiYmVmb3JlIiwidG9TdHJpbmciLCJiZXR3ZWVuIiwiaURpZmYiLCJtYXgiLCJ3b3JkQXJyYXkiLCJBcnJheSIsImlzVG9wQmxvY2tlZCIsImlzQm90dG9tQmxvY2tlZCIsIl9lbGVtZW50IiwiYmVmb3JlTGV0dGVyQ291bnRlciIsImFueUNvdW50ZXIiLCJ0b3RhbEZyZWVDb3VudGVyIiwiYmV0d2VlbkxldHRlcnNDb3VudGVyIiwidG90YWxGcmVlIiwic3RhcnRMZXR0ZXJJRCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiUmVnRXhwIiwibWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxZQUFZLCtDQUErQztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0FERCxLQUM4QixDQUFDRixJQUFELElBQVNFLE9BQU8sQ0FBQ2UsTUFBUixHQUFpQmpCLElBQUksQ0FBQ2lCLE1BRDdELENBQUosRUFDMEU7QUFDeEVqQixnQkFBSSxHQUFHRSxPQUFQO0FBQ0Q7QUFDRixTQUxEO0FBT0EsWUFBSUYsSUFBSixFQUFVO0FBRVYwQyxzQkFBYyxHQUFHQSxjQUFjLEdBQUcsS0FBS0ksUUFBTCxDQUFjN0IsTUFBZCxHQUF1QixDQUF4QyxHQUE0Q3lCLGNBQWMsR0FBRyxDQUE3RCxHQUFpRSxDQUFsRjtBQUNBLFlBQUlBLGNBQWMsS0FBS3NDLGFBQXZCLEVBQXNDO0FBQ3ZDOztBQUVELGFBQU9oRixJQUFQO0FBQ0Q7Ozt3QkFqUnVCO0FBQUUsYUFBTyxFQUFQO0FBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUXZDIiwiZmlsZSI6IndvcmRzYWkubGliLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3b3Jkc2FpLmxpYlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3b3Jkc2FpLmxpYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3b3Jkc2FpLmxpYlwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQkFTRSA9IDM2O1xuLy8gUGxhY2Vob2xkZXJcbnZhciBQVHJpZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUFRyaWUoKSB7XG4gICAgfVxuICAgIHJldHVybiBQVHJpZTtcbn0oKSk7XG5leHBvcnRzLlBUcmllID0gUFRyaWU7XG4vLyAwLCAxLCAyLCAuLi4sIEEsIEIsIEMsIC4uLiwgMDAsIDAxLCAuLi4gQUEsIEFCLCBBQywgLi4uLCBBQUEsIEFBQiwgLi4uXG5mdW5jdGlvbiB0b0FscGhhQ29kZShuKSB7XG4gICAgdmFyIHMgPSAnJztcbiAgICB2YXIgcGxhY2VzID0gMTtcbiAgICBmb3IgKHZhciByYW5nZSA9IGV4cG9ydHMuQkFTRTsgbiA+PSByYW5nZTsgbiAtPSByYW5nZSwgcGxhY2VzKyssIHJhbmdlICo9IGV4cG9ydHMuQkFTRSkgeyB9XG4gICAgd2hpbGUgKHBsYWNlcy0tKSB7XG4gICAgICAgIHZhciBkID0gbiAlIGV4cG9ydHMuQkFTRTtcbiAgICAgICAgcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGQgPCAxMCA/IDQ4IDogNTUpICsgZCkgKyBzO1xuICAgICAgICBuID0gKG4gLSBkKSAvIGV4cG9ydHMuQkFTRTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG59XG5leHBvcnRzLnRvQWxwaGFDb2RlID0gdG9BbHBoYUNvZGU7XG5mdW5jdGlvbiBmcm9tQWxwaGFDb2RlKHMpIHtcbiAgICB2YXIgbiA9IDA7XG4gICAgZm9yICh2YXIgcGxhY2VzID0gMSwgcmFuZ2UgPSBleHBvcnRzLkJBU0U7IHBsYWNlcyA8IHMubGVuZ3RoOyBuICs9IHJhbmdlLCBwbGFjZXMrKywgcmFuZ2UgKj0gZXhwb3J0cy5CQVNFKSB7IH1cbiAgICBmb3IgKHZhciBpID0gcy5sZW5ndGggLSAxLCBwb3cgPSAxOyBpID49IDA7IGktLSwgcG93ICo9IGV4cG9ydHMuQkFTRSkge1xuICAgICAgICB2YXIgZCA9IHMuY2hhckNvZGVBdChpKSAtIDQ4O1xuICAgICAgICBpZiAoZCA+IDEwKSB7XG4gICAgICAgICAgICBkIC09IDc7XG4gICAgICAgIH1cbiAgICAgICAgbiArPSBkICogcG93O1xuICAgIH1cbiAgICByZXR1cm4gbjtcbn1cbmV4cG9ydHMuZnJvbUFscGhhQ29kZSA9IGZyb21BbHBoYUNvZGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbHBoYWNvZGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgSGlzdG9ncmFtID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIaXN0b2dyYW0oKSB7XG4gICAgICAgIHRoaXMuY291bnRzID0ge307XG4gICAgfVxuICAgIEhpc3RvZ3JhbS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChrZXksIG4pIHtcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGtleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvdW50c1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRzW2tleV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRzW2tleV0gKz0gbjtcbiAgICB9O1xuICAgIEhpc3RvZ3JhbS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGtleSwgbikge1xuICAgICAgICBpZiAobiA9PT0gdm9pZCAwKSB7IG4gPSAxOyB9XG4gICAgICAgIHRoaXMuaW5pdChrZXksIG4pO1xuICAgIH07XG4gICAgSGlzdG9ncmFtLnByb3RvdHlwZS5jb3VudE9mID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmluaXQoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRzW2tleV07XG4gICAgfTtcbiAgICBIaXN0b2dyYW0ucHJvdG90eXBlLmhpZ2hlc3QgPSBmdW5jdGlvbiAodG9wKSB7XG4gICAgICAgIHJldHVybiB1dGlsXzEuc29ydEJ5VmFsdWVzKHRoaXMuY291bnRzLCAnZGVzYycpLnNsaWNlKDAsIHRvcCk7XG4gICAgfTtcbiAgICByZXR1cm4gSGlzdG9ncmFtO1xufSgpKTtcbmV4cG9ydHMuSGlzdG9ncmFtID0gSGlzdG9ncmFtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGlzdG9ncmFtLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciB0cmllXzEgPSByZXF1aXJlKFwiLi90cmllXCIpO1xuZXhwb3J0cy5UcmllID0gdHJpZV8xLlRyaWU7XG52YXIgcHRyaWVfMSA9IHJlcXVpcmUoXCIuL3B0cmllXCIpO1xuZXhwb3J0cy5QVHJpZSA9IHB0cmllXzEuUFRyaWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBOb2RlXG5cbiAgRWFjaCBub2RlIGNvbnRhaW5zIHNvbWUgc3BlY2lhbCBwcm9wZXJ0aWVzIChiZWdpbmluZyB3aXRoICdfJyksIGFzIHdlbGwgYXNcbiAgYXJiaXRyYXJ5IHN0cmluZyBwcm9wZXJ0aWVzIGZvciBzdHJpbmcgZnJhZ21lbnRzIGNvbnRhaW5lZCBpbiB0aGUgaW5wdXQgd29yZFxuICBkaWN0aW9uYXJ5LlxuXG4gIFN0cmluZyBwcm9wZXJ0aWVzIGNhbiBiZSBcInRlcm1pbmFsXCIgKGhhdmUgYSBudW1lcmljIHZhbHVlIG9mIDEpLCBvciBjYW5cbiAgcmVmZXJhbmNlIGFub3RoZXIgY2hpbGQgTm9kZS5cblxuICBOb3RlIHRoYXQgYSBOb2RlIGNvbnRhaW5pbmcgYSB0ZXJtaW5hbCAnJyAoZW1wdHkgc3RyaW5nKSBwcm9wZXJ0eSwgaXMgaXRzZWxmXG4gIG1hcmtlZCBhcyBhIHRlcm1pbmFsIE5vZGUgKHRoZSBwcmVmaXggbGVhZGluZyB0byB0aGlzIG5vZGUgaXMgYSB3b3JkIGluIHRoZVxuICBkaWN0aW9uYXJ5LlxuKi9cbnZhciBOb2RlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb2RlKCkge1xuICAgICAgICAvLyBOdW1iZXIgb2YgY2hpbGQgcHJvcGVydGllcy5cbiAgICAgICAgdGhpcy5fcCA9IDA7XG4gICAgfVxuICAgIE5vZGUucHJvdG90eXBlLmNoaWxkID0gZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbcHJvcF07XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5zZXRDaGlsZCA9IGZ1bmN0aW9uIChwcm9wLCB2YWx1ZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChwcm9wICE9PSB0aGlzLl9nKSB7XG4gICAgICAgICAgICAvLyBkZWxldGUgc2VsZi5fZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZltwcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9wICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3AgPT09IDEpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuX2cgPSBwcm9wO1xuICAgICAgICB9XG4gICAgICAgIHNlbGZbcHJvcF0gPSB2YWx1ZTtcbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmRlbGV0ZUNoaWxkID0gZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAocHJvcCA9PT0gdGhpcy5fZykge1xuICAgICAgICAgICAgLy8gZGVsZXRlIHRoaXMuX2c7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcCAtPSAxO1xuICAgICAgICBkZWxldGUgc2VsZltwcm9wXTtcbiAgICAgICAgaWYgKHRoaXMuX3AgPT09IDEpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuX2cgPSB0aGlzLnByb3BzKClbMF07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEEgcHJvcGVydHkgaXMgYSB0ZXJtaW5hbCBzdHJpbmdcbiAgICBOb2RlLnByb3RvdHlwZS5pc1Rlcm1pbmFsU3RyaW5nID0gZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLmNoaWxkKHByb3ApID09PSAnbnVtYmVyJztcbiAgICB9O1xuICAgIC8vIFRoaXMgbm9kZSBpcyBhIHRlcm1pbmFsIG5vZGUgKHRoZSBwcmVmaXggc3RyaW5nIGlzIGEgd29yZCBpbiB0aGVcbiAgICAvLyBkaWN0aW9uYXJ5KS5cbiAgICBOb2RlLnByb3RvdHlwZS5pc1Rlcm1pbmFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1Rlcm1pbmFsU3RyaW5nKCcnKTtcbiAgICB9O1xuICAgIC8vIFdlbGwgb3JkZXJlZCBsaXN0IG9mIHByb3BlcnRpZXMgaW4gYSBub2RlIChzdHJpbmcgb3Igb2JqZWN0IHByb3BlcnRpZXMpXG4gICAgLy8gVXNlIG5vZGVzT25seSA9PT0gdHJ1ZSB0byByZXR1cm4gb25seSBwcm9wZXJ0aWVzIG9mIGNoaWxkIG5vZGVzIChub3RcbiAgICAvLyB0ZXJtaW5hbCBzdHJpbmdzKS5cbiAgICBOb2RlLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uIChub2Rlc09ubHkpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdmFyIHByb3BzID0gW107XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gbWUpIHtcbiAgICAgICAgICAgIGlmICghbWUuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wICE9PSAnJyAmJiBwcm9wWzBdICE9PSAnXycpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVzT25seSB8fCBOb2RlLmlzTm9kZSh0aGlzLmNoaWxkKHByb3ApKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcm9wcy5zb3J0KCk7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9O1xuICAgIC8vIENvbXB1dGUgaW4tZGVncmVlIG9mIGFsbCBub2RlcyBhbmQgbWFyayB0aGVcbiAgICAvLyBzaW5nbGV0b24gbm9kZXMuXG4gICAgTm9kZS5jb3VudERlZ3JlZSA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHZhciB3YWxrZXIgPSBuZXcgV2Fsa2VyKHJvb3QpO1xuICAgICAgICB3YWxrZXIuZGZzKGZ1bmN0aW9uIChvcmRlciwgbm9kZSkge1xuICAgICAgICAgICAgaWYgKG9yZGVyID09PSAncG9zdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZS5fZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5fZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLl9kKys7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gTm9kZSBoYXMganVzdCBhIHNpbmdsZSAobm9uLXNwZWNpYWwpIHByb3BlcnR5LlxuICAgIE5vZGUucHJvdG90eXBlLmlzU2luZ2xldG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcCA9PT0gMSAmJiAhdGhpcy5pc1Rlcm1pbmFsKCk7XG4gICAgfTtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIGFzIGEgVHlwZSBHdWFyZCAoVHlwZVNjcmlwdClcbiAgICBOb2RlLmlzTm9kZSA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiBuIGluc3RhbmNlb2YgTm9kZTtcbiAgICB9O1xuICAgIHJldHVybiBOb2RlO1xufSgpKTtcbmV4cG9ydHMuTm9kZSA9IE5vZGU7XG52YXIgV2Fsa2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXYWxrZXIocm9vdCkge1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLnZpc2l0TWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBXYWxrZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnZpc2l0TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFdhbGtlci5wcm90b3R5cGUudmlzaXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB0aGlzLnZpc2l0TWFwLnNldChub2RlLCB0cnVlKTtcbiAgICB9O1xuICAgIFdhbGtlci5wcm90b3R5cGUudmlzaXRlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0TWFwLmdldChub2RlKSB8fCBmYWxzZTtcbiAgICB9O1xuICAgIFdhbGtlci5wcm90b3R5cGUuZGZzID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLl9kZnModGhpcy5yb290LCBudWxsLCAnJywgaGFuZGxlcik7XG4gICAgfTtcbiAgICAvLyBEZXB0aC1maXJzdCBzZWFyY2ggdmlhIGNhbGxiYWNrIGhhbmRsZXIuXG4gICAgV2Fsa2VyLnByb3RvdHlwZS5fZGZzID0gZnVuY3Rpb24gKG5vZGUsIHBhcmVudCwgcHJvcFBhcmVudCwgaGFuZGxlcikge1xuICAgICAgICAvLyBUaGUgaGFuZGxlciBjYW4gYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGZyb20gZGlmZmVyZW50IHBhcmVudHNcbiAgICAgICAgLy8gc2luY2UgTm9kZXMgY2FuIGZvcm0gYSBtdWx0aS1ncmFwaC5cbiAgICAgICAgaGFuZGxlcigncHJlJywgbm9kZSwgcGFyZW50LCBwcm9wUGFyZW50KTtcbiAgICAgICAgaWYgKHRoaXMudmlzaXRlZChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlzaXQobm9kZSk7XG4gICAgICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcHModHJ1ZSk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgcHJvcHNfMSA9IHByb3BzOyBfaSA8IHByb3BzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzXzFbX2ldO1xuICAgICAgICAgICAgdGhpcy5fZGZzKG5vZGUuY2hpbGQocHJvcCksIG5vZGUsIHByb3AsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZXIoJ3Bvc3QnLCBub2RlLCBwYXJlbnQsIHByb3BQYXJlbnQpO1xuICAgIH07XG4gICAgcmV0dXJuIFdhbGtlcjtcbn0oKSk7XG5leHBvcnRzLldhbGtlciA9IFdhbGtlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGFscGhhY29kZV8xID0gcmVxdWlyZShcIi4vYWxwaGFjb2RlXCIpO1xuZXhwb3J0cy5OT0RFX1NFUCA9ICc7JztcbmV4cG9ydHMuU1RSSU5HX1NFUCA9ICcsJztcbmV4cG9ydHMuVEVSTUlOQUxfUFJFRklYID0gJyEnO1xuZXhwb3J0cy5NSU5fTEVUVEVSID0gJ2EnO1xuZXhwb3J0cy5NQVhfTEVUVEVSID0gJ3onO1xuZXhwb3J0cy5NQVhfV09SRCA9IG5ldyBBcnJheSgxMCkuam9pbihleHBvcnRzLk1BWF9MRVRURVIpO1xudmFyIHJlTm9kZVBhcnQgPSBuZXcgUmVnRXhwKCcoWycgKyBleHBvcnRzLk1JTl9MRVRURVIgKyAnLScgKyBleHBvcnRzLk1BWF9MRVRURVIgK1xuICAgICddKykoJyArIGV4cG9ydHMuU1RSSU5HX1NFUCArICd8WzAtOUEtWl0rfCQpJywgJ2cnKTtcbnZhciByZVN5bWJvbCA9IG5ldyBSZWdFeHAoXCIoWzAtOUEtWl0rKTooWzAtOUEtWl0rKVwiKTtcbi8qXG4gKiBQYWNrZWQgVHJpZSBzdHJ1Y3R1cmUuXG4gKlxuICogVGhpcyBjbGFzcyBjYW4gcmVhZCBpbiBhIHBhY2tlZCBUcmllIChhY3R1YWxseSBEQVdHKSBpbiB0aGUgZm9ybVxuICogb2YgYSBzdHJpbmcgZW5jb2Rpbmcgb2YgYSBzZXQgb2Ygbm9kZXMuICBJdCB3aWxsIHRoZW4gc3BpbHQgaXRcbiAqIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5ncywgYW5kIHVzZSB0aGUgcmVzdWx0aW5nIGFycmF5IHRvXG4gKiByZXNvbHZlIGRpY3Rpb25hcnkgbWVtYmVyc2hpcC5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgIC8vIFVucGFjayBhIHBhY2tlZCBkaWN0aW9uYXJ5IHN0cmluZyBmb3IgdXNlLlxuICogICB2YXIgcHRyaWUgPSBuZXcgUFRyaWUocGFja2VkU3RyaW5nKTtcbiAqXG4gKiAgIC8vIFRlc3QgYSB3b3JkIGZvciBtZW1iZXJzaGlwIGluIHRoZSBkaWN0aW9uYXJ5LlxuICogICBpZiAocHRyaWUuaXNXb3JkKG15V29yZCkpIHtcbiAqICAgICAuLi5cbiAqICAgfVxuICpcbiAqICAgLy8gRm9yIGNvbW1hbmQgY29tcGxldGlvbiAtIGZpbmQgZmlyc3QgMjAgd29yZHMgdGhhdCBiZWdpbiB3aXRoIGEgcHJlZml4LlxuICogICB2YXIgd29yZHMgPSBwdHJpZS5jb21wbGV0aW9ucyhwcmVmaXgsIDIwKTtcbiAqL1xudmFyIFBUcmllID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQVHJpZShwYWNrZWQpIHtcbiAgICAgICAgdGhpcy5zeW1zID0gW107XG4gICAgICAgIHRoaXMubm9kZXMgPSBwYWNrZWQuc3BsaXQoZXhwb3J0cy5OT0RFX1NFUCk7XG4gICAgICAgIHRoaXMuc3ltcyA9IFtdO1xuICAgICAgICB0aGlzLnN5bUNvdW50ID0gMDtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBtID0gcmVTeW1ib2wuZXhlYyh0aGlzLm5vZGVzW3RoaXMuc3ltQ291bnRdKTtcbiAgICAgICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFscGhhY29kZV8xLmZyb21BbHBoYUNvZGUobVsxXSkgIT09IHRoaXMuc3ltQ291bnQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFN5bWJvbCBuYW1lIC0gZm91bmQgXCIgKyBtWzFdICtcbiAgICAgICAgICAgICAgICAgICAgXCIgd2hlbiBleHBlY3RpbmcgXCIgKyBhbHBoYWNvZGVfMS50b0FscGhhQ29kZSh0aGlzLnN5bUNvdW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN5bXNbdGhpcy5zeW1Db3VudF0gPSBhbHBoYWNvZGVfMS5mcm9tQWxwaGFDb2RlKG1bMl0pO1xuICAgICAgICAgICAgdGhpcy5zeW1Db3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZXMuc3BsaWNlKDAsIHRoaXMuc3ltQ291bnQpO1xuICAgIH1cbiAgICAvLyBJcyB3b3JkIGluIHRoZSBkaWN0aW9uYXJ5IChleGFjdCBtYXRjaCkuXG4gICAgUFRyaWUucHJvdG90eXBlLmlzV29yZCA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgIGlmICh3b3JkID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1hdGNoKHdvcmQpID09PSB3b3JkO1xuICAgIH07XG4gICAgLy8gUmV0dXJucyB0aGUgbG9uZ2VzdCBtYXRjaCB0aGF0IGlzIHByZWZpeCBvZiB3b3JkLlxuICAgIFBUcmllLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy5tYXRjaGVzKHdvcmQpO1xuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuICAgIH07XG4gICAgLy8gUmV0dXJuIGFsbCBlbnRyaWVzIHRoYXQgbWF0Y2ggYSBwcmVmaXggb2Ygd29yZCAoaW4gb3JkZXIgb2YgaW5jcmVhc2luZ1xuICAgIC8vIGxlbmd0aC5cbiAgICBQVHJpZS5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndvcmRzKHdvcmQsIHdvcmQgKyBleHBvcnRzLk1JTl9MRVRURVIpO1xuICAgIH07XG4gICAgLy8gUmV0dXJuIGFsbCBlbnRyaWVzIHRoYXQgYmVnaW4gd2l0aCBhIHByZWZpeC5cbiAgICBQVHJpZS5wcm90b3R5cGUuY29tcGxldGlvbnMgPSBmdW5jdGlvbiAocHJlZml4LCBsaW1pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy53b3JkcyhwcmVmaXgsIGJleW9uZChwcmVmaXgpLCBsaW1pdCk7XG4gICAgfTtcbiAgICBQVHJpZS5wcm90b3R5cGUud29yZHMgPSBmdW5jdGlvbiAoZnJvbSwgYmV5b25kLCBsaW1pdCkge1xuICAgICAgICB2YXIgd29yZHMgPSBbXTtcbiAgICAgICAgZnVuY3Rpb24gY2F0Y2hXb3Jkcyh3b3JkLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkICYmIHdvcmRzLmxlbmd0aCA+PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgIGN0eC5hYm9ydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd29yZHMucHVzaCh3b3JkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVudW1lcmF0ZSgwLCAnJywgeyBmcm9tOiBmcm9tLFxuICAgICAgICAgICAgYmV5b25kOiBiZXlvbmQsXG4gICAgICAgICAgICBmbjogY2F0Y2hXb3JkcyxcbiAgICAgICAgICAgIHByZWZpeGVzOiAoZnJvbSArIGV4cG9ydHMuTUlOX0xFVFRFUikgPT09IGJleW9uZFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHdvcmRzO1xuICAgIH07XG4gICAgUFRyaWUucHJvdG90eXBlLmVudW1lcmF0ZSA9IGZ1bmN0aW9uIChpbm9kZSwgcHJlZml4LCBjdHgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGVzW2lub2RlXTtcbiAgICAgICAgdmFyIGNvbnQgPSB0cnVlO1xuICAgICAgICBmdW5jdGlvbiBlbWl0KHdvcmQpIHtcbiAgICAgICAgICAgIGlmIChjdHgucHJlZml4ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAod29yZCA9PT0gY3R4LmZyb20uc2xpY2UoMCwgd29yZC5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5mbih3b3JkLCBjdHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3R4LmZyb20gPD0gd29yZCAmJiB3b3JkIDwgY3R4LmJleW9uZCkge1xuICAgICAgICAgICAgICAgIGN0eC5mbih3b3JkLCBjdHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlWzBdID09PSBleHBvcnRzLlRFUk1JTkFMX1BSRUZJWCkge1xuICAgICAgICAgICAgZW1pdChwcmVmaXgpO1xuICAgICAgICAgICAgaWYgKGN0eC5hYm9ydCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUucmVwbGFjZShyZU5vZGVQYXJ0LCBmdW5jdGlvbiAodywgc3RyLCByZWYpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IHByZWZpeCArIHN0cjtcbiAgICAgICAgICAgIC8vIERvbmUgb3Igbm8gcG9zc2libGUgZnV0dXJlIG1hdGNoIGZyb20gc3RyXG4gICAgICAgICAgICBpZiAoY3R4LmFib3J0IHx8XG4gICAgICAgICAgICAgICAgbWF0Y2ggPj0gY3R4LmJleW9uZCB8fFxuICAgICAgICAgICAgICAgIG1hdGNoIDwgY3R4LmZyb20uc2xpY2UoMCwgbWF0Y2gubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpc1Rlcm1pbmFsID0gcmVmID09PSBleHBvcnRzLlNUUklOR19TRVAgfHwgcmVmID09PSAnJztcbiAgICAgICAgICAgIGlmIChpc1Rlcm1pbmFsKSB7XG4gICAgICAgICAgICAgICAgZW1pdChtYXRjaCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuZW51bWVyYXRlKF90aGlzLmlub2RlRnJvbVJlZihyZWYsIGlub2RlKSwgbWF0Y2gsIGN0eCk7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gUmVmZXJlbmNlcyBhcmUgZWl0aGVyIGFic29sdXRlIChzeW1ib2wpIG9yIHJlbGF0aXZlICgxIGJhc2VkKS5cbiAgICBQVHJpZS5wcm90b3R5cGUuaW5vZGVGcm9tUmVmID0gZnVuY3Rpb24gKHJlZiwgaW5vZGVGcm9tKSB7XG4gICAgICAgIHZhciBkbm9kZSA9IGFscGhhY29kZV8xLmZyb21BbHBoYUNvZGUocmVmKTtcbiAgICAgICAgaWYgKGRub2RlIDwgdGhpcy5zeW1Db3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ltc1tkbm9kZV07XG4gICAgICAgIH1cbiAgICAgICAgZG5vZGUgLT0gdGhpcy5zeW1Db3VudDtcbiAgICAgICAgcmV0dXJuIGlub2RlRnJvbSArIGRub2RlICsgMTtcbiAgICB9O1xuICAgIHJldHVybiBQVHJpZTtcbn0oKSk7XG5leHBvcnRzLlBUcmllID0gUFRyaWU7XG4vLyBSZXR1cm4gYSBzdHJpbmcgdGhhdCBpcyB0aGUgc21hbGxlc3Qgc3RyaW5nIGdyZWF0ZXIgdGhhblxuLy8gYW55IHN0cmluZyB3aGljaCBpcyBwcmVmaXhlZCB3aXRoIHMuXG5mdW5jdGlvbiBiZXlvbmQocykge1xuICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5NQVhfV09SRDtcbiAgICB9XG4gICAgdmFyIGNvZGUgPSBzLmNoYXJDb2RlQXQocy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gcy5zbGljZSgwLCAtMSkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUgKyAxKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB0cmllLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiBhIFRyaWUgc2VhcmNoIGRhdGFzdHJ1Y3R1cmUuXG5cbiAgVXNhZ2U6XG5cbiAgdHJpZSA9IG5ldyBUcmllKGRpY3Rpb25hcnktc3RyaW5nKTtcbiAgYm9vbCA9IHRyaWUuaXNXb3JkKHdvcmQpO1xuXG4gIFRvIHVzZSBhIHBhY2tlZCAoY29tcHJlc3NlZCkgdmVyc2lvbiBvZiB0aGUgdHJpZSBzdG9yZWQgYXMgYSBzdHJpbmc6XG5cbiAgY29tcHJlc3NlZCA9IHRyaWUucGFjaygpO1xuICBwdHJpZSA9IG5ldyBQYWNrZWRUcmllKGNvbXByZXNzZWQpO1xuICBib29sID0gcHRyaWUuaXNXb3JkKHdvcmQpXG5cbiovXG52YXIgcHRyaWUgPSByZXF1aXJlKFwiLi9wdHJpZVwiKTtcbnZhciBhbHBoYWNvZGVfMSA9IHJlcXVpcmUoXCIuL2FscGhhY29kZVwiKTtcbnZhciBoaXN0b2dyYW1fMSA9IHJlcXVpcmUoXCIuL2hpc3RvZ3JhbVwiKTtcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xudmFyIG5vZGVfMSA9IHJlcXVpcmUoXCIuL25vZGVcIik7XG52YXIgREVCVUcgPSBmYWxzZTtcbi8vIENyZWF0ZSBhIFRyaWUgZGF0YSBzdHJ1Y3R1cmUgZm9yIHNlYXJjaGluZyBmb3IgbWVtYmVyc2hpcCBvZiBzdHJpbmdzXG4vLyBpbiBhIGRpY3Rpb25hcnkgaW4gYSB2ZXJ5IHNwYWNlIGVmZmljaWVudCB3YXkuXG52YXIgVHJpZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJpZSh3b3Jkcykge1xuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgbm9kZV8xLk5vZGUoKTtcbiAgICAgICAgdGhpcy5sYXN0V29yZCA9ICcnO1xuICAgICAgICB0aGlzLnN1ZmZpeGVzID0ge307XG4gICAgICAgIHRoaXMuY05leHQgPSAxO1xuICAgICAgICB0aGlzLndvcmRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudkN1ciA9IDA7XG4gICAgICAgIHRoaXMuaW5zZXJ0V29yZHMod29yZHMpO1xuICAgIH1cbiAgICAvLyBJbnNlcnQgd29yZHMgZnJvbSBvbmUgYmlnIHN0cmluZywgb3IgZnJvbSBhbiBhcnJheS5cbiAgICBUcmllLnByb3RvdHlwZS5pbnNlcnRXb3JkcyA9IGZ1bmN0aW9uICh3b3Jkcykge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgaWYgKHdvcmRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdvcmRzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgd29yZHMgPSB3b3Jkcy5zcGxpdCgvW15hLXpBLVpdKy8pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHV0aWxfMS51bmlxdWUod29yZHMpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0KHdvcmRzW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJpZS5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAgICAgdGhpcy5faW5zZXJ0KHdvcmQsIHRoaXMucm9vdCk7XG4gICAgICAgIHZhciBsYXN0V29yZCA9IHRoaXMubGFzdFdvcmQ7XG4gICAgICAgIHRoaXMubGFzdFdvcmQgPSB3b3JkO1xuICAgICAgICB2YXIgcHJlZml4ID0gY29tbW9uUHJlZml4KHdvcmQsIGxhc3RXb3JkKTtcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gbGFzdFdvcmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZnJlZXplID0gdGhpcy51bmlxdWVOb2RlKGxhc3RXb3JkLCB3b3JkLCB0aGlzLnJvb3QpO1xuICAgICAgICBpZiAoZnJlZXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbWJpbmVTdWZmaXhOb2RlKGZyZWV6ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyaWUucHJvdG90eXBlLl9pbnNlcnQgPSBmdW5jdGlvbiAod29yZCwgbm9kZSkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIHByZWZpeDtcbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHZhciBwcm9wO1xuICAgICAgICAvLyBEdXBsaWNhdGUgd29yZCBlbnRyeSAtIGlnbm9yZVxuICAgICAgICBpZiAod29yZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBEbyBhbnkgZXhpc3RpbmcgcHJvcHMgc2hhcmUgYSBjb21tb24gcHJlZml4P1xuICAgICAgICBmb3IgKHByb3AgaW4gbm9kZSkge1xuICAgICAgICAgICAgaWYgKCFub2RlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmVmaXggPSBjb21tb25QcmVmaXgod29yZCwgcHJvcCk7XG4gICAgICAgICAgICBpZiAocHJlZml4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJvcCBpcyBhIHByb3BlciBwcmVmaXggLSByZWN1cnNlIHRvIGNoaWxkIG5vZGVcbiAgICAgICAgICAgIGlmIChwcm9wID09PSBwcmVmaXggJiYgbm9kZV8xLk5vZGUuaXNOb2RlKG5vZGUuY2hpbGQocHJvcCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5zZXJ0KHdvcmQuc2xpY2UocHJlZml4Lmxlbmd0aCksIG5vZGUuY2hpbGQocHJvcCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIER1cGxpY2F0ZSB0ZXJtaW5hbCBzdHJpbmcgLSBpZ25vcmVcbiAgICAgICAgICAgIGlmIChwcm9wID09PSB3b3JkICYmIG5vZGUuaXNUZXJtaW5hbFN0cmluZyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5leHQgPSBuZXcgbm9kZV8xLk5vZGUoKTtcbiAgICAgICAgICAgIG5leHQuc2V0Q2hpbGQocHJvcC5zbGljZShwcmVmaXgubGVuZ3RoKSwgbm9kZS5jaGlsZChwcm9wKSk7XG4gICAgICAgICAgICB0aGlzLmFkZFRlcm1pbmFsKG5leHQsIHdvcmQgPSB3b3JkLnNsaWNlKHByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIG5vZGUuZGVsZXRlQ2hpbGQocHJvcCk7XG4gICAgICAgICAgICBub2RlLnNldENoaWxkKHByZWZpeCwgbmV4dCk7XG4gICAgICAgICAgICB0aGlzLndvcmRDb3VudCsrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIHNoYXJlZCBwcmVmaXguICBFbnRlciB0aGUgd29yZCBoZXJlIGFzIGEgdGVybWluYWwgc3RyaW5nLlxuICAgICAgICB0aGlzLmFkZFRlcm1pbmFsKG5vZGUsIHdvcmQpO1xuICAgICAgICB0aGlzLndvcmRDb3VudCsrO1xuICAgIH07XG4gICAgLy8gQWRkIGEgdGVybWluYWwgc3RyaW5nIHRvIG5vZGUuXG4gICAgLy8gSWYgMiBjaGFyYWN0ZXJzIG9yIGxlc3MsIGp1c3QgYWRkIHdpdGggdmFsdWUgPT09IDEuXG4gICAgLy8gSWYgbW9yZSB0aGFuIDIgY2hhcmFjdGVycywgcG9pbnQgdG8gc2hhcmVkIG5vZGVcbiAgICAvLyBOb3RlIC0gZG9uJ3QgcHJlbWF0dXJlbHkgc2hhcmUgc3VmZml4ZXMgLSB0aGVzZVxuICAgIC8vIHRlcm1pbmFscyBtYXkgYmVjb21lIHNwbGl0IGFuZCBqb2luZWQgd2l0aCBvdGhlclxuICAgIC8vIG5vZGVzIGluIHRoaXMgcGFydCBvZiB0aGUgdHJlZS5cbiAgICBUcmllLnByb3RvdHlwZS5hZGRUZXJtaW5hbCA9IGZ1bmN0aW9uIChub2RlLCBwcm9wKSB7XG4gICAgICAgIGlmIChwcm9wLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBub2RlLnNldENoaWxkKHByb3AsIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXh0ID0gbmV3IG5vZGVfMS5Ob2RlKCk7XG4gICAgICAgIG5vZGUuc2V0Q2hpbGQocHJvcFswXSwgbmV4dCk7XG4gICAgICAgIHRoaXMuYWRkVGVybWluYWwobmV4dCwgcHJvcC5zbGljZSgxKSk7XG4gICAgfTtcbiAgICBUcmllLnByb3RvdHlwZS5vcHRpbWl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNjb3JlcyA9IFtdO1xuICAgICAgICB0aGlzLmNvbWJpbmVTdWZmaXhOb2RlKHRoaXMucm9vdCk7XG4gICAgICAgIHRoaXMucHJlcERGUygpO1xuICAgICAgICB0aGlzLmNvdW50RGVncmVlKHRoaXMucm9vdCk7XG4gICAgICAgIHRoaXMucHJlcERGUygpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlQ2hhaW5zKHRoaXMucm9vdCk7XG4gICAgfTtcbiAgICAvLyBDb252ZXJ0IFRyaWUgdG8gYSBEQVdHIGJ5IHNoYXJpbmcgaWRlbnRpY2FsIG5vZGVzXG4gICAgVHJpZS5wcm90b3R5cGUuY29tYmluZVN1ZmZpeE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAvLyBGcm96ZW4gbm9kZSAtIGNhbid0IGNoYW5nZS5cbiAgICAgICAgaWYgKG5vZGUuX2MpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgY2hpbGRyZW4gYXJlIGNvbWJpbmVkIGFuZCBnZW5lcmF0ZSB1bmlxdWUgbm9kZVxuICAgICAgICAvLyBzaWduYXR1cmUgZm9yIHRoaXMgbm9kZS5cbiAgICAgICAgdmFyIHNpZyA9IFtdO1xuICAgICAgICBpZiAobm9kZS5pc1Rlcm1pbmFsKCkpIHtcbiAgICAgICAgICAgIHNpZy5wdXNoKCchJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3BzID0gbm9kZS5wcm9wcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGVfMS5Ob2RlLmlzTm9kZShub2RlLmNoaWxkKHByb3ApKSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0Q2hpbGQocHJvcCwgdGhpcy5jb21iaW5lU3VmZml4Tm9kZShub2RlLmNoaWxkKHByb3ApKSk7XG4gICAgICAgICAgICAgICAgc2lnLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgc2lnLnB1c2gobm9kZS5jaGlsZChwcm9wKS5fYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaWcucHVzaChwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgc2lnU3RyaW5nID0gc2lnLmpvaW4oJy0nKTtcbiAgICAgICAgdmFyIHNoYXJlZCA9IHRoaXMuc3VmZml4ZXNbc2lnU3RyaW5nXTtcbiAgICAgICAgaWYgKHNoYXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoYXJlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1ZmZpeGVzW3NpZ1N0cmluZ10gPSBub2RlO1xuICAgICAgICBub2RlLl9jID0gdGhpcy5jTmV4dCsrO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIFRyaWUucHJvdG90eXBlLnByZXBERlMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudkN1cisrO1xuICAgIH07XG4gICAgVHJpZS5wcm90b3R5cGUudmlzaXRlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLl92ID09PSB0aGlzLnZDdXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuX3YgPSB0aGlzLnZDdXI7XG4gICAgfTtcbiAgICBUcmllLnByb3RvdHlwZS5jb3VudERlZ3JlZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLl9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5vZGUuX2QgPSAwO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuX2QrKztcbiAgICAgICAgaWYgKHRoaXMudmlzaXRlZChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcHModHJ1ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY291bnREZWdyZWUobm9kZS5jaGlsZChwcm9wc1tpXSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBSZW1vdmUgaW50ZXJtZWRpYXRlIHNpbmdsZXRvbiBub2RlcyBieSBob2lzdGluZyBpbnRvIHRoZWlyIHBhcmVudFxuICAgIFRyaWUucHJvdG90eXBlLmNvbGxhcHNlQ2hhaW5zID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIHByb3AgPSAnLWludmFsaWQtJztcbiAgICAgICAgdmFyIHByb3BzO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgaWYgKHRoaXMudmlzaXRlZChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb3BzID0gbm9kZS5wcm9wcygpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IG5vZGUuY2hpbGQocHJvcCk7XG4gICAgICAgICAgICBpZiAoIW5vZGVfMS5Ob2RlLmlzTm9kZShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VDaGFpbnMoY2hpbGQpO1xuICAgICAgICAgICAgLy8gSG9pc3QgdGhlIHNpbmdsZXRvbiBjaGlsZCdzIHNpbmdsZSBwcm9wZXJ0eSB0byB0aGUgcGFyZW50XG4gICAgICAgICAgICBpZiAoY2hpbGQuX2cgIT09IHVuZGVmaW5lZCAmJiAoY2hpbGQuX2QgPT09IDEgfHwgY2hpbGQuX2cubGVuZ3RoID09PSAxKSkge1xuICAgICAgICAgICAgICAgIG5vZGUuZGVsZXRlQ2hpbGQocHJvcCk7XG4gICAgICAgICAgICAgICAgcHJvcCArPSBjaGlsZC5fZztcbiAgICAgICAgICAgICAgICBub2RlLnNldENoaWxkKHByb3AsIGNoaWxkLmNoaWxkKGNoaWxkLl9nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWRlbnRpZnkgc2luZ2xldG9uIG5vZGVzXG4gICAgICAgIGlmIChwcm9wcy5sZW5ndGggPT09IDEgJiYgIW5vZGUuaXNUZXJtaW5hbCgpKSB7XG4gICAgICAgICAgICBub2RlLl9nID0gcHJvcDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJpZS5wcm90b3R5cGUuaXNXb3JkID0gZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGcmFnbWVudCh3b3JkLCB0aGlzLnJvb3QpO1xuICAgIH07XG4gICAgVHJpZS5wcm90b3R5cGUuaXNGcmFnbWVudCA9IGZ1bmN0aW9uICh3b3JkLCBub2RlKSB7XG4gICAgICAgIGlmICh3b3JkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuaXNUZXJtaW5hbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmNoaWxkKHdvcmQpID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5kIGEgcHJlZml4IG9mIHdvcmQgcmVmZXJlbmNlIHRvIGEgY2hpbGRcbiAgICAgICAgdmFyIHByb3BzID0gbm9kZS5wcm9wcyh0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSB3b3JkLnNsaWNlKDAsIHByb3AubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRnJhZ21lbnQod29yZC5zbGljZShwcm9wLmxlbmd0aCksIG5vZGUuY2hpbGQocHJvcCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8vIEZpbmQgaGlnaGVzdCBub2RlIGluIFRyaWUgdGhhdCBpcyBvbiB0aGUgcGF0aCB0byB3b3JkXG4gICAgLy8gYW5kIHRoYXQgaXMgTk9UIG9uIHRoZSBwYXRoIHRvIG90aGVyLlxuICAgIFRyaWUucHJvdG90eXBlLnVuaXF1ZU5vZGUgPSBmdW5jdGlvbiAod29yZCwgb3RoZXIsIG5vZGUpIHtcbiAgICAgICAgdmFyIHByb3BzID0gbm9kZS5wcm9wcyh0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSB3b3JkLnNsaWNlKDAsIHByb3AubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wICE9PSBvdGhlci5zbGljZSgwLCBwcm9wLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuY2hpbGQocHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVuaXF1ZU5vZGUod29yZC5zbGljZShwcm9wLmxlbmd0aCksIG90aGVyLnNsaWNlKHByb3AubGVuZ3RoKSwgbm9kZS5jaGlsZChwcm9wKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8vIFJldHVybiBwYWNrZWQgcmVwcmVzZW50YXRpb24gb2YgVHJpZSBhcyBhIHN0cmluZy5cbiAgICAvL1xuICAgIC8vIEVhY2ggbm9kZSBvZiB0aGUgVHJpZSBpcyBvdXRwdXQgb24gYSBzaW5nbGUgbGluZS5cbiAgICAvL1xuICAgIC8vIEZvciBleGFtcGxlIFRyaWUoXCJ0aGUgdGhlbSB0aGVyZSB0aGVzaXMgdGhpc1wiKTpcbiAgICAvLyB7XG4gICAgLy8gICAgXCJ0aFwiOiB7XG4gICAgLy8gICAgICBcImlzXCI6IDEsXG4gICAgLy8gICAgICBcImVcIjoge1xuICAgIC8vICAgICAgICBcIlwiOiAxLFxuICAgIC8vICAgICAgICBcIm1cIjogMSxcbiAgICAvLyAgICAgICAgXCJyZVwiOiAxLFxuICAgIC8vICAgICAgICBcInNpc1wiOiAxXG4gICAgLy8gICAgICB9XG4gICAgLy8gICAgfVxuICAgIC8vICB9XG4gICAgLy9cbiAgICAvLyBXb3VsZCBiZSByZXBlcmVzZW50ZWQgYXM6XG4gICAgLy9cbiAgICAvLyB0aDBcbiAgICAvLyBlMGlzXG4gICAgLy8gIW0scmUsc2lzXG4gICAgLy9cbiAgICAvLyBUaGUgbGluZSBiZWdpbnMgd2l0aCBhICchJyBpZmYgaXQgaXMgYSB0ZXJtaW5hbCBub2RlIG9mIHRoZSBUcmllLlxuICAgIC8vIEZvciBlYWNoIHN0cmluZyBwcm9wZXJ0eSBpbiBhIG5vZGUsIHRoZSBzdHJpbmcgaXMgbGlzdGVkLCBhbG9uZ1xuICAgIC8vIHdpdGggYSAocmVsYXRpdmUhKSBsaW5lIG51bWJlciBvZiB0aGUgbm9kZSB0aGF0IHN0cmluZyByZWZlcmVuY2VzLlxuICAgIC8vIFRlcm1pbmFsIHN0cmluZ3MgKHRob3NlIHdpdGhvdXQgY2hpbGQgbm9kZSByZWZlcmVuY2VzKSBhcmVcbiAgICAvLyBzZXBhcmF0ZWQgYnkgJywnIGNoYXJhY3RlcnMuXG4gICAgVHJpZS5wcm90b3R5cGUucGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICAgICAgdmFyIG5vZGVDb3VudDtcbiAgICAgICAgdmFyIHN5bXMgPSB7fTtcbiAgICAgICAgdmFyIHBvcyA9IDA7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSd2ZSBjb21iaW5lZCBhbGwgdGhlIGNvbW1vbiBzdWZmaXhlc1xuICAgICAgICB0aGlzLm9wdGltaXplKCk7XG4gICAgICAgIGZ1bmN0aW9uIG5vZGVMaW5lKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gJyc7XG4gICAgICAgICAgICB2YXIgc2VwID0gJyc7XG4gICAgICAgICAgICBpZiAobm9kZS5pc1Rlcm1pbmFsKCkpIHtcbiAgICAgICAgICAgICAgICBsaW5lICs9IHB0cmllLlRFUk1JTkFMX1BSRUZJWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcHMoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmlzVGVybWluYWxTdHJpbmcocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZSArPSBzZXAgKyBwcm9wO1xuICAgICAgICAgICAgICAgICAgICBzZXAgPSBwdHJpZS5TVFJJTkdfU0VQO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbm9kZS5jaGlsZChwcm9wKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltc1tjaGlsZC5fbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZSArPSBzZXAgKyBwcm9wICsgc3ltc1tjaGlsZC5fbl07XG4gICAgICAgICAgICAgICAgICAgIHNlcCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJlZiA9IGFscGhhY29kZV8xLnRvQWxwaGFDb2RlKG5vZGUuX24gLSBjaGlsZC5fbiAtIDEgKyBzeW1Db3VudCk7XG4gICAgICAgICAgICAgICAgLy8gTGFyZ2UgcmVmZXJlbmNlIHRvIHNtYWxsZXIgc3RyaW5nIHN1ZmZpeCAtPiBkdXBsaWNhdGUgc3VmZml4XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLl9nICYmIHJlZi5sZW5ndGggPj0gY2hpbGQuX2cubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXNUZXJtaW5hbFN0cmluZyhjaGlsZC5fZykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gY2hpbGQuX2c7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgKz0gc2VwICsgcHJvcCArIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgc2VwID0gcHRyaWUuU1RSSU5HX1NFUDtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpbmUgKz0gc2VwICsgcHJvcCArIHJlZjtcbiAgICAgICAgICAgICAgICBzZXAgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRvcG9sb2dpY2FsIHNvcnQgaW50byBub2RlcyBhcnJheVxuICAgICAgICBmdW5jdGlvbiBudW1iZXJOb2Rlcyhub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5fbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BzID0gbm9kZS5wcm9wcyh0cnVlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBudW1iZXJOb2Rlcyhub2RlLmNoaWxkKHByb3BzW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLl9uID0gcG9zKys7XG4gICAgICAgICAgICBub2Rlcy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoaXN0QWJzID0gbmV3IGhpc3RvZ3JhbV8xLkhpc3RvZ3JhbSgpO1xuICAgICAgICB2YXIgaGlzdFJlbCA9IG5ldyBoaXN0b2dyYW1fMS5IaXN0b2dyYW0oKTtcbiAgICAgICAgZnVuY3Rpb24gYW5hbHl6ZVJlZnMobm9kZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYudmlzaXRlZChub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcHModHJ1ZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBub2RlLmNoaWxkKHByb3ApO1xuICAgICAgICAgICAgICAgIHZhciByZWYgPSBub2RlLl9uIC0gY2hpbGQuX24gLSAxO1xuICAgICAgICAgICAgICAgIC8vIENvdW50IHRoZSBudW1iZXIgb2Ygc2luZ2xlLWNoYXJhY3RlciByZWxhdGl2ZSByZWZzXG4gICAgICAgICAgICAgICAgaWYgKHJlZiA8IGFscGhhY29kZV8xLkJBU0UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdFJlbC5hZGQocmVmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHNhdmVkIGJ5IGNvbnZlcnRpbmcgYW4gYWJzb2x1dGVcbiAgICAgICAgICAgICAgICAvLyByZWZlcmVuY2UgdG8gYSBvbmUtY2hhcmFjdGVyIHN5bWJvbC5cbiAgICAgICAgICAgICAgICBoaXN0QWJzLmFkZChjaGlsZC5fbiwgYWxwaGFjb2RlXzEudG9BbHBoYUNvZGUocmVmKS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBhbmFseXplUmVmcyhjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc3ltYm9sQ291bnQoKSB7XG4gICAgICAgICAgICB2YXIgdG9wTm9kZXMgPSBoaXN0QWJzLmhpZ2hlc3QoYWxwaGFjb2RlXzEuQkFTRSk7XG4gICAgICAgICAgICB2YXIgc2F2aW5ncyA9IFtdO1xuICAgICAgICAgICAgc2F2aW5nc1stMV0gPSAwO1xuICAgICAgICAgICAgdmFyIGJlc3QgPSAwO1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciBkZWZTaXplID0gMyArIGFscGhhY29kZV8xLnRvQWxwaGFDb2RlKG5vZGVDb3VudCkubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgc3ltID0gMDsgc3ltIDwgYWxwaGFjb2RlXzEuQkFTRTsgc3ltKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodG9wTm9kZXNbc3ltXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBDdW11bGF0aXZlIHNhdmluZ3Mgb2Y6XG4gICAgICAgICAgICAgICAgLy8gICBzYXZlZCBjaGFyYWN0ZXJzIGluIHJlZnNcbiAgICAgICAgICAgICAgICAvLyAgIG1pbnVzIGRlZmluaXRpb24gc2l6ZVxuICAgICAgICAgICAgICAgIC8vICAgbWludXMgcmVsYXRpdmUgc2l6ZSB3cmFwcGluZyB0byAyIGRpZ2l0c1xuICAgICAgICAgICAgICAgIHNhdmluZ3Nbc3ltXSA9IHRvcE5vZGVzW3N5bV1bMV0gLSBkZWZTaXplIC1cbiAgICAgICAgICAgICAgICAgICAgaGlzdFJlbC5jb3VudE9mKGFscGhhY29kZV8xLkJBU0UgLSBzeW0gLSAxKSArXG4gICAgICAgICAgICAgICAgICAgIHNhdmluZ3Nbc3ltIC0gMV07XG4gICAgICAgICAgICAgICAgbG9nKFwic2F2aW5nc1tcIiArIHN5bSArIFwiXSBcIiArIHNhdmluZ3Nbc3ltXSArICcgPSAnICtcbiAgICAgICAgICAgICAgICAgICAgc2F2aW5nc1tzeW0gLSAxXSArICcgKycgK1xuICAgICAgICAgICAgICAgICAgICB0b3BOb2Rlc1tzeW1dWzFdICsgJyAtICcgKyBkZWZTaXplICsgJyAtICcgK1xuICAgICAgICAgICAgICAgICAgICBoaXN0UmVsLmNvdW50T2YoYWxwaGFjb2RlXzEuQkFTRSAtIHN5bSAtIDEpICsgJyknKTtcbiAgICAgICAgICAgICAgICBpZiAoc2F2aW5nc1tzeW1dID49IGJlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVzdCA9IHNhdmluZ3Nbc3ltXTtcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSBzeW0gKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbY291bnQsIHRvcE5vZGVzXTtcbiAgICAgICAgfVxuICAgICAgICBudW1iZXJOb2Rlcyh0aGlzLnJvb3QpO1xuICAgICAgICBub2RlQ291bnQgPSBub2Rlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMucHJlcERGUygpO1xuICAgICAgICBhbmFseXplUmVmcyh0aGlzLnJvb3QpO1xuICAgICAgICB2YXIgX2EgPSBzeW1ib2xDb3VudCgpLCBzeW1Db3VudCA9IF9hWzBdLCB0b3BOb2RlcyA9IF9hWzFdO1xuICAgICAgICB2YXIgc3ltRGVmcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBzeW0gPSAwOyBzeW0gPCBzeW1Db3VudDsgc3ltKyspIHtcbiAgICAgICAgICAgIHN5bXNbdG9wTm9kZXNbc3ltXVswXV0gPSBhbHBoYWNvZGVfMS50b0FscGhhQ29kZShzeW0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub2RlTGluZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbm9kZUxpbmVzW2ldID0gbm9kZUxpbmUobm9kZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXBlbmQgc3ltYm9sc1xuICAgICAgICBmb3IgKHZhciBzeW0gPSBzeW1Db3VudCAtIDE7IHN5bSA+PSAwOyBzeW0tLSkge1xuICAgICAgICAgICAgbm9kZUxpbmVzLnVuc2hpZnQoYWxwaGFjb2RlXzEudG9BbHBoYUNvZGUoc3ltKSArICc6JyArXG4gICAgICAgICAgICAgICAgYWxwaGFjb2RlXzEudG9BbHBoYUNvZGUobm9kZUNvdW50IC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQodG9wTm9kZXNbc3ltXVswXSwgMTApIC0gMSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlTGluZXMuam9pbihwdHJpZS5OT0RFX1NFUCk7XG4gICAgfTtcbiAgICByZXR1cm4gVHJpZTtcbn0oKSk7XG5leHBvcnRzLlRyaWUgPSBUcmllO1xuZnVuY3Rpb24gY29tbW9uUHJlZml4KHcxLCB3Mikge1xuICAgIHZhciBpO1xuICAgIHZhciBtYXhsZW4gPSBNYXRoLm1pbih3MS5sZW5ndGgsIHcyLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMDsgaSA8IG1heGxlbiAmJiB3MVtpXSA9PT0gdzJbaV07IGkrKykgeyB9XG4gICAgcmV0dXJuIHcxLnNsaWNlKDAsIGkpO1xufVxuZnVuY3Rpb24gbG9nKG1lc3NhZ2UpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGlmIChERUJVRykge1xuICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbbWVzc2FnZV0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmllLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIHNvcnRCeVZhbHVlcyhvLCBkaXIpIHtcbiAgICBpZiAoZGlyID09PSB2b2lkIDApIHsgZGlyID0gJ2FzYyc7IH1cbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG8pIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2tleSwgb1trZXldXSk7XG4gICAgfVxuICAgIHJlc3VsdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBjbXBEZWZhdWx0KGFbMV0sIGJbMV0sIGRpcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuc29ydEJ5VmFsdWVzID0gc29ydEJ5VmFsdWVzO1xuZnVuY3Rpb24gY21wRGVmYXVsdChhLCBiLCBkaXIpIHtcbiAgICBpZiAoZGlyID09PSB2b2lkIDApIHsgZGlyID0gJ2FzYyc7IH1cbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmVzdWx0ID0gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJlc3VsdCA9IDE7XG4gICAgfVxuICAgIHJldHVybiBkaXIgPT09ICdhc2MnID8gcmVzdWx0IDogLXJlc3VsdDtcbn1cbi8vIFNvcnQgZWxlbWVudHMgYW5kIHJlbW92ZSBkdXBsaWNhdGVzIGZyb20gYXJyYXkgKG1vZGlmaWVkIGluIHBsYWNlKS5cbmZ1bmN0aW9uIHVuaXF1ZShhLCBjbXApIHtcbiAgICBpZiAoY21wID09PSB2b2lkIDApIHsgY21wID0gY21wRGVmYXVsdDsgfVxuICAgIGEuc29ydChjbXApO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY21wKGFbaSAtIDFdLCBhW2ldKSA9PT0gMCkge1xuICAgICAgICAgICAgYS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLnVuaXF1ZSA9IHVuaXF1ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiaW1wb3J0IHtUcmllLCBQVHJpZX0gZnJvbSAnZGF3Zy1sb29rdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBSSB7XG4gIC8qKiByZXR1cm5zICgmIGdlbmVyYXRlcykgYWxwaGFiZXQgYXJyYXkgKi9cbiAgZ2V0IGFscGhhYmV0KCkge1xuICAgIGlmICghdGhpcy5fYSkge1xuICAgICAgdGhpcy5fYSA9IFtdO1xuICAgICAgbGV0IGkgPSAnYScuY2hhckNvZGVBdCgwKSwgaiA9ICd6Jy5jaGFyQ29kZUF0KDApO1xuXG4gICAgICBmb3IgKDtpIDw9IGo7KytpKSB0aGlzLl9hLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2E7XG4gIH1cbiAgLyoqIHByb3ZpZGVzIGN1cnJlbnQgbGV2ZWwgYm9hcmQgc2l6ZSAqL1xuICBnZXQgYm9hcmRTaXplKCkgeyByZXR1cm4gdGhpcy5fYm9hcmRTaXplO31cbiAgLyoqIHByb3ZpZGVzIGN1cnJlbnQgbGV2ZWwgdXNlZFdvcmRzICovXG4gIGdldCB1c2VkV29yZHMoKSB7IHJldHVybiB0aGlzLl91c2VkV29yZHM7fVxuICAvKiogcHJvdmlkZXMgY3VycmVudCBsZXZlbCBib2FyZCAqL1xuICBnZXQgYm9hcmQoKSB7IHJldHVybiB0aGlzLl9ib2FyZDt9XG4gIC8qKiBwcm92aWRlcyBhZGRlZCBkaWN0aW9uYXJpZXMgKi9cbiAgZ2V0IGRpY3Rpb25hcmllcygpIHsgcmV0dXJuIHRoaXMuX2RpY3Rpb25hcmllczt9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYW4gaW5zdGFuc2Ugb2YgdGhlIFdvcmRzIEFJIGxpYnJhcnlcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9kaWN0aW9uYXJpZXMgPSB7fTtcbiAgICB0aGlzLmVuZEJvYXJkKCk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBtYWluIGRpY3Rpb25hcnkgdG8gdGhlIGxpYnJhcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gdW5pcXVlIG5hbWUgZm9yIHRoZSBkaWN0aW9uYXJ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gZGljdGlvbmFyeSBzdHJpbmcuXG4gICAqICovXG4gIGFkZE1haW5EaWN0aW9uYXJ5KG5hbWUsIHN0cmluZykge1xuICAgIHRoaXMuX2FkZERpY3Rpb25hcnkobmFtZSwgc3RyaW5nKTtcblxuICAgIHRoaXMuX21haW5EaWN0aW9uYXJ5ID0gdGhpcy5fZGljdGlvbmFyaWVzW25hbWVdO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgc2Vjb25kYXJ5IGRpY3Rpb25hcnkgdG8gdGhlIGxpYnJhcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gdW5pcXVlIG5hbWUgZm9yIHRoZSBkaWN0aW9uYXJ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gZGljdGlvbmFyeSBzdHJpbmcuXG4gICAqICovXG4gIGFkZFNlY29uZGFyeURpY3Rpb25hcnkobmFtZSwgc3RyaW5nKSB7XG4gICAgdGhpcy5fYWRkRGljdGlvbmFyeShuYW1lLCBzdHJpbmcpO1xuICAgIHRoaXMuX3NlY29uZGFyeURpY3Rpb25hcnkgPSB0aGlzLl9kaWN0aW9uYXJpZXNbbmFtZV07XG4gIH1cbiAgLyoqXG4gICAqIFN0YXJ0IEJvYXJkKExldmVsKSB3aXRoIGludGlhbCBjZW50ZXIgd29yZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJvYXJkU2l6ZSAtIEJvYXJkIFNpemUuXG4gICAqL1xuICBzdGFydEJvYXJkKGJvYXJkU2l6ZSA9IHRoaXMuX2RlZmF1bHRCb2FyZFNpemUpIHtcbiAgICB0aGlzLl9ib2FyZFNpemUgPSBib2FyZFNpemU7XG4gICAgdGhpcy5fY2xlYW5Cb2FyZCgpO1xuXG4gICAgdGhpcy5fc2V0SW5pdGlhbFJhbmRvbVdvcmQoKTtcbiAgfVxuICAvKipcbiAgICogRW5kIEJvYXJkKExldmVsKS5cbiAgICogLSBjbGVhbiB0aGUgYm9hcmQ7XG4gICAqIC0gY2xlYW4gdXNlZCB3b3JkcztcbiAgICogLSBjbGVhbiBjdXJyZW50IG1haW4vc2Vjb25kYXJ5IGRpY3Rpb25hcnlcbiAgICogLSBldGMuXG4gICAqL1xuICBlbmRCb2FyZCgpIHtcbiAgICB0aGlzLl9ib2FyZFNpemUgPSB0aGlzLl9kZWZhdWx0Qm9hcmRTaXplO1xuICAgIHRoaXMuX3VzZWRXb3JkcyA9IFtdO1xuICAgIHRoaXMuX21haW5EaWN0aW9uYXJ5ID0gbnVsbDtcbiAgICB0aGlzLl9zZWNvbmRhcnlEaWN0aW9uYXJ5ID0gbnVsbDtcblxuICAgIHRoaXMuX2NsZWFuQm9hcmQoKTtcbiAgfVxuICAvKiogY2hlY2sgaWYgd29yZCBhbHJlYWR5IHdhcyB1c2VkIGluIGN1cnJlbnQgbGV2ZWwgKi9cbiAgaXNVc2VkV29yZCh3b3JkKSB7XG4gICAgcmV0dXJuICF3b3JkIHx8ICF0aGlzLl91c2VkV29yZHMgfHwgdGhpcy5fdXNlZFdvcmRzLmZpbmQoXG4gICAgICBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpID09PSB3b3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICAvKiogY2hlY2sgaWYgd29yZCBleGlzdHMgaW4gbWFpbiBkaWN0aW9uYXJ5ICovXG4gIGRvZXNXb3JkRXhpc3Qod29yZCkge1xuICAgIGlmICghd29yZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGZpcnN0TGV0dGVySUQgPSB0aGlzLl9nZXRMZXR0ZXJJRChbLi4ud29yZF1bMF0pO1xuXG4gICAgbGV0IHdvcmRzQXJyYXkgPSB0aGlzLl9nZXRXb3Jkc0FycmF5QnlMZXR0ZXJJRChmaXJzdExldHRlcklEKTtcblxuICAgIHJldHVybiB3b3Jkc0FycmF5LmZpbmQoZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIGVsZW1lbnQudG9Mb3dlckNhc2UoKSA9PT0gd29yZC50b0xvd2VyQ2FzZSgpOyB9KTtcbiAgfVxuICAvKipcbiAgICpcbiAgICogY2hlY2sgaWYgc2VsZWN0ZWQgY2VsbHMgYXJlIHBvc3NpYmxlIGZvciBhIHdvcmRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WCAtIGZpcnN0IGxldHRlciBjb2x1bW5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WSAtIGZpcnN0IGxldHRlciByb3dcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCAtIGlzIHdvcmQgdmVydGljYWwgb3IgaG9yaXpvbnRhbFxuICAgKiBAcGFyYW0ge251bWJlcn0gYW1vdW50IC0gYW1vdW50IG9mIHNlbGVjdGVkIGNlbGxzXG4gICAqL1xuICBjaGVja1Bvc3NpYmxlQ2VsbHMoc3RhcnRYLCBzdGFydFksIHZlcnRpY2FsLCBhbW91bnQpIHtcbiAgICBpZiAoc3RhcnRYIDwgMCB8fCBzdGFydFkgPCAwIHx8ICh2ZXJ0aWNhbCA/IHN0YXJ0WSA6IHN0YXJ0WCkgKyBhbW91bnQgPiB0aGlzLl9ib2FyZFNpemUpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBibG9ja2Vyc0NvdW50ZXIgPSAwO1xuICAgIGxldCBsZXR0ZXJzQ291bnRlciA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XG4gICAgICBsZXQgY2hlY2tYID0gdmVydGljYWwgPyBzdGFydFggOiBzdGFydFggKyBpO1xuICAgICAgbGV0IGNoZWNrWSA9IHZlcnRpY2FsID8gc3RhcnRZICsgaSA6IHN0YXJ0WTtcbiAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5fYm9hcmRbY2hlY2tZXVtjaGVja1hdO1xuXG4gICAgICBpZiAodGhpcy5faXNBU3RyaW5nKGVsZW1lbnQpKSBsZXR0ZXJzQ291bnRlcisrO1xuICAgICAgZWxzZSBpZiAoZWxlbWVudCA+PSAzIHx8IHZlcnRpY2FsICYmIGVsZW1lbnQgPT09IDEgfHwgIXZlcnRpY2FsICYmIGVsZW1lbnQgPT09IDIpIGJsb2NrZXJzQ291bnRlcisrO1xuICAgIH1cblxuICAgIGlmIChsZXR0ZXJzQ291bnRlciA9PT0gYW1vdW50IHx8IGJsb2NrZXJzQ291bnRlciB8fCAhbGV0dGVyc0NvdW50ZXIgJiYgdGhpcy5fdXNlZFdvcmRzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgV29yZCB0byB0aGUgYm9hcmQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFggLSBmaXJzdCBsZXR0ZXIgY29sdW1uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFkgLSBmaXJzdCBsZXR0ZXIgcm93XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB3b3JkIC0gd29yZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIC0gaXMgd29yZCB2ZXJ0aWNhbCBvciBob3Jpem9udGFsXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIHdhcyB3b3JkIGFkZGVkIG9yIG5vdC5cbiAgICovXG4gIGFkZFdvcmQoc3RhcnRYLCBzdGFydFksIHdvcmQsIHZlcnRpY2FsID0gZmFsc2UpIHtcbiAgICBpZiAoIXdvcmQgfHwgIXdvcmQubGVuZ3RoIHx8IHdvcmQubGVuZ3RoIDwgMykge1xuICAgICAgY29uc29sZS5sb2coJ3dvcmQgbGVuZ3RoIGlzIGxlc3MgdGhhbiAzIGxldHRlcnMhJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNoZWNrUG9zc2libGVDZWxscyhzdGFydFgsIHN0YXJ0WSwgdmVydGljYWwsIHdvcmQubGVuZ3RoKSkge1xuICAgICAgY29uc29sZS5sb2coJ3Bvc3NpYmxlIGNlbGxzIGNoZWNrIGZhaWxlZCEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2NoZWNrUG9zc2libGVMZXR0ZXJzKHN0YXJ0WCwgc3RhcnRZLCB3b3JkLCB2ZXJ0aWNhbCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwb3NzaWJsZSBsZXR0ZXJzIGNoZWNrIGZhaWxlZCEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1VzZWRXb3JkKHdvcmQpKSB7XG4gICAgICBjb25zb2xlLmxvZygnd29yZCBpcyBhbHJlYWR5IHVzZWQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZG9lc1dvcmRFeGlzdCh3b3JkKSkge1xuICAgICAgY29uc29sZS5sb2coXCJ3b3JkIGRvZXNuJ3QgZXhpc3QgaW4gZGljdGlvbmFyeVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCbG9ja2VycyBiYXNlZCBvbiBudW1iZXI6XG4gICAgICogMSAtIGZvciB2ZXJ0aWNhbFxuICAgICAqIDIgLSBmb3IgaG9yaXphbnRhbFxuICAgICAqIDMgLSBmb3IgYWxsXG4gICAgICogKi9cblxuICAgIFsuLi53b3JkXS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgdmFyIGVsZW1lbnRZID0gc3RhcnRZICsgKHZlcnRpY2FsID8gaW5kZXggOiAwKTtcbiAgICAgIHZhciBlbGVtZW50WCA9IHN0YXJ0WCArICh2ZXJ0aWNhbCA/IDAgOiBpbmRleCk7XG5cbiAgICAgIHRoaXMuX2JvYXJkW2VsZW1lbnRZXVtlbGVtZW50WF0gPSBlbGVtZW50LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGxldCB0YXJnZXRYID0gZWxlbWVudFggKyAodmVydGljYWwgPyBpID8gMSA6IC0xIDogMCk7XG4gICAgICAgIGxldCB0YXJnZXRZID0gZWxlbWVudFkgKyAodmVydGljYWwgPyAwIDogaSA/IDEgOiAtMSk7XG5cbiAgICAgICAgaWYgKHRhcmdldFggPCAwIHx8IHRhcmdldFggPj0gdGhpcy5fYm9hcmRTaXplIHx8IHRhcmdldFkgPCAwIHx8IHRhcmdldFkgPj0gdGhpcy5fYm9hcmRTaXplKSBjb250aW51ZTtcbiAgICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSB0aGlzLl9ib2FyZFt0YXJnZXRZXVt0YXJnZXRYXTtcblxuICAgICAgICBpZiAodmVydGljYWwgJiYgIXRoaXMuX2lzQVZlcnRpY2FsQmxvY2tlcih0YXJnZXRFbGVtZW50KSkgdGhpcy5fYm9hcmRbdGFyZ2V0WV1bdGFyZ2V0WF0gKz0gMTtcbiAgICAgICAgaWYgKCF2ZXJ0aWNhbCAmJiAhdGhpcy5faXNBSG9yaXpvbnRhbEJsb2NrZXIodGFyZ2V0RWxlbWVudCkpIHRoaXMuX2JvYXJkW3RhcmdldFldW3RhcmdldFhdICs9IDI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIGlmIChzdGFydFkpIHRoaXMuX2JvYXJkW3N0YXJ0WSAtIDFdW3N0YXJ0WF0gPSAzO1xuICAgICAgaWYgKHN0YXJ0WSArIHdvcmQubGVuZ3RoIDwgdGhpcy5fYm9hcmRTaXplKSB0aGlzLl9ib2FyZFtzdGFydFkgKyB3b3JkLmxlbmd0aF1bc3RhcnRYXSA9IDM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdGFydFgpIHRoaXMuX2JvYXJkW3N0YXJ0WV1bc3RhcnRYIC0gMV0gPSAzO1xuICAgICAgaWYgKHN0YXJ0WCArIHdvcmQubGVuZ3RoIDwgdGhpcy5fYm9hcmRTaXplKSB0aGlzLl9ib2FyZFtzdGFydFldW3N0YXJ0WCArIHdvcmQubGVuZ3RoXSA9IDM7XG4gICAgfVxuXG4gICAgdGhpcy5fdXNlZFdvcmRzLnB1c2god29yZCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogUHJvdmlkZSBhIHBvc3NpYmxlIGhpbnQgc3RydWN0dXJlOlxuICAgKiB7XG4gICAqICAgIHg6IDAsXG4gICAqICAgIHk6IDAsXG4gICAqICAgIHdvcmQ6IG51bGwsXG4gICAqICAgIHZlcnRpY2FsOiBmYWxzZVxuICAgKiB9XG4gICAqL1xuICBnZXRIaW50V29yZCgpIHtcbiAgICBsZXQgcmV0dXJuRWxlbWVudCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgd29yZDogbnVsbFxuICAgIH07XG4gICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gcmV0dXJuRWxlbWVudDtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5fYm9hcmRTaXplOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5fYm9hcmRTaXplOyB4KyspIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLl9ib2FyZFt5XVt4XTtcblxuICAgICAgICBpZiAodGhpcy5faXNBU3RyaW5nKGVsZW1lbnQpKSBjdXJyZW50RWxlbWVudCA9IHRoaXMuX2ZpbmRQb3NzaWJsZVdvcmQoeCwgeSk7XG4gICAgICAgIGVsc2UgY29udGludWU7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50LndvcmQgJiZcbiAgICAgICAgICAgICghcmV0dXJuRWxlbWVudC53b3JkIHx8XG4gICAgICAgICAgICAgIHJldHVybkVsZW1lbnQud29yZCAmJlxuICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC53b3JkLmxlbmd0aCA+IHJldHVybkVsZW1lbnQud29yZC5sZW5ndGgpXG4gICAgICAgICkgcmV0dXJuRWxlbWVudCA9IGN1cnJlbnRFbGVtZW50O1xuXG4gICAgICAgIGlmIChyZXR1cm5FbGVtZW50LndvcmQgJiYgcmV0dXJuRWxlbWVudC53b3JkLmxlbmd0aCA9PT0gdGhpcy5fYm9hcmRTaXplKSByZXR1cm4gcmV0dXJuRWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcml2YXRlIG1ldGhvZHNcbiAgICovXG4gIC8qKiBjaGVjayBpZiBlbGVtZW50IGlzIGEgc3RyaW5nICovXG4gIF9pc0FTdHJpbmcoZWxlbWVudCkgeyByZXR1cm4gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnOyB9XG4gIC8qKiBjaGVjayBpZiBlbGVtZW50IGlzIGEgbnVtYmVyICovXG4gIF9pc0FOdW1iZXIoZWxlbWVudCkgeyByZXR1cm4gIXRoaXMuX2lzQVN0cmluZyhlbGVtZW50KTsgfVxuICAvKiogY2hlY2sgaWYgYSBjZWxsIGlzIGEgdmVydGljYWwgYmxvY2tlciAqL1xuICBfaXNBVmVydGljYWxCbG9ja2VyKGVsZW1lbnQpIHtyZXR1cm4gIXRoaXMuX2lzQU51bWJlcihlbGVtZW50KSB8fCBlbGVtZW50ID09PSAxIHx8IGVsZW1lbnQgPj0gMzt9XG4gIC8qKiBjaGVjayBpZiBhIGNlbGwgaXMgYSBob3Jpem9udGFsIGJsb2NrZXIgKi9cbiAgX2lzQUhvcml6b250YWxCbG9ja2VyKGVsZW1lbnQpIHtyZXR1cm4gIXRoaXMuX2lzQU51bWJlcihlbGVtZW50KSB8fCBlbGVtZW50ID09PSAyIHx8IGVsZW1lbnQgPj0gMzt9XG4gIC8qKlxuICAgKiBjaGVjayBpZiB3b3JkIGxldHRlcnMgaW50ZXJzZWN0cyBleGlzdGluZyBsZXR0ZXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFggLSBmaXJzdCBsZXR0ZXIgY29sdW1uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFkgLSBmaXJzdCBsZXR0ZXIgcm93XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB3b3JkICAtIHdvcmRcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCAtIGlzIHdvcmQgdmVydGljYWwgb3IgaG9yaXpvbnRhbFxuICAgKi9cbiAgX2NoZWNrUG9zc2libGVMZXR0ZXJzKHN0YXJ0WCwgc3RhcnRZLCB3b3JkLCB2ZXJ0aWNhbCA9IGZhbHNlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hlY2tYID0gdmVydGljYWwgPyBzdGFydFggOiBzdGFydFggKyBpO1xuICAgICAgbGV0IGNoZWNrWSA9IHZlcnRpY2FsID8gc3RhcnRZICsgaSA6IHN0YXJ0WTtcbiAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5fYm9hcmRbY2hlY2tZXVtjaGVja1hdO1xuXG4gICAgICBpZiAodGhpcy5faXNBU3RyaW5nKGVsZW1lbnQpICYmIGVsZW1lbnQgIT09IFsuLi53b3JkXVtpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKiBkZWZhdWx0IGJvYXJkIHNpemUgKi9cbiAgZ2V0IF9kZWZhdWx0Qm9hcmRTaXplKCkgeyByZXR1cm4gMTE7fVxuICAvKipcbiAgICogYWRkIGRpY3Rpb25hcnlcbiAgICogT25jZSBkaWNpdGlvbmFyeSBpcyBwcmVsb2FkZWQgbGlicmFyeSB3b24ndCBsb2FkIGRpY3Rpb25hcnkgYWdhaW4gYnV0IHVzZSBleGlzdGluZyBvbmUgYnkgbmFtZS5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gdW5pcXVlIG5hbWUgZm9yIHRoZSBkaWN0aW9uYXJ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gZGljdGlvbmFyeSBzdHJpbmcuXG4gICAqICovXG4gIF9hZGREaWN0aW9uYXJ5KG5hbWUsIHN0cmluZykge1xuICAgIGlmIChuYW1lIGluIHRoaXMuX2RpY3Rpb25hcmllcykgcmV0dXJuO1xuICAgIGxldCBkaWN0ID0gbmV3IFRyaWUoc3RyaW5nKTtcblxuICAgIHRoaXMuX2RpY3Rpb25hcmllc1tuYW1lXSA9IG5ldyBQVHJpZShkaWN0LnBhY2soKSk7XG4gIH1cbiAgLyoqIGNsZWFuIGJvYXJkICovXG4gIF9jbGVhbkJvYXJkKCkge1xuICAgIHRoaXMuX2JvYXJkID0gW107XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2JvYXJkU2l6ZTsgeSsrKSB7XG4gICAgICBsZXQgX2FycmF5ID0gW107XG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5fYm9hcmRTaXplOyB4KyspIHtcbiAgICAgICAgX2FycmF5LnB1c2goMCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2JvYXJkLnB1c2goX2FycmF5KTtcbiAgICB9XG4gIH1cbiAgLyoqIGFkZCBpbml0aWFsIGhvcml6b250YWwgY2VudGVyZWQgd29yZCAqL1xuICBfc2V0SW5pdGlhbFJhbmRvbVdvcmQoKSB7XG4gICAgbGV0IHdvcmQgPSBudWxsO1xuICAgIGxldCByYW5kb21MZXR0ZXJJRCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLmFscGhhYmV0Lmxlbmd0aCAtIDIpKTtcblxuICAgIHdoaWxlICghd29yZCkge1xuICAgICAgbGV0IHJhbmRvbVdvcmRzID0gdGhpcy5fZ2V0V29yZHNBcnJheUJ5TGV0dGVySUQocmFuZG9tTGV0dGVySUQsIDEpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbVdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByYW5kb21Xb3JkID0gcmFuZG9tV29yZHNbaV07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNVc2VkV29yZChyYW5kb21Xb3JkKSB8fFxuICAgICAgICAgICAgcmFuZG9tV29yZC5sZW5ndGggPCBNYXRoLmZsb29yKHRoaXMuX2JvYXJkU2l6ZSAqIDAuNSkgfHxcbiAgICAgICAgICAgIHJhbmRvbVdvcmQubGVuZ3RoID49IE1hdGguZmxvb3IodGhpcy5fYm9hcmRTaXplKSkgY29udGludWU7XG4gICAgICAgIGVsc2UgeyB3b3JkID0gcmFuZG9tV29yZDsgYnJlYWs7fVxuICAgICAgfVxuXG4gICAgICByYW5kb21MZXR0ZXJJRCA9IHJhbmRvbUxldHRlcklEIDwgdGhpcy5hbHBoYWJldC5sZW5ndGggLSAxID8gcmFuZG9tTGV0dGVySUQgKyAxIDogMDtcbiAgICB9XG5cbiAgICBsZXQgeCA9IE1hdGguZmxvb3IoKHRoaXMuX2JvYXJkU2l6ZSAtIHdvcmQubGVuZ3RoKSAqIDAuNSk7XG4gICAgbGV0IHkgPSBNYXRoLmZsb29yKHRoaXMuX2JvYXJkU2l6ZSAqIDAuNCArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5fYm9hcmRTaXplICogMC4yKSk7XG5cbiAgICB0aGlzLmFkZFdvcmQoeCwgeSwgd29yZCk7XG4gIH1cbiAgLyoqXG4gICAqIHByb3ZpZGVzIGxldHRlciBpZCBpbiB0aGUgYWxwaGFiZXRcbiAgICogQHBhcmFtIHtjaGFyfSBsZXR0ZXIgLSBMZXR0ZXIuXG4gICAqICovXG4gIF9nZXRMZXR0ZXJJRChsZXR0ZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxwaGFiZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmFscGhhYmV0W2ldLnRvTG93ZXJDYXNlKCkgPT09IGxldHRlci50b0xvd2VyQ2FzZSgpKSByZXR1cm4gaTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgLyoqXG4gICAqIHByb3ZpZGVzIHdvcmRzIGFycmF5IGJhc2VkIG9uIGxldHRlciBpZCBhbmQgZGljdGlvbmFyeSB0eXBlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZXR0ZXJJRCAtIExldHRlciBJRCBpbiB0aGUgYWxwaGFiZXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRpY3Rpb25hcnlUeXBlOlxuICAgKiAwIC0gbWFpbiBkaWN0aW9uYXJ5IChkZWZhdWx0KVxuICAgKiAxIC0gc2Vjb25kYXJ5IGRpY3Rpb25hcnlcbiAgICovXG4gIF9nZXRXb3Jkc0FycmF5QnlMZXR0ZXJJRChsZXR0ZXJJRCwgZGljdGlvbmFyeVR5cGUgPSAwKSB7XG4gICAgbGV0IGN1cnJlbnRMZXR0ZXIgPSB0aGlzLmFscGhhYmV0W2xldHRlcklEXTtcbiAgICBsZXQgbmV4dExldHRlciA9IHRoaXMuYWxwaGFiZXRbbGV0dGVySUQgPCB0aGlzLmFscGhhYmV0Lmxlbmd0aCAtIDEgPyBsZXR0ZXJJRCArIDEgOiAwXTtcbiAgICBsZXQgd29yZHMgPSBbXTtcbiAgICBsZXQgZGljdGlvbmFyeSA9IGRpY3Rpb25hcnlUeXBlID8gdGhpcy5fc2Vjb25kYXJ5RGljdGlvbmFyeSA6IHRoaXMuX21haW5EaWN0aW9uYXJ5O1xuXG4gICAgaWYgKGRpY3Rpb25hcnkpIHdvcmRzID0gZGljdGlvbmFyeS53b3JkcyhjdXJyZW50TGV0dGVyLCBuZXh0TGV0dGVyKTtcblxuICAgIGRpY3Rpb25hcnkgPSBudWxsO1xuXG4gICAgcmV0dXJuIHdvcmRzO1xuICB9XG4gIC8qKlxuICAgKiBGaW5kIHBvc3NpYmxlIHdvcmQgZm9yIGEgY2VsbFxuICAgKiBAcGFyYW0ge251bWJlcn0geCAtIGNvbHVtbiB2YWx1ZSBmb3IgYSBjZWxsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gcm93IHZhbHVlIGZvciBhIGNlbGxcbiAgICogQHJldHVybnMgc3RydWN0dXJlOlxuICAgKiB7XG4gICAqICAgIHg6IDAsXG4gICAqICAgIHk6IDAsXG4gICAqICAgIHdvcmQ6IG51bGwsXG4gICAqICAgIHZlcnRpY2FsOiBmYWxzZVxuICAgKiB9XG4gICAqL1xuICBfZmluZFBvc3NpYmxlV29yZCh4LCB5KSB7XG4gICAgbGV0IHJlZ0V4cE9iamVjdCA9IG51bGw7XG4gICAgbGV0IHJldHVybldvcmQgPSBudWxsO1xuICAgIGxldCByZXR1cm5YID0gMDtcbiAgICBsZXQgcmV0dXJuWSA9IDA7XG4gICAgbGV0IHZlcnRpY2FsID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgdmVydGljYWwgPSAhIWk7XG5cbiAgICAgIHJlZ0V4cE9iamVjdCA9IHRoaXMuX2dlbmVyYXRlUmVnRXhwKHgsIHksIHZlcnRpY2FsKTtcbiAgICAgIGlmICghcmVnRXhwT2JqZWN0KSBjb250aW51ZTtcblxuICAgICAgcmV0dXJuV29yZCA9IHRoaXMuX2ZpbmRXb3JkQnlSZWdFeHAocmVnRXhwT2JqZWN0LnJlZ0V4cCk7XG4gICAgICBpZiAoIXJldHVybldvcmQpIGNvbnRpbnVlO1xuXG4gICAgICBmb3IgKGxldCBsID0gMDsgbCA8PSByZWdFeHBPYmplY3QuYmVmb3JlICsgMTsgbCsrKSB7XG4gICAgICAgIGlmIChsIDwgcmV0dXJuV29yZC5sZW5ndGggJiZcbiAgICAgICAgICAgIHJldHVybldvcmRbbF0udG9TdHJpbmcoKSA9PT0gdGhpcy5fYm9hcmRbeV1beF0udG9TdHJpbmcoKSAmJlxuICAgICAgICAgICAgKHZlcnRpY2FsID8geSA6IHgpIC0gbCA+PSAwICYmICh2ZXJ0aWNhbCA/IHkgOiB4KSAtIGwgKyByZXR1cm5Xb3JkLmxlbmd0aCA8PSB0aGlzLl9ib2FyZFNpemUpIHtcbiAgICAgICAgICBsZXQgY2hlY2tYID0gdmVydGljYWwgPyB4IDogeCArIHJlZ0V4cE9iamVjdC5iZXR3ZWVuICsgKHJlZ0V4cE9iamVjdC5iZXR3ZWVuID8gMSA6IDApO1xuICAgICAgICAgIGxldCBjaGVja1kgPSB2ZXJ0aWNhbCA/IHkgKyByZWdFeHBPYmplY3QuYmV0d2VlbiArIChyZWdFeHBPYmplY3QuYmV0d2VlbiA/IDEgOiAwKSA6IHk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fYm9hcmRbY2hlY2tZXVtjaGVja1hdID09PSByZXR1cm5Xb3JkW2wgKyByZWdFeHBPYmplY3QuYmV0d2VlbiArIChyZWdFeHBPYmplY3QuYmV0d2VlbiA/IDEgOiAwKV0pIHtcbiAgICAgICAgICAgIHJldHVyblggPSB2ZXJ0aWNhbCA/IHggOiB4IC0gbDtcbiAgICAgICAgICAgIHJldHVyblkgPSB2ZXJ0aWNhbCA/IHkgLSBsIDogeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmV0dXJuV29yZCkgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHJldHVyblgsXG4gICAgICB5OiByZXR1cm5ZLFxuICAgICAgd29yZDogcmV0dXJuV29yZCxcbiAgICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFByb3ZkZXMgcG9zc2libGUgcmVndWxhciBleHByZXNzaW9uIGZvciBjZWxsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gc3RhcnQgbGV0dGVyIGNvbHVtblxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIHN0YXJ0IGxldHRlciByb3dcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCAtIGlzIHdvcmQgdmVydGljYWwgb3IgaG9yaXpvbnRhbFxuICAgKiBAcmV0dXJucyBzdHJ1Y3R1cmU6XG4gICAqIHtcbiAgICogYmVmb3JlICAgICB7bnVtYmVyfSAtPiBhbW91bnQgb2YgZW1wdHkgY2VsbHMgYmVmb3JlIGZpcnN0IGxldHRlclxuICAgKiBiZXR3ZWVuICAgIHtudW1iZXJ9IC0+IGFtb3VudCBvZiBlbXB0eSBjZWxscyBiZXR3ZWVuIGxldHRlcnNcbiAgICogdG90YWxGcmVlICB7bnVtYmVyfSAtPiB0b3RhbCBmcmVlIGNlbGxzXG4gICAqIHJlZ0V4cCAgICAge3N0cmluZ30gLT4gcmVndWxhciBleHByZXNzaW9uXG4gICAqIH1cbiAgICogT1JcbiAgICogTlVMTCAtPiBpbiBjYXNlIHJlZyBleHAgaXMgaW1wb3NzaWJsZVxuICAgKi9cbiAgX2dlbmVyYXRlUmVnRXhwKHgsIHksIHZlcnRpY2FsID0gZmFsc2UpIHtcbiAgICB2YXIgcmVnRXhwID0gJyc7XG4gICAgdmFyIGlEaWZmID0gTWF0aC5tYXgodGhpcy5fYm9hcmRTaXplIC0gKHZlcnRpY2FsID8geSA6IHgpLCB2ZXJ0aWNhbCA/IHkgOiB4KTtcbiAgICB2YXIgd29yZEFycmF5ID0gbmV3IEFycmF5KHRoaXMuX2JvYXJkU2l6ZSk7XG5cbiAgICB3b3JkQXJyYXlbdmVydGljYWwgPyB5IDogeF0gPSB0aGlzLl9ib2FyZFt5XVt4XTtcbiAgICBsZXQgaXNUb3BCbG9ja2VkID0gZmFsc2U7XG4gICAgbGV0IGlzQm90dG9tQmxvY2tlZCA9IGZhbHNlO1xuICAgIGxldCBsZXR0ZXJzQ291bnRlciA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGlEaWZmOyBpKyspIHtcbiAgICAgIC8vIGNoZWNrIG1vdmVtZW50IHRvcC9sZWZ0XG4gICAgICBpZiAoKHZlcnRpY2FsID8geSA6IHgpIC0gaSA+PSAwICYmICFpc1RvcEJsb2NrZWQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLl9ib2FyZFt2ZXJ0aWNhbCA/IHkgLSBpIDogeV1bdmVydGljYWwgPyB4IDogeCAtIGldO1xuXG4gICAgICAgIGlmICh2ZXJ0aWNhbCAmJiB0aGlzLl9pc0FWZXJ0aWNhbEJsb2NrZXIoZWxlbWVudCkgfHwgIXZlcnRpY2FsICYmIHRoaXMuX2lzQUhvcml6b250YWxCbG9ja2VyKGVsZW1lbnQpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzQVN0cmluZyhlbGVtZW50KSAmJiAhbGV0dGVyc0NvdW50ZXIpIHtcbiAgICAgICAgICAgIHdvcmRBcnJheVt2ZXJ0aWNhbCA/IHkgLSBpIDogeCAtIGldID0gZWxlbWVudDtcbiAgICAgICAgICAgIGxldHRlcnNDb3VudGVyKys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzVG9wQmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaSA+IDEgJiYgdGhpcy5faXNBU3RyaW5nKGVsZW1lbnQpKSB3b3JkQXJyYXlbdmVydGljYWwgPyB5IC0gaSArIDEgOiB4IC0gaSArIDFdID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd29yZEFycmF5W3ZlcnRpY2FsID8geSAtIGkgOiB4IC0gaV0gPSAnW2Etel0nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBtb3ZlbWVudCBib3R0b20vcmlnaHRcbiAgICAgIGlmICgodmVydGljYWwgPyB5IDogeCkgKyBpIDwgdGhpcy5fYm9hcmRTaXplICYmICFpc0JvdHRvbUJsb2NrZWQpIHtcbiAgICAgICAgbGV0IF9lbGVtZW50ID0gdGhpcy5fYm9hcmRbdmVydGljYWwgPyB5ICsgaSA6IHldW3ZlcnRpY2FsID8geCA6IHggKyBpXTtcblxuICAgICAgICBpZiAodmVydGljYWwgJiYgdGhpcy5faXNBVmVydGljYWxCbG9ja2VyKF9lbGVtZW50KSB8fCAhdmVydGljYWwgJiYgdGhpcy5faXNBSG9yaXpvbnRhbEJsb2NrZXIoX2VsZW1lbnQpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzQVN0cmluZyhfZWxlbWVudCkgJiYgIWxldHRlcnNDb3VudGVyKSB7XG4gICAgICAgICAgICB3b3JkQXJyYXlbdmVydGljYWwgPyB5ICsgaSA6IHggKyBpXSA9IF9lbGVtZW50O1xuICAgICAgICAgICAgbGV0dGVyc0NvdW50ZXIrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNCb3R0b21CbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpID4gMSAmJiB0aGlzLl9pc0FTdHJpbmcoX2VsZW1lbnQpKSB3b3JkQXJyYXlbdmVydGljYWwgPyB5ICsgaSAtIDEgOiB4ICsgaSAtIDFdID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd29yZEFycmF5W3ZlcnRpY2FsID8geSArIGkgOiB4ICsgaV0gPSAnW2Etel0nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGdlZW5lcmF0ZSByZWd1bGFyIGV4cHJlc3Npb25cblxuICAgIHJlZ0V4cCArPSAnXignO1xuICAgIGxldCBiZWZvcmVMZXR0ZXJDb3VudGVyID0gMDtcbiAgICBsZXQgYW55Q291bnRlciA9IDA7XG4gICAgbGV0IHRvdGFsRnJlZUNvdW50ZXIgPSAwO1xuICAgIGxldCBiZXR3ZWVuTGV0dGVyc0NvdW50ZXIgPSAwO1xuXG4gICAgbGV0dGVyc0NvdW50ZXIgPSAwO1xuICAgIHdvcmRBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCA9PT0gJ1thLXpdJykgYW55Q291bnRlcisrO1xuICAgICAgZWxzZSBpZiAoZWxlbWVudCkge1xuXG4gICAgICAgIGlmICghbGV0dGVyc0NvdW50ZXIpIGJlZm9yZUxldHRlckNvdW50ZXIgPSBhbnlDb3VudGVyO1xuXG4gICAgICAgIGxldHRlcnNDb3VudGVyKys7XG5cbiAgICAgICAgaWYgKGxldHRlcnNDb3VudGVyID09PSAxKSByZWdFeHAgKz0gJ1thLXpdezAsJyArIGFueUNvdW50ZXIgKyAnfScgKyBlbGVtZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGVsc2UgaWYgKGxldHRlcnNDb3VudGVyID09PSAyKSB7XG4gICAgICAgICAgYmV0d2VlbkxldHRlcnNDb3VudGVyID0gYW55Q291bnRlcjtcbiAgICAgICAgICByZWdFeHAgKz0gJ1thLXpdeycgKyBhbnlDb3VudGVyICsgJ30nICsgZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRvdGFsRnJlZUNvdW50ZXIgKz0gYW55Q291bnRlcjtcbiAgICAgICAgYW55Q291bnRlciA9IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0b3RhbEZyZWVDb3VudGVyICs9IGFueUNvdW50ZXI7XG4gICAgaWYgKGFueUNvdW50ZXIpIHJlZ0V4cCArPSAnW2Etel17MCwnICsgYW55Q291bnRlciArICd9JztcblxuICAgIHJlZ0V4cCArPSAnKSQnO1xuXG4gICAgaWYgKCF0b3RhbEZyZWVDb3VudGVyKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB7XG4gICAgICBiZWZvcmU6IGJlZm9yZUxldHRlckNvdW50ZXIsXG4gICAgICBiZXR3ZWVuOiBiZXR3ZWVuTGV0dGVyc0NvdW50ZXIsXG4gICAgICB0b3RhbEZyZWU6IHRvdGFsRnJlZUNvdW50ZXIsXG4gICAgICByZWdFeHA6IHJlZ0V4cFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFByb3ZpZGVzIGEgcG9zc2libGUgd29yZCBieSByZWcgZXhwXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWdFeHAgLSByZWd1bGFyIGV4cHJlc3Npb25cbiAgICovXG4gIF9maW5kV29yZEJ5UmVnRXhwKHJlZ0V4cCkge1xuICAgIGxldCB3b3JkID0gbnVsbDtcbiAgICBsZXQgc3RhcnRMZXR0ZXJJRCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLmFscGhhYmV0Lmxlbmd0aCAtIDIpKTtcbiAgICBsZXQgcmFuZG9tTGV0dGVySUQgPSBzdGFydExldHRlcklEO1xuICAgIGxldCByZWd1bGFyRXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAocmVnRXhwKTtcblxuICAgIC8vIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB3aGlsZSAoIXdvcmQpIHtcbiAgICAgIGxldCByYW5kb21Xb3JkcyA9IHRoaXMuX2dldFdvcmRzQXJyYXlCeUxldHRlcklEKHJhbmRvbUxldHRlcklELCAxKTtcbiAgICAgIC8qKlxuICAgICAgICogRmFzdGVyIHdheSBidXQgb25seSBzbWFsbCB3b3JkcyBjb21lIGZpcnN0LlxuICAgICAgICovXG4gICAgICAvLyB3b3JkID0gcmFuZG9tV29yZHMuZmluZCgoZWwpPT57XG4gICAgICAvLyAgIHJldHVybiBlbC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbikgJiZcbiAgICAgIC8vICAgICAgICAgIGVsLmxlbmd0aCA+PSAzICYmXG4gICAgICAvLyAgICAgICAgICAhX3RoaXMuaXNVc2VkV29yZChlbCk7XG4gICAgICAvLyB9KSB8fCBudWxsO1xuXG4gICAgICB3b3JkID0gbnVsbDtcbiAgICAgIHJhbmRvbVdvcmRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2gocmVndWxhckV4cHJlc3Npb24pICYmIGVsZW1lbnQubGVuZ3RoID49IDMgJiZcbiAgICAgICAgICAgICF0aGlzLmlzVXNlZFdvcmQoZWxlbWVudCkgJiYgKCF3b3JkIHx8IGVsZW1lbnQubGVuZ3RoID4gd29yZC5sZW5ndGgpKSB7XG4gICAgICAgICAgd29yZCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAod29yZCkgYnJlYWs7XG5cbiAgICAgIHJhbmRvbUxldHRlcklEID0gcmFuZG9tTGV0dGVySUQgPCB0aGlzLmFscGhhYmV0Lmxlbmd0aCAtIDEgPyByYW5kb21MZXR0ZXJJRCArIDEgOiAwO1xuICAgICAgaWYgKHJhbmRvbUxldHRlcklEID09PSBzdGFydExldHRlcklEKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gd29yZDtcbiAgfVxufVxuIiwiaW1wb3J0IEFJIGZyb20gJy4vYWknO1xuZXhwb3J0IHsgQUkgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=