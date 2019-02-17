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
      }, this);

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
      }, this);
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
        }, this);
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
exports.default = void 0;

var _ai = _interopRequireDefault(__webpack_require__(/*! ./ai */ "./src/ai.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _ai.default;
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jkc2FpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly93b3Jkc2FpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmRzYWkvLi9ub2RlX21vZHVsZXMvZGF3Zy1sb29rdXAvbGliL2FscGhhY29kZS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLy4vbm9kZV9tb2R1bGVzL2Rhd2ctbG9va3VwL2xpYi9oaXN0b2dyYW0uanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS8uL25vZGVfbW9kdWxlcy9kYXdnLWxvb2t1cC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS8uL25vZGVfbW9kdWxlcy9kYXdnLWxvb2t1cC9saWIvbm9kZS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLy4vbm9kZV9tb2R1bGVzL2Rhd2ctbG9va3VwL2xpYi9wdHJpZS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLy4vbm9kZV9tb2R1bGVzL2Rhd2ctbG9va3VwL2xpYi90cmllLmpzIiwid2VicGFjazovL3dvcmRzYWkvLi9ub2RlX21vZHVsZXMvZGF3Zy1sb29rdXAvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS8uL3NyYy9haS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFJIiwiX2EiLCJpIiwiY2hhckNvZGVBdCIsImoiLCJwdXNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiX2JvYXJkU2l6ZSIsIl91c2VkV29yZHMiLCJfYm9hcmQiLCJfZGljdGlvbmFyaWVzIiwiZW5kQm9hcmQiLCJuYW1lIiwic3RyaW5nIiwiX2FkZERpY3Rpb25hcnkiLCJfbWFpbkRpY3Rpb25hcnkiLCJfc2Vjb25kYXJ5RGljdGlvbmFyeSIsImJvYXJkU2l6ZSIsIl9kZWZhdWx0Qm9hcmRTaXplIiwiX2NsZWFuQm9hcmQiLCJfc2V0SW5pdGlhbFJhbmRvbVdvcmQiLCJ3b3JkIiwiZmluZCIsImVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsImZpcnN0TGV0dGVySUQiLCJfZ2V0TGV0dGVySUQiLCJ3b3Jkc0FycmF5IiwiX2dldFdvcmRzQXJyYXlCeUxldHRlcklEIiwic3RhcnRYIiwic3RhcnRZIiwidmVydGljYWwiLCJhbW91bnQiLCJibG9ja2Vyc0NvdW50ZXIiLCJsZXR0ZXJzQ291bnRlciIsImNoZWNrWCIsImNoZWNrWSIsIl9pc0FTdHJpbmciLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tQb3NzaWJsZUNlbGxzIiwiX2NoZWNrUG9zc2libGVMZXR0ZXJzIiwiaXNVc2VkV29yZCIsImRvZXNXb3JkRXhpc3QiLCJmb3JFYWNoIiwiaW5kZXgiLCJlbGVtZW50WSIsImVsZW1lbnRYIiwidGFyZ2V0WCIsInRhcmdldFkiLCJ0YXJnZXRFbGVtZW50IiwiX2lzQVZlcnRpY2FsQmxvY2tlciIsIl9pc0FIb3Jpem9udGFsQmxvY2tlciIsInJldHVybkVsZW1lbnQiLCJ4IiwieSIsImN1cnJlbnRFbGVtZW50IiwiX2ZpbmRQb3NzaWJsZVdvcmQiLCJfaXNBTnVtYmVyIiwiZGljdCIsInBhY2siLCJfYXJyYXkiLCJyYW5kb21MZXR0ZXJJRCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFscGhhYmV0IiwicmFuZG9tV29yZHMiLCJyYW5kb21Xb3JkIiwiYWRkV29yZCIsImxldHRlciIsImxldHRlcklEIiwiZGljdGlvbmFyeVR5cGUiLCJjdXJyZW50TGV0dGVyIiwibmV4dExldHRlciIsIndvcmRzIiwiZGljdGlvbmFyeSIsInJlZ0V4cE9iamVjdCIsInJldHVybldvcmQiLCJyZXR1cm5YIiwicmV0dXJuWSIsIl9nZW5lcmF0ZVJlZ0V4cCIsIl9maW5kV29yZEJ5UmVnRXhwIiwicmVnRXhwIiwibCIsImJlZm9yZSIsInRvU3RyaW5nIiwiYmV0d2VlbiIsImlEaWZmIiwibWF4Iiwid29yZEFycmF5IiwiQXJyYXkiLCJpc1RvcEJsb2NrZWQiLCJpc0JvdHRvbUJsb2NrZWQiLCJfZWxlbWVudCIsImJlZm9yZUxldHRlckNvdW50ZXIiLCJhbnlDb3VudGVyIiwidG90YWxGcmVlQ291bnRlciIsImJldHdlZW5MZXR0ZXJzQ291bnRlciIsInRvdGFsRnJlZSIsInN0YXJ0TGV0dGVySUQiLCJyZWd1bGFyRXhwcmVzc2lvbiIsIlJlZ0V4cCIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsWUFBWSwrQ0FBK0M7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsbUJBQW1CLCtDQUErQztBQUNoSCx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7O0FDcENhO0FBQ2I7QUFDQSxhQUFhLG1CQUFPLENBQUMsc0RBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EscUM7Ozs7Ozs7Ozs7OztBQy9CYTtBQUNiO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLHNEQUFRO0FBQzdCO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHdEQUFTO0FBQy9CO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RCxJQUFTRSxPQUFPLENBQUNlLE1BQVIsR0FBaUJqQixJQUFJLENBQUNpQixNQUQ3RCxDQUFKLEVBQzBFO0FBQ3hFakIsZ0JBQUksR0FBR0UsT0FBUDtBQUNEO0FBQ0YsU0FMRCxFQUtHLElBTEg7QUFPQSxZQUFJRixJQUFKLEVBQVU7QUFFVjBDLHNCQUFjLEdBQUdBLGNBQWMsR0FBRyxLQUFLSSxRQUFMLENBQWM3QixNQUFkLEdBQXVCLENBQXhDLEdBQTRDeUIsY0FBYyxHQUFHLENBQTdELEdBQWlFLENBQWxGO0FBQ0EsWUFBSUEsY0FBYyxLQUFLc0MsYUFBdkIsRUFBc0M7QUFDdkM7O0FBRUQsYUFBT2hGLElBQVA7QUFDRDs7O3dCQWpSdUI7QUFBRSxhQUFPLEVBQVA7QUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUXZDIiwiZmlsZSI6IndvcmRzYWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndvcmRzYWlcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid29yZHNhaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3b3Jkc2FpXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5CQVNFID0gMzY7XG4vLyBQbGFjZWhvbGRlclxudmFyIFBUcmllID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQVHJpZSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIFBUcmllO1xufSgpKTtcbmV4cG9ydHMuUFRyaWUgPSBQVHJpZTtcbi8vIDAsIDEsIDIsIC4uLiwgQSwgQiwgQywgLi4uLCAwMCwgMDEsIC4uLiBBQSwgQUIsIEFDLCAuLi4sIEFBQSwgQUFCLCAuLi5cbmZ1bmN0aW9uIHRvQWxwaGFDb2RlKG4pIHtcbiAgICB2YXIgcyA9ICcnO1xuICAgIHZhciBwbGFjZXMgPSAxO1xuICAgIGZvciAodmFyIHJhbmdlID0gZXhwb3J0cy5CQVNFOyBuID49IHJhbmdlOyBuIC09IHJhbmdlLCBwbGFjZXMrKywgcmFuZ2UgKj0gZXhwb3J0cy5CQVNFKSB7IH1cbiAgICB3aGlsZSAocGxhY2VzLS0pIHtcbiAgICAgICAgdmFyIGQgPSBuICUgZXhwb3J0cy5CQVNFO1xuICAgICAgICBzID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoZCA8IDEwID8gNDggOiA1NSkgKyBkKSArIHM7XG4gICAgICAgIG4gPSAobiAtIGQpIC8gZXhwb3J0cy5CQVNFO1xuICAgIH1cbiAgICByZXR1cm4gcztcbn1cbmV4cG9ydHMudG9BbHBoYUNvZGUgPSB0b0FscGhhQ29kZTtcbmZ1bmN0aW9uIGZyb21BbHBoYUNvZGUocykge1xuICAgIHZhciBuID0gMDtcbiAgICBmb3IgKHZhciBwbGFjZXMgPSAxLCByYW5nZSA9IGV4cG9ydHMuQkFTRTsgcGxhY2VzIDwgcy5sZW5ndGg7IG4gKz0gcmFuZ2UsIHBsYWNlcysrLCByYW5nZSAqPSBleHBvcnRzLkJBU0UpIHsgfVxuICAgIGZvciAodmFyIGkgPSBzLmxlbmd0aCAtIDEsIHBvdyA9IDE7IGkgPj0gMDsgaS0tLCBwb3cgKj0gZXhwb3J0cy5CQVNFKSB7XG4gICAgICAgIHZhciBkID0gcy5jaGFyQ29kZUF0KGkpIC0gNDg7XG4gICAgICAgIGlmIChkID4gMTApIHtcbiAgICAgICAgICAgIGQgLT0gNztcbiAgICAgICAgfVxuICAgICAgICBuICs9IGQgKiBwb3c7XG4gICAgfVxuICAgIHJldHVybiBuO1xufVxuZXhwb3J0cy5mcm9tQWxwaGFDb2RlID0gZnJvbUFscGhhQ29kZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFscGhhY29kZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBIaXN0b2dyYW0gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhpc3RvZ3JhbSgpIHtcbiAgICAgICAgdGhpcy5jb3VudHMgPSB7fTtcbiAgICB9XG4gICAgSGlzdG9ncmFtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGtleSwgbikge1xuICAgICAgICBpZiAobiA9PT0gdm9pZCAwKSB7IG4gPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAga2V5ID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY291bnRzW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jb3VudHNba2V5XSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudHNba2V5XSArPSBuO1xuICAgIH07XG4gICAgSGlzdG9ncmFtLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoa2V5LCBuKSB7XG4gICAgICAgIGlmIChuID09PSB2b2lkIDApIHsgbiA9IDE7IH1cbiAgICAgICAgdGhpcy5pbml0KGtleSwgbik7XG4gICAgfTtcbiAgICBIaXN0b2dyYW0ucHJvdG90eXBlLmNvdW50T2YgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuaW5pdChrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudHNba2V5XTtcbiAgICB9O1xuICAgIEhpc3RvZ3JhbS5wcm90b3R5cGUuaGlnaGVzdCA9IGZ1bmN0aW9uICh0b3ApIHtcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5zb3J0QnlWYWx1ZXModGhpcy5jb3VudHMsICdkZXNjJykuc2xpY2UoMCwgdG9wKTtcbiAgICB9O1xuICAgIHJldHVybiBIaXN0b2dyYW07XG59KCkpO1xuZXhwb3J0cy5IaXN0b2dyYW0gPSBIaXN0b2dyYW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oaXN0b2dyYW0uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHRyaWVfMSA9IHJlcXVpcmUoXCIuL3RyaWVcIik7XG5leHBvcnRzLlRyaWUgPSB0cmllXzEuVHJpZTtcbnZhciBwdHJpZV8xID0gcmVxdWlyZShcIi4vcHRyaWVcIik7XG5leHBvcnRzLlBUcmllID0gcHRyaWVfMS5QVHJpZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIE5vZGVcblxuICBFYWNoIG5vZGUgY29udGFpbnMgc29tZSBzcGVjaWFsIHByb3BlcnRpZXMgKGJlZ2luaW5nIHdpdGggJ18nKSwgYXMgd2VsbCBhc1xuICBhcmJpdHJhcnkgc3RyaW5nIHByb3BlcnRpZXMgZm9yIHN0cmluZyBmcmFnbWVudHMgY29udGFpbmVkIGluIHRoZSBpbnB1dCB3b3JkXG4gIGRpY3Rpb25hcnkuXG5cbiAgU3RyaW5nIHByb3BlcnRpZXMgY2FuIGJlIFwidGVybWluYWxcIiAoaGF2ZSBhIG51bWVyaWMgdmFsdWUgb2YgMSksIG9yIGNhblxuICByZWZlcmFuY2UgYW5vdGhlciBjaGlsZCBOb2RlLlxuXG4gIE5vdGUgdGhhdCBhIE5vZGUgY29udGFpbmluZyBhIHRlcm1pbmFsICcnIChlbXB0eSBzdHJpbmcpIHByb3BlcnR5LCBpcyBpdHNlbGZcbiAgbWFya2VkIGFzIGEgdGVybWluYWwgTm9kZSAodGhlIHByZWZpeCBsZWFkaW5nIHRvIHRoaXMgbm9kZSBpcyBhIHdvcmQgaW4gdGhlXG4gIGRpY3Rpb25hcnkuXG4qL1xudmFyIE5vZGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vZGUoKSB7XG4gICAgICAgIC8vIE51bWJlciBvZiBjaGlsZCBwcm9wZXJ0aWVzLlxuICAgICAgICB0aGlzLl9wID0gMDtcbiAgICB9XG4gICAgTm9kZS5wcm90b3R5cGUuY2hpbGQgPSBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gdGhpc1twcm9wXTtcbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLnNldENoaWxkID0gZnVuY3Rpb24gKHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHByb3AgIT09IHRoaXMuX2cpIHtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBzZWxmLl9nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmW3Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3AgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gdGhpcy5fZyA9IHByb3A7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZltwcm9wXSA9IHZhbHVlO1xuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuZGVsZXRlQ2hpbGQgPSBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChwcm9wID09PSB0aGlzLl9nKSB7XG4gICAgICAgICAgICAvLyBkZWxldGUgdGhpcy5fZztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wIC09IDE7XG4gICAgICAgIGRlbGV0ZSBzZWxmW3Byb3BdO1xuICAgICAgICBpZiAodGhpcy5fcCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gdGhpcy5fZyA9IHRoaXMucHJvcHMoKVswXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gQSBwcm9wZXJ0eSBpcyBhIHRlcm1pbmFsIHN0cmluZ1xuICAgIE5vZGUucHJvdG90eXBlLmlzVGVybWluYWxTdHJpbmcgPSBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuY2hpbGQocHJvcCkgPT09ICdudW1iZXInO1xuICAgIH07XG4gICAgLy8gVGhpcyBub2RlIGlzIGEgdGVybWluYWwgbm9kZSAodGhlIHByZWZpeCBzdHJpbmcgaXMgYSB3b3JkIGluIHRoZVxuICAgIC8vIGRpY3Rpb25hcnkpLlxuICAgIE5vZGUucHJvdG90eXBlLmlzVGVybWluYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVGVybWluYWxTdHJpbmcoJycpO1xuICAgIH07XG4gICAgLy8gV2VsbCBvcmRlcmVkIGxpc3Qgb2YgcHJvcGVydGllcyBpbiBhIG5vZGUgKHN0cmluZyBvciBvYmplY3QgcHJvcGVydGllcylcbiAgICAvLyBVc2Ugbm9kZXNPbmx5ID09PSB0cnVlIHRvIHJldHVybiBvbmx5IHByb3BlcnRpZXMgb2YgY2hpbGQgbm9kZXMgKG5vdFxuICAgIC8vIHRlcm1pbmFsIHN0cmluZ3MpLlxuICAgIE5vZGUucHJvdG90eXBlLnByb3BzID0gZnVuY3Rpb24gKG5vZGVzT25seSkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvcHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBtZSkge1xuICAgICAgICAgICAgaWYgKCFtZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3AgIT09ICcnICYmIHByb3BbMF0gIT09ICdfJykge1xuICAgICAgICAgICAgICAgIGlmICghbm9kZXNPbmx5IHx8IE5vZGUuaXNOb2RlKHRoaXMuY2hpbGQocHJvcCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByb3BzLnNvcnQoKTtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG4gICAgLy8gQ29tcHV0ZSBpbi1kZWdyZWUgb2YgYWxsIG5vZGVzIGFuZCBtYXJrIHRoZVxuICAgIC8vIHNpbmdsZXRvbiBub2Rlcy5cbiAgICBOb2RlLmNvdW50RGVncmVlID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgdmFyIHdhbGtlciA9IG5ldyBXYWxrZXIocm9vdCk7XG4gICAgICAgIHdhbGtlci5kZnMoZnVuY3Rpb24gKG9yZGVyLCBub2RlKSB7XG4gICAgICAgICAgICBpZiAob3JkZXIgPT09ICdwb3N0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlLl9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBub2RlLl9kID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuX2QrKztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBOb2RlIGhhcyBqdXN0IGEgc2luZ2xlIChub24tc3BlY2lhbCkgcHJvcGVydHkuXG4gICAgTm9kZS5wcm90b3R5cGUuaXNTaW5nbGV0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wID09PSAxICYmICF0aGlzLmlzVGVybWluYWwoKTtcbiAgICB9O1xuICAgIC8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgYXMgYSBUeXBlIEd1YXJkIChUeXBlU2NyaXB0KVxuICAgIE5vZGUuaXNOb2RlID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIG4gaW5zdGFuY2VvZiBOb2RlO1xuICAgIH07XG4gICAgcmV0dXJuIE5vZGU7XG59KCkpO1xuZXhwb3J0cy5Ob2RlID0gTm9kZTtcbnZhciBXYWxrZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdhbGtlcihyb290KSB7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICAgIHRoaXMudmlzaXRNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIFdhbGtlci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudmlzaXRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgV2Fsa2VyLnByb3RvdHlwZS52aXNpdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHRoaXMudmlzaXRNYXAuc2V0KG5vZGUsIHRydWUpO1xuICAgIH07XG4gICAgV2Fsa2VyLnByb3RvdHlwZS52aXNpdGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRNYXAuZ2V0KG5vZGUpIHx8IGZhbHNlO1xuICAgIH07XG4gICAgV2Fsa2VyLnByb3RvdHlwZS5kZnMgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX2Rmcyh0aGlzLnJvb3QsIG51bGwsICcnLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIC8vIERlcHRoLWZpcnN0IHNlYXJjaCB2aWEgY2FsbGJhY2sgaGFuZGxlci5cbiAgICBXYWxrZXIucHJvdG90eXBlLl9kZnMgPSBmdW5jdGlvbiAobm9kZSwgcGFyZW50LCBwcm9wUGFyZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIC8vIFRoZSBoYW5kbGVyIGNhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMgZnJvbSBkaWZmZXJlbnQgcGFyZW50c1xuICAgICAgICAvLyBzaW5jZSBOb2RlcyBjYW4gZm9ybSBhIG11bHRpLWdyYXBoLlxuICAgICAgICBoYW5kbGVyKCdwcmUnLCBub2RlLCBwYXJlbnQsIHByb3BQYXJlbnQpO1xuICAgICAgICBpZiAodGhpcy52aXNpdGVkKG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aXNpdChub2RlKTtcbiAgICAgICAgdmFyIHByb3BzID0gbm9kZS5wcm9wcyh0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBwcm9wc18xID0gcHJvcHM7IF9pIDwgcHJvcHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNfMVtfaV07XG4gICAgICAgICAgICB0aGlzLl9kZnMobm9kZS5jaGlsZChwcm9wKSwgbm9kZSwgcHJvcCwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlcigncG9zdCcsIG5vZGUsIHBhcmVudCwgcHJvcFBhcmVudCk7XG4gICAgfTtcbiAgICByZXR1cm4gV2Fsa2VyO1xufSgpKTtcbmV4cG9ydHMuV2Fsa2VyID0gV2Fsa2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYWxwaGFjb2RlXzEgPSByZXF1aXJlKFwiLi9hbHBoYWNvZGVcIik7XG5leHBvcnRzLk5PREVfU0VQID0gJzsnO1xuZXhwb3J0cy5TVFJJTkdfU0VQID0gJywnO1xuZXhwb3J0cy5URVJNSU5BTF9QUkVGSVggPSAnISc7XG5leHBvcnRzLk1JTl9MRVRURVIgPSAnYSc7XG5leHBvcnRzLk1BWF9MRVRURVIgPSAneic7XG5leHBvcnRzLk1BWF9XT1JEID0gbmV3IEFycmF5KDEwKS5qb2luKGV4cG9ydHMuTUFYX0xFVFRFUik7XG52YXIgcmVOb2RlUGFydCA9IG5ldyBSZWdFeHAoJyhbJyArIGV4cG9ydHMuTUlOX0xFVFRFUiArICctJyArIGV4cG9ydHMuTUFYX0xFVFRFUiArXG4gICAgJ10rKSgnICsgZXhwb3J0cy5TVFJJTkdfU0VQICsgJ3xbMC05QS1aXSt8JCknLCAnZycpO1xudmFyIHJlU3ltYm9sID0gbmV3IFJlZ0V4cChcIihbMC05QS1aXSspOihbMC05QS1aXSspXCIpO1xuLypcbiAqIFBhY2tlZCBUcmllIHN0cnVjdHVyZS5cbiAqXG4gKiBUaGlzIGNsYXNzIGNhbiByZWFkIGluIGEgcGFja2VkIFRyaWUgKGFjdHVhbGx5IERBV0cpIGluIHRoZSBmb3JtXG4gKiBvZiBhIHN0cmluZyBlbmNvZGluZyBvZiBhIHNldCBvZiBub2Rlcy4gIEl0IHdpbGwgdGhlbiBzcGlsdCBpdFxuICogaW50byBhbiBhcnJheSBvZiBzdHJpbmdzLCBhbmQgdXNlIHRoZSByZXN1bHRpbmcgYXJyYXkgdG9cbiAqIHJlc29sdmUgZGljdGlvbmFyeSBtZW1iZXJzaGlwLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgLy8gVW5wYWNrIGEgcGFja2VkIGRpY3Rpb25hcnkgc3RyaW5nIGZvciB1c2UuXG4gKiAgIHZhciBwdHJpZSA9IG5ldyBQVHJpZShwYWNrZWRTdHJpbmcpO1xuICpcbiAqICAgLy8gVGVzdCBhIHdvcmQgZm9yIG1lbWJlcnNoaXAgaW4gdGhlIGRpY3Rpb25hcnkuXG4gKiAgIGlmIChwdHJpZS5pc1dvcmQobXlXb3JkKSkge1xuICogICAgIC4uLlxuICogICB9XG4gKlxuICogICAvLyBGb3IgY29tbWFuZCBjb21wbGV0aW9uIC0gZmluZCBmaXJzdCAyMCB3b3JkcyB0aGF0IGJlZ2luIHdpdGggYSBwcmVmaXguXG4gKiAgIHZhciB3b3JkcyA9IHB0cmllLmNvbXBsZXRpb25zKHByZWZpeCwgMjApO1xuICovXG52YXIgUFRyaWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBUcmllKHBhY2tlZCkge1xuICAgICAgICB0aGlzLnN5bXMgPSBbXTtcbiAgICAgICAgdGhpcy5ub2RlcyA9IHBhY2tlZC5zcGxpdChleHBvcnRzLk5PREVfU0VQKTtcbiAgICAgICAgdGhpcy5zeW1zID0gW107XG4gICAgICAgIHRoaXMuc3ltQ291bnQgPSAwO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIG0gPSByZVN5bWJvbC5leGVjKHRoaXMubm9kZXNbdGhpcy5zeW1Db3VudF0pO1xuICAgICAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWxwaGFjb2RlXzEuZnJvbUFscGhhQ29kZShtWzFdKSAhPT0gdGhpcy5zeW1Db3VudCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgU3ltYm9sIG5hbWUgLSBmb3VuZCBcIiArIG1bMV0gK1xuICAgICAgICAgICAgICAgICAgICBcIiB3aGVuIGV4cGVjdGluZyBcIiArIGFscGhhY29kZV8xLnRvQWxwaGFDb2RlKHRoaXMuc3ltQ291bnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3ltc1t0aGlzLnN5bUNvdW50XSA9IGFscGhhY29kZV8xLmZyb21BbHBoYUNvZGUobVsyXSk7XG4gICAgICAgICAgICB0aGlzLnN5bUNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2Rlcy5zcGxpY2UoMCwgdGhpcy5zeW1Db3VudCk7XG4gICAgfVxuICAgIC8vIElzIHdvcmQgaW4gdGhlIGRpY3Rpb25hcnkgKGV4YWN0IG1hdGNoKS5cbiAgICBQVHJpZS5wcm90b3R5cGUuaXNXb3JkID0gZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAgICAgaWYgKHdvcmQgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2god29yZCkgPT09IHdvcmQ7XG4gICAgfTtcbiAgICAvLyBSZXR1cm5zIHRoZSBsb25nZXN0IG1hdGNoIHRoYXQgaXMgcHJlZml4IG9mIHdvcmQuXG4gICAgUFRyaWUucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB0aGlzLm1hdGNoZXMod29yZCk7XG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gICAgfTtcbiAgICAvLyBSZXR1cm4gYWxsIGVudHJpZXMgdGhhdCBtYXRjaCBhIHByZWZpeCBvZiB3b3JkIChpbiBvcmRlciBvZiBpbmNyZWFzaW5nXG4gICAgLy8gbGVuZ3RoLlxuICAgIFBUcmllLnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud29yZHMod29yZCwgd29yZCArIGV4cG9ydHMuTUlOX0xFVFRFUik7XG4gICAgfTtcbiAgICAvLyBSZXR1cm4gYWxsIGVudHJpZXMgdGhhdCBiZWdpbiB3aXRoIGEgcHJlZml4LlxuICAgIFBUcmllLnByb3RvdHlwZS5jb21wbGV0aW9ucyA9IGZ1bmN0aW9uIChwcmVmaXgsIGxpbWl0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLndvcmRzKHByZWZpeCwgYmV5b25kKHByZWZpeCksIGxpbWl0KTtcbiAgICB9O1xuICAgIFBUcmllLnByb3RvdHlwZS53b3JkcyA9IGZ1bmN0aW9uIChmcm9tLCBiZXlvbmQsIGxpbWl0KSB7XG4gICAgICAgIHZhciB3b3JkcyA9IFtdO1xuICAgICAgICBmdW5jdGlvbiBjYXRjaFdvcmRzKHdvcmQsIGN0eCkge1xuICAgICAgICAgICAgaWYgKGxpbWl0ICE9PSB1bmRlZmluZWQgJiYgd29yZHMubGVuZ3RoID49IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgY3R4LmFib3J0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3b3Jkcy5wdXNoKHdvcmQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW51bWVyYXRlKDAsICcnLCB7IGZyb206IGZyb20sXG4gICAgICAgICAgICBiZXlvbmQ6IGJleW9uZCxcbiAgICAgICAgICAgIGZuOiBjYXRjaFdvcmRzLFxuICAgICAgICAgICAgcHJlZml4ZXM6IChmcm9tICsgZXhwb3J0cy5NSU5fTEVUVEVSKSA9PT0gYmV5b25kXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gd29yZHM7XG4gICAgfTtcbiAgICBQVHJpZS5wcm90b3R5cGUuZW51bWVyYXRlID0gZnVuY3Rpb24gKGlub2RlLCBwcmVmaXgsIGN0eCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMubm9kZXNbaW5vZGVdO1xuICAgICAgICB2YXIgY29udCA9IHRydWU7XG4gICAgICAgIGZ1bmN0aW9uIGVtaXQod29yZCkge1xuICAgICAgICAgICAgaWYgKGN0eC5wcmVmaXhlcykge1xuICAgICAgICAgICAgICAgIGlmICh3b3JkID09PSBjdHguZnJvbS5zbGljZSgwLCB3b3JkLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZuKHdvcmQsIGN0eCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdHguZnJvbSA8PSB3b3JkICYmIHdvcmQgPCBjdHguYmV5b25kKSB7XG4gICAgICAgICAgICAgICAgY3R4LmZuKHdvcmQsIGN0eCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGVbMF0gPT09IGV4cG9ydHMuVEVSTUlOQUxfUFJFRklYKSB7XG4gICAgICAgICAgICBlbWl0KHByZWZpeCk7XG4gICAgICAgICAgICBpZiAoY3R4LmFib3J0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZSA9IG5vZGUuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5yZXBsYWNlKHJlTm9kZVBhcnQsIGZ1bmN0aW9uICh3LCBzdHIsIHJlZikge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gcHJlZml4ICsgc3RyO1xuICAgICAgICAgICAgLy8gRG9uZSBvciBubyBwb3NzaWJsZSBmdXR1cmUgbWF0Y2ggZnJvbSBzdHJcbiAgICAgICAgICAgIGlmIChjdHguYWJvcnQgfHxcbiAgICAgICAgICAgICAgICBtYXRjaCA+PSBjdHguYmV5b25kIHx8XG4gICAgICAgICAgICAgICAgbWF0Y2ggPCBjdHguZnJvbS5zbGljZSgwLCBtYXRjaC5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlzVGVybWluYWwgPSByZWYgPT09IGV4cG9ydHMuU1RSSU5HX1NFUCB8fCByZWYgPT09ICcnO1xuICAgICAgICAgICAgaWYgKGlzVGVybWluYWwpIHtcbiAgICAgICAgICAgICAgICBlbWl0KG1hdGNoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5lbnVtZXJhdGUoX3RoaXMuaW5vZGVGcm9tUmVmKHJlZiwgaW5vZGUpLCBtYXRjaCwgY3R4KTtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBSZWZlcmVuY2VzIGFyZSBlaXRoZXIgYWJzb2x1dGUgKHN5bWJvbCkgb3IgcmVsYXRpdmUgKDEgYmFzZWQpLlxuICAgIFBUcmllLnByb3RvdHlwZS5pbm9kZUZyb21SZWYgPSBmdW5jdGlvbiAocmVmLCBpbm9kZUZyb20pIHtcbiAgICAgICAgdmFyIGRub2RlID0gYWxwaGFjb2RlXzEuZnJvbUFscGhhQ29kZShyZWYpO1xuICAgICAgICBpZiAoZG5vZGUgPCB0aGlzLnN5bUNvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zeW1zW2Rub2RlXTtcbiAgICAgICAgfVxuICAgICAgICBkbm9kZSAtPSB0aGlzLnN5bUNvdW50O1xuICAgICAgICByZXR1cm4gaW5vZGVGcm9tICsgZG5vZGUgKyAxO1xuICAgIH07XG4gICAgcmV0dXJuIFBUcmllO1xufSgpKTtcbmV4cG9ydHMuUFRyaWUgPSBQVHJpZTtcbi8vIFJldHVybiBhIHN0cmluZyB0aGF0IGlzIHRoZSBzbWFsbGVzdCBzdHJpbmcgZ3JlYXRlciB0aGFuXG4vLyBhbnkgc3RyaW5nIHdoaWNoIGlzIHByZWZpeGVkIHdpdGggcy5cbmZ1bmN0aW9uIGJleW9uZChzKSB7XG4gICAgaWYgKHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLk1BWF9XT1JEO1xuICAgIH1cbiAgICB2YXIgY29kZSA9IHMuY2hhckNvZGVBdChzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBzLnNsaWNlKDAsIC0xKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSArIDEpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHRyaWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIGEgVHJpZSBzZWFyY2ggZGF0YXN0cnVjdHVyZS5cblxuICBVc2FnZTpcblxuICB0cmllID0gbmV3IFRyaWUoZGljdGlvbmFyeS1zdHJpbmcpO1xuICBib29sID0gdHJpZS5pc1dvcmQod29yZCk7XG5cbiAgVG8gdXNlIGEgcGFja2VkIChjb21wcmVzc2VkKSB2ZXJzaW9uIG9mIHRoZSB0cmllIHN0b3JlZCBhcyBhIHN0cmluZzpcblxuICBjb21wcmVzc2VkID0gdHJpZS5wYWNrKCk7XG4gIHB0cmllID0gbmV3IFBhY2tlZFRyaWUoY29tcHJlc3NlZCk7XG4gIGJvb2wgPSBwdHJpZS5pc1dvcmQod29yZClcblxuKi9cbnZhciBwdHJpZSA9IHJlcXVpcmUoXCIuL3B0cmllXCIpO1xudmFyIGFscGhhY29kZV8xID0gcmVxdWlyZShcIi4vYWxwaGFjb2RlXCIpO1xudmFyIGhpc3RvZ3JhbV8xID0gcmVxdWlyZShcIi4vaGlzdG9ncmFtXCIpO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgbm9kZV8xID0gcmVxdWlyZShcIi4vbm9kZVwiKTtcbnZhciBERUJVRyA9IGZhbHNlO1xuLy8gQ3JlYXRlIGEgVHJpZSBkYXRhIHN0cnVjdHVyZSBmb3Igc2VhcmNoaW5nIGZvciBtZW1iZXJzaGlwIG9mIHN0cmluZ3Ncbi8vIGluIGEgZGljdGlvbmFyeSBpbiBhIHZlcnkgc3BhY2UgZWZmaWNpZW50IHdheS5cbnZhciBUcmllID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmllKHdvcmRzKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBub2RlXzEuTm9kZSgpO1xuICAgICAgICB0aGlzLmxhc3RXb3JkID0gJyc7XG4gICAgICAgIHRoaXMuc3VmZml4ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5jTmV4dCA9IDE7XG4gICAgICAgIHRoaXMud29yZENvdW50ID0gMDtcbiAgICAgICAgdGhpcy52Q3VyID0gMDtcbiAgICAgICAgdGhpcy5pbnNlcnRXb3Jkcyh3b3Jkcyk7XG4gICAgfVxuICAgIC8vIEluc2VydCB3b3JkcyBmcm9tIG9uZSBiaWcgc3RyaW5nLCBvciBmcm9tIGFuIGFycmF5LlxuICAgIFRyaWUucHJvdG90eXBlLmluc2VydFdvcmRzID0gZnVuY3Rpb24gKHdvcmRzKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBpZiAod29yZHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd29yZHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB3b3JkcyA9IHdvcmRzLnNwbGl0KC9bXmEtekEtWl0rLyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB3b3Jkc1tpXSA9IHdvcmRzW2ldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdXRpbF8xLnVuaXF1ZSh3b3Jkcyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnQod29yZHNbaV0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmllLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAod29yZCkge1xuICAgICAgICB0aGlzLl9pbnNlcnQod29yZCwgdGhpcy5yb290KTtcbiAgICAgICAgdmFyIGxhc3RXb3JkID0gdGhpcy5sYXN0V29yZDtcbiAgICAgICAgdGhpcy5sYXN0V29yZCA9IHdvcmQ7XG4gICAgICAgIHZhciBwcmVmaXggPSBjb21tb25QcmVmaXgod29yZCwgbGFzdFdvcmQpO1xuICAgICAgICBpZiAocHJlZml4ID09PSBsYXN0V29yZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmcmVlemUgPSB0aGlzLnVuaXF1ZU5vZGUobGFzdFdvcmQsIHdvcmQsIHRoaXMucm9vdCk7XG4gICAgICAgIGlmIChmcmVlemUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tYmluZVN1ZmZpeE5vZGUoZnJlZXplKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJpZS5wcm90b3R5cGUuX2luc2VydCA9IGZ1bmN0aW9uICh3b3JkLCBub2RlKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgcHJlZml4O1xuICAgICAgICB2YXIgbmV4dDtcbiAgICAgICAgdmFyIHByb3A7XG4gICAgICAgIC8vIER1cGxpY2F0ZSB3b3JkIGVudHJ5IC0gaWdub3JlXG4gICAgICAgIGlmICh3b3JkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIERvIGFueSBleGlzdGluZyBwcm9wcyBzaGFyZSBhIGNvbW1vbiBwcmVmaXg/XG4gICAgICAgIGZvciAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZWZpeCA9IGNvbW1vblByZWZpeCh3b3JkLCBwcm9wKTtcbiAgICAgICAgICAgIGlmIChwcmVmaXgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcm9wIGlzIGEgcHJvcGVyIHByZWZpeCAtIHJlY3Vyc2UgdG8gY2hpbGQgbm9kZVxuICAgICAgICAgICAgaWYgKHByb3AgPT09IHByZWZpeCAmJiBub2RlXzEuTm9kZS5pc05vZGUobm9kZS5jaGlsZChwcm9wKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnNlcnQod29yZC5zbGljZShwcmVmaXgubGVuZ3RoKSwgbm9kZS5jaGlsZChwcm9wKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRHVwbGljYXRlIHRlcm1pbmFsIHN0cmluZyAtIGlnbm9yZVxuICAgICAgICAgICAgaWYgKHByb3AgPT09IHdvcmQgJiYgbm9kZS5pc1Rlcm1pbmFsU3RyaW5nKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV4dCA9IG5ldyBub2RlXzEuTm9kZSgpO1xuICAgICAgICAgICAgbmV4dC5zZXRDaGlsZChwcm9wLnNsaWNlKHByZWZpeC5sZW5ndGgpLCBub2RlLmNoaWxkKHByb3ApKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVGVybWluYWwobmV4dCwgd29yZCA9IHdvcmQuc2xpY2UocHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgbm9kZS5kZWxldGVDaGlsZChwcm9wKTtcbiAgICAgICAgICAgIG5vZGUuc2V0Q2hpbGQocHJlZml4LCBuZXh0KTtcbiAgICAgICAgICAgIHRoaXMud29yZENvdW50Kys7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm8gc2hhcmVkIHByZWZpeC4gIEVudGVyIHRoZSB3b3JkIGhlcmUgYXMgYSB0ZXJtaW5hbCBzdHJpbmcuXG4gICAgICAgIHRoaXMuYWRkVGVybWluYWwobm9kZSwgd29yZCk7XG4gICAgICAgIHRoaXMud29yZENvdW50Kys7XG4gICAgfTtcbiAgICAvLyBBZGQgYSB0ZXJtaW5hbCBzdHJpbmcgdG8gbm9kZS5cbiAgICAvLyBJZiAyIGNoYXJhY3RlcnMgb3IgbGVzcywganVzdCBhZGQgd2l0aCB2YWx1ZSA9PT0gMS5cbiAgICAvLyBJZiBtb3JlIHRoYW4gMiBjaGFyYWN0ZXJzLCBwb2ludCB0byBzaGFyZWQgbm9kZVxuICAgIC8vIE5vdGUgLSBkb24ndCBwcmVtYXR1cmVseSBzaGFyZSBzdWZmaXhlcyAtIHRoZXNlXG4gICAgLy8gdGVybWluYWxzIG1heSBiZWNvbWUgc3BsaXQgYW5kIGpvaW5lZCB3aXRoIG90aGVyXG4gICAgLy8gbm9kZXMgaW4gdGhpcyBwYXJ0IG9mIHRoZSB0cmVlLlxuICAgIFRyaWUucHJvdG90eXBlLmFkZFRlcm1pbmFsID0gZnVuY3Rpb24gKG5vZGUsIHByb3ApIHtcbiAgICAgICAgaWYgKHByb3AubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIG5vZGUuc2V0Q2hpbGQocHJvcCwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5leHQgPSBuZXcgbm9kZV8xLk5vZGUoKTtcbiAgICAgICAgbm9kZS5zZXRDaGlsZChwcm9wWzBdLCBuZXh0KTtcbiAgICAgICAgdGhpcy5hZGRUZXJtaW5hbChuZXh0LCBwcm9wLnNsaWNlKDEpKTtcbiAgICB9O1xuICAgIFRyaWUucHJvdG90eXBlLm9wdGltaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2NvcmVzID0gW107XG4gICAgICAgIHRoaXMuY29tYmluZVN1ZmZpeE5vZGUodGhpcy5yb290KTtcbiAgICAgICAgdGhpcy5wcmVwREZTKCk7XG4gICAgICAgIHRoaXMuY291bnREZWdyZWUodGhpcy5yb290KTtcbiAgICAgICAgdGhpcy5wcmVwREZTKCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VDaGFpbnModGhpcy5yb290KTtcbiAgICB9O1xuICAgIC8vIENvbnZlcnQgVHJpZSB0byBhIERBV0cgYnkgc2hhcmluZyBpZGVudGljYWwgbm9kZXNcbiAgICBUcmllLnByb3RvdHlwZS5jb21iaW5lU3VmZml4Tm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIC8vIEZyb3plbiBub2RlIC0gY2FuJ3QgY2hhbmdlLlxuICAgICAgICBpZiAobm9kZS5fYykge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCBjaGlsZHJlbiBhcmUgY29tYmluZWQgYW5kIGdlbmVyYXRlIHVuaXF1ZSBub2RlXG4gICAgICAgIC8vIHNpZ25hdHVyZSBmb3IgdGhpcyBub2RlLlxuICAgICAgICB2YXIgc2lnID0gW107XG4gICAgICAgIGlmIChub2RlLmlzVGVybWluYWwoKSkge1xuICAgICAgICAgICAgc2lnLnB1c2goJyEnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcHMgPSBub2RlLnByb3BzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNbaV07XG4gICAgICAgICAgICBpZiAobm9kZV8xLk5vZGUuaXNOb2RlKG5vZGUuY2hpbGQocHJvcCkpKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRDaGlsZChwcm9wLCB0aGlzLmNvbWJpbmVTdWZmaXhOb2RlKG5vZGUuY2hpbGQocHJvcCkpKTtcbiAgICAgICAgICAgICAgICBzaWcucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICBzaWcucHVzaChub2RlLmNoaWxkKHByb3ApLl9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNpZy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzaWdTdHJpbmcgPSBzaWcuam9pbignLScpO1xuICAgICAgICB2YXIgc2hhcmVkID0gdGhpcy5zdWZmaXhlc1tzaWdTdHJpbmddO1xuICAgICAgICBpZiAoc2hhcmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hhcmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VmZml4ZXNbc2lnU3RyaW5nXSA9IG5vZGU7XG4gICAgICAgIG5vZGUuX2MgPSB0aGlzLmNOZXh0Kys7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgVHJpZS5wcm90b3R5cGUucHJlcERGUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52Q3VyKys7XG4gICAgfTtcbiAgICBUcmllLnByb3RvdHlwZS52aXNpdGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuX3YgPT09IHRoaXMudkN1cikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5fdiA9IHRoaXMudkN1cjtcbiAgICB9O1xuICAgIFRyaWUucHJvdG90eXBlLmNvdW50RGVncmVlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuX2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbm9kZS5fZCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5fZCsrO1xuICAgICAgICBpZiAodGhpcy52aXNpdGVkKG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3BzID0gbm9kZS5wcm9wcyh0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jb3VudERlZ3JlZShub2RlLmNoaWxkKHByb3BzW2ldKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFJlbW92ZSBpbnRlcm1lZGlhdGUgc2luZ2xldG9uIG5vZGVzIGJ5IGhvaXN0aW5nIGludG8gdGhlaXIgcGFyZW50XG4gICAgVHJpZS5wcm90b3R5cGUuY29sbGFwc2VDaGFpbnMgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgcHJvcCA9ICctaW52YWxpZC0nO1xuICAgICAgICB2YXIgcHJvcHM7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBpZiAodGhpcy52aXNpdGVkKG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHJvcHMgPSBub2RlLnByb3BzKCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gbm9kZS5jaGlsZChwcm9wKTtcbiAgICAgICAgICAgIGlmICghbm9kZV8xLk5vZGUuaXNOb2RlKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUNoYWlucyhjaGlsZCk7XG4gICAgICAgICAgICAvLyBIb2lzdCB0aGUgc2luZ2xldG9uIGNoaWxkJ3Mgc2luZ2xlIHByb3BlcnR5IHRvIHRoZSBwYXJlbnRcbiAgICAgICAgICAgIGlmIChjaGlsZC5fZyAhPT0gdW5kZWZpbmVkICYmIChjaGlsZC5fZCA9PT0gMSB8fCBjaGlsZC5fZy5sZW5ndGggPT09IDEpKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5kZWxldGVDaGlsZChwcm9wKTtcbiAgICAgICAgICAgICAgICBwcm9wICs9IGNoaWxkLl9nO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0Q2hpbGQocHJvcCwgY2hpbGQuY2hpbGQoY2hpbGQuX2cpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZGVudGlmeSBzaW5nbGV0b24gbm9kZXNcbiAgICAgICAgaWYgKHByb3BzLmxlbmd0aCA9PT0gMSAmJiAhbm9kZS5pc1Rlcm1pbmFsKCkpIHtcbiAgICAgICAgICAgIG5vZGUuX2cgPSBwcm9wO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmllLnByb3RvdHlwZS5pc1dvcmQgPSBmdW5jdGlvbiAod29yZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0ZyYWdtZW50KHdvcmQsIHRoaXMucm9vdCk7XG4gICAgfTtcbiAgICBUcmllLnByb3RvdHlwZS5pc0ZyYWdtZW50ID0gZnVuY3Rpb24gKHdvcmQsIG5vZGUpIHtcbiAgICAgICAgaWYgKHdvcmQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5pc1Rlcm1pbmFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuY2hpbGQod29yZCkgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpbmQgYSBwcmVmaXggb2Ygd29yZCByZWZlcmVuY2UgdG8gYSBjaGlsZFxuICAgICAgICB2YXIgcHJvcHMgPSBub2RlLnByb3BzKHRydWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgaWYgKHByb3AgPT09IHdvcmQuc2xpY2UoMCwgcHJvcC5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNGcmFnbWVudCh3b3JkLnNsaWNlKHByb3AubGVuZ3RoKSwgbm9kZS5jaGlsZChwcm9wKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLy8gRmluZCBoaWdoZXN0IG5vZGUgaW4gVHJpZSB0aGF0IGlzIG9uIHRoZSBwYXRoIHRvIHdvcmRcbiAgICAvLyBhbmQgdGhhdCBpcyBOT1Qgb24gdGhlIHBhdGggdG8gb3RoZXIuXG4gICAgVHJpZS5wcm90b3R5cGUudW5pcXVlTm9kZSA9IGZ1bmN0aW9uICh3b3JkLCBvdGhlciwgbm9kZSkge1xuICAgICAgICB2YXIgcHJvcHMgPSBub2RlLnByb3BzKHRydWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgaWYgKHByb3AgPT09IHdvcmQuc2xpY2UoMCwgcHJvcC5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgIT09IG90aGVyLnNsaWNlKDAsIHByb3AubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5jaGlsZChwcm9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5pcXVlTm9kZSh3b3JkLnNsaWNlKHByb3AubGVuZ3RoKSwgb3RoZXIuc2xpY2UocHJvcC5sZW5ndGgpLCBub2RlLmNoaWxkKHByb3ApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLy8gUmV0dXJuIHBhY2tlZCByZXByZXNlbnRhdGlvbiBvZiBUcmllIGFzIGEgc3RyaW5nLlxuICAgIC8vXG4gICAgLy8gRWFjaCBub2RlIG9mIHRoZSBUcmllIGlzIG91dHB1dCBvbiBhIHNpbmdsZSBsaW5lLlxuICAgIC8vXG4gICAgLy8gRm9yIGV4YW1wbGUgVHJpZShcInRoZSB0aGVtIHRoZXJlIHRoZXNpcyB0aGlzXCIpOlxuICAgIC8vIHtcbiAgICAvLyAgICBcInRoXCI6IHtcbiAgICAvLyAgICAgIFwiaXNcIjogMSxcbiAgICAvLyAgICAgIFwiZVwiOiB7XG4gICAgLy8gICAgICAgIFwiXCI6IDEsXG4gICAgLy8gICAgICAgIFwibVwiOiAxLFxuICAgIC8vICAgICAgICBcInJlXCI6IDEsXG4gICAgLy8gICAgICAgIFwic2lzXCI6IDFcbiAgICAvLyAgICAgIH1cbiAgICAvLyAgICB9XG4gICAgLy8gIH1cbiAgICAvL1xuICAgIC8vIFdvdWxkIGJlIHJlcGVyZXNlbnRlZCBhczpcbiAgICAvL1xuICAgIC8vIHRoMFxuICAgIC8vIGUwaXNcbiAgICAvLyAhbSxyZSxzaXNcbiAgICAvL1xuICAgIC8vIFRoZSBsaW5lIGJlZ2lucyB3aXRoIGEgJyEnIGlmZiBpdCBpcyBhIHRlcm1pbmFsIG5vZGUgb2YgdGhlIFRyaWUuXG4gICAgLy8gRm9yIGVhY2ggc3RyaW5nIHByb3BlcnR5IGluIGEgbm9kZSwgdGhlIHN0cmluZyBpcyBsaXN0ZWQsIGFsb25nXG4gICAgLy8gd2l0aCBhIChyZWxhdGl2ZSEpIGxpbmUgbnVtYmVyIG9mIHRoZSBub2RlIHRoYXQgc3RyaW5nIHJlZmVyZW5jZXMuXG4gICAgLy8gVGVybWluYWwgc3RyaW5ncyAodGhvc2Ugd2l0aG91dCBjaGlsZCBub2RlIHJlZmVyZW5jZXMpIGFyZVxuICAgIC8vIHNlcGFyYXRlZCBieSAnLCcgY2hhcmFjdGVycy5cbiAgICBUcmllLnByb3RvdHlwZS5wYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBub2RlcyA9IFtdO1xuICAgICAgICB2YXIgbm9kZUNvdW50O1xuICAgICAgICB2YXIgc3ltcyA9IHt9O1xuICAgICAgICB2YXIgcG9zID0gMDtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIGNvbWJpbmVkIGFsbCB0aGUgY29tbW9uIHN1ZmZpeGVzXG4gICAgICAgIHRoaXMub3B0aW1pemUoKTtcbiAgICAgICAgZnVuY3Rpb24gbm9kZUxpbmUobm9kZSkge1xuICAgICAgICAgICAgdmFyIGxpbmUgPSAnJztcbiAgICAgICAgICAgIHZhciBzZXAgPSAnJztcbiAgICAgICAgICAgIGlmIChub2RlLmlzVGVybWluYWwoKSkge1xuICAgICAgICAgICAgICAgIGxpbmUgKz0gcHRyaWUuVEVSTUlOQUxfUFJFRklYO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BzID0gbm9kZS5wcm9wcygpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaXNUZXJtaW5hbFN0cmluZyhwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lICs9IHNlcCArIHByb3A7XG4gICAgICAgICAgICAgICAgICAgIHNlcCA9IHB0cmllLlNUUklOR19TRVA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBub2RlLmNoaWxkKHByb3ApO1xuICAgICAgICAgICAgICAgIGlmIChzeW1zW2NoaWxkLl9uXSkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lICs9IHNlcCArIHByb3AgKyBzeW1zW2NoaWxkLl9uXTtcbiAgICAgICAgICAgICAgICAgICAgc2VwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmVmID0gYWxwaGFjb2RlXzEudG9BbHBoYUNvZGUobm9kZS5fbiAtIGNoaWxkLl9uIC0gMSArIHN5bUNvdW50KTtcbiAgICAgICAgICAgICAgICAvLyBMYXJnZSByZWZlcmVuY2UgdG8gc21hbGxlciBzdHJpbmcgc3VmZml4IC0+IGR1cGxpY2F0ZSBzdWZmaXhcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuX2cgJiYgcmVmLmxlbmd0aCA+PSBjaGlsZC5fZy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pc1Rlcm1pbmFsU3RyaW5nKGNoaWxkLl9nKSkge1xuICAgICAgICAgICAgICAgICAgICByZWYgPSBjaGlsZC5fZztcbiAgICAgICAgICAgICAgICAgICAgbGluZSArPSBzZXAgKyBwcm9wICsgcmVmO1xuICAgICAgICAgICAgICAgICAgICBzZXAgPSBwdHJpZS5TVFJJTkdfU0VQO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGluZSArPSBzZXAgKyBwcm9wICsgcmVmO1xuICAgICAgICAgICAgICAgIHNlcCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG9wb2xvZ2ljYWwgc29ydCBpbnRvIG5vZGVzIGFycmF5XG4gICAgICAgIGZ1bmN0aW9uIG51bWJlck5vZGVzKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLl9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBub2RlLnByb3BzKHRydWUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG51bWJlck5vZGVzKG5vZGUuY2hpbGQocHJvcHNbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuX24gPSBwb3MrKztcbiAgICAgICAgICAgIG5vZGVzLnVuc2hpZnQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhpc3RBYnMgPSBuZXcgaGlzdG9ncmFtXzEuSGlzdG9ncmFtKCk7XG4gICAgICAgIHZhciBoaXN0UmVsID0gbmV3IGhpc3RvZ3JhbV8xLkhpc3RvZ3JhbSgpO1xuICAgICAgICBmdW5jdGlvbiBhbmFseXplUmVmcyhub2RlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi52aXNpdGVkKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BzID0gbm9kZS5wcm9wcyh0cnVlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG5vZGUuY2hpbGQocHJvcCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlZiA9IG5vZGUuX24gLSBjaGlsZC5fbiAtIDE7XG4gICAgICAgICAgICAgICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiBzaW5nbGUtY2hhcmFjdGVyIHJlbGF0aXZlIHJlZnNcbiAgICAgICAgICAgICAgICBpZiAocmVmIDwgYWxwaGFjb2RlXzEuQkFTRSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0UmVsLmFkZChyZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgc2F2ZWQgYnkgY29udmVydGluZyBhbiBhYnNvbHV0ZVxuICAgICAgICAgICAgICAgIC8vIHJlZmVyZW5jZSB0byBhIG9uZS1jaGFyYWN0ZXIgc3ltYm9sLlxuICAgICAgICAgICAgICAgIGhpc3RBYnMuYWRkKGNoaWxkLl9uLCBhbHBoYWNvZGVfMS50b0FscGhhQ29kZShyZWYpLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIGFuYWx5emVSZWZzKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzeW1ib2xDb3VudCgpIHtcbiAgICAgICAgICAgIHZhciB0b3BOb2RlcyA9IGhpc3RBYnMuaGlnaGVzdChhbHBoYWNvZGVfMS5CQVNFKTtcbiAgICAgICAgICAgIHZhciBzYXZpbmdzID0gW107XG4gICAgICAgICAgICBzYXZpbmdzWy0xXSA9IDA7XG4gICAgICAgICAgICB2YXIgYmVzdCA9IDA7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIGRlZlNpemUgPSAzICsgYWxwaGFjb2RlXzEudG9BbHBoYUNvZGUobm9kZUNvdW50KS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBzeW0gPSAwOyBzeW0gPCBhbHBoYWNvZGVfMS5CQVNFOyBzeW0rKykge1xuICAgICAgICAgICAgICAgIGlmICh0b3BOb2Rlc1tzeW1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEN1bXVsYXRpdmUgc2F2aW5ncyBvZjpcbiAgICAgICAgICAgICAgICAvLyAgIHNhdmVkIGNoYXJhY3RlcnMgaW4gcmVmc1xuICAgICAgICAgICAgICAgIC8vICAgbWludXMgZGVmaW5pdGlvbiBzaXplXG4gICAgICAgICAgICAgICAgLy8gICBtaW51cyByZWxhdGl2ZSBzaXplIHdyYXBwaW5nIHRvIDIgZGlnaXRzXG4gICAgICAgICAgICAgICAgc2F2aW5nc1tzeW1dID0gdG9wTm9kZXNbc3ltXVsxXSAtIGRlZlNpemUgLVxuICAgICAgICAgICAgICAgICAgICBoaXN0UmVsLmNvdW50T2YoYWxwaGFjb2RlXzEuQkFTRSAtIHN5bSAtIDEpICtcbiAgICAgICAgICAgICAgICAgICAgc2F2aW5nc1tzeW0gLSAxXTtcbiAgICAgICAgICAgICAgICBsb2coXCJzYXZpbmdzW1wiICsgc3ltICsgXCJdIFwiICsgc2F2aW5nc1tzeW1dICsgJyA9ICcgK1xuICAgICAgICAgICAgICAgICAgICBzYXZpbmdzW3N5bSAtIDFdICsgJyArJyArXG4gICAgICAgICAgICAgICAgICAgIHRvcE5vZGVzW3N5bV1bMV0gKyAnIC0gJyArIGRlZlNpemUgKyAnIC0gJyArXG4gICAgICAgICAgICAgICAgICAgIGhpc3RSZWwuY291bnRPZihhbHBoYWNvZGVfMS5CQVNFIC0gc3ltIC0gMSkgKyAnKScpO1xuICAgICAgICAgICAgICAgIGlmIChzYXZpbmdzW3N5bV0gPj0gYmVzdCkge1xuICAgICAgICAgICAgICAgICAgICBiZXN0ID0gc2F2aW5nc1tzeW1dO1xuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IHN5bSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtjb3VudCwgdG9wTm9kZXNdO1xuICAgICAgICB9XG4gICAgICAgIG51bWJlck5vZGVzKHRoaXMucm9vdCk7XG4gICAgICAgIG5vZGVDb3VudCA9IG5vZGVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5wcmVwREZTKCk7XG4gICAgICAgIGFuYWx5emVSZWZzKHRoaXMucm9vdCk7XG4gICAgICAgIHZhciBfYSA9IHN5bWJvbENvdW50KCksIHN5bUNvdW50ID0gX2FbMF0sIHRvcE5vZGVzID0gX2FbMV07XG4gICAgICAgIHZhciBzeW1EZWZzID0gW107XG4gICAgICAgIGZvciAodmFyIHN5bSA9IDA7IHN5bSA8IHN5bUNvdW50OyBzeW0rKykge1xuICAgICAgICAgICAgc3ltc1t0b3BOb2Rlc1tzeW1dWzBdXSA9IGFscGhhY29kZV8xLnRvQWxwaGFDb2RlKHN5bSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5vZGVMaW5lcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBub2RlTGluZXNbaV0gPSBub2RlTGluZShub2Rlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJlcGVuZCBzeW1ib2xzXG4gICAgICAgIGZvciAodmFyIHN5bSA9IHN5bUNvdW50IC0gMTsgc3ltID49IDA7IHN5bS0tKSB7XG4gICAgICAgICAgICBub2RlTGluZXMudW5zaGlmdChhbHBoYWNvZGVfMS50b0FscGhhQ29kZShzeW0pICsgJzonICtcbiAgICAgICAgICAgICAgICBhbHBoYWNvZGVfMS50b0FscGhhQ29kZShub2RlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh0b3BOb2Rlc1tzeW1dWzBdLCAxMCkgLSAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGVMaW5lcy5qb2luKHB0cmllLk5PREVfU0VQKTtcbiAgICB9O1xuICAgIHJldHVybiBUcmllO1xufSgpKTtcbmV4cG9ydHMuVHJpZSA9IFRyaWU7XG5mdW5jdGlvbiBjb21tb25QcmVmaXgodzEsIHcyKSB7XG4gICAgdmFyIGk7XG4gICAgdmFyIG1heGxlbiA9IE1hdGgubWluKHcxLmxlbmd0aCwgdzIubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbWF4bGVuICYmIHcxW2ldID09PSB3MltpXTsgaSsrKSB7IH1cbiAgICByZXR1cm4gdzEuc2xpY2UoMCwgaSk7XG59XG5mdW5jdGlvbiBsb2cobWVzc2FnZSkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKERFQlVHKSB7XG4gICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIFttZXNzYWdlXS5jb25jYXQoYXJncykpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyaWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gc29ydEJ5VmFsdWVzKG8sIGRpcikge1xuICAgIGlmIChkaXIgPT09IHZvaWQgMCkgeyBkaXIgPSAnYXNjJzsgfVxuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gbykge1xuICAgICAgICByZXN1bHQucHVzaChba2V5LCBvW2tleV1dKTtcbiAgICB9XG4gICAgcmVzdWx0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGNtcERlZmF1bHQoYVsxXSwgYlsxXSwgZGlyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5zb3J0QnlWYWx1ZXMgPSBzb3J0QnlWYWx1ZXM7XG5mdW5jdGlvbiBjbXBEZWZhdWx0KGEsIGIsIGRpcikge1xuICAgIGlmIChkaXIgPT09IHZvaWQgMCkgeyBkaXIgPSAnYXNjJzsgfVxuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIGlmIChhIDwgYikge1xuICAgICAgICByZXN1bHQgPSAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmVzdWx0ID0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGRpciA9PT0gJ2FzYycgPyByZXN1bHQgOiAtcmVzdWx0O1xufVxuLy8gU29ydCBlbGVtZW50cyBhbmQgcmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBhcnJheSAobW9kaWZpZWQgaW4gcGxhY2UpLlxuZnVuY3Rpb24gdW5pcXVlKGEsIGNtcCkge1xuICAgIGlmIChjbXAgPT09IHZvaWQgMCkgeyBjbXAgPSBjbXBEZWZhdWx0OyB9XG4gICAgYS5zb3J0KGNtcCk7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjbXAoYVtpIC0gMV0sIGFbaV0pID09PSAwKSB7XG4gICAgICAgICAgICBhLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMudW5pcXVlID0gdW5pcXVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCJpbXBvcnQge1RyaWUsIFBUcmllfSBmcm9tICdkYXdnLWxvb2t1cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFJIHtcbiAgLyoqIHJldHVybnMgKCYgZ2VuZXJhdGVzKSBhbHBoYWJldCBhcnJheSAqL1xuICBnZXQgYWxwaGFiZXQoKSB7XG4gICAgaWYgKCF0aGlzLl9hKSB7XG4gICAgICB0aGlzLl9hID0gW107XG4gICAgICBsZXQgaSA9ICdhJy5jaGFyQ29kZUF0KDApLCBqID0gJ3onLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAgIGZvciAoO2kgPD0gajsrK2kpIHRoaXMuX2EucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fYTtcbiAgfVxuICAvKiogcHJvdmlkZXMgY3VycmVudCBsZXZlbCBib2FyZCBzaXplICovXG4gIGdldCBib2FyZFNpemUoKSB7IHJldHVybiB0aGlzLl9ib2FyZFNpemU7fVxuICAvKiogcHJvdmlkZXMgY3VycmVudCBsZXZlbCB1c2VkV29yZHMgKi9cbiAgZ2V0IHVzZWRXb3JkcygpIHsgcmV0dXJuIHRoaXMuX3VzZWRXb3Jkczt9XG4gIC8qKiBwcm92aWRlcyBjdXJyZW50IGxldmVsIGJvYXJkICovXG4gIGdldCBib2FyZCgpIHsgcmV0dXJuIHRoaXMuX2JvYXJkO31cbiAgLyoqIHByb3ZpZGVzIGFkZGVkIGRpY3Rpb25hcmllcyAqL1xuICBnZXQgZGljdGlvbmFyaWVzKCkgeyByZXR1cm4gdGhpcy5fZGljdGlvbmFyaWVzO31cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhbiBpbnN0YW5zZSBvZiB0aGUgV29yZHMgQUkgbGlicmFyeVxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2RpY3Rpb25hcmllcyA9IHt9O1xuICAgIHRoaXMuZW5kQm9hcmQoKTtcbiAgfVxuICAvKipcbiAgICogQWRkIG1haW4gZGljdGlvbmFyeSB0byB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSB1bmlxdWUgbmFtZSBmb3IgdGhlIGRpY3Rpb25hcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBkaWN0aW9uYXJ5IHN0cmluZy5cbiAgICogKi9cbiAgYWRkTWFpbkRpY3Rpb25hcnkobmFtZSwgc3RyaW5nKSB7XG4gICAgdGhpcy5fYWRkRGljdGlvbmFyeShuYW1lLCBzdHJpbmcpO1xuXG4gICAgdGhpcy5fbWFpbkRpY3Rpb25hcnkgPSB0aGlzLl9kaWN0aW9uYXJpZXNbbmFtZV07XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBzZWNvbmRhcnkgZGljdGlvbmFyeSB0byB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSB1bmlxdWUgbmFtZSBmb3IgdGhlIGRpY3Rpb25hcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBkaWN0aW9uYXJ5IHN0cmluZy5cbiAgICogKi9cbiAgYWRkU2Vjb25kYXJ5RGljdGlvbmFyeShuYW1lLCBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZGREaWN0aW9uYXJ5KG5hbWUsIHN0cmluZyk7XG4gICAgdGhpcy5fc2Vjb25kYXJ5RGljdGlvbmFyeSA9IHRoaXMuX2RpY3Rpb25hcmllc1tuYW1lXTtcbiAgfVxuICAvKipcbiAgICogU3RhcnQgQm9hcmQoTGV2ZWwpIHdpdGggaW50aWFsIGNlbnRlciB3b3JkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gYm9hcmRTaXplIC0gQm9hcmQgU2l6ZS5cbiAgICovXG4gIHN0YXJ0Qm9hcmQoYm9hcmRTaXplID0gdGhpcy5fZGVmYXVsdEJvYXJkU2l6ZSkge1xuICAgIHRoaXMuX2JvYXJkU2l6ZSA9IGJvYXJkU2l6ZTtcbiAgICB0aGlzLl9jbGVhbkJvYXJkKCk7XG5cbiAgICB0aGlzLl9zZXRJbml0aWFsUmFuZG9tV29yZCgpO1xuICB9XG4gIC8qKlxuICAgKiBFbmQgQm9hcmQoTGV2ZWwpLlxuICAgKiAtIGNsZWFuIHRoZSBib2FyZDtcbiAgICogLSBjbGVhbiB1c2VkIHdvcmRzO1xuICAgKiAtIGNsZWFuIGN1cnJlbnQgbWFpbi9zZWNvbmRhcnkgZGljdGlvbmFyeVxuICAgKiAtIGV0Yy5cbiAgICovXG4gIGVuZEJvYXJkKCkge1xuICAgIHRoaXMuX2JvYXJkU2l6ZSA9IHRoaXMuX2RlZmF1bHRCb2FyZFNpemU7XG4gICAgdGhpcy5fdXNlZFdvcmRzID0gW107XG4gICAgdGhpcy5fbWFpbkRpY3Rpb25hcnkgPSBudWxsO1xuICAgIHRoaXMuX3NlY29uZGFyeURpY3Rpb25hcnkgPSBudWxsO1xuXG4gICAgdGhpcy5fY2xlYW5Cb2FyZCgpO1xuICB9XG4gIC8qKiBjaGVjayBpZiB3b3JkIGFscmVhZHkgd2FzIHVzZWQgaW4gY3VycmVudCBsZXZlbCAqL1xuICBpc1VzZWRXb3JkKHdvcmQpIHtcbiAgICByZXR1cm4gIXdvcmQgfHwgIXRoaXMuX3VzZWRXb3JkcyB8fCB0aGlzLl91c2VkV29yZHMuZmluZChcbiAgICAgIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkgPT09IHdvcmQudG9Mb3dlckNhc2UoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIC8qKiBjaGVjayBpZiB3b3JkIGV4aXN0cyBpbiBtYWluIGRpY3Rpb25hcnkgKi9cbiAgZG9lc1dvcmRFeGlzdCh3b3JkKSB7XG4gICAgaWYgKCF3b3JkKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgZmlyc3RMZXR0ZXJJRCA9IHRoaXMuX2dldExldHRlcklEKFsuLi53b3JkXVswXSk7XG5cbiAgICBsZXQgd29yZHNBcnJheSA9IHRoaXMuX2dldFdvcmRzQXJyYXlCeUxldHRlcklEKGZpcnN0TGV0dGVySUQpO1xuXG4gICAgcmV0dXJuIHdvcmRzQXJyYXkuZmluZChmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpID09PSB3b3JkLnRvTG93ZXJDYXNlKCk7IH0pO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBjaGVjayBpZiBzZWxlY3RlZCBjZWxscyBhcmUgcG9zc2libGUgZm9yIGEgd29yZFxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRYIC0gZmlyc3QgbGV0dGVyIGNvbHVtblxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRZIC0gZmlyc3QgbGV0dGVyIHJvd1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIC0gaXMgd29yZCB2ZXJ0aWNhbCBvciBob3Jpem9udGFsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbW91bnQgLSBhbW91bnQgb2Ygc2VsZWN0ZWQgY2VsbHNcbiAgICovXG4gIGNoZWNrUG9zc2libGVDZWxscyhzdGFydFgsIHN0YXJ0WSwgdmVydGljYWwsIGFtb3VudCkge1xuICAgIGlmIChzdGFydFggPCAwIHx8IHN0YXJ0WSA8IDAgfHwgKHZlcnRpY2FsID8gc3RhcnRZIDogc3RhcnRYKSArIGFtb3VudCA+IHRoaXMuX2JvYXJkU2l6ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGJsb2NrZXJzQ291bnRlciA9IDA7XG4gICAgbGV0IGxldHRlcnNDb3VudGVyID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcbiAgICAgIGxldCBjaGVja1ggPSB2ZXJ0aWNhbCA/IHN0YXJ0WCA6IHN0YXJ0WCArIGk7XG4gICAgICBsZXQgY2hlY2tZID0gdmVydGljYWwgPyBzdGFydFkgKyBpIDogc3RhcnRZO1xuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLl9ib2FyZFtjaGVja1ldW2NoZWNrWF07XG5cbiAgICAgIGlmICh0aGlzLl9pc0FTdHJpbmcoZWxlbWVudCkpIGxldHRlcnNDb3VudGVyKys7XG4gICAgICBlbHNlIGlmIChlbGVtZW50ID49IDMgfHwgdmVydGljYWwgJiYgZWxlbWVudCA9PT0gMSB8fCAhdmVydGljYWwgJiYgZWxlbWVudCA9PT0gMikgYmxvY2tlcnNDb3VudGVyKys7XG4gICAgfVxuXG4gICAgaWYgKGxldHRlcnNDb3VudGVyID09PSBhbW91bnQgfHwgYmxvY2tlcnNDb3VudGVyIHx8ICFsZXR0ZXJzQ291bnRlciAmJiB0aGlzLl91c2VkV29yZHMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBXb3JkIHRvIHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WCAtIGZpcnN0IGxldHRlciBjb2x1bW5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WSAtIGZpcnN0IGxldHRlciByb3dcbiAgICogQHBhcmFtIHtzdHJpbmd9IHdvcmQgLSB3b3JkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgLSBpcyB3b3JkIHZlcnRpY2FsIG9yIGhvcml6b250YWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gd2FzIHdvcmQgYWRkZWQgb3Igbm90LlxuICAgKi9cbiAgYWRkV29yZChzdGFydFgsIHN0YXJ0WSwgd29yZCwgdmVydGljYWwgPSBmYWxzZSkge1xuICAgIGlmICghd29yZCB8fCAhd29yZC5sZW5ndGggfHwgd29yZC5sZW5ndGggPCAzKSB7XG4gICAgICBjb25zb2xlLmxvZygnd29yZCBsZW5ndGggaXMgbGVzcyB0aGFuIDMgbGV0dGVycyEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY2hlY2tQb3NzaWJsZUNlbGxzKHN0YXJ0WCwgc3RhcnRZLCB2ZXJ0aWNhbCwgd29yZC5sZW5ndGgpKSB7XG4gICAgICBjb25zb2xlLmxvZygncG9zc2libGUgY2VsbHMgY2hlY2sgZmFpbGVkIScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fY2hlY2tQb3NzaWJsZUxldHRlcnMoc3RhcnRYLCBzdGFydFksIHdvcmQsIHZlcnRpY2FsKSkge1xuICAgICAgY29uc29sZS5sb2coJ3Bvc3NpYmxlIGxldHRlcnMgY2hlY2sgZmFpbGVkIScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzVXNlZFdvcmQod29yZCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3b3JkIGlzIGFscmVhZHkgdXNlZCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kb2VzV29yZEV4aXN0KHdvcmQpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIndvcmQgZG9lc24ndCBleGlzdCBpbiBkaWN0aW9uYXJ5XCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJsb2NrZXJzIGJhc2VkIG9uIG51bWJlcjpcbiAgICAgKiAxIC0gZm9yIHZlcnRpY2FsXG4gICAgICogMiAtIGZvciBob3JpemFudGFsXG4gICAgICogMyAtIGZvciBhbGxcbiAgICAgKiAqL1xuXG4gICAgWy4uLndvcmRdLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICB2YXIgZWxlbWVudFkgPSBzdGFydFkgKyAodmVydGljYWwgPyBpbmRleCA6IDApO1xuICAgICAgdmFyIGVsZW1lbnRYID0gc3RhcnRYICsgKHZlcnRpY2FsID8gMCA6IGluZGV4KTtcblxuICAgICAgdGhpcy5fYm9hcmRbZWxlbWVudFldW2VsZW1lbnRYXSA9IGVsZW1lbnQudG9Mb3dlckNhc2UoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgbGV0IHRhcmdldFggPSBlbGVtZW50WCArICh2ZXJ0aWNhbCA/IGkgPyAxIDogLTEgOiAwKTtcbiAgICAgICAgbGV0IHRhcmdldFkgPSBlbGVtZW50WSArICh2ZXJ0aWNhbCA/IDAgOiBpID8gMSA6IC0xKTtcblxuICAgICAgICBpZiAodGFyZ2V0WCA8IDAgfHwgdGFyZ2V0WCA+PSB0aGlzLl9ib2FyZFNpemUgfHwgdGFyZ2V0WSA8IDAgfHwgdGFyZ2V0WSA+PSB0aGlzLl9ib2FyZFNpemUpIGNvbnRpbnVlO1xuICAgICAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IHRoaXMuX2JvYXJkW3RhcmdldFldW3RhcmdldFhdO1xuXG4gICAgICAgIGlmICh2ZXJ0aWNhbCAmJiAhdGhpcy5faXNBVmVydGljYWxCbG9ja2VyKHRhcmdldEVsZW1lbnQpKSB0aGlzLl9ib2FyZFt0YXJnZXRZXVt0YXJnZXRYXSArPSAxO1xuICAgICAgICBpZiAoIXZlcnRpY2FsICYmICF0aGlzLl9pc0FIb3Jpem9udGFsQmxvY2tlcih0YXJnZXRFbGVtZW50KSkgdGhpcy5fYm9hcmRbdGFyZ2V0WV1bdGFyZ2V0WF0gKz0gMjtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgaWYgKHN0YXJ0WSkgdGhpcy5fYm9hcmRbc3RhcnRZIC0gMV1bc3RhcnRYXSA9IDM7XG4gICAgICBpZiAoc3RhcnRZICsgd29yZC5sZW5ndGggPCB0aGlzLl9ib2FyZFNpemUpIHRoaXMuX2JvYXJkW3N0YXJ0WSArIHdvcmQubGVuZ3RoXVtzdGFydFhdID0gMztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0YXJ0WCkgdGhpcy5fYm9hcmRbc3RhcnRZXVtzdGFydFggLSAxXSA9IDM7XG4gICAgICBpZiAoc3RhcnRYICsgd29yZC5sZW5ndGggPCB0aGlzLl9ib2FyZFNpemUpIHRoaXMuX2JvYXJkW3N0YXJ0WV1bc3RhcnRYICsgd29yZC5sZW5ndGhdID0gMztcbiAgICB9XG5cbiAgICB0aGlzLl91c2VkV29yZHMucHVzaCh3b3JkKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBQcm92aWRlIGEgcG9zc2libGUgaGludCBzdHJ1Y3R1cmU6XG4gICAqIHtcbiAgICogICAgeDogMCxcbiAgICogICAgeTogMCxcbiAgICogICAgd29yZDogbnVsbCxcbiAgICogICAgdmVydGljYWw6IGZhbHNlXG4gICAqIH1cbiAgICovXG4gIGdldEhpbnRXb3JkKCkge1xuICAgIGxldCByZXR1cm5FbGVtZW50ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICB3b3JkOiBudWxsXG4gICAgfTtcbiAgICB2YXIgY3VycmVudEVsZW1lbnQgPSByZXR1cm5FbGVtZW50O1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9ib2FyZFNpemU7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLl9ib2FyZFNpemU7IHgrKykge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuX2JvYXJkW3ldW3hdO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc0FTdHJpbmcoZWxlbWVudCkpIGN1cnJlbnRFbGVtZW50ID0gdGhpcy5fZmluZFBvc3NpYmxlV29yZCh4LCB5KTtcbiAgICAgICAgZWxzZSBjb250aW51ZTtcblxuICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQud29yZCAmJlxuICAgICAgICAgICAgKCFyZXR1cm5FbGVtZW50LndvcmQgfHxcbiAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudC53b3JkICYmXG4gICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LndvcmQubGVuZ3RoID4gcmV0dXJuRWxlbWVudC53b3JkLmxlbmd0aClcbiAgICAgICAgKSByZXR1cm5FbGVtZW50ID0gY3VycmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHJldHVybkVsZW1lbnQud29yZCAmJiByZXR1cm5FbGVtZW50LndvcmQubGVuZ3RoID09PSB0aGlzLl9ib2FyZFNpemUpIHJldHVybiByZXR1cm5FbGVtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5FbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgbWV0aG9kc1xuICAgKi9cbiAgLyoqIGNoZWNrIGlmIGVsZW1lbnQgaXMgYSBzdHJpbmcgKi9cbiAgX2lzQVN0cmluZyhlbGVtZW50KSB7IHJldHVybiB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZyc7IH1cbiAgLyoqIGNoZWNrIGlmIGVsZW1lbnQgaXMgYSBudW1iZXIgKi9cbiAgX2lzQU51bWJlcihlbGVtZW50KSB7IHJldHVybiAhdGhpcy5faXNBU3RyaW5nKGVsZW1lbnQpOyB9XG4gIC8qKiBjaGVjayBpZiBhIGNlbGwgaXMgYSB2ZXJ0aWNhbCBibG9ja2VyICovXG4gIF9pc0FWZXJ0aWNhbEJsb2NrZXIoZWxlbWVudCkge3JldHVybiAhdGhpcy5faXNBTnVtYmVyKGVsZW1lbnQpIHx8IGVsZW1lbnQgPT09IDEgfHwgZWxlbWVudCA+PSAzO31cbiAgLyoqIGNoZWNrIGlmIGEgY2VsbCBpcyBhIGhvcml6b250YWwgYmxvY2tlciAqL1xuICBfaXNBSG9yaXpvbnRhbEJsb2NrZXIoZWxlbWVudCkge3JldHVybiAhdGhpcy5faXNBTnVtYmVyKGVsZW1lbnQpIHx8IGVsZW1lbnQgPT09IDIgfHwgZWxlbWVudCA+PSAzO31cbiAgLyoqXG4gICAqIGNoZWNrIGlmIHdvcmQgbGV0dGVycyBpbnRlcnNlY3RzIGV4aXN0aW5nIGxldHRlcnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WCAtIGZpcnN0IGxldHRlciBjb2x1bW5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WSAtIGZpcnN0IGxldHRlciByb3dcbiAgICogQHBhcmFtIHtzdHJpbmd9IHdvcmQgIC0gd29yZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIC0gaXMgd29yZCB2ZXJ0aWNhbCBvciBob3Jpem9udGFsXG4gICAqL1xuICBfY2hlY2tQb3NzaWJsZUxldHRlcnMoc3RhcnRYLCBzdGFydFksIHdvcmQsIHZlcnRpY2FsID0gZmFsc2UpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGVja1ggPSB2ZXJ0aWNhbCA/IHN0YXJ0WCA6IHN0YXJ0WCArIGk7XG4gICAgICBsZXQgY2hlY2tZID0gdmVydGljYWwgPyBzdGFydFkgKyBpIDogc3RhcnRZO1xuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLl9ib2FyZFtjaGVja1ldW2NoZWNrWF07XG5cbiAgICAgIGlmICh0aGlzLl9pc0FTdHJpbmcoZWxlbWVudCkgJiYgZWxlbWVudCAhPT0gWy4uLndvcmRdW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqIGRlZmF1bHQgYm9hcmQgc2l6ZSAqL1xuICBnZXQgX2RlZmF1bHRCb2FyZFNpemUoKSB7IHJldHVybiAxMTt9XG4gIC8qKlxuICAgKiBhZGQgZGljdGlvbmFyeVxuICAgKiBPbmNlIGRpY2l0aW9uYXJ5IGlzIHByZWxvYWRlZCBsaWJyYXJ5IHdvbid0IGxvYWQgZGljdGlvbmFyeSBhZ2FpbiBidXQgdXNlIGV4aXN0aW5nIG9uZSBieSBuYW1lLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSB1bmlxdWUgbmFtZSBmb3IgdGhlIGRpY3Rpb25hcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBkaWN0aW9uYXJ5IHN0cmluZy5cbiAgICogKi9cbiAgX2FkZERpY3Rpb25hcnkobmFtZSwgc3RyaW5nKSB7XG4gICAgaWYgKG5hbWUgaW4gdGhpcy5fZGljdGlvbmFyaWVzKSByZXR1cm47XG4gICAgbGV0IGRpY3QgPSBuZXcgVHJpZShzdHJpbmcpO1xuXG4gICAgdGhpcy5fZGljdGlvbmFyaWVzW25hbWVdID0gbmV3IFBUcmllKGRpY3QucGFjaygpKTtcbiAgfVxuICAvKiogY2xlYW4gYm9hcmQgKi9cbiAgX2NsZWFuQm9hcmQoKSB7XG4gICAgdGhpcy5fYm9hcmQgPSBbXTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5fYm9hcmRTaXplOyB5KyspIHtcbiAgICAgIGxldCBfYXJyYXkgPSBbXTtcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLl9ib2FyZFNpemU7IHgrKykge1xuICAgICAgICBfYXJyYXkucHVzaCgwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYm9hcmQucHVzaChfYXJyYXkpO1xuICAgIH1cbiAgfVxuICAvKiogYWRkIGluaXRpYWwgaG9yaXpvbnRhbCBjZW50ZXJlZCB3b3JkICovXG4gIF9zZXRJbml0aWFsUmFuZG9tV29yZCgpIHtcbiAgICBsZXQgd29yZCA9IG51bGw7XG4gICAgbGV0IHJhbmRvbUxldHRlcklEID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuYWxwaGFiZXQubGVuZ3RoIC0gMikpO1xuXG4gICAgd2hpbGUgKCF3b3JkKSB7XG4gICAgICBsZXQgcmFuZG9tV29yZHMgPSB0aGlzLl9nZXRXb3Jkc0FycmF5QnlMZXR0ZXJJRChyYW5kb21MZXR0ZXJJRCwgMSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZG9tV29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHJhbmRvbVdvcmQgPSByYW5kb21Xb3Jkc1tpXTtcblxuICAgICAgICBpZiAodGhpcy5pc1VzZWRXb3JkKHJhbmRvbVdvcmQpIHx8XG4gICAgICAgICAgICByYW5kb21Xb3JkLmxlbmd0aCA8IE1hdGguZmxvb3IodGhpcy5fYm9hcmRTaXplICogMC41KSB8fFxuICAgICAgICAgICAgcmFuZG9tV29yZC5sZW5ndGggPj0gTWF0aC5mbG9vcih0aGlzLl9ib2FyZFNpemUpKSBjb250aW51ZTtcbiAgICAgICAgZWxzZSB7IHdvcmQgPSByYW5kb21Xb3JkOyBicmVhazt9XG4gICAgICB9XG5cbiAgICAgIHJhbmRvbUxldHRlcklEID0gcmFuZG9tTGV0dGVySUQgPCB0aGlzLmFscGhhYmV0Lmxlbmd0aCAtIDEgPyByYW5kb21MZXR0ZXJJRCArIDEgOiAwO1xuICAgIH1cblxuICAgIGxldCB4ID0gTWF0aC5mbG9vcigodGhpcy5fYm9hcmRTaXplIC0gd29yZC5sZW5ndGgpICogMC41KTtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IodGhpcy5fYm9hcmRTaXplICogMC40ICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLl9ib2FyZFNpemUgKiAwLjIpKTtcblxuICAgIHRoaXMuYWRkV29yZCh4LCB5LCB3b3JkKTtcbiAgfVxuICAvKipcbiAgICogcHJvdmlkZXMgbGV0dGVyIGlkIGluIHRoZSBhbHBoYWJldFxuICAgKiBAcGFyYW0ge2NoYXJ9IGxldHRlciAtIExldHRlci5cbiAgICogKi9cbiAgX2dldExldHRlcklEKGxldHRlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbHBoYWJldC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuYWxwaGFiZXRbaV0udG9Mb3dlckNhc2UoKSA9PT0gbGV0dGVyLnRvTG93ZXJDYXNlKCkpIHJldHVybiBpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuICAvKipcbiAgICogcHJvdmlkZXMgd29yZHMgYXJyYXkgYmFzZWQgb24gbGV0dGVyIGlkIGFuZCBkaWN0aW9uYXJ5IHR5cGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxldHRlcklEIC0gTGV0dGVyIElEIGluIHRoZSBhbHBoYWJldFxuICAgKiBAcGFyYW0ge251bWJlcn0gZGljdGlvbmFyeVR5cGU6XG4gICAqIDAgLSBtYWluIGRpY3Rpb25hcnkgKGRlZmF1bHQpXG4gICAqIDEgLSBzZWNvbmRhcnkgZGljdGlvbmFyeVxuICAgKi9cbiAgX2dldFdvcmRzQXJyYXlCeUxldHRlcklEKGxldHRlcklELCBkaWN0aW9uYXJ5VHlwZSA9IDApIHtcbiAgICBsZXQgY3VycmVudExldHRlciA9IHRoaXMuYWxwaGFiZXRbbGV0dGVySURdO1xuICAgIGxldCBuZXh0TGV0dGVyID0gdGhpcy5hbHBoYWJldFtsZXR0ZXJJRCA8IHRoaXMuYWxwaGFiZXQubGVuZ3RoIC0gMSA/IGxldHRlcklEICsgMSA6IDBdO1xuICAgIGxldCB3b3JkcyA9IFtdO1xuICAgIGxldCBkaWN0aW9uYXJ5ID0gZGljdGlvbmFyeVR5cGUgPyB0aGlzLl9zZWNvbmRhcnlEaWN0aW9uYXJ5IDogdGhpcy5fbWFpbkRpY3Rpb25hcnk7XG5cbiAgICBpZiAoZGljdGlvbmFyeSkgd29yZHMgPSBkaWN0aW9uYXJ5LndvcmRzKGN1cnJlbnRMZXR0ZXIsIG5leHRMZXR0ZXIpO1xuXG4gICAgZGljdGlvbmFyeSA9IG51bGw7XG5cbiAgICByZXR1cm4gd29yZHM7XG4gIH1cbiAgLyoqXG4gICAqIEZpbmQgcG9zc2libGUgd29yZCBmb3IgYSBjZWxsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gY29sdW1uIHZhbHVlIGZvciBhIGNlbGxcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSByb3cgdmFsdWUgZm9yIGEgY2VsbFxuICAgKiBAcmV0dXJucyBzdHJ1Y3R1cmU6XG4gICAqIHtcbiAgICogICAgeDogMCxcbiAgICogICAgeTogMCxcbiAgICogICAgd29yZDogbnVsbCxcbiAgICogICAgdmVydGljYWw6IGZhbHNlXG4gICAqIH1cbiAgICovXG4gIF9maW5kUG9zc2libGVXb3JkKHgsIHkpIHtcbiAgICBsZXQgcmVnRXhwT2JqZWN0ID0gbnVsbDtcbiAgICBsZXQgcmV0dXJuV29yZCA9IG51bGw7XG4gICAgbGV0IHJldHVyblggPSAwO1xuICAgIGxldCByZXR1cm5ZID0gMDtcbiAgICBsZXQgdmVydGljYWwgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICB2ZXJ0aWNhbCA9ICEhaTtcblxuICAgICAgcmVnRXhwT2JqZWN0ID0gdGhpcy5fZ2VuZXJhdGVSZWdFeHAoeCwgeSwgdmVydGljYWwpO1xuICAgICAgaWYgKCFyZWdFeHBPYmplY3QpIGNvbnRpbnVlO1xuXG4gICAgICByZXR1cm5Xb3JkID0gdGhpcy5fZmluZFdvcmRCeVJlZ0V4cChyZWdFeHBPYmplY3QucmVnRXhwKTtcbiAgICAgIGlmICghcmV0dXJuV29yZCkgY29udGludWU7XG5cbiAgICAgIGZvciAobGV0IGwgPSAwOyBsIDw9IHJlZ0V4cE9iamVjdC5iZWZvcmUgKyAxOyBsKyspIHtcbiAgICAgICAgaWYgKGwgPCByZXR1cm5Xb3JkLmxlbmd0aCAmJlxuICAgICAgICAgICAgcmV0dXJuV29yZFtsXS50b1N0cmluZygpID09PSB0aGlzLl9ib2FyZFt5XVt4XS50b1N0cmluZygpICYmXG4gICAgICAgICAgICAodmVydGljYWwgPyB5IDogeCkgLSBsID49IDAgJiYgKHZlcnRpY2FsID8geSA6IHgpIC0gbCArIHJldHVybldvcmQubGVuZ3RoIDw9IHRoaXMuX2JvYXJkU2l6ZSkge1xuICAgICAgICAgIGxldCBjaGVja1ggPSB2ZXJ0aWNhbCA/IHggOiB4ICsgcmVnRXhwT2JqZWN0LmJldHdlZW4gKyAocmVnRXhwT2JqZWN0LmJldHdlZW4gPyAxIDogMCk7XG4gICAgICAgICAgbGV0IGNoZWNrWSA9IHZlcnRpY2FsID8geSArIHJlZ0V4cE9iamVjdC5iZXR3ZWVuICsgKHJlZ0V4cE9iamVjdC5iZXR3ZWVuID8gMSA6IDApIDogeTtcblxuICAgICAgICAgIGlmICh0aGlzLl9ib2FyZFtjaGVja1ldW2NoZWNrWF0gPT09IHJldHVybldvcmRbbCArIHJlZ0V4cE9iamVjdC5iZXR3ZWVuICsgKHJlZ0V4cE9iamVjdC5iZXR3ZWVuID8gMSA6IDApXSkge1xuICAgICAgICAgICAgcmV0dXJuWCA9IHZlcnRpY2FsID8geCA6IHggLSBsO1xuICAgICAgICAgICAgcmV0dXJuWSA9IHZlcnRpY2FsID8geSAtIGwgOiB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXR1cm5Xb3JkKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogcmV0dXJuWCxcbiAgICAgIHk6IHJldHVyblksXG4gICAgICB3b3JkOiByZXR1cm5Xb3JkLFxuICAgICAgdmVydGljYWw6IHZlcnRpY2FsXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogUHJvdmRlcyBwb3NzaWJsZSByZWd1bGFyIGV4cHJlc3Npb24gZm9yIGNlbGxcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBzdGFydCBsZXR0ZXIgY29sdW1uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gc3RhcnQgbGV0dGVyIHJvd1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIC0gaXMgd29yZCB2ZXJ0aWNhbCBvciBob3Jpem9udGFsXG4gICAqIEByZXR1cm5zIHN0cnVjdHVyZTpcbiAgICoge1xuICAgKiBiZWZvcmUgICAgIHtudW1iZXJ9IC0+IGFtb3VudCBvZiBlbXB0eSBjZWxscyBiZWZvcmUgZmlyc3QgbGV0dGVyXG4gICAqIGJldHdlZW4gICAge251bWJlcn0gLT4gYW1vdW50IG9mIGVtcHR5IGNlbGxzIGJldHdlZW4gbGV0dGVyc1xuICAgKiB0b3RhbEZyZWUgIHtudW1iZXJ9IC0+IHRvdGFsIGZyZWUgY2VsbHNcbiAgICogcmVnRXhwICAgICB7c3RyaW5nfSAtPiByZWd1bGFyIGV4cHJlc3Npb25cbiAgICogfVxuICAgKiBPUlxuICAgKiBOVUxMIC0+IGluIGNhc2UgcmVnIGV4cCBpcyBpbXBvc3NpYmxlXG4gICAqL1xuICBfZ2VuZXJhdGVSZWdFeHAoeCwgeSwgdmVydGljYWwgPSBmYWxzZSkge1xuICAgIHZhciByZWdFeHAgPSAnJztcbiAgICB2YXIgaURpZmYgPSBNYXRoLm1heCh0aGlzLl9ib2FyZFNpemUgLSAodmVydGljYWwgPyB5IDogeCksIHZlcnRpY2FsID8geSA6IHgpO1xuICAgIHZhciB3b3JkQXJyYXkgPSBuZXcgQXJyYXkodGhpcy5fYm9hcmRTaXplKTtcblxuICAgIHdvcmRBcnJheVt2ZXJ0aWNhbCA/IHkgOiB4XSA9IHRoaXMuX2JvYXJkW3ldW3hdO1xuICAgIGxldCBpc1RvcEJsb2NrZWQgPSBmYWxzZTtcbiAgICBsZXQgaXNCb3R0b21CbG9ja2VkID0gZmFsc2U7XG4gICAgbGV0IGxldHRlcnNDb3VudGVyID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaURpZmY7IGkrKykge1xuICAgICAgLy8gY2hlY2sgbW92ZW1lbnQgdG9wL2xlZnRcbiAgICAgIGlmICgodmVydGljYWwgPyB5IDogeCkgLSBpID49IDAgJiYgIWlzVG9wQmxvY2tlZCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuX2JvYXJkW3ZlcnRpY2FsID8geSAtIGkgOiB5XVt2ZXJ0aWNhbCA/IHggOiB4IC0gaV07XG5cbiAgICAgICAgaWYgKHZlcnRpY2FsICYmIHRoaXMuX2lzQVZlcnRpY2FsQmxvY2tlcihlbGVtZW50KSB8fCAhdmVydGljYWwgJiYgdGhpcy5faXNBSG9yaXpvbnRhbEJsb2NrZXIoZWxlbWVudCkpIHtcbiAgICAgICAgICBpZiAodGhpcy5faXNBU3RyaW5nKGVsZW1lbnQpICYmICFsZXR0ZXJzQ291bnRlcikge1xuICAgICAgICAgICAgd29yZEFycmF5W3ZlcnRpY2FsID8geSAtIGkgOiB4IC0gaV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgbGV0dGVyc0NvdW50ZXIrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNUb3BCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpID4gMSAmJiB0aGlzLl9pc0FTdHJpbmcoZWxlbWVudCkpIHdvcmRBcnJheVt2ZXJ0aWNhbCA/IHkgLSBpICsgMSA6IHggLSBpICsgMV0gPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3b3JkQXJyYXlbdmVydGljYWwgPyB5IC0gaSA6IHggLSBpXSA9ICdbYS16XSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIG1vdmVtZW50IGJvdHRvbS9yaWdodFxuICAgICAgaWYgKCh2ZXJ0aWNhbCA/IHkgOiB4KSArIGkgPCB0aGlzLl9ib2FyZFNpemUgJiYgIWlzQm90dG9tQmxvY2tlZCkge1xuICAgICAgICBsZXQgX2VsZW1lbnQgPSB0aGlzLl9ib2FyZFt2ZXJ0aWNhbCA/IHkgKyBpIDogeV1bdmVydGljYWwgPyB4IDogeCArIGldO1xuXG4gICAgICAgIGlmICh2ZXJ0aWNhbCAmJiB0aGlzLl9pc0FWZXJ0aWNhbEJsb2NrZXIoX2VsZW1lbnQpIHx8ICF2ZXJ0aWNhbCAmJiB0aGlzLl9pc0FIb3Jpem9udGFsQmxvY2tlcihfZWxlbWVudCkpIHtcbiAgICAgICAgICBpZiAodGhpcy5faXNBU3RyaW5nKF9lbGVtZW50KSAmJiAhbGV0dGVyc0NvdW50ZXIpIHtcbiAgICAgICAgICAgIHdvcmRBcnJheVt2ZXJ0aWNhbCA/IHkgKyBpIDogeCArIGldID0gX2VsZW1lbnQ7XG4gICAgICAgICAgICBsZXR0ZXJzQ291bnRlcisrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0JvdHRvbUJsb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGkgPiAxICYmIHRoaXMuX2lzQVN0cmluZyhfZWxlbWVudCkpIHdvcmRBcnJheVt2ZXJ0aWNhbCA/IHkgKyBpIC0gMSA6IHggKyBpIC0gMV0gPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3b3JkQXJyYXlbdmVydGljYWwgPyB5ICsgaSA6IHggKyBpXSA9ICdbYS16XSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZ2VlbmVyYXRlIHJlZ3VsYXIgZXhwcmVzc2lvblxuXG4gICAgcmVnRXhwICs9ICdeKCc7XG4gICAgbGV0IGJlZm9yZUxldHRlckNvdW50ZXIgPSAwO1xuICAgIGxldCBhbnlDb3VudGVyID0gMDtcbiAgICBsZXQgdG90YWxGcmVlQ291bnRlciA9IDA7XG4gICAgbGV0IGJldHdlZW5MZXR0ZXJzQ291bnRlciA9IDA7XG5cbiAgICBsZXR0ZXJzQ291bnRlciA9IDA7XG4gICAgd29yZEFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50ID09PSAnW2Etel0nKSBhbnlDb3VudGVyKys7XG4gICAgICBlbHNlIGlmIChlbGVtZW50KSB7XG5cbiAgICAgICAgaWYgKCFsZXR0ZXJzQ291bnRlcikgYmVmb3JlTGV0dGVyQ291bnRlciA9IGFueUNvdW50ZXI7XG5cbiAgICAgICAgbGV0dGVyc0NvdW50ZXIrKztcblxuICAgICAgICBpZiAobGV0dGVyc0NvdW50ZXIgPT09IDEpIHJlZ0V4cCArPSAnW2Etel17MCwnICsgYW55Q291bnRlciArICd9JyArIGVsZW1lbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZWxzZSBpZiAobGV0dGVyc0NvdW50ZXIgPT09IDIpIHtcbiAgICAgICAgICBiZXR3ZWVuTGV0dGVyc0NvdW50ZXIgPSBhbnlDb3VudGVyO1xuICAgICAgICAgIHJlZ0V4cCArPSAnW2Etel17JyArIGFueUNvdW50ZXIgKyAnfScgKyBlbGVtZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdG90YWxGcmVlQ291bnRlciArPSBhbnlDb3VudGVyO1xuICAgICAgICBhbnlDb3VudGVyID0gMDtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIHRvdGFsRnJlZUNvdW50ZXIgKz0gYW55Q291bnRlcjtcbiAgICBpZiAoYW55Q291bnRlcikgcmVnRXhwICs9ICdbYS16XXswLCcgKyBhbnlDb3VudGVyICsgJ30nO1xuXG4gICAgcmVnRXhwICs9ICcpJCc7XG5cbiAgICBpZiAoIXRvdGFsRnJlZUNvdW50ZXIpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJlZm9yZTogYmVmb3JlTGV0dGVyQ291bnRlcixcbiAgICAgIGJldHdlZW46IGJldHdlZW5MZXR0ZXJzQ291bnRlcixcbiAgICAgIHRvdGFsRnJlZTogdG90YWxGcmVlQ291bnRlcixcbiAgICAgIHJlZ0V4cDogcmVnRXhwXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogUHJvdmlkZXMgYSBwb3NzaWJsZSB3b3JkIGJ5IHJlZyBleHBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZ0V4cCAtIHJlZ3VsYXIgZXhwcmVzc2lvblxuICAgKi9cbiAgX2ZpbmRXb3JkQnlSZWdFeHAocmVnRXhwKSB7XG4gICAgbGV0IHdvcmQgPSBudWxsO1xuICAgIGxldCBzdGFydExldHRlcklEID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuYWxwaGFiZXQubGVuZ3RoIC0gMikpO1xuICAgIGxldCByYW5kb21MZXR0ZXJJRCA9IHN0YXJ0TGV0dGVySUQ7XG4gICAgbGV0IHJlZ3VsYXJFeHByZXNzaW9uID0gbmV3IFJlZ0V4cChyZWdFeHApO1xuXG4gICAgLy8gdmFyIF90aGlzID0gdGhpcztcblxuICAgIHdoaWxlICghd29yZCkge1xuICAgICAgbGV0IHJhbmRvbVdvcmRzID0gdGhpcy5fZ2V0V29yZHNBcnJheUJ5TGV0dGVySUQocmFuZG9tTGV0dGVySUQsIDEpO1xuICAgICAgLyoqXG4gICAgICAgKiBGYXN0ZXIgd2F5IGJ1dCBvbmx5IHNtYWxsIHdvcmRzIGNvbWUgZmlyc3QuXG4gICAgICAgKi9cbiAgICAgIC8vIHdvcmQgPSByYW5kb21Xb3Jkcy5maW5kKChlbCk9PntcbiAgICAgIC8vICAgcmV0dXJuIGVsLm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKSAmJlxuICAgICAgLy8gICAgICAgICAgZWwubGVuZ3RoID49IDMgJiZcbiAgICAgIC8vICAgICAgICAgICFfdGhpcy5pc1VzZWRXb3JkKGVsKTtcbiAgICAgIC8vIH0pIHx8IG51bGw7XG5cbiAgICAgIHdvcmQgPSBudWxsO1xuICAgICAgcmFuZG9tV29yZHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvbikgJiYgZWxlbWVudC5sZW5ndGggPj0gMyAmJlxuICAgICAgICAgICAgIXRoaXMuaXNVc2VkV29yZChlbGVtZW50KSAmJiAoIXdvcmQgfHwgZWxlbWVudC5sZW5ndGggPiB3b3JkLmxlbmd0aCkpIHtcbiAgICAgICAgICB3b3JkID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGlmICh3b3JkKSBicmVhaztcblxuICAgICAgcmFuZG9tTGV0dGVySUQgPSByYW5kb21MZXR0ZXJJRCA8IHRoaXMuYWxwaGFiZXQubGVuZ3RoIC0gMSA/IHJhbmRvbUxldHRlcklEICsgMSA6IDA7XG4gICAgICBpZiAocmFuZG9tTGV0dGVySUQgPT09IHN0YXJ0TGV0dGVySUQpIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB3b3JkO1xuICB9XG59XG4iLCJpbXBvcnQgQUkgZnJvbSAnLi9haSc7XG5leHBvcnQgZGVmYXVsdCBBSTtcbiJdLCJzb3VyY2VSb290IjoiIn0=