(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("wordsai", [], factory);
	else if(typeof exports === 'object')
		exports["wordsai"] = factory();
	else
		root["wordsai"] = factory();
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

/***/ "./src/BE.js":
/*!*******************!*\
  !*** ./src/BE.js ***!
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

var BE =
/*#__PURE__*/
function () {
  _createClass(BE, [{
    key: "getMainDictionary",
    value: function getMainDictionary() {
      return this._mainDictionary;
    }
  }, {
    key: "getSecondaryDictionaries",

    /** provides added secondary dictionaries names */
    value: function getSecondaryDictionaries() {
      return Object.keys(this._dictionaries);
    }
    /**
     * Generates an instanse of the Words AI BE library
     * @constructor
     */

  }, {
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
  }]);

  function BE() {
    _classCallCheck(this, BE);

    this._mainDictionary = null;
    this._dictionaries = {};
  }
  /**
   * Adds main dictionary to the library.
   * @param {string} string - dictionary string.
   * */


  _createClass(BE, [{
    key: "loadMainDictionary",
    value: function loadMainDictionary(string) {
      var dict = new _dawgLookup.Trie(string);
      this._mainDictionary = new _dawgLookup.PTrie(dict.pack());
    }
    /**
     * Adds secondary dictionary to the library.
     * @param {string} name - unique name for the dictionary.
     * @param {string} string - dictionary string.
     * */

  }, {
    key: "loadSecondaryDictionary",
    value: function loadSecondaryDictionary(name, string) {
      this._addDictionary(name, string);
    }
    /**
     * provides the biggest possible by regular epressions word.
     * @param {array} regExpArray - income array of possible regular expressions
     * @param {string} dictionaryName - dictionary name to use for word search
     * @return {array} - array of possible possible words
     */

  }, {
    key: "getHint",
    value: function getHint(regExpArray, dictionaryName) {
      var _this = this;

      if (!this._mainDictionary || !Object.keys(this._dictionaries).length) {
        console.log('BE: there are some dictionaries absent in BE');
        return null;
      }

      if (!(dictionaryName in this._dictionaries)) {
        console.log('BE: dictionary name is absent in secondary dictionaries list. Used main dictionary instead.');
        dictionaryName = 'main';
      }

      var words = [];
      regExpArray.forEach(function (element) {
        var w = _this._getWordsByRegExp(element, dictionaryName);

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

  }, {
    key: "getWordStats",
    value: function getWordStats(word, dictionaryName) {
      var exists = false;
      var points = 0;

      var firstLetterID = this._getLetterID([].concat(_toConsumableArray(word))[0]);

      var wordsArray = this._getWordsArrayByLetterID(firstLetterID);

      if (wordsArray.indexOf(word) >= 0) exists = true;

      if (dictionaryName) {
        wordsArray = this._getWordsArrayByLetterID(firstLetterID, dictionaryName);
        if (wordsArray.indexOf(word) >= 0) points = word.length;
      }

      return {
        exists: exists,
        points: points
      };
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

  }, {
    key: "_addDictionary",
    value: function _addDictionary(name, string) {
      if (name in this._dictionaries) return;
      var dict = new _dawgLookup.Trie(string);
      this._dictionaries[name] = new _dawgLookup.PTrie(dict.pack());
    }
    /**
     * Provides possible words in specific dictionary by regular expression
     * @param {string} regExp - regular expression to make search with
     * @param {string} dictionaryName - name of the dictionary to be used for a search
     * @return {array} - search result words array
     */

  }, {
    key: "_getWordsByRegExp",
    value: function _getWordsByRegExp(regExp, dictionaryName) {
      var words = [];
      var startLetterID = Math.floor(Math.random() * (this.alphabet.length - 2));
      var randomLetterID = startLetterID;
      var regularExpression = new RegExp(regExp);

      for (var i = 0; i < this.alphabet.length; i++) {
        var randomWords = this._getWordsArrayByLetterID(randomLetterID, dictionaryName);

        randomWords.forEach(function (element) {
          if (element.match(regularExpression)) words.push(element);
        }, this);
        randomLetterID = randomLetterID + i < this.alphabet.length - 1 ? randomLetterID + i : 0;
      }

      return words;
    }
    /**
     * provides words array based on letter id and dictionary type
     * @param {number} letterID - Letter ID in the alphabet
     * @param {string} dictionaryName - dictionary name
     */

  }, {
    key: "_getWordsArrayByLetterID",
    value: function _getWordsArrayByLetterID(letterID, dictionaryName) {
      var currentLetter = this.alphabet[letterID];
      var nextLetter = this.alphabet[letterID < this.alphabet.length - 1 ? letterID + 1 : 0];
      var words = [];
      var dictionary = this._mainDictionary;
      if (dictionaryName in this._dictionaries) dictionary = this._dictionaries[dictionaryName];
      words = dictionary.words(currentLetter, nextLetter);
      dictionary = null;
      return words;
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
  }]);

  return BE;
}();

exports.default = BE;
module.exports = exports["default"];

/***/ }),

/***/ "./src/FE.js":
/*!*******************!*\
  !*** ./src/FE.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FE =
/*#__PURE__*/
function () {
  _createClass(FE, [{
    key: "defaultBoardSize",

    /** default board size */
    get: function get() {
      return 11;
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
    /** provides current level points */

  }, {
    key: "points",
    get: function get() {
      return this._points;
    }
    /**
     * Generates an instanse of the Words AI FE library
     * @constructor
     */

  }]);

  function FE() {
    _classCallCheck(this, FE);

    this.endBoard();
  }
  /**
   * Start Board(Level) with intial center word.
   * @param {number} boardSize - Board Size.
   */


  _createClass(FE, [{
    key: "startBoard",
    value: function startBoard(boardSize) {
      this.endBoard();
      this._boardSize = boardSize;

      this._cleanBoard();
    }
    /**
     * End Board(Level).
     * - clean the board;
     * - clean used words;
     */

  }, {
    key: "endBoard",
    value: function endBoard() {
      this._points = 0;
      this._boardSize = 0;
      this._usedWords = [];

      this._cleanBoard();
    }
    /**
     * get all possible regular expressions on the board
     * @return {Array} - array of possible reg exp strings
     */

  }, {
    key: "getPossibleWordRegExp",
    value: function getPossibleWordRegExp() {
      var array = [];

      if (!this._usedWords.length) {
        array.push('^([a-z]{3,' + Math.ceil(this._boardSize * 0.5) + '})$');
        return array;
      }

      for (var y = 0; y < this._boardSize; y++) {
        for (var x = 0; x < this._boardSize; x++) {
          var element = this._board[y][x];
          if (!this._isAString(element)) continue;

          var regExp = this._findPossibleRegExp(x, y);

          regExp.forEach(function (element) {
            array.push(element);
          });
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

      if (vertical && startY && this._isAString(this._board[startY - 1][startX])) blockersCounter++;
      if (!vertical && startX && this._isAString(this._board[startY][startX - 1])) blockersCounter++;
      if (lettersCounter === amount || blockersCounter || !lettersCounter && this._usedWords.length) return false;
      return true;
    }
    /** check if word already was used on current board */

  }, {
    key: "isUsedWord",
    value: function isUsedWord(word) {
      if (!word) return false;
      word = word.toLowerCase();
      return !this._usedWords || this._usedWords.find(function (element) {
        return element === word;
      });
    }
    /**
     * Adds income word randomly to the board if possible
     * @param {string} word - income word
     * @return {boolean} - was word added or not
     */

  }, {
    key: "addWordRandomly",
    value: function addWordRandomly(word) {
      var points = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!word) return false;

      if (!this._usedWords.length) {
        var x = Math.floor((this._boardSize - word.length) * 0.5);
        var y = Math.ceil(this._boardSize * 0.5);
        this.addWord(x, y, word, false);
        return true;
      }

      for (var _y = 0; _y < this._boardSize; _y++) {
        for (var _x = 0; _x < this._boardSize; _x++) {
          var element = this._board[_y][_x];
          if (!this._isAString(element)) continue;

          for (var index = 0; index < word.length; index++) {
            var letter = word[index];

            if (letter === element) {
              for (var i = 1; i >= 0; i--) {
                var vertical = !!i;
                var searchX = vertical ? _x : _x - index;
                var searchY = vertical ? _y - index : _y;
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

  }, {
    key: "addWord",
    value: function addWord(startX, startY, word, vertical) {
      var points = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

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
  }, {
    key: "getHintFromWordsArray",
    value: function getHintFromWordsArray(words) {
      if (!words || !words.length) return null;
      var word = null;
      if (!this._usedWords.length) word = words[0];

      for (var i = 0; i < words.length; i++) {
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
      return this._isAString(element) || element === 1 || element >= 3;
    }
    /** check if a cell is a horizontal blocker */

  }, {
    key: "_isAHorizontalBlocker",
    value: function _isAHorizontalBlocker(element) {
      return this._isAString(element) || element === 2 || element >= 3;
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
    /** clean board */

  }, {
    key: "_cleanBoard",
    value: function _cleanBoard() {
      this._board = [];
      if (!this._boardSize) return;

      for (var y = 0; y < this._boardSize; y++) {
        var _array = [];

        for (var x = 0; x < this._boardSize; x++) {
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

  }, {
    key: "_findPossibleRegExp",
    value: function _findPossibleRegExp(x, y) {
      var array = [];
      var vertical = false;

      for (var i = 0; i < 2; i++) {
        vertical = !!i;

        var regExp = this._generateRegExp(x, y, vertical);

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

  }, {
    key: "_generateRegExp",
    value: function _generateRegExp(x, y, vertical) {
      var _this = this;

      var regExp = '';
      var iDiff = Math.max(this._boardSize - (vertical ? y : x), vertical ? y : x);
      var wordArray = new Array(this._boardSize);
      wordArray[vertical ? y : x] = this._board[y][x];
      var isTopBlocked = false;
      var isBottomBlocked = false;
      var lettersCounter = 0;

      var checkIfBlocker = function checkIfBlocker(element) {
        var isVerticalBlocker = vertical && _this._isAVerticalBlocker(element);

        var isHorizontalBlocker = !vertical && _this._isAHorizontalBlocker(element);

        return isVerticalBlocker || isHorizontalBlocker;
      };

      for (var i = 1; i <= iDiff; i++) {
        var letterID = null;
        var prevLetterID = null;
        var element = null; // check movement top/left

        if ((vertical ? y : x) - i >= 0 && !isTopBlocked) {
          element = this._board[vertical ? y - i : y][vertical ? x : x - i];
          letterID = vertical ? y - i : x - i;
          prevLetterID = vertical ? y - i + 1 : x - i + 1;

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
        } // check movement bottom/right


        if ((vertical ? y : x) + i < this._boardSize && !isBottomBlocked) {
          element = this._board[vertical ? y + i : y][vertical ? x : x + i];
          letterID = vertical ? y + i : x + i;
          prevLetterID = vertical ? y + i - 1 : x + i - 1;

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
      } // geenerate regular expression


      regExp += '^(';
      var anyCounter = 0;
      var totalFreeCounter = 0;
      lettersCounter = 0;
      wordArray.forEach(function (element, index) {
        if (element && element === '[a-z]') anyCounter++;else if (element) {
          lettersCounter++;
          if (lettersCounter === 1) regExp += '[a-z]{0,' + anyCounter + '}' + element.toLowerCase();else if (lettersCounter === 2) regExp += '[a-z]{' + anyCounter + '}' + element.toLowerCase();
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
  }]);

  return FE;
}();

exports.default = FE;
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
exports.default = void 0;

var _BE = _interopRequireDefault(__webpack_require__(/*! ./BE */ "./src/BE.js"));

var _FE = _interopRequireDefault(__webpack_require__(/*! ./FE */ "./src/FE.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  BE: _BE.default,
  FE: _FE.default
};
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jkc2FpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly93b3Jkc2FpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmRzYWkvLi9ub2RlX21vZHVsZXMvZGF3Zy1sb29rdXAvbGliL2FscGhhY29kZS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLy4vbm9kZV9tb2R1bGVzL2Rhd2ctbG9va3VwL2xpYi9oaXN0b2dyYW0uanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS8uL25vZGVfbW9kdWxlcy9kYXdnLWxvb2t1cC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS8uL25vZGVfbW9kdWxlcy9kYXdnLWxvb2t1cC9saWIvbm9kZS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLy4vbm9kZV9tb2R1bGVzL2Rhd2ctbG9va3VwL2xpYi9wdHJpZS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLy4vbm9kZV9tb2R1bGVzL2Rhd2ctbG9va3VwL2xpYi90cmllLmpzIiwid2VicGFjazovL3dvcmRzYWkvLi9ub2RlX21vZHVsZXMvZGF3Zy1sb29rdXAvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS8uL3NyYy9CRS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLy4vc3JjL0ZFLmpzIiwid2VicGFjazovL3dvcmRzYWkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQkUiLCJfbWFpbkRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiX2RpY3Rpb25hcmllcyIsIl9hIiwiaSIsImNoYXJDb2RlQXQiLCJqIiwicHVzaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInN0cmluZyIsImRpY3QiLCJwYWNrIiwibmFtZSIsIl9hZGREaWN0aW9uYXJ5IiwicmVnRXhwQXJyYXkiLCJkaWN0aW9uYXJ5TmFtZSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ3b3JkcyIsImZvckVhY2giLCJlbGVtZW50IiwidyIsIl9nZXRXb3Jkc0J5UmVnRXhwIiwiY29uY2F0Iiwic29ydCIsImEiLCJiIiwid29yZCIsImV4aXN0cyIsInBvaW50cyIsImZpcnN0TGV0dGVySUQiLCJfZ2V0TGV0dGVySUQiLCJ3b3Jkc0FycmF5IiwiX2dldFdvcmRzQXJyYXlCeUxldHRlcklEIiwiaW5kZXhPZiIsInJlZ0V4cCIsInN0YXJ0TGV0dGVySUQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbHBoYWJldCIsInJhbmRvbUxldHRlcklEIiwicmVndWxhckV4cHJlc3Npb24iLCJSZWdFeHAiLCJyYW5kb21Xb3JkcyIsIm1hdGNoIiwibGV0dGVySUQiLCJjdXJyZW50TGV0dGVyIiwibmV4dExldHRlciIsImRpY3Rpb25hcnkiLCJsZXR0ZXIiLCJ0b0xvd2VyQ2FzZSIsIkZFIiwiX2JvYXJkU2l6ZSIsIl91c2VkV29yZHMiLCJfYm9hcmQiLCJfcG9pbnRzIiwiZW5kQm9hcmQiLCJib2FyZFNpemUiLCJfY2xlYW5Cb2FyZCIsImFycmF5IiwiY2VpbCIsInkiLCJ4IiwiX2lzQVN0cmluZyIsIl9maW5kUG9zc2libGVSZWdFeHAiLCJzdGFydFgiLCJzdGFydFkiLCJ2ZXJ0aWNhbCIsImFtb3VudCIsImJsb2NrZXJzQ291bnRlciIsImxldHRlcnNDb3VudGVyIiwiY2hlY2tYIiwiY2hlY2tZIiwiZmluZCIsImFkZFdvcmQiLCJpbmRleCIsInNlYXJjaFgiLCJzZWFyY2hZIiwiY2hlY2tQb3NzaWJsZUNlbGxzIiwiaXNVc2VkV29yZCIsIl9jaGVja1Bvc3NpYmxlTGV0dGVycyIsImVsZW1lbnRZIiwiZWxlbWVudFgiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsInRhcmdldEVsZW1lbnQiLCJfaXNBVmVydGljYWxCbG9ja2VyIiwiX2lzQUhvcml6b250YWxCbG9ja2VyIiwiX2FycmF5IiwiX2dlbmVyYXRlUmVnRXhwIiwiaURpZmYiLCJtYXgiLCJ3b3JkQXJyYXkiLCJBcnJheSIsImlzVG9wQmxvY2tlZCIsImlzQm90dG9tQmxvY2tlZCIsImNoZWNrSWZCbG9ja2VyIiwiaXNWZXJ0aWNhbEJsb2NrZXIiLCJpc0hvcml6b250YWxCbG9ja2VyIiwicHJldkxldHRlcklEIiwiYW55Q291bnRlciIsInRvdGFsRnJlZUNvdW50ZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxZQUFZLCtDQUErQztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxtQkFBbUIsK0NBQStDO0FBQ2hILHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNB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QWdCLEdBQUcsQ0FBdkI7QUFFQS9CLG9CQUFjLEdBQUcsQ0FBakI7QUFDQXNCLGVBQVMsQ0FBQzFFLE9BQVYsQ0FBa0IsVUFBVUMsT0FBVixFQUFtQndELEtBQW5CLEVBQTBCO0FBQzFDLFlBQUl4RCxPQUFPLElBQUlBLE9BQU8sS0FBSyxPQUEzQixFQUFvQ2lGLFVBQVUsR0FBOUMsS0FDSyxJQUFJakYsT0FBSixFQUFhO0FBQ2hCbUQsd0JBQWM7QUFFZCxjQUFJQSxjQUFjLEtBQUssQ0FBdkIsRUFBMEJwQyxNQUFNLElBQUksYUFBYWtFLFVBQWIsR0FBMEIsR0FBMUIsR0FBZ0NqRixPQUFPLENBQUMrQixXQUFSLEVBQTFDLENBQTFCLEtBQ0ssSUFBSW9CLGNBQWMsS0FBSyxDQUF2QixFQUEwQnBDLE1BQU0sSUFBSSxXQUFXa0UsVUFBWCxHQUF3QixHQUF4QixHQUE4QmpGLE9BQU8sQ0FBQytCLFdBQVIsRUFBeEM7QUFFL0JtRCwwQkFBZ0IsSUFBSUQsVUFBcEI7QUFDQUEsb0JBQVUsR0FBRyxDQUFiO0FBQ0Q7QUFDRixPQVhELEVBV0csSUFYSDtBQWFBQyxzQkFBZ0IsSUFBSUQsVUFBcEI7QUFDQSxVQUFJQSxVQUFKLEVBQWdCbEUsTUFBTSxJQUFJLGFBQWFrRSxVQUFiLEdBQTBCLEdBQXBDO0FBRWhCbEUsWUFBTSxJQUFJLElBQVY7QUFFQSxVQUFJLENBQUNtRSxnQkFBTCxFQUF1Qm5FLE1BQU0sR0FBRyxJQUFUO0FBRXZCLGFBQU9BLE1BQVA7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvWEg7O0FBQ0E7Ozs7ZUFDZTtBQUFFdkMsSUFBRSxhQUFKO0FBQU13RCxJQUFFO0FBQVIsQyIsImZpbGUiOiJ3b3Jkc2FpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3b3Jkc2FpXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndvcmRzYWlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid29yZHNhaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQkFTRSA9IDM2O1xuLy8gUGxhY2Vob2xkZXJcbnZhciBQVHJpZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUFRyaWUoKSB7XG4gICAgfVxuICAgIHJldHVybiBQVHJpZTtcbn0oKSk7XG5leHBvcnRzLlBUcmllID0gUFRyaWU7XG4vLyAwLCAxLCAyLCAuLi4sIEEsIEIsIEMsIC4uLiwgMDAsIDAxLCAuLi4gQUEsIEFCLCBBQywgLi4uLCBBQUEsIEFBQiwgLi4uXG5mdW5jdGlvbiB0b0FscGhhQ29kZShuKSB7XG4gICAgdmFyIHMgPSAnJztcbiAgICB2YXIgcGxhY2VzID0gMTtcbiAgICBmb3IgKHZhciByYW5nZSA9IGV4cG9ydHMuQkFTRTsgbiA+PSByYW5nZTsgbiAtPSByYW5nZSwgcGxhY2VzKyssIHJhbmdlICo9IGV4cG9ydHMuQkFTRSkgeyB9XG4gICAgd2hpbGUgKHBsYWNlcy0tKSB7XG4gICAgICAgIHZhciBkID0gbiAlIGV4cG9ydHMuQkFTRTtcbiAgICAgICAgcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGQgPCAxMCA/IDQ4IDogNTUpICsgZCkgKyBzO1xuICAgICAgICBuID0gKG4gLSBkKSAvIGV4cG9ydHMuQkFTRTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG59XG5leHBvcnRzLnRvQWxwaGFDb2RlID0gdG9BbHBoYUNvZGU7XG5mdW5jdGlvbiBmcm9tQWxwaGFDb2RlKHMpIHtcbiAgICB2YXIgbiA9IDA7XG4gICAgZm9yICh2YXIgcGxhY2VzID0gMSwgcmFuZ2UgPSBleHBvcnRzLkJBU0U7IHBsYWNlcyA8IHMubGVuZ3RoOyBuICs9IHJhbmdlLCBwbGFjZXMrKywgcmFuZ2UgKj0gZXhwb3J0cy5CQVNFKSB7IH1cbiAgICBmb3IgKHZhciBpID0gcy5sZW5ndGggLSAxLCBwb3cgPSAxOyBpID49IDA7IGktLSwgcG93ICo9IGV4cG9ydHMuQkFTRSkge1xuICAgICAgICB2YXIgZCA9IHMuY2hhckNvZGVBdChpKSAtIDQ4O1xuICAgICAgICBpZiAoZCA+IDEwKSB7XG4gICAgICAgICAgICBkIC09IDc7XG4gICAgICAgIH1cbiAgICAgICAgbiArPSBkICogcG93O1xuICAgIH1cbiAgICByZXR1cm4gbjtcbn1cbmV4cG9ydHMuZnJvbUFscGhhQ29kZSA9IGZyb21BbHBoYUNvZGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbHBoYWNvZGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgSGlzdG9ncmFtID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIaXN0b2dyYW0oKSB7XG4gICAgICAgIHRoaXMuY291bnRzID0ge307XG4gICAgfVxuICAgIEhpc3RvZ3JhbS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChrZXksIG4pIHtcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGtleSA9IGtleS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvdW50c1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRzW2tleV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRzW2tleV0gKz0gbjtcbiAgICB9O1xuICAgIEhpc3RvZ3JhbS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGtleSwgbikge1xuICAgICAgICBpZiAobiA9PT0gdm9pZCAwKSB7IG4gPSAxOyB9XG4gICAgICAgIHRoaXMuaW5pdChrZXksIG4pO1xuICAgIH07XG4gICAgSGlzdG9ncmFtLnByb3RvdHlwZS5jb3VudE9mID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmluaXQoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRzW2tleV07XG4gICAgfTtcbiAgICBIaXN0b2dyYW0ucHJvdG90eXBlLmhpZ2hlc3QgPSBmdW5jdGlvbiAodG9wKSB7XG4gICAgICAgIHJldHVybiB1dGlsXzEuc29ydEJ5VmFsdWVzKHRoaXMuY291bnRzLCAnZGVzYycpLnNsaWNlKDAsIHRvcCk7XG4gICAgfTtcbiAgICByZXR1cm4gSGlzdG9ncmFtO1xufSgpKTtcbmV4cG9ydHMuSGlzdG9ncmFtID0gSGlzdG9ncmFtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGlzdG9ncmFtLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciB0cmllXzEgPSByZXF1aXJlKFwiLi90cmllXCIpO1xuZXhwb3J0cy5UcmllID0gdHJpZV8xLlRyaWU7XG52YXIgcHRyaWVfMSA9IHJlcXVpcmUoXCIuL3B0cmllXCIpO1xuZXhwb3J0cy5QVHJpZSA9IHB0cmllXzEuUFRyaWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBOb2RlXG5cbiAgRWFjaCBub2RlIGNvbnRhaW5zIHNvbWUgc3BlY2lhbCBwcm9wZXJ0aWVzIChiZWdpbmluZyB3aXRoICdfJyksIGFzIHdlbGwgYXNcbiAgYXJiaXRyYXJ5IHN0cmluZyBwcm9wZXJ0aWVzIGZvciBzdHJpbmcgZnJhZ21lbnRzIGNvbnRhaW5lZCBpbiB0aGUgaW5wdXQgd29yZFxuICBkaWN0aW9uYXJ5LlxuXG4gIFN0cmluZyBwcm9wZXJ0aWVzIGNhbiBiZSBcInRlcm1pbmFsXCIgKGhhdmUgYSBudW1lcmljIHZhbHVlIG9mIDEpLCBvciBjYW5cbiAgcmVmZXJhbmNlIGFub3RoZXIgY2hpbGQgTm9kZS5cblxuICBOb3RlIHRoYXQgYSBOb2RlIGNvbnRhaW5pbmcgYSB0ZXJtaW5hbCAnJyAoZW1wdHkgc3RyaW5nKSBwcm9wZXJ0eSwgaXMgaXRzZWxmXG4gIG1hcmtlZCBhcyBhIHRlcm1pbmFsIE5vZGUgKHRoZSBwcmVmaXggbGVhZGluZyB0byB0aGlzIG5vZGUgaXMgYSB3b3JkIGluIHRoZVxuICBkaWN0aW9uYXJ5LlxuKi9cbnZhciBOb2RlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb2RlKCkge1xuICAgICAgICAvLyBOdW1iZXIgb2YgY2hpbGQgcHJvcGVydGllcy5cbiAgICAgICAgdGhpcy5fcCA9IDA7XG4gICAgfVxuICAgIE5vZGUucHJvdG90eXBlLmNoaWxkID0gZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbcHJvcF07XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5zZXRDaGlsZCA9IGZ1bmN0aW9uIChwcm9wLCB2YWx1ZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChwcm9wICE9PSB0aGlzLl9nKSB7XG4gICAgICAgICAgICAvLyBkZWxldGUgc2VsZi5fZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZltwcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9wICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3AgPT09IDEpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuX2cgPSBwcm9wO1xuICAgICAgICB9XG4gICAgICAgIHNlbGZbcHJvcF0gPSB2YWx1ZTtcbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmRlbGV0ZUNoaWxkID0gZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAocHJvcCA9PT0gdGhpcy5fZykge1xuICAgICAgICAgICAgLy8gZGVsZXRlIHRoaXMuX2c7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcCAtPSAxO1xuICAgICAgICBkZWxldGUgc2VsZltwcm9wXTtcbiAgICAgICAgaWYgKHRoaXMuX3AgPT09IDEpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuX2cgPSB0aGlzLnByb3BzKClbMF07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEEgcHJvcGVydHkgaXMgYSB0ZXJtaW5hbCBzdHJpbmdcbiAgICBOb2RlLnByb3RvdHlwZS5pc1Rlcm1pbmFsU3RyaW5nID0gZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLmNoaWxkKHByb3ApID09PSAnbnVtYmVyJztcbiAgICB9O1xuICAgIC8vIFRoaXMgbm9kZSBpcyBhIHRlcm1pbmFsIG5vZGUgKHRoZSBwcmVmaXggc3RyaW5nIGlzIGEgd29yZCBpbiB0aGVcbiAgICAvLyBkaWN0aW9uYXJ5KS5cbiAgICBOb2RlLnByb3RvdHlwZS5pc1Rlcm1pbmFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1Rlcm1pbmFsU3RyaW5nKCcnKTtcbiAgICB9O1xuICAgIC8vIFdlbGwgb3JkZXJlZCBsaXN0IG9mIHByb3BlcnRpZXMgaW4gYSBub2RlIChzdHJpbmcgb3Igb2JqZWN0IHByb3BlcnRpZXMpXG4gICAgLy8gVXNlIG5vZGVzT25seSA9PT0gdHJ1ZSB0byByZXR1cm4gb25seSBwcm9wZXJ0aWVzIG9mIGNoaWxkIG5vZGVzIChub3RcbiAgICAvLyB0ZXJtaW5hbCBzdHJpbmdzKS5cbiAgICBOb2RlLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uIChub2Rlc09ubHkpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdmFyIHByb3BzID0gW107XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gbWUpIHtcbiAgICAgICAgICAgIGlmICghbWUuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wICE9PSAnJyAmJiBwcm9wWzBdICE9PSAnXycpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVzT25seSB8fCBOb2RlLmlzTm9kZSh0aGlzLmNoaWxkKHByb3ApKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcm9wcy5zb3J0KCk7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9O1xuICAgIC8vIENvbXB1dGUgaW4tZGVncmVlIG9mIGFsbCBub2RlcyBhbmQgbWFyayB0aGVcbiAgICAvLyBzaW5nbGV0b24gbm9kZXMuXG4gICAgTm9kZS5jb3VudERlZ3JlZSA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHZhciB3YWxrZXIgPSBuZXcgV2Fsa2VyKHJvb3QpO1xuICAgICAgICB3YWxrZXIuZGZzKGZ1bmN0aW9uIChvcmRlciwgbm9kZSkge1xuICAgICAgICAgICAgaWYgKG9yZGVyID09PSAncG9zdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZS5fZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5fZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLl9kKys7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gTm9kZSBoYXMganVzdCBhIHNpbmdsZSAobm9uLXNwZWNpYWwpIHByb3BlcnR5LlxuICAgIE5vZGUucHJvdG90eXBlLmlzU2luZ2xldG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcCA9PT0gMSAmJiAhdGhpcy5pc1Rlcm1pbmFsKCk7XG4gICAgfTtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIGFzIGEgVHlwZSBHdWFyZCAoVHlwZVNjcmlwdClcbiAgICBOb2RlLmlzTm9kZSA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiBuIGluc3RhbmNlb2YgTm9kZTtcbiAgICB9O1xuICAgIHJldHVybiBOb2RlO1xufSgpKTtcbmV4cG9ydHMuTm9kZSA9IE5vZGU7XG52YXIgV2Fsa2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXYWxrZXIocm9vdCkge1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLnZpc2l0TWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBXYWxrZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnZpc2l0TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFdhbGtlci5wcm90b3R5cGUudmlzaXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB0aGlzLnZpc2l0TWFwLnNldChub2RlLCB0cnVlKTtcbiAgICB9O1xuICAgIFdhbGtlci5wcm90b3R5cGUudmlzaXRlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0TWFwLmdldChub2RlKSB8fCBmYWxzZTtcbiAgICB9O1xuICAgIFdhbGtlci5wcm90b3R5cGUuZGZzID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLl9kZnModGhpcy5yb290LCBudWxsLCAnJywgaGFuZGxlcik7XG4gICAgfTtcbiAgICAvLyBEZXB0aC1maXJzdCBzZWFyY2ggdmlhIGNhbGxiYWNrIGhhbmRsZXIuXG4gICAgV2Fsa2VyLnByb3RvdHlwZS5fZGZzID0gZnVuY3Rpb24gKG5vZGUsIHBhcmVudCwgcHJvcFBhcmVudCwgaGFuZGxlcikge1xuICAgICAgICAvLyBUaGUgaGFuZGxlciBjYW4gYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGZyb20gZGlmZmVyZW50IHBhcmVudHNcbiAgICAgICAgLy8gc2luY2UgTm9kZXMgY2FuIGZvcm0gYSBtdWx0aS1ncmFwaC5cbiAgICAgICAgaGFuZGxlcigncHJlJywgbm9kZSwgcGFyZW50LCBwcm9wUGFyZW50KTtcbiAgICAgICAgaWYgKHRoaXMudmlzaXRlZChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlzaXQobm9kZSk7XG4gICAgICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcHModHJ1ZSk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgcHJvcHNfMSA9IHByb3BzOyBfaSA8IHByb3BzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzXzFbX2ldO1xuICAgICAgICAgICAgdGhpcy5fZGZzKG5vZGUuY2hpbGQocHJvcCksIG5vZGUsIHByb3AsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZXIoJ3Bvc3QnLCBub2RlLCBwYXJlbnQsIHByb3BQYXJlbnQpO1xuICAgIH07XG4gICAgcmV0dXJuIFdhbGtlcjtcbn0oKSk7XG5leHBvcnRzLldhbGtlciA9IFdhbGtlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGFscGhhY29kZV8xID0gcmVxdWlyZShcIi4vYWxwaGFjb2RlXCIpO1xuZXhwb3J0cy5OT0RFX1NFUCA9ICc7JztcbmV4cG9ydHMuU1RSSU5HX1NFUCA9ICcsJztcbmV4cG9ydHMuVEVSTUlOQUxfUFJFRklYID0gJyEnO1xuZXhwb3J0cy5NSU5fTEVUVEVSID0gJ2EnO1xuZXhwb3J0cy5NQVhfTEVUVEVSID0gJ3onO1xuZXhwb3J0cy5NQVhfV09SRCA9IG5ldyBBcnJheSgxMCkuam9pbihleHBvcnRzLk1BWF9MRVRURVIpO1xudmFyIHJlTm9kZVBhcnQgPSBuZXcgUmVnRXhwKCcoWycgKyBleHBvcnRzLk1JTl9MRVRURVIgKyAnLScgKyBleHBvcnRzLk1BWF9MRVRURVIgK1xuICAgICddKykoJyArIGV4cG9ydHMuU1RSSU5HX1NFUCArICd8WzAtOUEtWl0rfCQpJywgJ2cnKTtcbnZhciByZVN5bWJvbCA9IG5ldyBSZWdFeHAoXCIoWzAtOUEtWl0rKTooWzAtOUEtWl0rKVwiKTtcbi8qXG4gKiBQYWNrZWQgVHJpZSBzdHJ1Y3R1cmUuXG4gKlxuICogVGhpcyBjbGFzcyBjYW4gcmVhZCBpbiBhIHBhY2tlZCBUcmllIChhY3R1YWxseSBEQVdHKSBpbiB0aGUgZm9ybVxuICogb2YgYSBzdHJpbmcgZW5jb2Rpbmcgb2YgYSBzZXQgb2Ygbm9kZXMuICBJdCB3aWxsIHRoZW4gc3BpbHQgaXRcbiAqIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5ncywgYW5kIHVzZSB0aGUgcmVzdWx0aW5nIGFycmF5IHRvXG4gKiByZXNvbHZlIGRpY3Rpb25hcnkgbWVtYmVyc2hpcC5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgIC8vIFVucGFjayBhIHBhY2tlZCBkaWN0aW9uYXJ5IHN0cmluZyBmb3IgdXNlLlxuICogICB2YXIgcHRyaWUgPSBuZXcgUFRyaWUocGFja2VkU3RyaW5nKTtcbiAqXG4gKiAgIC8vIFRlc3QgYSB3b3JkIGZvciBtZW1iZXJzaGlwIGluIHRoZSBkaWN0aW9uYXJ5LlxuICogICBpZiAocHRyaWUuaXNXb3JkKG15V29yZCkpIHtcbiAqICAgICAuLi5cbiAqICAgfVxuICpcbiAqICAgLy8gRm9yIGNvbW1hbmQgY29tcGxldGlvbiAtIGZpbmQgZmlyc3QgMjAgd29yZHMgdGhhdCBiZWdpbiB3aXRoIGEgcHJlZml4LlxuICogICB2YXIgd29yZHMgPSBwdHJpZS5jb21wbGV0aW9ucyhwcmVmaXgsIDIwKTtcbiAqL1xudmFyIFBUcmllID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQVHJpZShwYWNrZWQpIHtcbiAgICAgICAgdGhpcy5zeW1zID0gW107XG4gICAgICAgIHRoaXMubm9kZXMgPSBwYWNrZWQuc3BsaXQoZXhwb3J0cy5OT0RFX1NFUCk7XG4gICAgICAgIHRoaXMuc3ltcyA9IFtdO1xuICAgICAgICB0aGlzLnN5bUNvdW50ID0gMDtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBtID0gcmVTeW1ib2wuZXhlYyh0aGlzLm5vZGVzW3RoaXMuc3ltQ291bnRdKTtcbiAgICAgICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFscGhhY29kZV8xLmZyb21BbHBoYUNvZGUobVsxXSkgIT09IHRoaXMuc3ltQ291bnQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFN5bWJvbCBuYW1lIC0gZm91bmQgXCIgKyBtWzFdICtcbiAgICAgICAgICAgICAgICAgICAgXCIgd2hlbiBleHBlY3RpbmcgXCIgKyBhbHBoYWNvZGVfMS50b0FscGhhQ29kZSh0aGlzLnN5bUNvdW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN5bXNbdGhpcy5zeW1Db3VudF0gPSBhbHBoYWNvZGVfMS5mcm9tQWxwaGFDb2RlKG1bMl0pO1xuICAgICAgICAgICAgdGhpcy5zeW1Db3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZXMuc3BsaWNlKDAsIHRoaXMuc3ltQ291bnQpO1xuICAgIH1cbiAgICAvLyBJcyB3b3JkIGluIHRoZSBkaWN0aW9uYXJ5IChleGFjdCBtYXRjaCkuXG4gICAgUFRyaWUucHJvdG90eXBlLmlzV29yZCA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgIGlmICh3b3JkID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1hdGNoKHdvcmQpID09PSB3b3JkO1xuICAgIH07XG4gICAgLy8gUmV0dXJucyB0aGUgbG9uZ2VzdCBtYXRjaCB0aGF0IGlzIHByZWZpeCBvZiB3b3JkLlxuICAgIFBUcmllLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy5tYXRjaGVzKHdvcmQpO1xuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuICAgIH07XG4gICAgLy8gUmV0dXJuIGFsbCBlbnRyaWVzIHRoYXQgbWF0Y2ggYSBwcmVmaXggb2Ygd29yZCAoaW4gb3JkZXIgb2YgaW5jcmVhc2luZ1xuICAgIC8vIGxlbmd0aC5cbiAgICBQVHJpZS5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndvcmRzKHdvcmQsIHdvcmQgKyBleHBvcnRzLk1JTl9MRVRURVIpO1xuICAgIH07XG4gICAgLy8gUmV0dXJuIGFsbCBlbnRyaWVzIHRoYXQgYmVnaW4gd2l0aCBhIHByZWZpeC5cbiAgICBQVHJpZS5wcm90b3R5cGUuY29tcGxldGlvbnMgPSBmdW5jdGlvbiAocHJlZml4LCBsaW1pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy53b3JkcyhwcmVmaXgsIGJleW9uZChwcmVmaXgpLCBsaW1pdCk7XG4gICAgfTtcbiAgICBQVHJpZS5wcm90b3R5cGUud29yZHMgPSBmdW5jdGlvbiAoZnJvbSwgYmV5b25kLCBsaW1pdCkge1xuICAgICAgICB2YXIgd29yZHMgPSBbXTtcbiAgICAgICAgZnVuY3Rpb24gY2F0Y2hXb3Jkcyh3b3JkLCBjdHgpIHtcbiAgICAgICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkICYmIHdvcmRzLmxlbmd0aCA+PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgIGN0eC5hYm9ydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd29yZHMucHVzaCh3b3JkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVudW1lcmF0ZSgwLCAnJywgeyBmcm9tOiBmcm9tLFxuICAgICAgICAgICAgYmV5b25kOiBiZXlvbmQsXG4gICAgICAgICAgICBmbjogY2F0Y2hXb3JkcyxcbiAgICAgICAgICAgIHByZWZpeGVzOiAoZnJvbSArIGV4cG9ydHMuTUlOX0xFVFRFUikgPT09IGJleW9uZFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHdvcmRzO1xuICAgIH07XG4gICAgUFRyaWUucHJvdG90eXBlLmVudW1lcmF0ZSA9IGZ1bmN0aW9uIChpbm9kZSwgcHJlZml4LCBjdHgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGVzW2lub2RlXTtcbiAgICAgICAgdmFyIGNvbnQgPSB0cnVlO1xuICAgICAgICBmdW5jdGlvbiBlbWl0KHdvcmQpIHtcbiAgICAgICAgICAgIGlmIChjdHgucHJlZml4ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAod29yZCA9PT0gY3R4LmZyb20uc2xpY2UoMCwgd29yZC5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5mbih3b3JkLCBjdHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3R4LmZyb20gPD0gd29yZCAmJiB3b3JkIDwgY3R4LmJleW9uZCkge1xuICAgICAgICAgICAgICAgIGN0eC5mbih3b3JkLCBjdHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlWzBdID09PSBleHBvcnRzLlRFUk1JTkFMX1BSRUZJWCkge1xuICAgICAgICAgICAgZW1pdChwcmVmaXgpO1xuICAgICAgICAgICAgaWYgKGN0eC5hYm9ydCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUucmVwbGFjZShyZU5vZGVQYXJ0LCBmdW5jdGlvbiAodywgc3RyLCByZWYpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IHByZWZpeCArIHN0cjtcbiAgICAgICAgICAgIC8vIERvbmUgb3Igbm8gcG9zc2libGUgZnV0dXJlIG1hdGNoIGZyb20gc3RyXG4gICAgICAgICAgICBpZiAoY3R4LmFib3J0IHx8XG4gICAgICAgICAgICAgICAgbWF0Y2ggPj0gY3R4LmJleW9uZCB8fFxuICAgICAgICAgICAgICAgIG1hdGNoIDwgY3R4LmZyb20uc2xpY2UoMCwgbWF0Y2gubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpc1Rlcm1pbmFsID0gcmVmID09PSBleHBvcnRzLlNUUklOR19TRVAgfHwgcmVmID09PSAnJztcbiAgICAgICAgICAgIGlmIChpc1Rlcm1pbmFsKSB7XG4gICAgICAgICAgICAgICAgZW1pdChtYXRjaCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuZW51bWVyYXRlKF90aGlzLmlub2RlRnJvbVJlZihyZWYsIGlub2RlKSwgbWF0Y2gsIGN0eCk7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gUmVmZXJlbmNlcyBhcmUgZWl0aGVyIGFic29sdXRlIChzeW1ib2wpIG9yIHJlbGF0aXZlICgxIGJhc2VkKS5cbiAgICBQVHJpZS5wcm90b3R5cGUuaW5vZGVGcm9tUmVmID0gZnVuY3Rpb24gKHJlZiwgaW5vZGVGcm9tKSB7XG4gICAgICAgIHZhciBkbm9kZSA9IGFscGhhY29kZV8xLmZyb21BbHBoYUNvZGUocmVmKTtcbiAgICAgICAgaWYgKGRub2RlIDwgdGhpcy5zeW1Db3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ltc1tkbm9kZV07XG4gICAgICAgIH1cbiAgICAgICAgZG5vZGUgLT0gdGhpcy5zeW1Db3VudDtcbiAgICAgICAgcmV0dXJuIGlub2RlRnJvbSArIGRub2RlICsgMTtcbiAgICB9O1xuICAgIHJldHVybiBQVHJpZTtcbn0oKSk7XG5leHBvcnRzLlBUcmllID0gUFRyaWU7XG4vLyBSZXR1cm4gYSBzdHJpbmcgdGhhdCBpcyB0aGUgc21hbGxlc3Qgc3RyaW5nIGdyZWF0ZXIgdGhhblxuLy8gYW55IHN0cmluZyB3aGljaCBpcyBwcmVmaXhlZCB3aXRoIHMuXG5mdW5jdGlvbiBiZXlvbmQocykge1xuICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5NQVhfV09SRDtcbiAgICB9XG4gICAgdmFyIGNvZGUgPSBzLmNoYXJDb2RlQXQocy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gcy5zbGljZSgwLCAtMSkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUgKyAxKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB0cmllLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiBhIFRyaWUgc2VhcmNoIGRhdGFzdHJ1Y3R1cmUuXG5cbiAgVXNhZ2U6XG5cbiAgdHJpZSA9IG5ldyBUcmllKGRpY3Rpb25hcnktc3RyaW5nKTtcbiAgYm9vbCA9IHRyaWUuaXNXb3JkKHdvcmQpO1xuXG4gIFRvIHVzZSBhIHBhY2tlZCAoY29tcHJlc3NlZCkgdmVyc2lvbiBvZiB0aGUgdHJpZSBzdG9yZWQgYXMgYSBzdHJpbmc6XG5cbiAgY29tcHJlc3NlZCA9IHRyaWUucGFjaygpO1xuICBwdHJpZSA9IG5ldyBQYWNrZWRUcmllKGNvbXByZXNzZWQpO1xuICBib29sID0gcHRyaWUuaXNXb3JkKHdvcmQpXG5cbiovXG52YXIgcHRyaWUgPSByZXF1aXJlKFwiLi9wdHJpZVwiKTtcbnZhciBhbHBoYWNvZGVfMSA9IHJlcXVpcmUoXCIuL2FscGhhY29kZVwiKTtcbnZhciBoaXN0b2dyYW1fMSA9IHJlcXVpcmUoXCIuL2hpc3RvZ3JhbVwiKTtcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xudmFyIG5vZGVfMSA9IHJlcXVpcmUoXCIuL25vZGVcIik7XG52YXIgREVCVUcgPSBmYWxzZTtcbi8vIENyZWF0ZSBhIFRyaWUgZGF0YSBzdHJ1Y3R1cmUgZm9yIHNlYXJjaGluZyBmb3IgbWVtYmVyc2hpcCBvZiBzdHJpbmdzXG4vLyBpbiBhIGRpY3Rpb25hcnkgaW4gYSB2ZXJ5IHNwYWNlIGVmZmljaWVudCB3YXkuXG52YXIgVHJpZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJpZSh3b3Jkcykge1xuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgbm9kZV8xLk5vZGUoKTtcbiAgICAgICAgdGhpcy5sYXN0V29yZCA9ICcnO1xuICAgICAgICB0aGlzLnN1ZmZpeGVzID0ge307XG4gICAgICAgIHRoaXMuY05leHQgPSAxO1xuICAgICAgICB0aGlzLndvcmRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudkN1ciA9IDA7XG4gICAgICAgIHRoaXMuaW5zZXJ0V29yZHMod29yZHMpO1xuICAgIH1cbiAgICAvLyBJbnNlcnQgd29yZHMgZnJvbSBvbmUgYmlnIHN0cmluZywgb3IgZnJvbSBhbiBhcnJheS5cbiAgICBUcmllLnByb3RvdHlwZS5pbnNlcnRXb3JkcyA9IGZ1bmN0aW9uICh3b3Jkcykge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgaWYgKHdvcmRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdvcmRzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgd29yZHMgPSB3b3Jkcy5zcGxpdCgvW15hLXpBLVpdKy8pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHV0aWxfMS51bmlxdWUod29yZHMpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0KHdvcmRzW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJpZS5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAgICAgdGhpcy5faW5zZXJ0KHdvcmQsIHRoaXMucm9vdCk7XG4gICAgICAgIHZhciBsYXN0V29yZCA9IHRoaXMubGFzdFdvcmQ7XG4gICAgICAgIHRoaXMubGFzdFdvcmQgPSB3b3JkO1xuICAgICAgICB2YXIgcHJlZml4ID0gY29tbW9uUHJlZml4KHdvcmQsIGxhc3RXb3JkKTtcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gbGFzdFdvcmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZnJlZXplID0gdGhpcy51bmlxdWVOb2RlKGxhc3RXb3JkLCB3b3JkLCB0aGlzLnJvb3QpO1xuICAgICAgICBpZiAoZnJlZXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbWJpbmVTdWZmaXhOb2RlKGZyZWV6ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyaWUucHJvdG90eXBlLl9pbnNlcnQgPSBmdW5jdGlvbiAod29yZCwgbm9kZSkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIHByZWZpeDtcbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHZhciBwcm9wO1xuICAgICAgICAvLyBEdXBsaWNhdGUgd29yZCBlbnRyeSAtIGlnbm9yZVxuICAgICAgICBpZiAod29yZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBEbyBhbnkgZXhpc3RpbmcgcHJvcHMgc2hhcmUgYSBjb21tb24gcHJlZml4P1xuICAgICAgICBmb3IgKHByb3AgaW4gbm9kZSkge1xuICAgICAgICAgICAgaWYgKCFub2RlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmVmaXggPSBjb21tb25QcmVmaXgod29yZCwgcHJvcCk7XG4gICAgICAgICAgICBpZiAocHJlZml4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJvcCBpcyBhIHByb3BlciBwcmVmaXggLSByZWN1cnNlIHRvIGNoaWxkIG5vZGVcbiAgICAgICAgICAgIGlmIChwcm9wID09PSBwcmVmaXggJiYgbm9kZV8xLk5vZGUuaXNOb2RlKG5vZGUuY2hpbGQocHJvcCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5zZXJ0KHdvcmQuc2xpY2UocHJlZml4Lmxlbmd0aCksIG5vZGUuY2hpbGQocHJvcCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIER1cGxpY2F0ZSB0ZXJtaW5hbCBzdHJpbmcgLSBpZ25vcmVcbiAgICAgICAgICAgIGlmIChwcm9wID09PSB3b3JkICYmIG5vZGUuaXNUZXJtaW5hbFN0cmluZyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5leHQgPSBuZXcgbm9kZV8xLk5vZGUoKTtcbiAgICAgICAgICAgIG5leHQuc2V0Q2hpbGQocHJvcC5zbGljZShwcmVmaXgubGVuZ3RoKSwgbm9kZS5jaGlsZChwcm9wKSk7XG4gICAgICAgICAgICB0aGlzLmFkZFRlcm1pbmFsKG5leHQsIHdvcmQgPSB3b3JkLnNsaWNlKHByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIG5vZGUuZGVsZXRlQ2hpbGQocHJvcCk7XG4gICAgICAgICAgICBub2RlLnNldENoaWxkKHByZWZpeCwgbmV4dCk7XG4gICAgICAgICAgICB0aGlzLndvcmRDb3VudCsrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIHNoYXJlZCBwcmVmaXguICBFbnRlciB0aGUgd29yZCBoZXJlIGFzIGEgdGVybWluYWwgc3RyaW5nLlxuICAgICAgICB0aGlzLmFkZFRlcm1pbmFsKG5vZGUsIHdvcmQpO1xuICAgICAgICB0aGlzLndvcmRDb3VudCsrO1xuICAgIH07XG4gICAgLy8gQWRkIGEgdGVybWluYWwgc3RyaW5nIHRvIG5vZGUuXG4gICAgLy8gSWYgMiBjaGFyYWN0ZXJzIG9yIGxlc3MsIGp1c3QgYWRkIHdpdGggdmFsdWUgPT09IDEuXG4gICAgLy8gSWYgbW9yZSB0aGFuIDIgY2hhcmFjdGVycywgcG9pbnQgdG8gc2hhcmVkIG5vZGVcbiAgICAvLyBOb3RlIC0gZG9uJ3QgcHJlbWF0dXJlbHkgc2hhcmUgc3VmZml4ZXMgLSB0aGVzZVxuICAgIC8vIHRlcm1pbmFscyBtYXkgYmVjb21lIHNwbGl0IGFuZCBqb2luZWQgd2l0aCBvdGhlclxuICAgIC8vIG5vZGVzIGluIHRoaXMgcGFydCBvZiB0aGUgdHJlZS5cbiAgICBUcmllLnByb3RvdHlwZS5hZGRUZXJtaW5hbCA9IGZ1bmN0aW9uIChub2RlLCBwcm9wKSB7XG4gICAgICAgIGlmIChwcm9wLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBub2RlLnNldENoaWxkKHByb3AsIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXh0ID0gbmV3IG5vZGVfMS5Ob2RlKCk7XG4gICAgICAgIG5vZGUuc2V0Q2hpbGQocHJvcFswXSwgbmV4dCk7XG4gICAgICAgIHRoaXMuYWRkVGVybWluYWwobmV4dCwgcHJvcC5zbGljZSgxKSk7XG4gICAgfTtcbiAgICBUcmllLnByb3RvdHlwZS5vcHRpbWl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNjb3JlcyA9IFtdO1xuICAgICAgICB0aGlzLmNvbWJpbmVTdWZmaXhOb2RlKHRoaXMucm9vdCk7XG4gICAgICAgIHRoaXMucHJlcERGUygpO1xuICAgICAgICB0aGlzLmNvdW50RGVncmVlKHRoaXMucm9vdCk7XG4gICAgICAgIHRoaXMucHJlcERGUygpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlQ2hhaW5zKHRoaXMucm9vdCk7XG4gICAgfTtcbiAgICAvLyBDb252ZXJ0IFRyaWUgdG8gYSBEQVdHIGJ5IHNoYXJpbmcgaWRlbnRpY2FsIG5vZGVzXG4gICAgVHJpZS5wcm90b3R5cGUuY29tYmluZVN1ZmZpeE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAvLyBGcm96ZW4gbm9kZSAtIGNhbid0IGNoYW5nZS5cbiAgICAgICAgaWYgKG5vZGUuX2MpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgY2hpbGRyZW4gYXJlIGNvbWJpbmVkIGFuZCBnZW5lcmF0ZSB1bmlxdWUgbm9kZVxuICAgICAgICAvLyBzaWduYXR1cmUgZm9yIHRoaXMgbm9kZS5cbiAgICAgICAgdmFyIHNpZyA9IFtdO1xuICAgICAgICBpZiAobm9kZS5pc1Rlcm1pbmFsKCkpIHtcbiAgICAgICAgICAgIHNpZy5wdXNoKCchJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3BzID0gbm9kZS5wcm9wcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGVfMS5Ob2RlLmlzTm9kZShub2RlLmNoaWxkKHByb3ApKSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0Q2hpbGQocHJvcCwgdGhpcy5jb21iaW5lU3VmZml4Tm9kZShub2RlLmNoaWxkKHByb3ApKSk7XG4gICAgICAgICAgICAgICAgc2lnLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgc2lnLnB1c2gobm9kZS5jaGlsZChwcm9wKS5fYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaWcucHVzaChwcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgc2lnU3RyaW5nID0gc2lnLmpvaW4oJy0nKTtcbiAgICAgICAgdmFyIHNoYXJlZCA9IHRoaXMuc3VmZml4ZXNbc2lnU3RyaW5nXTtcbiAgICAgICAgaWYgKHNoYXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoYXJlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1ZmZpeGVzW3NpZ1N0cmluZ10gPSBub2RlO1xuICAgICAgICBub2RlLl9jID0gdGhpcy5jTmV4dCsrO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIFRyaWUucHJvdG90eXBlLnByZXBERlMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudkN1cisrO1xuICAgIH07XG4gICAgVHJpZS5wcm90b3R5cGUudmlzaXRlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLl92ID09PSB0aGlzLnZDdXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuX3YgPSB0aGlzLnZDdXI7XG4gICAgfTtcbiAgICBUcmllLnByb3RvdHlwZS5jb3VudERlZ3JlZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLl9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5vZGUuX2QgPSAwO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuX2QrKztcbiAgICAgICAgaWYgKHRoaXMudmlzaXRlZChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcHModHJ1ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY291bnREZWdyZWUobm9kZS5jaGlsZChwcm9wc1tpXSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBSZW1vdmUgaW50ZXJtZWRpYXRlIHNpbmdsZXRvbiBub2RlcyBieSBob2lzdGluZyBpbnRvIHRoZWlyIHBhcmVudFxuICAgIFRyaWUucHJvdG90eXBlLmNvbGxhcHNlQ2hhaW5zID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIHByb3AgPSAnLWludmFsaWQtJztcbiAgICAgICAgdmFyIHByb3BzO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgaWYgKHRoaXMudmlzaXRlZChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb3BzID0gbm9kZS5wcm9wcygpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IG5vZGUuY2hpbGQocHJvcCk7XG4gICAgICAgICAgICBpZiAoIW5vZGVfMS5Ob2RlLmlzTm9kZShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VDaGFpbnMoY2hpbGQpO1xuICAgICAgICAgICAgLy8gSG9pc3QgdGhlIHNpbmdsZXRvbiBjaGlsZCdzIHNpbmdsZSBwcm9wZXJ0eSB0byB0aGUgcGFyZW50XG4gICAgICAgICAgICBpZiAoY2hpbGQuX2cgIT09IHVuZGVmaW5lZCAmJiAoY2hpbGQuX2QgPT09IDEgfHwgY2hpbGQuX2cubGVuZ3RoID09PSAxKSkge1xuICAgICAgICAgICAgICAgIG5vZGUuZGVsZXRlQ2hpbGQocHJvcCk7XG4gICAgICAgICAgICAgICAgcHJvcCArPSBjaGlsZC5fZztcbiAgICAgICAgICAgICAgICBub2RlLnNldENoaWxkKHByb3AsIGNoaWxkLmNoaWxkKGNoaWxkLl9nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWRlbnRpZnkgc2luZ2xldG9uIG5vZGVzXG4gICAgICAgIGlmIChwcm9wcy5sZW5ndGggPT09IDEgJiYgIW5vZGUuaXNUZXJtaW5hbCgpKSB7XG4gICAgICAgICAgICBub2RlLl9nID0gcHJvcDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJpZS5wcm90b3R5cGUuaXNXb3JkID0gZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGcmFnbWVudCh3b3JkLCB0aGlzLnJvb3QpO1xuICAgIH07XG4gICAgVHJpZS5wcm90b3R5cGUuaXNGcmFnbWVudCA9IGZ1bmN0aW9uICh3b3JkLCBub2RlKSB7XG4gICAgICAgIGlmICh3b3JkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuaXNUZXJtaW5hbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmNoaWxkKHdvcmQpID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5kIGEgcHJlZml4IG9mIHdvcmQgcmVmZXJlbmNlIHRvIGEgY2hpbGRcbiAgICAgICAgdmFyIHByb3BzID0gbm9kZS5wcm9wcyh0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSB3b3JkLnNsaWNlKDAsIHByb3AubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRnJhZ21lbnQod29yZC5zbGljZShwcm9wLmxlbmd0aCksIG5vZGUuY2hpbGQocHJvcCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8vIEZpbmQgaGlnaGVzdCBub2RlIGluIFRyaWUgdGhhdCBpcyBvbiB0aGUgcGF0aCB0byB3b3JkXG4gICAgLy8gYW5kIHRoYXQgaXMgTk9UIG9uIHRoZSBwYXRoIHRvIG90aGVyLlxuICAgIFRyaWUucHJvdG90eXBlLnVuaXF1ZU5vZGUgPSBmdW5jdGlvbiAod29yZCwgb3RoZXIsIG5vZGUpIHtcbiAgICAgICAgdmFyIHByb3BzID0gbm9kZS5wcm9wcyh0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSB3b3JkLnNsaWNlKDAsIHByb3AubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wICE9PSBvdGhlci5zbGljZSgwLCBwcm9wLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuY2hpbGQocHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVuaXF1ZU5vZGUod29yZC5zbGljZShwcm9wLmxlbmd0aCksIG90aGVyLnNsaWNlKHByb3AubGVuZ3RoKSwgbm9kZS5jaGlsZChwcm9wKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8vIFJldHVybiBwYWNrZWQgcmVwcmVzZW50YXRpb24gb2YgVHJpZSBhcyBhIHN0cmluZy5cbiAgICAvL1xuICAgIC8vIEVhY2ggbm9kZSBvZiB0aGUgVHJpZSBpcyBvdXRwdXQgb24gYSBzaW5nbGUgbGluZS5cbiAgICAvL1xuICAgIC8vIEZvciBleGFtcGxlIFRyaWUoXCJ0aGUgdGhlbSB0aGVyZSB0aGVzaXMgdGhpc1wiKTpcbiAgICAvLyB7XG4gICAgLy8gICAgXCJ0aFwiOiB7XG4gICAgLy8gICAgICBcImlzXCI6IDEsXG4gICAgLy8gICAgICBcImVcIjoge1xuICAgIC8vICAgICAgICBcIlwiOiAxLFxuICAgIC8vICAgICAgICBcIm1cIjogMSxcbiAgICAvLyAgICAgICAgXCJyZVwiOiAxLFxuICAgIC8vICAgICAgICBcInNpc1wiOiAxXG4gICAgLy8gICAgICB9XG4gICAgLy8gICAgfVxuICAgIC8vICB9XG4gICAgLy9cbiAgICAvLyBXb3VsZCBiZSByZXBlcmVzZW50ZWQgYXM6XG4gICAgLy9cbiAgICAvLyB0aDBcbiAgICAvLyBlMGlzXG4gICAgLy8gIW0scmUsc2lzXG4gICAgLy9cbiAgICAvLyBUaGUgbGluZSBiZWdpbnMgd2l0aCBhICchJyBpZmYgaXQgaXMgYSB0ZXJtaW5hbCBub2RlIG9mIHRoZSBUcmllLlxuICAgIC8vIEZvciBlYWNoIHN0cmluZyBwcm9wZXJ0eSBpbiBhIG5vZGUsIHRoZSBzdHJpbmcgaXMgbGlzdGVkLCBhbG9uZ1xuICAgIC8vIHdpdGggYSAocmVsYXRpdmUhKSBsaW5lIG51bWJlciBvZiB0aGUgbm9kZSB0aGF0IHN0cmluZyByZWZlcmVuY2VzLlxuICAgIC8vIFRlcm1pbmFsIHN0cmluZ3MgKHRob3NlIHdpdGhvdXQgY2hpbGQgbm9kZSByZWZlcmVuY2VzKSBhcmVcbiAgICAvLyBzZXBhcmF0ZWQgYnkgJywnIGNoYXJhY3RlcnMuXG4gICAgVHJpZS5wcm90b3R5cGUucGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICAgICAgdmFyIG5vZGVDb3VudDtcbiAgICAgICAgdmFyIHN5bXMgPSB7fTtcbiAgICAgICAgdmFyIHBvcyA9IDA7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSd2ZSBjb21iaW5lZCBhbGwgdGhlIGNvbW1vbiBzdWZmaXhlc1xuICAgICAgICB0aGlzLm9wdGltaXplKCk7XG4gICAgICAgIGZ1bmN0aW9uIG5vZGVMaW5lKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gJyc7XG4gICAgICAgICAgICB2YXIgc2VwID0gJyc7XG4gICAgICAgICAgICBpZiAobm9kZS5pc1Rlcm1pbmFsKCkpIHtcbiAgICAgICAgICAgICAgICBsaW5lICs9IHB0cmllLlRFUk1JTkFMX1BSRUZJWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcHMoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmlzVGVybWluYWxTdHJpbmcocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZSArPSBzZXAgKyBwcm9wO1xuICAgICAgICAgICAgICAgICAgICBzZXAgPSBwdHJpZS5TVFJJTkdfU0VQO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbm9kZS5jaGlsZChwcm9wKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltc1tjaGlsZC5fbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZSArPSBzZXAgKyBwcm9wICsgc3ltc1tjaGlsZC5fbl07XG4gICAgICAgICAgICAgICAgICAgIHNlcCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJlZiA9IGFscGhhY29kZV8xLnRvQWxwaGFDb2RlKG5vZGUuX24gLSBjaGlsZC5fbiAtIDEgKyBzeW1Db3VudCk7XG4gICAgICAgICAgICAgICAgLy8gTGFyZ2UgcmVmZXJlbmNlIHRvIHNtYWxsZXIgc3RyaW5nIHN1ZmZpeCAtPiBkdXBsaWNhdGUgc3VmZml4XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLl9nICYmIHJlZi5sZW5ndGggPj0gY2hpbGQuX2cubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXNUZXJtaW5hbFN0cmluZyhjaGlsZC5fZykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gY2hpbGQuX2c7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgKz0gc2VwICsgcHJvcCArIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgc2VwID0gcHRyaWUuU1RSSU5HX1NFUDtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpbmUgKz0gc2VwICsgcHJvcCArIHJlZjtcbiAgICAgICAgICAgICAgICBzZXAgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRvcG9sb2dpY2FsIHNvcnQgaW50byBub2RlcyBhcnJheVxuICAgICAgICBmdW5jdGlvbiBudW1iZXJOb2Rlcyhub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5fbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BzID0gbm9kZS5wcm9wcyh0cnVlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBudW1iZXJOb2Rlcyhub2RlLmNoaWxkKHByb3BzW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLl9uID0gcG9zKys7XG4gICAgICAgICAgICBub2Rlcy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoaXN0QWJzID0gbmV3IGhpc3RvZ3JhbV8xLkhpc3RvZ3JhbSgpO1xuICAgICAgICB2YXIgaGlzdFJlbCA9IG5ldyBoaXN0b2dyYW1fMS5IaXN0b2dyYW0oKTtcbiAgICAgICAgZnVuY3Rpb24gYW5hbHl6ZVJlZnMobm9kZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYudmlzaXRlZChub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcHModHJ1ZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBub2RlLmNoaWxkKHByb3ApO1xuICAgICAgICAgICAgICAgIHZhciByZWYgPSBub2RlLl9uIC0gY2hpbGQuX24gLSAxO1xuICAgICAgICAgICAgICAgIC8vIENvdW50IHRoZSBudW1iZXIgb2Ygc2luZ2xlLWNoYXJhY3RlciByZWxhdGl2ZSByZWZzXG4gICAgICAgICAgICAgICAgaWYgKHJlZiA8IGFscGhhY29kZV8xLkJBU0UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdFJlbC5hZGQocmVmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHNhdmVkIGJ5IGNvbnZlcnRpbmcgYW4gYWJzb2x1dGVcbiAgICAgICAgICAgICAgICAvLyByZWZlcmVuY2UgdG8gYSBvbmUtY2hhcmFjdGVyIHN5bWJvbC5cbiAgICAgICAgICAgICAgICBoaXN0QWJzLmFkZChjaGlsZC5fbiwgYWxwaGFjb2RlXzEudG9BbHBoYUNvZGUocmVmKS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBhbmFseXplUmVmcyhjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc3ltYm9sQ291bnQoKSB7XG4gICAgICAgICAgICB2YXIgdG9wTm9kZXMgPSBoaXN0QWJzLmhpZ2hlc3QoYWxwaGFjb2RlXzEuQkFTRSk7XG4gICAgICAgICAgICB2YXIgc2F2aW5ncyA9IFtdO1xuICAgICAgICAgICAgc2F2aW5nc1stMV0gPSAwO1xuICAgICAgICAgICAgdmFyIGJlc3QgPSAwO1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciBkZWZTaXplID0gMyArIGFscGhhY29kZV8xLnRvQWxwaGFDb2RlKG5vZGVDb3VudCkubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgc3ltID0gMDsgc3ltIDwgYWxwaGFjb2RlXzEuQkFTRTsgc3ltKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodG9wTm9kZXNbc3ltXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBDdW11bGF0aXZlIHNhdmluZ3Mgb2Y6XG4gICAgICAgICAgICAgICAgLy8gICBzYXZlZCBjaGFyYWN0ZXJzIGluIHJlZnNcbiAgICAgICAgICAgICAgICAvLyAgIG1pbnVzIGRlZmluaXRpb24gc2l6ZVxuICAgICAgICAgICAgICAgIC8vICAgbWludXMgcmVsYXRpdmUgc2l6ZSB3cmFwcGluZyB0byAyIGRpZ2l0c1xuICAgICAgICAgICAgICAgIHNhdmluZ3Nbc3ltXSA9IHRvcE5vZGVzW3N5bV1bMV0gLSBkZWZTaXplIC1cbiAgICAgICAgICAgICAgICAgICAgaGlzdFJlbC5jb3VudE9mKGFscGhhY29kZV8xLkJBU0UgLSBzeW0gLSAxKSArXG4gICAgICAgICAgICAgICAgICAgIHNhdmluZ3Nbc3ltIC0gMV07XG4gICAgICAgICAgICAgICAgbG9nKFwic2F2aW5nc1tcIiArIHN5bSArIFwiXSBcIiArIHNhdmluZ3Nbc3ltXSArICcgPSAnICtcbiAgICAgICAgICAgICAgICAgICAgc2F2aW5nc1tzeW0gLSAxXSArICcgKycgK1xuICAgICAgICAgICAgICAgICAgICB0b3BOb2Rlc1tzeW1dWzFdICsgJyAtICcgKyBkZWZTaXplICsgJyAtICcgK1xuICAgICAgICAgICAgICAgICAgICBoaXN0UmVsLmNvdW50T2YoYWxwaGFjb2RlXzEuQkFTRSAtIHN5bSAtIDEpICsgJyknKTtcbiAgICAgICAgICAgICAgICBpZiAoc2F2aW5nc1tzeW1dID49IGJlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVzdCA9IHNhdmluZ3Nbc3ltXTtcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSBzeW0gKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbY291bnQsIHRvcE5vZGVzXTtcbiAgICAgICAgfVxuICAgICAgICBudW1iZXJOb2Rlcyh0aGlzLnJvb3QpO1xuICAgICAgICBub2RlQ291bnQgPSBub2Rlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMucHJlcERGUygpO1xuICAgICAgICBhbmFseXplUmVmcyh0aGlzLnJvb3QpO1xuICAgICAgICB2YXIgX2EgPSBzeW1ib2xDb3VudCgpLCBzeW1Db3VudCA9IF9hWzBdLCB0b3BOb2RlcyA9IF9hWzFdO1xuICAgICAgICB2YXIgc3ltRGVmcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBzeW0gPSAwOyBzeW0gPCBzeW1Db3VudDsgc3ltKyspIHtcbiAgICAgICAgICAgIHN5bXNbdG9wTm9kZXNbc3ltXVswXV0gPSBhbHBoYWNvZGVfMS50b0FscGhhQ29kZShzeW0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub2RlTGluZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbm9kZUxpbmVzW2ldID0gbm9kZUxpbmUobm9kZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXBlbmQgc3ltYm9sc1xuICAgICAgICBmb3IgKHZhciBzeW0gPSBzeW1Db3VudCAtIDE7IHN5bSA+PSAwOyBzeW0tLSkge1xuICAgICAgICAgICAgbm9kZUxpbmVzLnVuc2hpZnQoYWxwaGFjb2RlXzEudG9BbHBoYUNvZGUoc3ltKSArICc6JyArXG4gICAgICAgICAgICAgICAgYWxwaGFjb2RlXzEudG9BbHBoYUNvZGUobm9kZUNvdW50IC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQodG9wTm9kZXNbc3ltXVswXSwgMTApIC0gMSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlTGluZXMuam9pbihwdHJpZS5OT0RFX1NFUCk7XG4gICAgfTtcbiAgICByZXR1cm4gVHJpZTtcbn0oKSk7XG5leHBvcnRzLlRyaWUgPSBUcmllO1xuZnVuY3Rpb24gY29tbW9uUHJlZml4KHcxLCB3Mikge1xuICAgIHZhciBpO1xuICAgIHZhciBtYXhsZW4gPSBNYXRoLm1pbih3MS5sZW5ndGgsIHcyLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMDsgaSA8IG1heGxlbiAmJiB3MVtpXSA9PT0gdzJbaV07IGkrKykgeyB9XG4gICAgcmV0dXJuIHcxLnNsaWNlKDAsIGkpO1xufVxuZnVuY3Rpb24gbG9nKG1lc3NhZ2UpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGlmIChERUJVRykge1xuICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbbWVzc2FnZV0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmllLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIHNvcnRCeVZhbHVlcyhvLCBkaXIpIHtcbiAgICBpZiAoZGlyID09PSB2b2lkIDApIHsgZGlyID0gJ2FzYyc7IH1cbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG8pIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2tleSwgb1trZXldXSk7XG4gICAgfVxuICAgIHJlc3VsdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBjbXBEZWZhdWx0KGFbMV0sIGJbMV0sIGRpcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuc29ydEJ5VmFsdWVzID0gc29ydEJ5VmFsdWVzO1xuZnVuY3Rpb24gY21wRGVmYXVsdChhLCBiLCBkaXIpIHtcbiAgICBpZiAoZGlyID09PSB2b2lkIDApIHsgZGlyID0gJ2FzYyc7IH1cbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmVzdWx0ID0gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJlc3VsdCA9IDE7XG4gICAgfVxuICAgIHJldHVybiBkaXIgPT09ICdhc2MnID8gcmVzdWx0IDogLXJlc3VsdDtcbn1cbi8vIFNvcnQgZWxlbWVudHMgYW5kIHJlbW92ZSBkdXBsaWNhdGVzIGZyb20gYXJyYXkgKG1vZGlmaWVkIGluIHBsYWNlKS5cbmZ1bmN0aW9uIHVuaXF1ZShhLCBjbXApIHtcbiAgICBpZiAoY21wID09PSB2b2lkIDApIHsgY21wID0gY21wRGVmYXVsdDsgfVxuICAgIGEuc29ydChjbXApO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY21wKGFbaSAtIDFdLCBhW2ldKSA9PT0gMCkge1xuICAgICAgICAgICAgYS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLnVuaXF1ZSA9IHVuaXF1ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiaW1wb3J0IHtUcmllLCBQVHJpZX0gZnJvbSAnZGF3Zy1sb29rdXAnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQkUge1xuICAvKiogcmV0dXJucyAoJiBnZW5lcmF0ZXMpIGFscGhhYmV0IGFycmF5ICovXG4gIGdldCBhbHBoYWJldCgpIHtcbiAgICBpZiAoIXRoaXMuX2EpIHtcbiAgICAgIHRoaXMuX2EgPSBbXTtcbiAgICAgIGxldCBpID0gJ2EnLmNoYXJDb2RlQXQoMCksIGogPSAneicuY2hhckNvZGVBdCgwKTtcblxuICAgICAgZm9yICg7aSA8PSBqOysraSkgdGhpcy5fYS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoaSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9hO1xuICB9XG4gIGdldE1haW5EaWN0aW9uYXJ5KCkgeyByZXR1cm4gdGhpcy5fbWFpbkRpY3Rpb25hcnk7fTtcbiAgLyoqIHByb3ZpZGVzIGFkZGVkIHNlY29uZGFyeSBkaWN0aW9uYXJpZXMgbmFtZXMgKi9cbiAgZ2V0U2Vjb25kYXJ5RGljdGlvbmFyaWVzKCkgeyByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZGljdGlvbmFyaWVzKTsgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGFuIGluc3RhbnNlIG9mIHRoZSBXb3JkcyBBSSBCRSBsaWJyYXJ5XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fbWFpbkRpY3Rpb25hcnkgPSBudWxsO1xuICAgIHRoaXMuX2RpY3Rpb25hcmllcyA9IHt9O1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIG1haW4gZGljdGlvbmFyeSB0byB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIGRpY3Rpb25hcnkgc3RyaW5nLlxuICAgKiAqL1xuICBsb2FkTWFpbkRpY3Rpb25hcnkoc3RyaW5nKSB7XG4gICAgbGV0IGRpY3QgPSBuZXcgVHJpZShzdHJpbmcpO1xuXG4gICAgdGhpcy5fbWFpbkRpY3Rpb25hcnkgPSBuZXcgUFRyaWUoZGljdC5wYWNrKCkpO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIHNlY29uZGFyeSBkaWN0aW9uYXJ5IHRvIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHVuaXF1ZSBuYW1lIGZvciB0aGUgZGljdGlvbmFyeS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIGRpY3Rpb25hcnkgc3RyaW5nLlxuICAgKiAqL1xuICBsb2FkU2Vjb25kYXJ5RGljdGlvbmFyeShuYW1lLCBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZGREaWN0aW9uYXJ5KG5hbWUsIHN0cmluZyk7XG4gIH1cbiAgLyoqXG4gICAqIHByb3ZpZGVzIHRoZSBiaWdnZXN0IHBvc3NpYmxlIGJ5IHJlZ3VsYXIgZXByZXNzaW9ucyB3b3JkLlxuICAgKiBAcGFyYW0ge2FycmF5fSByZWdFeHBBcnJheSAtIGluY29tZSBhcnJheSBvZiBwb3NzaWJsZSByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaWN0aW9uYXJ5TmFtZSAtIGRpY3Rpb25hcnkgbmFtZSB0byB1c2UgZm9yIHdvcmQgc2VhcmNoXG4gICAqIEByZXR1cm4ge2FycmF5fSAtIGFycmF5IG9mIHBvc3NpYmxlIHBvc3NpYmxlIHdvcmRzXG4gICAqL1xuICBnZXRIaW50KHJlZ0V4cEFycmF5LCBkaWN0aW9uYXJ5TmFtZSkge1xuICAgIGlmICghdGhpcy5fbWFpbkRpY3Rpb25hcnkgfHwgIU9iamVjdC5rZXlzKHRoaXMuX2RpY3Rpb25hcmllcykubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygnQkU6IHRoZXJlIGFyZSBzb21lIGRpY3Rpb25hcmllcyBhYnNlbnQgaW4gQkUnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoIShkaWN0aW9uYXJ5TmFtZSBpbiB0aGlzLl9kaWN0aW9uYXJpZXMpKSB7XG4gICAgICBjb25zb2xlLmxvZygnQkU6IGRpY3Rpb25hcnkgbmFtZSBpcyBhYnNlbnQgaW4gc2Vjb25kYXJ5IGRpY3Rpb25hcmllcyBsaXN0LiBVc2VkIG1haW4gZGljdGlvbmFyeSBpbnN0ZWFkLicpO1xuICAgICAgZGljdGlvbmFyeU5hbWUgPSAnbWFpbic7XG4gICAgfVxuXG4gICAgbGV0IHdvcmRzID0gW107XG5cbiAgICByZWdFeHBBcnJheS5mb3JFYWNoKGVsZW1lbnQ9PntcbiAgICAgIGxldCB3ID0gdGhpcy5fZ2V0V29yZHNCeVJlZ0V4cChlbGVtZW50LCBkaWN0aW9uYXJ5TmFtZSk7XG5cbiAgICAgIGlmICh3Lmxlbmd0aCkgd29yZHMgPSB3b3Jkcy5jb25jYXQodyk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICB3b3Jkcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAvLyBBU0MgIC0+IGEubGVuZ3RoIC0gYi5sZW5ndGhcbiAgICAgIC8vIERFU0MgLT4gYi5sZW5ndGggLSBhLmxlbmd0aFxuICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gd29yZHM7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB3b3JkIGV4aXN0cyBhbmQgaWYgcG9pbnRzIGFkZGVkIGZvciB0aGlzIHdvcmRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHdvcmQgLSBpbmNvbWUgd29yZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGljdGlvbmFyeU5hbWUgLSBzZWNvbmRhcnUgZGljdGlvbmFyeSBuYW1lIHRvIGNoZWNrIHBvaW50c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fSA6IHsgZXhpc3RzOiBpZiB3b3JkIGV4aXN0cywgcG9pbnRzOiBob3cgbXVjaCBwb2ludHMgZm9yIGEgd29yZH1cbiAgICovXG4gIGdldFdvcmRTdGF0cyh3b3JkLCBkaWN0aW9uYXJ5TmFtZSkge1xuICAgIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgICBsZXQgcG9pbnRzID0gMDtcblxuICAgIGxldCBmaXJzdExldHRlcklEID0gdGhpcy5fZ2V0TGV0dGVySUQoWy4uLndvcmRdWzBdKTtcblxuICAgIGxldCB3b3Jkc0FycmF5ID0gdGhpcy5fZ2V0V29yZHNBcnJheUJ5TGV0dGVySUQoZmlyc3RMZXR0ZXJJRCk7XG5cbiAgICBpZiAod29yZHNBcnJheS5pbmRleE9mKHdvcmQpID49IDApIGV4aXN0cyA9IHRydWU7XG5cbiAgICBpZiAoZGljdGlvbmFyeU5hbWUpIHtcbiAgICAgIHdvcmRzQXJyYXkgPSB0aGlzLl9nZXRXb3Jkc0FycmF5QnlMZXR0ZXJJRChmaXJzdExldHRlcklELCBkaWN0aW9uYXJ5TmFtZSk7XG4gICAgICBpZiAod29yZHNBcnJheS5pbmRleE9mKHdvcmQpID49IDApIHBvaW50cyA9IHdvcmQubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiB7ZXhpc3RzOiBleGlzdHMsIHBvaW50czogcG9pbnRzfTtcblxuICB9XG4gIC8qKlxuICAgKiBQcml2YXRlIG1ldGhvZHNcbiAgICovXG4gIC8qKlxuICAgKiBhZGQgZGljdGlvbmFyeVxuICAgKiBPbmNlIGRpY2l0aW9uYXJ5IGlzIHByZWxvYWRlZCBsaWJyYXJ5IHdvbid0IGxvYWQgZGljdGlvbmFyeSBhZ2FpbiBidXQgdXNlIGV4aXN0aW5nIG9uZSBieSBuYW1lLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSB1bmlxdWUgbmFtZSBmb3IgdGhlIGRpY3Rpb25hcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBkaWN0aW9uYXJ5IHN0cmluZy5cbiAgICogKi9cbiAgX2FkZERpY3Rpb25hcnkobmFtZSwgc3RyaW5nKSB7XG4gICAgaWYgKG5hbWUgaW4gdGhpcy5fZGljdGlvbmFyaWVzKSByZXR1cm47XG4gICAgbGV0IGRpY3QgPSBuZXcgVHJpZShzdHJpbmcpO1xuXG4gICAgdGhpcy5fZGljdGlvbmFyaWVzW25hbWVdID0gbmV3IFBUcmllKGRpY3QucGFjaygpKTtcbiAgfVxuICAvKipcbiAgICogUHJvdmlkZXMgcG9zc2libGUgd29yZHMgaW4gc3BlY2lmaWMgZGljdGlvbmFyeSBieSByZWd1bGFyIGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZ0V4cCAtIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYWtlIHNlYXJjaCB3aXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaWN0aW9uYXJ5TmFtZSAtIG5hbWUgb2YgdGhlIGRpY3Rpb25hcnkgdG8gYmUgdXNlZCBmb3IgYSBzZWFyY2hcbiAgICogQHJldHVybiB7YXJyYXl9IC0gc2VhcmNoIHJlc3VsdCB3b3JkcyBhcnJheVxuICAgKi9cbiAgX2dldFdvcmRzQnlSZWdFeHAocmVnRXhwLCBkaWN0aW9uYXJ5TmFtZSkge1xuICAgIGxldCB3b3JkcyA9IFtdO1xuICAgIGxldCBzdGFydExldHRlcklEID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuYWxwaGFiZXQubGVuZ3RoIC0gMikpO1xuICAgIGxldCByYW5kb21MZXR0ZXJJRCA9IHN0YXJ0TGV0dGVySUQ7XG4gICAgbGV0IHJlZ3VsYXJFeHByZXNzaW9uID0gbmV3IFJlZ0V4cChyZWdFeHApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFscGhhYmV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcmFuZG9tV29yZHMgPSB0aGlzLl9nZXRXb3Jkc0FycmF5QnlMZXR0ZXJJRChyYW5kb21MZXR0ZXJJRCwgZGljdGlvbmFyeU5hbWUpO1xuXG4gICAgICByYW5kb21Xb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKSkgd29yZHMucHVzaChlbGVtZW50KTtcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICByYW5kb21MZXR0ZXJJRCA9IChyYW5kb21MZXR0ZXJJRCArIGkpIDwgKHRoaXMuYWxwaGFiZXQubGVuZ3RoIC0gMSkgPyByYW5kb21MZXR0ZXJJRCArIGkgOiAwO1xuICAgIH1cbiAgICByZXR1cm4gd29yZHM7XG4gIH1cbiAgLyoqXG4gICAqIHByb3ZpZGVzIHdvcmRzIGFycmF5IGJhc2VkIG9uIGxldHRlciBpZCBhbmQgZGljdGlvbmFyeSB0eXBlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZXR0ZXJJRCAtIExldHRlciBJRCBpbiB0aGUgYWxwaGFiZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpY3Rpb25hcnlOYW1lIC0gZGljdGlvbmFyeSBuYW1lXG4gICAqL1xuICBfZ2V0V29yZHNBcnJheUJ5TGV0dGVySUQobGV0dGVySUQsIGRpY3Rpb25hcnlOYW1lKSB7XG4gICAgbGV0IGN1cnJlbnRMZXR0ZXIgPSB0aGlzLmFscGhhYmV0W2xldHRlcklEXTtcbiAgICBsZXQgbmV4dExldHRlciA9IHRoaXMuYWxwaGFiZXRbbGV0dGVySUQgPCB0aGlzLmFscGhhYmV0Lmxlbmd0aCAtIDEgPyBsZXR0ZXJJRCArIDEgOiAwXTtcbiAgICBsZXQgd29yZHMgPSBbXTtcblxuICAgIGxldCBkaWN0aW9uYXJ5ID0gdGhpcy5fbWFpbkRpY3Rpb25hcnk7XG5cbiAgICBpZiAoZGljdGlvbmFyeU5hbWUgaW4gdGhpcy5fZGljdGlvbmFyaWVzKSBkaWN0aW9uYXJ5ID0gdGhpcy5fZGljdGlvbmFyaWVzW2RpY3Rpb25hcnlOYW1lXTtcblxuICAgIHdvcmRzID0gZGljdGlvbmFyeS53b3JkcyhjdXJyZW50TGV0dGVyLCBuZXh0TGV0dGVyKTtcblxuICAgIGRpY3Rpb25hcnkgPSBudWxsO1xuXG4gICAgcmV0dXJuIHdvcmRzO1xuICB9XG4gIC8qKlxuICAgKiBwcm92aWRlcyBsZXR0ZXIgaWQgaW4gdGhlIGFscGhhYmV0XG4gICAqIEBwYXJhbSB7Y2hhcn0gbGV0dGVyIC0gTGV0dGVyLlxuICAgKiAqL1xuICBfZ2V0TGV0dGVySUQobGV0dGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFscGhhYmV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5hbHBoYWJldFtpXS50b0xvd2VyQ2FzZSgpID09PSBsZXR0ZXIudG9Mb3dlckNhc2UoKSkgcmV0dXJuIGk7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGRSB7XG4gIC8qKiBkZWZhdWx0IGJvYXJkIHNpemUgKi9cbiAgZ2V0IGRlZmF1bHRCb2FyZFNpemUoKSB7IHJldHVybiAxMTt9XG4gIC8qKiBwcm92aWRlcyBjdXJyZW50IGxldmVsIGJvYXJkIHNpemUgKi9cbiAgZ2V0IGJvYXJkU2l6ZSgpIHsgcmV0dXJuIHRoaXMuX2JvYXJkU2l6ZTt9XG4gIC8qKiBwcm92aWRlcyBjdXJyZW50IGxldmVsIHVzZWRXb3JkcyAqL1xuICBnZXQgdXNlZFdvcmRzKCkgeyByZXR1cm4gdGhpcy5fdXNlZFdvcmRzO31cbiAgLyoqIHByb3ZpZGVzIGN1cnJlbnQgbGV2ZWwgYm9hcmQgKi9cbiAgZ2V0IGJvYXJkKCkgeyByZXR1cm4gdGhpcy5fYm9hcmQ7fVxuICAvKiogcHJvdmlkZXMgY3VycmVudCBsZXZlbCBwb2ludHMgKi9cbiAgZ2V0IHBvaW50cygpIHtyZXR1cm4gdGhpcy5fcG9pbnRzO31cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhbiBpbnN0YW5zZSBvZiB0aGUgV29yZHMgQUkgRkUgbGlicmFyeVxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZW5kQm9hcmQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBCb2FyZChMZXZlbCkgd2l0aCBpbnRpYWwgY2VudGVyIHdvcmQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBib2FyZFNpemUgLSBCb2FyZCBTaXplLlxuICAgKi9cbiAgc3RhcnRCb2FyZChib2FyZFNpemUpIHtcbiAgICB0aGlzLmVuZEJvYXJkKCk7XG5cbiAgICB0aGlzLl9ib2FyZFNpemUgPSBib2FyZFNpemU7XG4gICAgdGhpcy5fY2xlYW5Cb2FyZCgpO1xuICB9XG4gIC8qKlxuICAgKiBFbmQgQm9hcmQoTGV2ZWwpLlxuICAgKiAtIGNsZWFuIHRoZSBib2FyZDtcbiAgICogLSBjbGVhbiB1c2VkIHdvcmRzO1xuICAgKi9cbiAgZW5kQm9hcmQoKSB7XG4gICAgdGhpcy5fcG9pbnRzID0gMDtcbiAgICB0aGlzLl9ib2FyZFNpemUgPSAwO1xuICAgIHRoaXMuX3VzZWRXb3JkcyA9IFtdO1xuXG4gICAgdGhpcy5fY2xlYW5Cb2FyZCgpO1xuICB9XG4gIC8qKlxuICAgKiBnZXQgYWxsIHBvc3NpYmxlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgb24gdGhlIGJvYXJkXG4gICAqIEByZXR1cm4ge0FycmF5fSAtIGFycmF5IG9mIHBvc3NpYmxlIHJlZyBleHAgc3RyaW5nc1xuICAgKi9cbiAgZ2V0UG9zc2libGVXb3JkUmVnRXhwKCkge1xuICAgIGxldCBhcnJheSA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLl91c2VkV29yZHMubGVuZ3RoKSB7XG4gICAgICBhcnJheS5wdXNoKCdeKFthLXpdezMsJyArIE1hdGguY2VpbCh0aGlzLl9ib2FyZFNpemUgKiAwLjUpICsgJ30pJCcpO1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5fYm9hcmRTaXplOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5fYm9hcmRTaXplOyB4KyspIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLl9ib2FyZFt5XVt4XTtcblxuICAgICAgICBpZiAoIXRoaXMuX2lzQVN0cmluZyhlbGVtZW50KSkgY29udGludWU7XG5cbiAgICAgICAgbGV0IHJlZ0V4cCA9IHRoaXMuX2ZpbmRQb3NzaWJsZVJlZ0V4cCh4LCB5KTtcblxuICAgICAgICByZWdFeHAuZm9yRWFjaChlbGVtZW50PT57YXJyYXkucHVzaChlbGVtZW50KTt9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgLyoqXG4gICAqIGNoZWNrIGlmIHNlbGVjdGVkIGNlbGxzIGFyZSBwb3NzaWJsZSBmb3IgYSB3b3JkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFggLSBmaXJzdCBsZXR0ZXIgY29sdW1uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFkgLSBmaXJzdCBsZXR0ZXIgcm93XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgLSBpcyB3b3JkIHZlcnRpY2FsIG9yIGhvcml6b250YWxcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFtb3VudCAtIGFtb3VudCBvZiBzZWxlY3RlZCBjZWxsc1xuICAgKi9cbiAgY2hlY2tQb3NzaWJsZUNlbGxzKHN0YXJ0WCwgc3RhcnRZLCB2ZXJ0aWNhbCwgYW1vdW50KSB7XG4gICAgaWYgKHN0YXJ0WCA8IDAgfHwgc3RhcnRZIDwgMCB8fCAodmVydGljYWwgPyBzdGFydFkgOiBzdGFydFgpICsgYW1vdW50ID4gdGhpcy5fYm9hcmRTaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgYmxvY2tlcnNDb3VudGVyID0gMDtcbiAgICBsZXQgbGV0dGVyc0NvdW50ZXIgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xuICAgICAgbGV0IGNoZWNrWCA9IHZlcnRpY2FsID8gc3RhcnRYIDogc3RhcnRYICsgaTtcbiAgICAgIGxldCBjaGVja1kgPSB2ZXJ0aWNhbCA/IHN0YXJ0WSArIGkgOiBzdGFydFk7XG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuX2JvYXJkW2NoZWNrWV1bY2hlY2tYXTtcblxuICAgICAgaWYgKHRoaXMuX2lzQVN0cmluZyhlbGVtZW50KSkgbGV0dGVyc0NvdW50ZXIrKztcbiAgICAgIGVsc2UgaWYgKGVsZW1lbnQgPj0gMyB8fCB2ZXJ0aWNhbCAmJiBlbGVtZW50ID09PSAxIHx8ICF2ZXJ0aWNhbCAmJiBlbGVtZW50ID09PSAyKSBibG9ja2Vyc0NvdW50ZXIrKztcbiAgICB9XG5cbiAgICBpZiAodmVydGljYWwgJiYgc3RhcnRZICYmIHRoaXMuX2lzQVN0cmluZyh0aGlzLl9ib2FyZFtzdGFydFkgLSAxXVtzdGFydFhdKSkgYmxvY2tlcnNDb3VudGVyKys7XG4gICAgaWYgKCF2ZXJ0aWNhbCAmJiBzdGFydFggJiYgdGhpcy5faXNBU3RyaW5nKHRoaXMuX2JvYXJkW3N0YXJ0WV1bc3RhcnRYIC0gMV0pKSBibG9ja2Vyc0NvdW50ZXIrKztcblxuICAgIGlmIChsZXR0ZXJzQ291bnRlciA9PT0gYW1vdW50IHx8IGJsb2NrZXJzQ291bnRlciB8fCAhbGV0dGVyc0NvdW50ZXIgJiYgdGhpcy5fdXNlZFdvcmRzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKiBjaGVjayBpZiB3b3JkIGFscmVhZHkgd2FzIHVzZWQgb24gY3VycmVudCBib2FyZCAqL1xuICBpc1VzZWRXb3JkKHdvcmQpIHtcbiAgICBpZiAoIXdvcmQpIHJldHVybiBmYWxzZTtcbiAgICB3b3JkID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAhdGhpcy5fdXNlZFdvcmRzIHx8IHRoaXMuX3VzZWRXb3Jkcy5maW5kKGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiBlbGVtZW50ID09PSB3b3JkOyB9KTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBpbmNvbWUgd29yZCByYW5kb21seSB0byB0aGUgYm9hcmQgaWYgcG9zc2libGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHdvcmQgLSBpbmNvbWUgd29yZFxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIHdhcyB3b3JkIGFkZGVkIG9yIG5vdFxuICAgKi9cbiAgYWRkV29yZFJhbmRvbWx5KHdvcmQsIHBvaW50cyA9IDApIHtcbiAgICBpZiAoIXdvcmQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXRoaXMuX3VzZWRXb3Jkcy5sZW5ndGgpIHtcbiAgICAgIGxldCB4ID0gTWF0aC5mbG9vcigodGhpcy5fYm9hcmRTaXplIC0gd29yZC5sZW5ndGgpICogMC41KTtcbiAgICAgIGxldCB5ID0gTWF0aC5jZWlsKHRoaXMuX2JvYXJkU2l6ZSAqIDAuNSk7XG5cbiAgICAgIHRoaXMuYWRkV29yZCh4LCB5LCB3b3JkLCBmYWxzZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2JvYXJkU2l6ZTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX2JvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5fYm9hcmRbeV1beF07XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pc0FTdHJpbmcoZWxlbWVudCkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB3b3JkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGxldCBsZXR0ZXIgPSB3b3JkW2luZGV4XTtcblxuICAgICAgICAgIGlmIChsZXR0ZXIgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICBsZXQgdmVydGljYWwgPSAhIWk7XG4gICAgICAgICAgICAgIGxldCBzZWFyY2hYID0gdmVydGljYWwgPyB4IDogKHggLSBpbmRleCkgO1xuICAgICAgICAgICAgICBsZXQgc2VhcmNoWSA9IHZlcnRpY2FsID8gKHkgLSBpbmRleCkgOiB5O1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmFkZFdvcmQoc2VhcmNoWCwgc2VhcmNoWSwgd29yZCwgdmVydGljYWwsIHBvaW50cykpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG4gIC8qKlxuICAgKiBBZGQgV29yZCB0byB0aGUgYm9hcmQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFggLSBmaXJzdCBsZXR0ZXIgY29sdW1uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFkgLSBmaXJzdCBsZXR0ZXIgcm93XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB3b3JkIC0gd29yZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIC0gaXMgd29yZCB2ZXJ0aWNhbCBvciBob3Jpem9udGFsXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIHdhcyB3b3JkIGFkZGVkIG9yIG5vdC5cbiAgICovXG4gIGFkZFdvcmQoc3RhcnRYLCBzdGFydFksIHdvcmQsIHZlcnRpY2FsLCBwb2ludHMgPSAwKSB7XG4gICAgaWYgKCF3b3JkIHx8IHdvcmQubGVuZ3RoIDwgMykge1xuICAgICAgY29uc29sZS5sb2coJ3dvcmQgbGVuZ3RoIGlzIGxlc3MgdGhhbiAzIGxldHRlcnMhJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNoZWNrUG9zc2libGVDZWxscyhzdGFydFgsIHN0YXJ0WSwgdmVydGljYWwsIHdvcmQubGVuZ3RoKSkge1xuICAgICAgY29uc29sZS5sb2coJ3Bvc3NpYmxlIGNlbGxzIGNoZWNrIGZhaWxlZCEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1VzZWRXb3JkKHdvcmQpKSB7XG4gICAgICBjb25zb2xlLmxvZygnd29yZCBpcyBhbHJlYWR5IHVzZWQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2NoZWNrUG9zc2libGVMZXR0ZXJzKHN0YXJ0WCwgc3RhcnRZLCB3b3JkLCB2ZXJ0aWNhbCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwb3NzaWJsZSBsZXR0ZXJzIGNoZWNrIGZhaWxlZCEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCbG9ja2VycyBiYXNlZCBvbiBudW1iZXI6XG4gICAgICogMSAtIGZvciB2ZXJ0aWNhbFxuICAgICAqIDIgLSBmb3IgaG9yaXphbnRhbFxuICAgICAqIDMgLSBmb3IgYWxsXG4gICAgICogKi9cblxuICAgIFsuLi53b3JkXS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgdmFyIGVsZW1lbnRZID0gc3RhcnRZICsgKHZlcnRpY2FsID8gaW5kZXggOiAwKTtcbiAgICAgIHZhciBlbGVtZW50WCA9IHN0YXJ0WCArICh2ZXJ0aWNhbCA/IDAgOiBpbmRleCk7XG5cbiAgICAgIHRoaXMuX2JvYXJkW2VsZW1lbnRZXVtlbGVtZW50WF0gPSBlbGVtZW50LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGxldCB0YXJnZXRYID0gZWxlbWVudFggKyAodmVydGljYWwgPyBpID8gMSA6IC0xIDogMCk7XG4gICAgICAgIGxldCB0YXJnZXRZID0gZWxlbWVudFkgKyAodmVydGljYWwgPyAwIDogaSA/IDEgOiAtMSk7XG5cbiAgICAgICAgaWYgKHRhcmdldFggPCAwIHx8IHRhcmdldFggPj0gdGhpcy5fYm9hcmRTaXplIHx8IHRhcmdldFkgPCAwIHx8IHRhcmdldFkgPj0gdGhpcy5fYm9hcmRTaXplKSBjb250aW51ZTtcbiAgICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSB0aGlzLl9ib2FyZFt0YXJnZXRZXVt0YXJnZXRYXTtcblxuICAgICAgICBpZiAodmVydGljYWwgJiYgIXRoaXMuX2lzQVZlcnRpY2FsQmxvY2tlcih0YXJnZXRFbGVtZW50KSkgdGhpcy5fYm9hcmRbdGFyZ2V0WV1bdGFyZ2V0WF0gKz0gMTtcbiAgICAgICAgaWYgKCF2ZXJ0aWNhbCAmJiAhdGhpcy5faXNBSG9yaXpvbnRhbEJsb2NrZXIodGFyZ2V0RWxlbWVudCkpIHRoaXMuX2JvYXJkW3RhcmdldFldW3RhcmdldFhdICs9IDI7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIGlmIChzdGFydFkpIHRoaXMuX2JvYXJkW3N0YXJ0WSAtIDFdW3N0YXJ0WF0gPSAzO1xuICAgICAgaWYgKHN0YXJ0WSArIHdvcmQubGVuZ3RoIDwgdGhpcy5fYm9hcmRTaXplKSB0aGlzLl9ib2FyZFtzdGFydFkgKyB3b3JkLmxlbmd0aF1bc3RhcnRYXSA9IDM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdGFydFgpIHRoaXMuX2JvYXJkW3N0YXJ0WV1bc3RhcnRYIC0gMV0gPSAzO1xuICAgICAgaWYgKHN0YXJ0WCArIHdvcmQubGVuZ3RoIDwgdGhpcy5fYm9hcmRTaXplKSB0aGlzLl9ib2FyZFtzdGFydFldW3N0YXJ0WCArIHdvcmQubGVuZ3RoXSA9IDM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3VzZWRXb3JkcyAmJiB0aGlzLl91c2VkV29yZHMubGVuZ3RoID4gMSkgdGhpcy5fcG9pbnRzICs9IHBvaW50cztcblxuICAgIHRoaXMuX3VzZWRXb3Jkcy5wdXNoKHdvcmQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZ2V0SGludEZyb21Xb3Jkc0FycmF5KHdvcmRzKSB7XG4gICAgaWYgKCF3b3JkcyB8fCAhd29yZHMubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICBsZXQgd29yZCA9IG51bGw7XG5cbiAgICBpZiAoIXRoaXMuX3VzZWRXb3Jkcy5sZW5ndGgpIHdvcmQgPSB3b3Jkc1swXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl91c2VkV29yZHMuaW5kZXhPZih3b3Jkc1tpXSkgPCAwICYmIHdvcmRzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgd29yZCA9IHdvcmRzW2ldO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gd29yZDtcbiAgfVxuICAvKipcbiAgICogUHJpdmF0ZSBtZXRob2RzXG4gICAqL1xuICAvKiogY2hlY2sgaWYgZWxlbWVudCBpcyBhIHN0cmluZyAqL1xuICBfaXNBU3RyaW5nKGVsZW1lbnQpIHsgcmV0dXJuIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJzsgfVxuICAvKiogY2hlY2sgaWYgZWxlbWVudCBpcyBhIG51bWJlciAqL1xuICBfaXNBTnVtYmVyKGVsZW1lbnQpIHsgcmV0dXJuICF0aGlzLl9pc0FTdHJpbmcoZWxlbWVudCk7IH1cbiAgLyoqIGNoZWNrIGlmIGEgY2VsbCBpcyBhIHZlcnRpY2FsIGJsb2NrZXIgKi9cbiAgX2lzQVZlcnRpY2FsQmxvY2tlcihlbGVtZW50KSB7cmV0dXJuIHRoaXMuX2lzQVN0cmluZyhlbGVtZW50KSB8fCBlbGVtZW50ID09PSAxIHx8IGVsZW1lbnQgPj0gMzt9XG4gIC8qKiBjaGVjayBpZiBhIGNlbGwgaXMgYSBob3Jpem9udGFsIGJsb2NrZXIgKi9cbiAgX2lzQUhvcml6b250YWxCbG9ja2VyKGVsZW1lbnQpIHtyZXR1cm4gdGhpcy5faXNBU3RyaW5nKGVsZW1lbnQpIHx8IGVsZW1lbnQgPT09IDIgfHwgZWxlbWVudCA+PSAzO31cbiAgLyoqXG4gICAqIGNoZWNrIGlmIHdvcmQgbGV0dGVycyBpbnRlcnNlY3RzIGV4aXN0aW5nIGxldHRlcnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WCAtIGZpcnN0IGxldHRlciBjb2x1bW5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WSAtIGZpcnN0IGxldHRlciByb3dcbiAgICogQHBhcmFtIHtzdHJpbmd9IHdvcmQgIC0gd29yZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIC0gaXMgd29yZCB2ZXJ0aWNhbCBvciBob3Jpem9udGFsXG4gICAqL1xuICBfY2hlY2tQb3NzaWJsZUxldHRlcnMoc3RhcnRYLCBzdGFydFksIHdvcmQsIHZlcnRpY2FsID0gZmFsc2UpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGVja1ggPSB2ZXJ0aWNhbCA/IHN0YXJ0WCA6IHN0YXJ0WCArIGk7XG4gICAgICBsZXQgY2hlY2tZID0gdmVydGljYWwgPyBzdGFydFkgKyBpIDogc3RhcnRZO1xuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLl9ib2FyZFtjaGVja1ldW2NoZWNrWF07XG5cbiAgICAgIGlmICh0aGlzLl9pc0FTdHJpbmcoZWxlbWVudCkgJiYgZWxlbWVudCAhPT0gWy4uLndvcmRdW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqIGNsZWFuIGJvYXJkICovXG4gIF9jbGVhbkJvYXJkKCkge1xuICAgIHRoaXMuX2JvYXJkID0gW107XG5cbiAgICBpZiAoIXRoaXMuX2JvYXJkU2l6ZSkgcmV0dXJuO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9ib2FyZFNpemU7IHkrKykge1xuICAgICAgbGV0IF9hcnJheSA9IFtdO1xuXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX2JvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICAgIF9hcnJheS5wdXNoKDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9ib2FyZC5wdXNoKF9hcnJheSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZWFyY2ggZm9yIHBvc3NpYmxlIHJlZ3VsYXIgZXByZXNzaW9ucyBmb3IgaW5jb21lIGNlbGxcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBzZWFyY2ggbGV0dGVyIGNvbHVtblxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIHNlYXJjaCBsZXR0ZXIgcm93XG4gICAqIEByZXR1cm4ge2FycmF5fSBvZiBwb3NzaWJsZSByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAqL1xuICBfZmluZFBvc3NpYmxlUmVnRXhwKHgsIHkpIHtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBsZXQgdmVydGljYWwgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB2ZXJ0aWNhbCA9ICEhaTtcbiAgICAgIGxldCByZWdFeHAgPSB0aGlzLl9nZW5lcmF0ZVJlZ0V4cCh4LCB5LCB2ZXJ0aWNhbCk7XG5cbiAgICAgIGlmIChyZWdFeHAgJiYgYXJyYXkuaW5kZXhPZihyZWdFeHApIDwgMCkgYXJyYXkucHVzaChyZWdFeHApO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgLyoqXG4gICAqIGdlbmVyYXRlIHBvc3NpYmxlIHJlZyBleHByZXNzaW9uIGZvciBpbmNvbWUgY2VsbFxuICAgKiBAcGFyYW0ge251bWJlcn0geCAtIGluY29tZSBjZWxsIGNvbHVtblxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIGluY29tZSBjZWxsIHJvd1xuICAgKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWwgLSBpcyB2ZXJ0aWNhbCBvciBob3Jpem9udGFsXG4gICAqIEByZXR1cm4ge3N0cmluZyB8fCBudWxsfSAtIHN0cmluZyByZWd1bGFyIGV4cHJlc3Npb24gb3IgbnVsbFxuICAgKi9cbiAgX2dlbmVyYXRlUmVnRXhwKHgsIHksIHZlcnRpY2FsKSB7XG4gICAgbGV0IHJlZ0V4cCA9ICcnO1xuICAgIGxldCBpRGlmZiA9IE1hdGgubWF4KHRoaXMuX2JvYXJkU2l6ZSAtICh2ZXJ0aWNhbCA/IHkgOiB4KSwgdmVydGljYWwgPyB5IDogeCk7XG4gICAgbGV0IHdvcmRBcnJheSA9IG5ldyBBcnJheSh0aGlzLl9ib2FyZFNpemUpO1xuXG4gICAgd29yZEFycmF5W3ZlcnRpY2FsID8geSA6IHhdID0gdGhpcy5fYm9hcmRbeV1beF07XG4gICAgbGV0IGlzVG9wQmxvY2tlZCA9IGZhbHNlO1xuICAgIGxldCBpc0JvdHRvbUJsb2NrZWQgPSBmYWxzZTtcbiAgICBsZXQgbGV0dGVyc0NvdW50ZXIgPSAwO1xuXG4gICAgbGV0IGNoZWNrSWZCbG9ja2VyID0gKGVsZW1lbnQpID0+e1xuICAgICAgbGV0IGlzVmVydGljYWxCbG9ja2VyID0gdmVydGljYWwgJiYgdGhpcy5faXNBVmVydGljYWxCbG9ja2VyKGVsZW1lbnQpO1xuICAgICAgbGV0IGlzSG9yaXpvbnRhbEJsb2NrZXIgPSAhdmVydGljYWwgJiYgdGhpcy5faXNBSG9yaXpvbnRhbEJsb2NrZXIoZWxlbWVudCk7XG5cbiAgICAgIHJldHVybiAoaXNWZXJ0aWNhbEJsb2NrZXIgfHwgaXNIb3Jpem9udGFsQmxvY2tlcik7XG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGlEaWZmOyBpKyspIHtcbiAgICAgIGxldCBsZXR0ZXJJRCA9IG51bGw7XG4gICAgICBsZXQgcHJldkxldHRlcklEID0gbnVsbDtcbiAgICAgIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICAgICAgLy8gY2hlY2sgbW92ZW1lbnQgdG9wL2xlZnRcbiAgICAgIGlmICgodmVydGljYWwgPyB5IDogeCkgLSBpID49IDAgJiYgIWlzVG9wQmxvY2tlZCkge1xuICAgICAgICBlbGVtZW50ID0gdGhpcy5fYm9hcmRbdmVydGljYWwgPyAoeSAtIGkpIDogeV1bdmVydGljYWwgPyB4IDogKHggLSBpKV07XG4gICAgICAgIGxldHRlcklEID0gdmVydGljYWwgPyAoeSAtIGkpIDogKHggLSBpKTtcbiAgICAgICAgcHJldkxldHRlcklEID0gdmVydGljYWwgPyAoeSAtIGkgKyAxKSA6ICh4IC0gaSArIDEpO1xuXG4gICAgICAgIGlmIChjaGVja0lmQmxvY2tlcihlbGVtZW50KSkge1xuICAgICAgICAgIGlmICh0aGlzLl9pc0FTdHJpbmcoZWxlbWVudCkgJiYgIWxldHRlcnNDb3VudGVyKSB7XG4gICAgICAgICAgICB3b3JkQXJyYXlbbGV0dGVySURdID0gZWxlbWVudDtcbiAgICAgICAgICAgIGxldHRlcnNDb3VudGVyKys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzVG9wQmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNBU3RyaW5nKGVsZW1lbnQpKSB3b3JkQXJyYXlbcHJldkxldHRlcklEXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdvcmRBcnJheVtsZXR0ZXJJRF0gPSAnW2Etel0nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIG1vdmVtZW50IGJvdHRvbS9yaWdodFxuICAgICAgaWYgKCh2ZXJ0aWNhbCA/IHkgOiB4KSArIGkgPCB0aGlzLl9ib2FyZFNpemUgJiYgIWlzQm90dG9tQmxvY2tlZCkge1xuICAgICAgICBlbGVtZW50ID0gdGhpcy5fYm9hcmRbdmVydGljYWwgPyAoeSArIGkpIDogeV1bdmVydGljYWwgPyB4IDogKHggKyBpKV07XG4gICAgICAgIGxldHRlcklEID0gdmVydGljYWwgPyAoeSArIGkpIDogKHggKyBpKTtcbiAgICAgICAgcHJldkxldHRlcklEID0gdmVydGljYWwgPyAoeSArIGkgLSAxKSA6ICh4ICsgaSAtIDEpO1xuXG4gICAgICAgIGlmIChjaGVja0lmQmxvY2tlcihlbGVtZW50KSkge1xuICAgICAgICAgIGlmICh0aGlzLl9pc0FTdHJpbmcoZWxlbWVudCkgJiYgIWxldHRlcnNDb3VudGVyKSB7XG4gICAgICAgICAgICB3b3JkQXJyYXlbbGV0dGVySURdID0gZWxlbWVudDtcbiAgICAgICAgICAgIGxldHRlcnNDb3VudGVyKys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzQm90dG9tQmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNBU3RyaW5nKGVsZW1lbnQpKSB3b3JkQXJyYXlbcHJldkxldHRlcklEXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdvcmRBcnJheVtsZXR0ZXJJRF0gPSAnW2Etel0nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2VlbmVyYXRlIHJlZ3VsYXIgZXhwcmVzc2lvblxuICAgIHJlZ0V4cCArPSAnXignO1xuICAgIGxldCBhbnlDb3VudGVyID0gMDtcbiAgICBsZXQgdG90YWxGcmVlQ291bnRlciA9IDA7XG5cbiAgICBsZXR0ZXJzQ291bnRlciA9IDA7XG4gICAgd29yZEFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50ID09PSAnW2Etel0nKSBhbnlDb3VudGVyKys7XG4gICAgICBlbHNlIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGxldHRlcnNDb3VudGVyKys7XG5cbiAgICAgICAgaWYgKGxldHRlcnNDb3VudGVyID09PSAxKSByZWdFeHAgKz0gJ1thLXpdezAsJyArIGFueUNvdW50ZXIgKyAnfScgKyBlbGVtZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGVsc2UgaWYgKGxldHRlcnNDb3VudGVyID09PSAyKSByZWdFeHAgKz0gJ1thLXpdeycgKyBhbnlDb3VudGVyICsgJ30nICsgZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHRvdGFsRnJlZUNvdW50ZXIgKz0gYW55Q291bnRlcjtcbiAgICAgICAgYW55Q291bnRlciA9IDA7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICB0b3RhbEZyZWVDb3VudGVyICs9IGFueUNvdW50ZXI7XG4gICAgaWYgKGFueUNvdW50ZXIpIHJlZ0V4cCArPSAnW2Etel17MCwnICsgYW55Q291bnRlciArICd9JztcblxuICAgIHJlZ0V4cCArPSAnKSQnO1xuXG4gICAgaWYgKCF0b3RhbEZyZWVDb3VudGVyKSByZWdFeHAgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJlZ0V4cDtcblxuICB9XG59XG4iLCJpbXBvcnQgQkUgZnJvbSAnLi9CRSc7XG5pbXBvcnQgRkUgZnJvbSAnLi9GRSc7XG5leHBvcnQgZGVmYXVsdCB7IEJFLCBGRX07XG4iXSwic291cmNlUm9vdCI6IiJ9