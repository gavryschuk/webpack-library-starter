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
    /** provides current level points */

  }, {
    key: "points",
    get: function get() {
      return this._points;
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
      this._points = 0;
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

      this._checkPointsForWord(word);

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
    /** checks if possible points for a word and adds it if needed */

  }, {
    key: "_checkPointsForWord",
    value: function _checkPointsForWord(word) {
      if (!word || this._usedWords.length < 3) return;
      word = word.toLowerCase();

      var firstLetterID = this._getLetterID([].concat(_toConsumableArray(word))[0]);

      var wordsArray = this._getWordsArrayByLetterID(firstLetterID, 1);

      if (wordsArray.find(function (element) {
        return element === word;
      })) {
        this._points += word.length;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jkc2FpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly93b3Jkc2FpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmRzYWkvLi9ub2RlX21vZHVsZXMvZGF3Zy1sb29rdXAvbGliL2FscGhhY29kZS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLy4vbm9kZV9tb2R1bGVzL2Rhd2ctbG9va3VwL2xpYi9oaXN0b2dyYW0uanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS8uL25vZGVfbW9kdWxlcy9kYXdnLWxvb2t1cC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS8uL25vZGVfbW9kdWxlcy9kYXdnLWxvb2t1cC9saWIvbm9kZS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLy4vbm9kZV9tb2R1bGVzL2Rhd2ctbG9va3VwL2xpYi9wdHJpZS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLy4vbm9kZV9tb2R1bGVzL2Rhd2ctbG9va3VwL2xpYi90cmllLmpzIiwid2VicGFjazovL3dvcmRzYWkvLi9ub2RlX21vZHVsZXMvZGF3Zy1sb29rdXAvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vd29yZHNhaS8uL3NyYy9haS5qcyIsIndlYnBhY2s6Ly93b3Jkc2FpLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFJIiwiX2EiLCJpIiwiY2hhckNvZGVBdCIsImoiLCJwdXNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiX3BvaW50cyIsIl9ib2FyZFNpemUiLCJfdXNlZFdvcmRzIiwiX2JvYXJkIiwiX2RpY3Rpb25hcmllcyIsImVuZEJvYXJkIiwibmFtZSIsInN0cmluZyIsIl9hZGREaWN0aW9uYXJ5IiwiX21haW5EaWN0aW9uYXJ5IiwiX3NlY29uZGFyeURpY3Rpb25hcnkiLCJib2FyZFNpemUiLCJfZGVmYXVsdEJvYXJkU2l6ZSIsIl9jbGVhbkJvYXJkIiwiX3NldEluaXRpYWxSYW5kb21Xb3JkIiwid29yZCIsImZpbmQiLCJlbGVtZW50IiwidG9Mb3dlckNhc2UiLCJmaXJzdExldHRlcklEIiwiX2dldExldHRlcklEIiwid29yZHNBcnJheSIsIl9nZXRXb3Jkc0FycmF5QnlMZXR0ZXJJRCIsInN0YXJ0WCIsInN0YXJ0WSIsInZlcnRpY2FsIiwiYW1vdW50IiwiYmxvY2tlcnNDb3VudGVyIiwibGV0dGVyc0NvdW50ZXIiLCJjaGVja1giLCJjaGVja1kiLCJfaXNBU3RyaW5nIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNoZWNrUG9zc2libGVDZWxscyIsIl9jaGVja1Bvc3NpYmxlTGV0dGVycyIsImlzVXNlZFdvcmQiLCJkb2VzV29yZEV4aXN0IiwiZm9yRWFjaCIsImluZGV4IiwiZWxlbWVudFkiLCJlbGVtZW50WCIsInRhcmdldFgiLCJ0YXJnZXRZIiwidGFyZ2V0RWxlbWVudCIsIl9pc0FWZXJ0aWNhbEJsb2NrZXIiLCJfaXNBSG9yaXpvbnRhbEJsb2NrZXIiLCJfY2hlY2tQb2ludHNGb3JXb3JkIiwicmV0dXJuRWxlbWVudCIsIngiLCJ5IiwiY3VycmVudEVsZW1lbnQiLCJfZmluZFBvc3NpYmxlV29yZCIsIl9pc0FOdW1iZXIiLCJkaWN0IiwicGFjayIsIl9hcnJheSIsInJhbmRvbUxldHRlcklEIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYWxwaGFiZXQiLCJyYW5kb21Xb3JkcyIsInJhbmRvbVdvcmQiLCJhZGRXb3JkIiwibGV0dGVyIiwibGV0dGVySUQiLCJkaWN0aW9uYXJ5VHlwZSIsImN1cnJlbnRMZXR0ZXIiLCJuZXh0TGV0dGVyIiwid29yZHMiLCJkaWN0aW9uYXJ5IiwicmVnRXhwT2JqZWN0IiwicmV0dXJuV29yZCIsInJldHVyblgiLCJyZXR1cm5ZIiwiX2dlbmVyYXRlUmVnRXhwIiwiX2ZpbmRXb3JkQnlSZWdFeHAiLCJyZWdFeHAiLCJsIiwiYmVmb3JlIiwidG9TdHJpbmciLCJiZXR3ZWVuIiwiaURpZmYiLCJtYXgiLCJ3b3JkQXJyYXkiLCJBcnJheSIsImlzVG9wQmxvY2tlZCIsImlzQm90dG9tQmxvY2tlZCIsIl9lbGVtZW50IiwiYmVmb3JlTGV0dGVyQ291bnRlciIsImFueUNvdW50ZXIiLCJ0b3RhbEZyZWVDb3VudGVyIiwiYmV0d2VlbkxldHRlcnNDb3VudGVyIiwidG90YWxGcmVlIiwic3RhcnRMZXR0ZXJJRCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiUmVnRXhwIiwibWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxZQUFZLCtDQUErQztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7OztBQ3RRdkMiLCJmaWxlIjoid29yZHNhaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid29yZHNhaVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3b3Jkc2FpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndvcmRzYWlcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkJBU0UgPSAzNjtcbi8vIFBsYWNlaG9sZGVyXG52YXIgUFRyaWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBUcmllKCkge1xuICAgIH1cbiAgICByZXR1cm4gUFRyaWU7XG59KCkpO1xuZXhwb3J0cy5QVHJpZSA9IFBUcmllO1xuLy8gMCwgMSwgMiwgLi4uLCBBLCBCLCBDLCAuLi4sIDAwLCAwMSwgLi4uIEFBLCBBQiwgQUMsIC4uLiwgQUFBLCBBQUIsIC4uLlxuZnVuY3Rpb24gdG9BbHBoYUNvZGUobikge1xuICAgIHZhciBzID0gJyc7XG4gICAgdmFyIHBsYWNlcyA9IDE7XG4gICAgZm9yICh2YXIgcmFuZ2UgPSBleHBvcnRzLkJBU0U7IG4gPj0gcmFuZ2U7IG4gLT0gcmFuZ2UsIHBsYWNlcysrLCByYW5nZSAqPSBleHBvcnRzLkJBU0UpIHsgfVxuICAgIHdoaWxlIChwbGFjZXMtLSkge1xuICAgICAgICB2YXIgZCA9IG4gJSBleHBvcnRzLkJBU0U7XG4gICAgICAgIHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChkIDwgMTAgPyA0OCA6IDU1KSArIGQpICsgcztcbiAgICAgICAgbiA9IChuIC0gZCkgLyBleHBvcnRzLkJBU0U7XG4gICAgfVxuICAgIHJldHVybiBzO1xufVxuZXhwb3J0cy50b0FscGhhQ29kZSA9IHRvQWxwaGFDb2RlO1xuZnVuY3Rpb24gZnJvbUFscGhhQ29kZShzKSB7XG4gICAgdmFyIG4gPSAwO1xuICAgIGZvciAodmFyIHBsYWNlcyA9IDEsIHJhbmdlID0gZXhwb3J0cy5CQVNFOyBwbGFjZXMgPCBzLmxlbmd0aDsgbiArPSByYW5nZSwgcGxhY2VzKyssIHJhbmdlICo9IGV4cG9ydHMuQkFTRSkgeyB9XG4gICAgZm9yICh2YXIgaSA9IHMubGVuZ3RoIC0gMSwgcG93ID0gMTsgaSA+PSAwOyBpLS0sIHBvdyAqPSBleHBvcnRzLkJBU0UpIHtcbiAgICAgICAgdmFyIGQgPSBzLmNoYXJDb2RlQXQoaSkgLSA0ODtcbiAgICAgICAgaWYgKGQgPiAxMCkge1xuICAgICAgICAgICAgZCAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG4gKz0gZCAqIHBvdztcbiAgICB9XG4gICAgcmV0dXJuIG47XG59XG5leHBvcnRzLmZyb21BbHBoYUNvZGUgPSBmcm9tQWxwaGFDb2RlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWxwaGFjb2RlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xudmFyIEhpc3RvZ3JhbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSGlzdG9ncmFtKCkge1xuICAgICAgICB0aGlzLmNvdW50cyA9IHt9O1xuICAgIH1cbiAgICBIaXN0b2dyYW0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoa2V5LCBuKSB7XG4gICAgICAgIGlmIChuID09PSB2b2lkIDApIHsgbiA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBrZXkgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb3VudHNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50c1trZXldID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvdW50c1trZXldICs9IG47XG4gICAgfTtcbiAgICBIaXN0b2dyYW0ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXksIG4pIHtcbiAgICAgICAgaWYgKG4gPT09IHZvaWQgMCkgeyBuID0gMTsgfVxuICAgICAgICB0aGlzLmluaXQoa2V5LCBuKTtcbiAgICB9O1xuICAgIEhpc3RvZ3JhbS5wcm90b3R5cGUuY291bnRPZiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5pbml0KGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50c1trZXldO1xuICAgIH07XG4gICAgSGlzdG9ncmFtLnByb3RvdHlwZS5oaWdoZXN0ID0gZnVuY3Rpb24gKHRvcCkge1xuICAgICAgICByZXR1cm4gdXRpbF8xLnNvcnRCeVZhbHVlcyh0aGlzLmNvdW50cywgJ2Rlc2MnKS5zbGljZSgwLCB0b3ApO1xuICAgIH07XG4gICAgcmV0dXJuIEhpc3RvZ3JhbTtcbn0oKSk7XG5leHBvcnRzLkhpc3RvZ3JhbSA9IEhpc3RvZ3JhbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhpc3RvZ3JhbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgdHJpZV8xID0gcmVxdWlyZShcIi4vdHJpZVwiKTtcbmV4cG9ydHMuVHJpZSA9IHRyaWVfMS5UcmllO1xudmFyIHB0cmllXzEgPSByZXF1aXJlKFwiLi9wdHJpZVwiKTtcbmV4cG9ydHMuUFRyaWUgPSBwdHJpZV8xLlBUcmllO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgTm9kZVxuXG4gIEVhY2ggbm9kZSBjb250YWlucyBzb21lIHNwZWNpYWwgcHJvcGVydGllcyAoYmVnaW5pbmcgd2l0aCAnXycpLCBhcyB3ZWxsIGFzXG4gIGFyYml0cmFyeSBzdHJpbmcgcHJvcGVydGllcyBmb3Igc3RyaW5nIGZyYWdtZW50cyBjb250YWluZWQgaW4gdGhlIGlucHV0IHdvcmRcbiAgZGljdGlvbmFyeS5cblxuICBTdHJpbmcgcHJvcGVydGllcyBjYW4gYmUgXCJ0ZXJtaW5hbFwiIChoYXZlIGEgbnVtZXJpYyB2YWx1ZSBvZiAxKSwgb3IgY2FuXG4gIHJlZmVyYW5jZSBhbm90aGVyIGNoaWxkIE5vZGUuXG5cbiAgTm90ZSB0aGF0IGEgTm9kZSBjb250YWluaW5nIGEgdGVybWluYWwgJycgKGVtcHR5IHN0cmluZykgcHJvcGVydHksIGlzIGl0c2VsZlxuICBtYXJrZWQgYXMgYSB0ZXJtaW5hbCBOb2RlICh0aGUgcHJlZml4IGxlYWRpbmcgdG8gdGhpcyBub2RlIGlzIGEgd29yZCBpbiB0aGVcbiAgZGljdGlvbmFyeS5cbiovXG52YXIgTm9kZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9kZSgpIHtcbiAgICAgICAgLy8gTnVtYmVyIG9mIGNoaWxkIHByb3BlcnRpZXMuXG4gICAgICAgIHRoaXMuX3AgPSAwO1xuICAgIH1cbiAgICBOb2RlLnByb3RvdHlwZS5jaGlsZCA9IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHJldHVybiB0aGlzW3Byb3BdO1xuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUuc2V0Q2hpbGQgPSBmdW5jdGlvbiAocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAocHJvcCAhPT0gdGhpcy5fZykge1xuICAgICAgICAgICAgLy8gZGVsZXRlIHNlbGYuX2c7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGZbcHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fcCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9wID09PSAxKSB7XG4gICAgICAgICAgICAvLyB0aGlzLl9nID0gcHJvcDtcbiAgICAgICAgfVxuICAgICAgICBzZWxmW3Byb3BdID0gdmFsdWU7XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5kZWxldGVDaGlsZCA9IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHByb3AgPT09IHRoaXMuX2cpIHtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGlzLl9nO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3AgLT0gMTtcbiAgICAgICAgZGVsZXRlIHNlbGZbcHJvcF07XG4gICAgICAgIGlmICh0aGlzLl9wID09PSAxKSB7XG4gICAgICAgICAgICAvLyB0aGlzLl9nID0gdGhpcy5wcm9wcygpWzBdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBBIHByb3BlcnR5IGlzIGEgdGVybWluYWwgc3RyaW5nXG4gICAgTm9kZS5wcm90b3R5cGUuaXNUZXJtaW5hbFN0cmluZyA9IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5jaGlsZChwcm9wKSA9PT0gJ251bWJlcic7XG4gICAgfTtcbiAgICAvLyBUaGlzIG5vZGUgaXMgYSB0ZXJtaW5hbCBub2RlICh0aGUgcHJlZml4IHN0cmluZyBpcyBhIHdvcmQgaW4gdGhlXG4gICAgLy8gZGljdGlvbmFyeSkuXG4gICAgTm9kZS5wcm90b3R5cGUuaXNUZXJtaW5hbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNUZXJtaW5hbFN0cmluZygnJyk7XG4gICAgfTtcbiAgICAvLyBXZWxsIG9yZGVyZWQgbGlzdCBvZiBwcm9wZXJ0aWVzIGluIGEgbm9kZSAoc3RyaW5nIG9yIG9iamVjdCBwcm9wZXJ0aWVzKVxuICAgIC8vIFVzZSBub2Rlc09ubHkgPT09IHRydWUgdG8gcmV0dXJuIG9ubHkgcHJvcGVydGllcyBvZiBjaGlsZCBub2RlcyAobm90XG4gICAgLy8gdGVybWluYWwgc3RyaW5ncykuXG4gICAgTm9kZS5wcm90b3R5cGUucHJvcHMgPSBmdW5jdGlvbiAobm9kZXNPbmx5KSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9wcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG1lKSB7XG4gICAgICAgICAgICBpZiAoIW1lLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCAhPT0gJycgJiYgcHJvcFswXSAhPT0gJ18nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub2Rlc09ubHkgfHwgTm9kZS5pc05vZGUodGhpcy5jaGlsZChwcm9wKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJvcHMuc29ydCgpO1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbiAgICAvLyBDb21wdXRlIGluLWRlZ3JlZSBvZiBhbGwgbm9kZXMgYW5kIG1hcmsgdGhlXG4gICAgLy8gc2luZ2xldG9uIG5vZGVzLlxuICAgIE5vZGUuY291bnREZWdyZWUgPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICB2YXIgd2Fsa2VyID0gbmV3IFdhbGtlcihyb290KTtcbiAgICAgICAgd2Fsa2VyLmRmcyhmdW5jdGlvbiAob3JkZXIsIG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChvcmRlciA9PT0gJ3Bvc3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGUuX2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuX2QgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5fZCsrO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIE5vZGUgaGFzIGp1c3QgYSBzaW5nbGUgKG5vbi1zcGVjaWFsKSBwcm9wZXJ0eS5cbiAgICBOb2RlLnByb3RvdHlwZS5pc1NpbmdsZXRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3AgPT09IDEgJiYgIXRoaXMuaXNUZXJtaW5hbCgpO1xuICAgIH07XG4gICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCBhcyBhIFR5cGUgR3VhcmQgKFR5cGVTY3JpcHQpXG4gICAgTm9kZS5pc05vZGUgPSBmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE5vZGU7XG4gICAgfTtcbiAgICByZXR1cm4gTm9kZTtcbn0oKSk7XG5leHBvcnRzLk5vZGUgPSBOb2RlO1xudmFyIFdhbGtlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2Fsa2VyKHJvb3QpIHtcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy52aXNpdE1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgV2Fsa2VyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52aXNpdE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBXYWxrZXIucHJvdG90eXBlLnZpc2l0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdGhpcy52aXNpdE1hcC5zZXQobm9kZSwgdHJ1ZSk7XG4gICAgfTtcbiAgICBXYWxrZXIucHJvdG90eXBlLnZpc2l0ZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdE1hcC5nZXQobm9kZSkgfHwgZmFsc2U7XG4gICAgfTtcbiAgICBXYWxrZXIucHJvdG90eXBlLmRmcyA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fZGZzKHRoaXMucm9vdCwgbnVsbCwgJycsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgLy8gRGVwdGgtZmlyc3Qgc2VhcmNoIHZpYSBjYWxsYmFjayBoYW5kbGVyLlxuICAgIFdhbGtlci5wcm90b3R5cGUuX2RmcyA9IGZ1bmN0aW9uIChub2RlLCBwYXJlbnQsIHByb3BQYXJlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgLy8gVGhlIGhhbmRsZXIgY2FuIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBmcm9tIGRpZmZlcmVudCBwYXJlbnRzXG4gICAgICAgIC8vIHNpbmNlIE5vZGVzIGNhbiBmb3JtIGEgbXVsdGktZ3JhcGguXG4gICAgICAgIGhhbmRsZXIoJ3ByZScsIG5vZGUsIHBhcmVudCwgcHJvcFBhcmVudCk7XG4gICAgICAgIGlmICh0aGlzLnZpc2l0ZWQobm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpc2l0KG5vZGUpO1xuICAgICAgICB2YXIgcHJvcHMgPSBub2RlLnByb3BzKHRydWUpO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHByb3BzXzEgPSBwcm9wczsgX2kgPCBwcm9wc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc18xW19pXTtcbiAgICAgICAgICAgIHRoaXMuX2Rmcyhub2RlLmNoaWxkKHByb3ApLCBub2RlLCBwcm9wLCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVyKCdwb3N0Jywgbm9kZSwgcGFyZW50LCBwcm9wUGFyZW50KTtcbiAgICB9O1xuICAgIHJldHVybiBXYWxrZXI7XG59KCkpO1xuZXhwb3J0cy5XYWxrZXIgPSBXYWxrZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub2RlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBhbHBoYWNvZGVfMSA9IHJlcXVpcmUoXCIuL2FscGhhY29kZVwiKTtcbmV4cG9ydHMuTk9ERV9TRVAgPSAnOyc7XG5leHBvcnRzLlNUUklOR19TRVAgPSAnLCc7XG5leHBvcnRzLlRFUk1JTkFMX1BSRUZJWCA9ICchJztcbmV4cG9ydHMuTUlOX0xFVFRFUiA9ICdhJztcbmV4cG9ydHMuTUFYX0xFVFRFUiA9ICd6JztcbmV4cG9ydHMuTUFYX1dPUkQgPSBuZXcgQXJyYXkoMTApLmpvaW4oZXhwb3J0cy5NQVhfTEVUVEVSKTtcbnZhciByZU5vZGVQYXJ0ID0gbmV3IFJlZ0V4cCgnKFsnICsgZXhwb3J0cy5NSU5fTEVUVEVSICsgJy0nICsgZXhwb3J0cy5NQVhfTEVUVEVSICtcbiAgICAnXSspKCcgKyBleHBvcnRzLlNUUklOR19TRVAgKyAnfFswLTlBLVpdK3wkKScsICdnJyk7XG52YXIgcmVTeW1ib2wgPSBuZXcgUmVnRXhwKFwiKFswLTlBLVpdKyk6KFswLTlBLVpdKylcIik7XG4vKlxuICogUGFja2VkIFRyaWUgc3RydWN0dXJlLlxuICpcbiAqIFRoaXMgY2xhc3MgY2FuIHJlYWQgaW4gYSBwYWNrZWQgVHJpZSAoYWN0dWFsbHkgREFXRykgaW4gdGhlIGZvcm1cbiAqIG9mIGEgc3RyaW5nIGVuY29kaW5nIG9mIGEgc2V0IG9mIG5vZGVzLiAgSXQgd2lsbCB0aGVuIHNwaWx0IGl0XG4gKiBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3MsIGFuZCB1c2UgdGhlIHJlc3VsdGluZyBhcnJheSB0b1xuICogcmVzb2x2ZSBkaWN0aW9uYXJ5IG1lbWJlcnNoaXAuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICAvLyBVbnBhY2sgYSBwYWNrZWQgZGljdGlvbmFyeSBzdHJpbmcgZm9yIHVzZS5cbiAqICAgdmFyIHB0cmllID0gbmV3IFBUcmllKHBhY2tlZFN0cmluZyk7XG4gKlxuICogICAvLyBUZXN0IGEgd29yZCBmb3IgbWVtYmVyc2hpcCBpbiB0aGUgZGljdGlvbmFyeS5cbiAqICAgaWYgKHB0cmllLmlzV29yZChteVdvcmQpKSB7XG4gKiAgICAgLi4uXG4gKiAgIH1cbiAqXG4gKiAgIC8vIEZvciBjb21tYW5kIGNvbXBsZXRpb24gLSBmaW5kIGZpcnN0IDIwIHdvcmRzIHRoYXQgYmVnaW4gd2l0aCBhIHByZWZpeC5cbiAqICAgdmFyIHdvcmRzID0gcHRyaWUuY29tcGxldGlvbnMocHJlZml4LCAyMCk7XG4gKi9cbnZhciBQVHJpZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUFRyaWUocGFja2VkKSB7XG4gICAgICAgIHRoaXMuc3ltcyA9IFtdO1xuICAgICAgICB0aGlzLm5vZGVzID0gcGFja2VkLnNwbGl0KGV4cG9ydHMuTk9ERV9TRVApO1xuICAgICAgICB0aGlzLnN5bXMgPSBbXTtcbiAgICAgICAgdGhpcy5zeW1Db3VudCA9IDA7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICB2YXIgbSA9IHJlU3ltYm9sLmV4ZWModGhpcy5ub2Rlc1t0aGlzLnN5bUNvdW50XSk7XG4gICAgICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbHBoYWNvZGVfMS5mcm9tQWxwaGFDb2RlKG1bMV0pICE9PSB0aGlzLnN5bUNvdW50KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBTeW1ib2wgbmFtZSAtIGZvdW5kIFwiICsgbVsxXSArXG4gICAgICAgICAgICAgICAgICAgIFwiIHdoZW4gZXhwZWN0aW5nIFwiICsgYWxwaGFjb2RlXzEudG9BbHBoYUNvZGUodGhpcy5zeW1Db3VudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zeW1zW3RoaXMuc3ltQ291bnRdID0gYWxwaGFjb2RlXzEuZnJvbUFscGhhQ29kZShtWzJdKTtcbiAgICAgICAgICAgIHRoaXMuc3ltQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGVzLnNwbGljZSgwLCB0aGlzLnN5bUNvdW50KTtcbiAgICB9XG4gICAgLy8gSXMgd29yZCBpbiB0aGUgZGljdGlvbmFyeSAoZXhhY3QgbWF0Y2gpLlxuICAgIFBUcmllLnByb3RvdHlwZS5pc1dvcmQgPSBmdW5jdGlvbiAod29yZCkge1xuICAgICAgICBpZiAod29yZCA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaCh3b3JkKSA9PT0gd29yZDtcbiAgICB9O1xuICAgIC8vIFJldHVybnMgdGhlIGxvbmdlc3QgbWF0Y2ggdGhhdCBpcyBwcmVmaXggb2Ygd29yZC5cbiAgICBQVHJpZS5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbiAod29yZCkge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMubWF0Y2hlcyh3b3JkKTtcbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgICB9O1xuICAgIC8vIFJldHVybiBhbGwgZW50cmllcyB0aGF0IG1hdGNoIGEgcHJlZml4IG9mIHdvcmQgKGluIG9yZGVyIG9mIGluY3JlYXNpbmdcbiAgICAvLyBsZW5ndGguXG4gICAgUFRyaWUucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbiAod29yZCkge1xuICAgICAgICByZXR1cm4gdGhpcy53b3Jkcyh3b3JkLCB3b3JkICsgZXhwb3J0cy5NSU5fTEVUVEVSKTtcbiAgICB9O1xuICAgIC8vIFJldHVybiBhbGwgZW50cmllcyB0aGF0IGJlZ2luIHdpdGggYSBwcmVmaXguXG4gICAgUFRyaWUucHJvdG90eXBlLmNvbXBsZXRpb25zID0gZnVuY3Rpb24gKHByZWZpeCwgbGltaXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud29yZHMocHJlZml4LCBiZXlvbmQocHJlZml4KSwgbGltaXQpO1xuICAgIH07XG4gICAgUFRyaWUucHJvdG90eXBlLndvcmRzID0gZnVuY3Rpb24gKGZyb20sIGJleW9uZCwgbGltaXQpIHtcbiAgICAgICAgdmFyIHdvcmRzID0gW107XG4gICAgICAgIGZ1bmN0aW9uIGNhdGNoV29yZHMod29yZCwgY3R4KSB7XG4gICAgICAgICAgICBpZiAobGltaXQgIT09IHVuZGVmaW5lZCAmJiB3b3Jkcy5sZW5ndGggPj0gbGltaXQpIHtcbiAgICAgICAgICAgICAgICBjdHguYWJvcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdvcmRzLnB1c2god29yZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbnVtZXJhdGUoMCwgJycsIHsgZnJvbTogZnJvbSxcbiAgICAgICAgICAgIGJleW9uZDogYmV5b25kLFxuICAgICAgICAgICAgZm46IGNhdGNoV29yZHMsXG4gICAgICAgICAgICBwcmVmaXhlczogKGZyb20gKyBleHBvcnRzLk1JTl9MRVRURVIpID09PSBiZXlvbmRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB3b3JkcztcbiAgICB9O1xuICAgIFBUcmllLnByb3RvdHlwZS5lbnVtZXJhdGUgPSBmdW5jdGlvbiAoaW5vZGUsIHByZWZpeCwgY3R4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5ub2Rlc1tpbm9kZV07XG4gICAgICAgIHZhciBjb250ID0gdHJ1ZTtcbiAgICAgICAgZnVuY3Rpb24gZW1pdCh3b3JkKSB7XG4gICAgICAgICAgICBpZiAoY3R4LnByZWZpeGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdvcmQgPT09IGN0eC5mcm9tLnNsaWNlKDAsIHdvcmQubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHguZm4od29yZCwgY3R4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN0eC5mcm9tIDw9IHdvcmQgJiYgd29yZCA8IGN0eC5iZXlvbmQpIHtcbiAgICAgICAgICAgICAgICBjdHguZm4od29yZCwgY3R4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZVswXSA9PT0gZXhwb3J0cy5URVJNSU5BTF9QUkVGSVgpIHtcbiAgICAgICAgICAgIGVtaXQocHJlZml4KTtcbiAgICAgICAgICAgIGlmIChjdHguYWJvcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlID0gbm9kZS5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnJlcGxhY2UocmVOb2RlUGFydCwgZnVuY3Rpb24gKHcsIHN0ciwgcmVmKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBwcmVmaXggKyBzdHI7XG4gICAgICAgICAgICAvLyBEb25lIG9yIG5vIHBvc3NpYmxlIGZ1dHVyZSBtYXRjaCBmcm9tIHN0clxuICAgICAgICAgICAgaWYgKGN0eC5hYm9ydCB8fFxuICAgICAgICAgICAgICAgIG1hdGNoID49IGN0eC5iZXlvbmQgfHxcbiAgICAgICAgICAgICAgICBtYXRjaCA8IGN0eC5mcm9tLnNsaWNlKDAsIG1hdGNoLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaXNUZXJtaW5hbCA9IHJlZiA9PT0gZXhwb3J0cy5TVFJJTkdfU0VQIHx8IHJlZiA9PT0gJyc7XG4gICAgICAgICAgICBpZiAoaXNUZXJtaW5hbCkge1xuICAgICAgICAgICAgICAgIGVtaXQobWF0Y2gpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmVudW1lcmF0ZShfdGhpcy5pbm9kZUZyb21SZWYocmVmLCBpbm9kZSksIG1hdGNoLCBjdHgpO1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIFJlZmVyZW5jZXMgYXJlIGVpdGhlciBhYnNvbHV0ZSAoc3ltYm9sKSBvciByZWxhdGl2ZSAoMSBiYXNlZCkuXG4gICAgUFRyaWUucHJvdG90eXBlLmlub2RlRnJvbVJlZiA9IGZ1bmN0aW9uIChyZWYsIGlub2RlRnJvbSkge1xuICAgICAgICB2YXIgZG5vZGUgPSBhbHBoYWNvZGVfMS5mcm9tQWxwaGFDb2RlKHJlZik7XG4gICAgICAgIGlmIChkbm9kZSA8IHRoaXMuc3ltQ291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN5bXNbZG5vZGVdO1xuICAgICAgICB9XG4gICAgICAgIGRub2RlIC09IHRoaXMuc3ltQ291bnQ7XG4gICAgICAgIHJldHVybiBpbm9kZUZyb20gKyBkbm9kZSArIDE7XG4gICAgfTtcbiAgICByZXR1cm4gUFRyaWU7XG59KCkpO1xuZXhwb3J0cy5QVHJpZSA9IFBUcmllO1xuLy8gUmV0dXJuIGEgc3RyaW5nIHRoYXQgaXMgdGhlIHNtYWxsZXN0IHN0cmluZyBncmVhdGVyIHRoYW5cbi8vIGFueSBzdHJpbmcgd2hpY2ggaXMgcHJlZml4ZWQgd2l0aCBzLlxuZnVuY3Rpb24gYmV5b25kKHMpIHtcbiAgICBpZiAocy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuTUFYX1dPUkQ7XG4gICAgfVxuICAgIHZhciBjb2RlID0gcy5jaGFyQ29kZUF0KHMubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIHMuc2xpY2UoMCwgLTEpICsgU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlICsgMSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wdHJpZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgYSBUcmllIHNlYXJjaCBkYXRhc3RydWN0dXJlLlxuXG4gIFVzYWdlOlxuXG4gIHRyaWUgPSBuZXcgVHJpZShkaWN0aW9uYXJ5LXN0cmluZyk7XG4gIGJvb2wgPSB0cmllLmlzV29yZCh3b3JkKTtcblxuICBUbyB1c2UgYSBwYWNrZWQgKGNvbXByZXNzZWQpIHZlcnNpb24gb2YgdGhlIHRyaWUgc3RvcmVkIGFzIGEgc3RyaW5nOlxuXG4gIGNvbXByZXNzZWQgPSB0cmllLnBhY2soKTtcbiAgcHRyaWUgPSBuZXcgUGFja2VkVHJpZShjb21wcmVzc2VkKTtcbiAgYm9vbCA9IHB0cmllLmlzV29yZCh3b3JkKVxuXG4qL1xudmFyIHB0cmllID0gcmVxdWlyZShcIi4vcHRyaWVcIik7XG52YXIgYWxwaGFjb2RlXzEgPSByZXF1aXJlKFwiLi9hbHBoYWNvZGVcIik7XG52YXIgaGlzdG9ncmFtXzEgPSByZXF1aXJlKFwiLi9oaXN0b2dyYW1cIik7XG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBub2RlXzEgPSByZXF1aXJlKFwiLi9ub2RlXCIpO1xudmFyIERFQlVHID0gZmFsc2U7XG4vLyBDcmVhdGUgYSBUcmllIGRhdGEgc3RydWN0dXJlIGZvciBzZWFyY2hpbmcgZm9yIG1lbWJlcnNoaXAgb2Ygc3RyaW5nc1xuLy8gaW4gYSBkaWN0aW9uYXJ5IGluIGEgdmVyeSBzcGFjZSBlZmZpY2llbnQgd2F5LlxudmFyIFRyaWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyaWUod29yZHMpIHtcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IG5vZGVfMS5Ob2RlKCk7XG4gICAgICAgIHRoaXMubGFzdFdvcmQgPSAnJztcbiAgICAgICAgdGhpcy5zdWZmaXhlcyA9IHt9O1xuICAgICAgICB0aGlzLmNOZXh0ID0gMTtcbiAgICAgICAgdGhpcy53b3JkQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnZDdXIgPSAwO1xuICAgICAgICB0aGlzLmluc2VydFdvcmRzKHdvcmRzKTtcbiAgICB9XG4gICAgLy8gSW5zZXJ0IHdvcmRzIGZyb20gb25lIGJpZyBzdHJpbmcsIG9yIGZyb20gYW4gYXJyYXkuXG4gICAgVHJpZS5wcm90b3R5cGUuaW5zZXJ0V29yZHMgPSBmdW5jdGlvbiAod29yZHMpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGlmICh3b3JkcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3b3JkcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHdvcmRzID0gd29yZHMuc3BsaXQoL1teYS16QS1aXSsvKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHdvcmRzW2ldID0gd29yZHNbaV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB1dGlsXzEudW5pcXVlKHdvcmRzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydCh3b3Jkc1tpXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyaWUucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgIHRoaXMuX2luc2VydCh3b3JkLCB0aGlzLnJvb3QpO1xuICAgICAgICB2YXIgbGFzdFdvcmQgPSB0aGlzLmxhc3RXb3JkO1xuICAgICAgICB0aGlzLmxhc3RXb3JkID0gd29yZDtcbiAgICAgICAgdmFyIHByZWZpeCA9IGNvbW1vblByZWZpeCh3b3JkLCBsYXN0V29yZCk7XG4gICAgICAgIGlmIChwcmVmaXggPT09IGxhc3RXb3JkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZyZWV6ZSA9IHRoaXMudW5pcXVlTm9kZShsYXN0V29yZCwgd29yZCwgdGhpcy5yb290KTtcbiAgICAgICAgaWYgKGZyZWV6ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21iaW5lU3VmZml4Tm9kZShmcmVlemUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmllLnByb3RvdHlwZS5faW5zZXJ0ID0gZnVuY3Rpb24gKHdvcmQsIG5vZGUpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBwcmVmaXg7XG4gICAgICAgIHZhciBuZXh0O1xuICAgICAgICB2YXIgcHJvcDtcbiAgICAgICAgLy8gRHVwbGljYXRlIHdvcmQgZW50cnkgLSBpZ25vcmVcbiAgICAgICAgaWYgKHdvcmQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRG8gYW55IGV4aXN0aW5nIHByb3BzIHNoYXJlIGEgY29tbW9uIHByZWZpeD9cbiAgICAgICAgZm9yIChwcm9wIGluIG5vZGUpIHtcbiAgICAgICAgICAgIGlmICghbm9kZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlZml4ID0gY29tbW9uUHJlZml4KHdvcmQsIHByb3ApO1xuICAgICAgICAgICAgaWYgKHByZWZpeC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByb3AgaXMgYSBwcm9wZXIgcHJlZml4IC0gcmVjdXJzZSB0byBjaGlsZCBub2RlXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gcHJlZml4ICYmIG5vZGVfMS5Ob2RlLmlzTm9kZShub2RlLmNoaWxkKHByb3ApKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luc2VydCh3b3JkLnNsaWNlKHByZWZpeC5sZW5ndGgpLCBub2RlLmNoaWxkKHByb3ApKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEdXBsaWNhdGUgdGVybWluYWwgc3RyaW5nIC0gaWdub3JlXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gd29yZCAmJiBub2RlLmlzVGVybWluYWxTdHJpbmcocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXh0ID0gbmV3IG5vZGVfMS5Ob2RlKCk7XG4gICAgICAgICAgICBuZXh0LnNldENoaWxkKHByb3Auc2xpY2UocHJlZml4Lmxlbmd0aCksIG5vZGUuY2hpbGQocHJvcCkpO1xuICAgICAgICAgICAgdGhpcy5hZGRUZXJtaW5hbChuZXh0LCB3b3JkID0gd29yZC5zbGljZShwcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICBub2RlLmRlbGV0ZUNoaWxkKHByb3ApO1xuICAgICAgICAgICAgbm9kZS5zZXRDaGlsZChwcmVmaXgsIG5leHQpO1xuICAgICAgICAgICAgdGhpcy53b3JkQ291bnQrKztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBObyBzaGFyZWQgcHJlZml4LiAgRW50ZXIgdGhlIHdvcmQgaGVyZSBhcyBhIHRlcm1pbmFsIHN0cmluZy5cbiAgICAgICAgdGhpcy5hZGRUZXJtaW5hbChub2RlLCB3b3JkKTtcbiAgICAgICAgdGhpcy53b3JkQ291bnQrKztcbiAgICB9O1xuICAgIC8vIEFkZCBhIHRlcm1pbmFsIHN0cmluZyB0byBub2RlLlxuICAgIC8vIElmIDIgY2hhcmFjdGVycyBvciBsZXNzLCBqdXN0IGFkZCB3aXRoIHZhbHVlID09PSAxLlxuICAgIC8vIElmIG1vcmUgdGhhbiAyIGNoYXJhY3RlcnMsIHBvaW50IHRvIHNoYXJlZCBub2RlXG4gICAgLy8gTm90ZSAtIGRvbid0IHByZW1hdHVyZWx5IHNoYXJlIHN1ZmZpeGVzIC0gdGhlc2VcbiAgICAvLyB0ZXJtaW5hbHMgbWF5IGJlY29tZSBzcGxpdCBhbmQgam9pbmVkIHdpdGggb3RoZXJcbiAgICAvLyBub2RlcyBpbiB0aGlzIHBhcnQgb2YgdGhlIHRyZWUuXG4gICAgVHJpZS5wcm90b3R5cGUuYWRkVGVybWluYWwgPSBmdW5jdGlvbiAobm9kZSwgcHJvcCkge1xuICAgICAgICBpZiAocHJvcC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgbm9kZS5zZXRDaGlsZChwcm9wLCAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV4dCA9IG5ldyBub2RlXzEuTm9kZSgpO1xuICAgICAgICBub2RlLnNldENoaWxkKHByb3BbMF0sIG5leHQpO1xuICAgICAgICB0aGlzLmFkZFRlcm1pbmFsKG5leHQsIHByb3Auc2xpY2UoMSkpO1xuICAgIH07XG4gICAgVHJpZS5wcm90b3R5cGUub3B0aW1pemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY29yZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jb21iaW5lU3VmZml4Tm9kZSh0aGlzLnJvb3QpO1xuICAgICAgICB0aGlzLnByZXBERlMoKTtcbiAgICAgICAgdGhpcy5jb3VudERlZ3JlZSh0aGlzLnJvb3QpO1xuICAgICAgICB0aGlzLnByZXBERlMoKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZUNoYWlucyh0aGlzLnJvb3QpO1xuICAgIH07XG4gICAgLy8gQ29udmVydCBUcmllIHRvIGEgREFXRyBieSBzaGFyaW5nIGlkZW50aWNhbCBub2Rlc1xuICAgIFRyaWUucHJvdG90eXBlLmNvbWJpbmVTdWZmaXhOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgLy8gRnJvemVuIG5vZGUgLSBjYW4ndCBjaGFuZ2UuXG4gICAgICAgIGlmIChub2RlLl9jKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNYWtlIHN1cmUgYWxsIGNoaWxkcmVuIGFyZSBjb21iaW5lZCBhbmQgZ2VuZXJhdGUgdW5pcXVlIG5vZGVcbiAgICAgICAgLy8gc2lnbmF0dXJlIGZvciB0aGlzIG5vZGUuXG4gICAgICAgIHZhciBzaWcgPSBbXTtcbiAgICAgICAgaWYgKG5vZGUuaXNUZXJtaW5hbCgpKSB7XG4gICAgICAgICAgICBzaWcucHVzaCgnIScpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcHMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgIGlmIChub2RlXzEuTm9kZS5pc05vZGUobm9kZS5jaGlsZChwcm9wKSkpIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldENoaWxkKHByb3AsIHRoaXMuY29tYmluZVN1ZmZpeE5vZGUobm9kZS5jaGlsZChwcm9wKSkpO1xuICAgICAgICAgICAgICAgIHNpZy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgICAgIHNpZy5wdXNoKG5vZGUuY2hpbGQocHJvcCkuX2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2lnLnB1c2gocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNpZ1N0cmluZyA9IHNpZy5qb2luKCctJyk7XG4gICAgICAgIHZhciBzaGFyZWQgPSB0aGlzLnN1ZmZpeGVzW3NpZ1N0cmluZ107XG4gICAgICAgIGlmIChzaGFyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFyZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWZmaXhlc1tzaWdTdHJpbmddID0gbm9kZTtcbiAgICAgICAgbm9kZS5fYyA9IHRoaXMuY05leHQrKztcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICBUcmllLnByb3RvdHlwZS5wcmVwREZTID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnZDdXIrKztcbiAgICB9O1xuICAgIFRyaWUucHJvdG90eXBlLnZpc2l0ZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5fdiA9PT0gdGhpcy52Q3VyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLl92ID0gdGhpcy52Q3VyO1xuICAgIH07XG4gICAgVHJpZS5wcm90b3R5cGUuY291bnREZWdyZWUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5fZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBub2RlLl9kID0gMDtcbiAgICAgICAgfVxuICAgICAgICBub2RlLl9kKys7XG4gICAgICAgIGlmICh0aGlzLnZpc2l0ZWQobm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcHMgPSBub2RlLnByb3BzKHRydWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50RGVncmVlKG5vZGUuY2hpbGQocHJvcHNbaV0pKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gUmVtb3ZlIGludGVybWVkaWF0ZSBzaW5nbGV0b24gbm9kZXMgYnkgaG9pc3RpbmcgaW50byB0aGVpciBwYXJlbnRcbiAgICBUcmllLnByb3RvdHlwZS5jb2xsYXBzZUNoYWlucyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciBwcm9wID0gJy1pbnZhbGlkLSc7XG4gICAgICAgIHZhciBwcm9wcztcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGlmICh0aGlzLnZpc2l0ZWQobm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwcm9wcyA9IG5vZGUucHJvcHMoKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9wID0gcHJvcHNbaV07XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBub2RlLmNoaWxkKHByb3ApO1xuICAgICAgICAgICAgaWYgKCFub2RlXzEuTm9kZS5pc05vZGUoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlQ2hhaW5zKGNoaWxkKTtcbiAgICAgICAgICAgIC8vIEhvaXN0IHRoZSBzaW5nbGV0b24gY2hpbGQncyBzaW5nbGUgcHJvcGVydHkgdG8gdGhlIHBhcmVudFxuICAgICAgICAgICAgaWYgKGNoaWxkLl9nICE9PSB1bmRlZmluZWQgJiYgKGNoaWxkLl9kID09PSAxIHx8IGNoaWxkLl9nLmxlbmd0aCA9PT0gMSkpIHtcbiAgICAgICAgICAgICAgICBub2RlLmRlbGV0ZUNoaWxkKHByb3ApO1xuICAgICAgICAgICAgICAgIHByb3AgKz0gY2hpbGQuX2c7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRDaGlsZChwcm9wLCBjaGlsZC5jaGlsZChjaGlsZC5fZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElkZW50aWZ5IHNpbmdsZXRvbiBub2Rlc1xuICAgICAgICBpZiAocHJvcHMubGVuZ3RoID09PSAxICYmICFub2RlLmlzVGVybWluYWwoKSkge1xuICAgICAgICAgICAgbm9kZS5fZyA9IHByb3A7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyaWUucHJvdG90eXBlLmlzV29yZCA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRnJhZ21lbnQod29yZCwgdGhpcy5yb290KTtcbiAgICB9O1xuICAgIFRyaWUucHJvdG90eXBlLmlzRnJhZ21lbnQgPSBmdW5jdGlvbiAod29yZCwgbm9kZSkge1xuICAgICAgICBpZiAod29yZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLmlzVGVybWluYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5jaGlsZCh3b3JkKSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmluZCBhIHByZWZpeCBvZiB3b3JkIHJlZmVyZW5jZSB0byBhIGNoaWxkXG4gICAgICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcHModHJ1ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNbaV07XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gd29yZC5zbGljZSgwLCBwcm9wLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc0ZyYWdtZW50KHdvcmQuc2xpY2UocHJvcC5sZW5ndGgpLCBub2RlLmNoaWxkKHByb3ApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvLyBGaW5kIGhpZ2hlc3Qgbm9kZSBpbiBUcmllIHRoYXQgaXMgb24gdGhlIHBhdGggdG8gd29yZFxuICAgIC8vIGFuZCB0aGF0IGlzIE5PVCBvbiB0aGUgcGF0aCB0byBvdGhlci5cbiAgICBUcmllLnByb3RvdHlwZS51bmlxdWVOb2RlID0gZnVuY3Rpb24gKHdvcmQsIG90aGVyLCBub2RlKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcHModHJ1ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNbaV07XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gd29yZC5zbGljZSgwLCBwcm9wLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcCAhPT0gb3RoZXIuc2xpY2UoMCwgcHJvcC5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLmNoaWxkKHByb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51bmlxdWVOb2RlKHdvcmQuc2xpY2UocHJvcC5sZW5ndGgpLCBvdGhlci5zbGljZShwcm9wLmxlbmd0aCksIG5vZGUuY2hpbGQocHJvcCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvLyBSZXR1cm4gcGFja2VkIHJlcHJlc2VudGF0aW9uIG9mIFRyaWUgYXMgYSBzdHJpbmcuXG4gICAgLy9cbiAgICAvLyBFYWNoIG5vZGUgb2YgdGhlIFRyaWUgaXMgb3V0cHV0IG9uIGEgc2luZ2xlIGxpbmUuXG4gICAgLy9cbiAgICAvLyBGb3IgZXhhbXBsZSBUcmllKFwidGhlIHRoZW0gdGhlcmUgdGhlc2lzIHRoaXNcIik6XG4gICAgLy8ge1xuICAgIC8vICAgIFwidGhcIjoge1xuICAgIC8vICAgICAgXCJpc1wiOiAxLFxuICAgIC8vICAgICAgXCJlXCI6IHtcbiAgICAvLyAgICAgICAgXCJcIjogMSxcbiAgICAvLyAgICAgICAgXCJtXCI6IDEsXG4gICAgLy8gICAgICAgIFwicmVcIjogMSxcbiAgICAvLyAgICAgICAgXCJzaXNcIjogMVxuICAgIC8vICAgICAgfVxuICAgIC8vICAgIH1cbiAgICAvLyAgfVxuICAgIC8vXG4gICAgLy8gV291bGQgYmUgcmVwZXJlc2VudGVkIGFzOlxuICAgIC8vXG4gICAgLy8gdGgwXG4gICAgLy8gZTBpc1xuICAgIC8vICFtLHJlLHNpc1xuICAgIC8vXG4gICAgLy8gVGhlIGxpbmUgYmVnaW5zIHdpdGggYSAnIScgaWZmIGl0IGlzIGEgdGVybWluYWwgbm9kZSBvZiB0aGUgVHJpZS5cbiAgICAvLyBGb3IgZWFjaCBzdHJpbmcgcHJvcGVydHkgaW4gYSBub2RlLCB0aGUgc3RyaW5nIGlzIGxpc3RlZCwgYWxvbmdcbiAgICAvLyB3aXRoIGEgKHJlbGF0aXZlISkgbGluZSBudW1iZXIgb2YgdGhlIG5vZGUgdGhhdCBzdHJpbmcgcmVmZXJlbmNlcy5cbiAgICAvLyBUZXJtaW5hbCBzdHJpbmdzICh0aG9zZSB3aXRob3V0IGNoaWxkIG5vZGUgcmVmZXJlbmNlcykgYXJlXG4gICAgLy8gc2VwYXJhdGVkIGJ5ICcsJyBjaGFyYWN0ZXJzLlxuICAgIFRyaWUucHJvdG90eXBlLnBhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIG5vZGVzID0gW107XG4gICAgICAgIHZhciBub2RlQ291bnQ7XG4gICAgICAgIHZhciBzeW1zID0ge307XG4gICAgICAgIHZhciBwb3MgPSAwO1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UndmUgY29tYmluZWQgYWxsIHRoZSBjb21tb24gc3VmZml4ZXNcbiAgICAgICAgdGhpcy5vcHRpbWl6ZSgpO1xuICAgICAgICBmdW5jdGlvbiBub2RlTGluZShub2RlKSB7XG4gICAgICAgICAgICB2YXIgbGluZSA9ICcnO1xuICAgICAgICAgICAgdmFyIHNlcCA9ICcnO1xuICAgICAgICAgICAgaWYgKG5vZGUuaXNUZXJtaW5hbCgpKSB7XG4gICAgICAgICAgICAgICAgbGluZSArPSBwdHJpZS5URVJNSU5BTF9QUkVGSVg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBub2RlLnByb3BzKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5pc1Rlcm1pbmFsU3RyaW5nKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgKz0gc2VwICsgcHJvcDtcbiAgICAgICAgICAgICAgICAgICAgc2VwID0gcHRyaWUuU1RSSU5HX1NFUDtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG5vZGUuY2hpbGQocHJvcCk7XG4gICAgICAgICAgICAgICAgaWYgKHN5bXNbY2hpbGQuX25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgKz0gc2VwICsgcHJvcCArIHN5bXNbY2hpbGQuX25dO1xuICAgICAgICAgICAgICAgICAgICBzZXAgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZWYgPSBhbHBoYWNvZGVfMS50b0FscGhhQ29kZShub2RlLl9uIC0gY2hpbGQuX24gLSAxICsgc3ltQ291bnQpO1xuICAgICAgICAgICAgICAgIC8vIExhcmdlIHJlZmVyZW5jZSB0byBzbWFsbGVyIHN0cmluZyBzdWZmaXggLT4gZHVwbGljYXRlIHN1ZmZpeFxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5fZyAmJiByZWYubGVuZ3RoID49IGNoaWxkLl9nLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICBub2RlLmlzVGVybWluYWxTdHJpbmcoY2hpbGQuX2cpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IGNoaWxkLl9nO1xuICAgICAgICAgICAgICAgICAgICBsaW5lICs9IHNlcCArIHByb3AgKyByZWY7XG4gICAgICAgICAgICAgICAgICAgIHNlcCA9IHB0cmllLlNUUklOR19TRVA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaW5lICs9IHNlcCArIHByb3AgKyByZWY7XG4gICAgICAgICAgICAgICAgc2VwID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGluZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUb3BvbG9naWNhbCBzb3J0IGludG8gbm9kZXMgYXJyYXlcbiAgICAgICAgZnVuY3Rpb24gbnVtYmVyTm9kZXMobm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuX24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IG5vZGUucHJvcHModHJ1ZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyTm9kZXMobm9kZS5jaGlsZChwcm9wc1tpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5fbiA9IHBvcysrO1xuICAgICAgICAgICAgbm9kZXMudW5zaGlmdChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGlzdEFicyA9IG5ldyBoaXN0b2dyYW1fMS5IaXN0b2dyYW0oKTtcbiAgICAgICAgdmFyIGhpc3RSZWwgPSBuZXcgaGlzdG9ncmFtXzEuSGlzdG9ncmFtKCk7XG4gICAgICAgIGZ1bmN0aW9uIGFuYWx5emVSZWZzKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnZpc2l0ZWQobm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBub2RlLnByb3BzKHRydWUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbm9kZS5jaGlsZChwcm9wKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVmID0gbm9kZS5fbiAtIGNoaWxkLl9uIC0gMTtcbiAgICAgICAgICAgICAgICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIHNpbmdsZS1jaGFyYWN0ZXIgcmVsYXRpdmUgcmVmc1xuICAgICAgICAgICAgICAgIGlmIChyZWYgPCBhbHBoYWNvZGVfMS5CQVNFKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RSZWwuYWRkKHJlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIENvdW50IHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBzYXZlZCBieSBjb252ZXJ0aW5nIGFuIGFic29sdXRlXG4gICAgICAgICAgICAgICAgLy8gcmVmZXJlbmNlIHRvIGEgb25lLWNoYXJhY3RlciBzeW1ib2wuXG4gICAgICAgICAgICAgICAgaGlzdEFicy5hZGQoY2hpbGQuX24sIGFscGhhY29kZV8xLnRvQWxwaGFDb2RlKHJlZikubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgYW5hbHl6ZVJlZnMoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHN5bWJvbENvdW50KCkge1xuICAgICAgICAgICAgdmFyIHRvcE5vZGVzID0gaGlzdEFicy5oaWdoZXN0KGFscGhhY29kZV8xLkJBU0UpO1xuICAgICAgICAgICAgdmFyIHNhdmluZ3MgPSBbXTtcbiAgICAgICAgICAgIHNhdmluZ3NbLTFdID0gMDtcbiAgICAgICAgICAgIHZhciBiZXN0ID0gMDtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgZGVmU2l6ZSA9IDMgKyBhbHBoYWNvZGVfMS50b0FscGhhQ29kZShub2RlQ291bnQpLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIHN5bSA9IDA7IHN5bSA8IGFscGhhY29kZV8xLkJBU0U7IHN5bSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvcE5vZGVzW3N5bV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ3VtdWxhdGl2ZSBzYXZpbmdzIG9mOlxuICAgICAgICAgICAgICAgIC8vICAgc2F2ZWQgY2hhcmFjdGVycyBpbiByZWZzXG4gICAgICAgICAgICAgICAgLy8gICBtaW51cyBkZWZpbml0aW9uIHNpemVcbiAgICAgICAgICAgICAgICAvLyAgIG1pbnVzIHJlbGF0aXZlIHNpemUgd3JhcHBpbmcgdG8gMiBkaWdpdHNcbiAgICAgICAgICAgICAgICBzYXZpbmdzW3N5bV0gPSB0b3BOb2Rlc1tzeW1dWzFdIC0gZGVmU2l6ZSAtXG4gICAgICAgICAgICAgICAgICAgIGhpc3RSZWwuY291bnRPZihhbHBoYWNvZGVfMS5CQVNFIC0gc3ltIC0gMSkgK1xuICAgICAgICAgICAgICAgICAgICBzYXZpbmdzW3N5bSAtIDFdO1xuICAgICAgICAgICAgICAgIGxvZyhcInNhdmluZ3NbXCIgKyBzeW0gKyBcIl0gXCIgKyBzYXZpbmdzW3N5bV0gKyAnID0gJyArXG4gICAgICAgICAgICAgICAgICAgIHNhdmluZ3Nbc3ltIC0gMV0gKyAnICsnICtcbiAgICAgICAgICAgICAgICAgICAgdG9wTm9kZXNbc3ltXVsxXSArICcgLSAnICsgZGVmU2l6ZSArICcgLSAnICtcbiAgICAgICAgICAgICAgICAgICAgaGlzdFJlbC5jb3VudE9mKGFscGhhY29kZV8xLkJBU0UgLSBzeW0gLSAxKSArICcpJyk7XG4gICAgICAgICAgICAgICAgaWYgKHNhdmluZ3Nbc3ltXSA+PSBiZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJlc3QgPSBzYXZpbmdzW3N5bV07XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gc3ltICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW2NvdW50LCB0b3BOb2Rlc107XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVyTm9kZXModGhpcy5yb290KTtcbiAgICAgICAgbm9kZUNvdW50ID0gbm9kZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLnByZXBERlMoKTtcbiAgICAgICAgYW5hbHl6ZVJlZnModGhpcy5yb290KTtcbiAgICAgICAgdmFyIF9hID0gc3ltYm9sQ291bnQoKSwgc3ltQ291bnQgPSBfYVswXSwgdG9wTm9kZXMgPSBfYVsxXTtcbiAgICAgICAgdmFyIHN5bURlZnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgc3ltID0gMDsgc3ltIDwgc3ltQ291bnQ7IHN5bSsrKSB7XG4gICAgICAgICAgICBzeW1zW3RvcE5vZGVzW3N5bV1bMF1dID0gYWxwaGFjb2RlXzEudG9BbHBoYUNvZGUoc3ltKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9kZUxpbmVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIG5vZGVMaW5lc1tpXSA9IG5vZGVMaW5lKG5vZGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmVwZW5kIHN5bWJvbHNcbiAgICAgICAgZm9yICh2YXIgc3ltID0gc3ltQ291bnQgLSAxOyBzeW0gPj0gMDsgc3ltLS0pIHtcbiAgICAgICAgICAgIG5vZGVMaW5lcy51bnNoaWZ0KGFscGhhY29kZV8xLnRvQWxwaGFDb2RlKHN5bSkgKyAnOicgK1xuICAgICAgICAgICAgICAgIGFscGhhY29kZV8xLnRvQWxwaGFDb2RlKG5vZGVDb3VudCAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHRvcE5vZGVzW3N5bV1bMF0sIDEwKSAtIDEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZUxpbmVzLmpvaW4ocHRyaWUuTk9ERV9TRVApO1xuICAgIH07XG4gICAgcmV0dXJuIFRyaWU7XG59KCkpO1xuZXhwb3J0cy5UcmllID0gVHJpZTtcbmZ1bmN0aW9uIGNvbW1vblByZWZpeCh3MSwgdzIpIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgbWF4bGVuID0gTWF0aC5taW4odzEubGVuZ3RoLCB3Mi5sZW5ndGgpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBtYXhsZW4gJiYgdzFbaV0gPT09IHcyW2ldOyBpKyspIHsgfVxuICAgIHJldHVybiB3MS5zbGljZSgwLCBpKTtcbn1cbmZ1bmN0aW9uIGxvZyhtZXNzYWdlKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgW21lc3NhZ2VdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJpZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBzb3J0QnlWYWx1ZXMobywgZGlyKSB7XG4gICAgaWYgKGRpciA9PT0gdm9pZCAwKSB7IGRpciA9ICdhc2MnOyB9XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIG9ba2V5XV0pO1xuICAgIH1cbiAgICByZXN1bHQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gY21wRGVmYXVsdChhWzFdLCBiWzFdLCBkaXIpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnNvcnRCeVZhbHVlcyA9IHNvcnRCeVZhbHVlcztcbmZ1bmN0aW9uIGNtcERlZmF1bHQoYSwgYiwgZGlyKSB7XG4gICAgaWYgKGRpciA9PT0gdm9pZCAwKSB7IGRpciA9ICdhc2MnOyB9XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJlc3VsdCA9IC0xO1xuICAgIH1cbiAgICBlbHNlIGlmIChhID4gYikge1xuICAgICAgICByZXN1bHQgPSAxO1xuICAgIH1cbiAgICByZXR1cm4gZGlyID09PSAnYXNjJyA/IHJlc3VsdCA6IC1yZXN1bHQ7XG59XG4vLyBTb3J0IGVsZW1lbnRzIGFuZCByZW1vdmUgZHVwbGljYXRlcyBmcm9tIGFycmF5IChtb2RpZmllZCBpbiBwbGFjZSkuXG5mdW5jdGlvbiB1bmlxdWUoYSwgY21wKSB7XG4gICAgaWYgKGNtcCA9PT0gdm9pZCAwKSB7IGNtcCA9IGNtcERlZmF1bHQ7IH1cbiAgICBhLnNvcnQoY21wKTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNtcChhW2kgLSAxXSwgYVtpXSkgPT09IDApIHtcbiAgICAgICAgICAgIGEuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy51bmlxdWUgPSB1bmlxdWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsImltcG9ydCB7VHJpZSwgUFRyaWV9IGZyb20gJ2Rhd2ctbG9va3VwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUkge1xuICAvKiogcmV0dXJucyAoJiBnZW5lcmF0ZXMpIGFscGhhYmV0IGFycmF5ICovXG4gIGdldCBhbHBoYWJldCgpIHtcbiAgICBpZiAoIXRoaXMuX2EpIHtcbiAgICAgIHRoaXMuX2EgPSBbXTtcbiAgICAgIGxldCBpID0gJ2EnLmNoYXJDb2RlQXQoMCksIGogPSAneicuY2hhckNvZGVBdCgwKTtcblxuICAgICAgZm9yICg7aSA8PSBqOysraSkgdGhpcy5fYS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoaSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9hO1xuICB9XG4gIC8qKiBwcm92aWRlcyBjdXJyZW50IGxldmVsIHBvaW50cyAqL1xuICBnZXQgcG9pbnRzKCkge3JldHVybiB0aGlzLl9wb2ludHM7fVxuICAvKiogcHJvdmlkZXMgY3VycmVudCBsZXZlbCBib2FyZCBzaXplICovXG4gIGdldCBib2FyZFNpemUoKSB7IHJldHVybiB0aGlzLl9ib2FyZFNpemU7fVxuICAvKiogcHJvdmlkZXMgY3VycmVudCBsZXZlbCB1c2VkV29yZHMgKi9cbiAgZ2V0IHVzZWRXb3JkcygpIHsgcmV0dXJuIHRoaXMuX3VzZWRXb3Jkczt9XG4gIC8qKiBwcm92aWRlcyBjdXJyZW50IGxldmVsIGJvYXJkICovXG4gIGdldCBib2FyZCgpIHsgcmV0dXJuIHRoaXMuX2JvYXJkO31cbiAgLyoqIHByb3ZpZGVzIGFkZGVkIGRpY3Rpb25hcmllcyAqL1xuICBnZXQgZGljdGlvbmFyaWVzKCkgeyByZXR1cm4gdGhpcy5fZGljdGlvbmFyaWVzO31cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhbiBpbnN0YW5zZSBvZiB0aGUgV29yZHMgQUkgbGlicmFyeVxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2RpY3Rpb25hcmllcyA9IHt9O1xuICAgIHRoaXMuZW5kQm9hcmQoKTtcbiAgfVxuICAvKipcbiAgICogQWRkIG1haW4gZGljdGlvbmFyeSB0byB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSB1bmlxdWUgbmFtZSBmb3IgdGhlIGRpY3Rpb25hcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBkaWN0aW9uYXJ5IHN0cmluZy5cbiAgICogKi9cbiAgYWRkTWFpbkRpY3Rpb25hcnkobmFtZSwgc3RyaW5nKSB7XG4gICAgdGhpcy5fYWRkRGljdGlvbmFyeShuYW1lLCBzdHJpbmcpO1xuXG4gICAgdGhpcy5fbWFpbkRpY3Rpb25hcnkgPSB0aGlzLl9kaWN0aW9uYXJpZXNbbmFtZV07XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBzZWNvbmRhcnkgZGljdGlvbmFyeSB0byB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSB1bmlxdWUgbmFtZSBmb3IgdGhlIGRpY3Rpb25hcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBkaWN0aW9uYXJ5IHN0cmluZy5cbiAgICogKi9cbiAgYWRkU2Vjb25kYXJ5RGljdGlvbmFyeShuYW1lLCBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZGREaWN0aW9uYXJ5KG5hbWUsIHN0cmluZyk7XG4gICAgdGhpcy5fc2Vjb25kYXJ5RGljdGlvbmFyeSA9IHRoaXMuX2RpY3Rpb25hcmllc1tuYW1lXTtcbiAgfVxuICAvKipcbiAgICogU3RhcnQgQm9hcmQoTGV2ZWwpIHdpdGggaW50aWFsIGNlbnRlciB3b3JkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gYm9hcmRTaXplIC0gQm9hcmQgU2l6ZS5cbiAgICovXG4gIHN0YXJ0Qm9hcmQoYm9hcmRTaXplID0gdGhpcy5fZGVmYXVsdEJvYXJkU2l6ZSkge1xuICAgIHRoaXMuX2JvYXJkU2l6ZSA9IGJvYXJkU2l6ZTtcbiAgICB0aGlzLl9jbGVhbkJvYXJkKCk7XG5cbiAgICB0aGlzLl9zZXRJbml0aWFsUmFuZG9tV29yZCgpO1xuICB9XG4gIC8qKlxuICAgKiBFbmQgQm9hcmQoTGV2ZWwpLlxuICAgKiAtIGNsZWFuIHRoZSBib2FyZDtcbiAgICogLSBjbGVhbiB1c2VkIHdvcmRzO1xuICAgKiAtIGNsZWFuIGN1cnJlbnQgbWFpbi9zZWNvbmRhcnkgZGljdGlvbmFyeVxuICAgKiAtIGV0Yy5cbiAgICovXG4gIGVuZEJvYXJkKCkge1xuICAgIHRoaXMuX3BvaW50cyA9IDA7XG4gICAgdGhpcy5fYm9hcmRTaXplID0gdGhpcy5fZGVmYXVsdEJvYXJkU2l6ZTtcbiAgICB0aGlzLl91c2VkV29yZHMgPSBbXTtcbiAgICB0aGlzLl9tYWluRGljdGlvbmFyeSA9IG51bGw7XG4gICAgdGhpcy5fc2Vjb25kYXJ5RGljdGlvbmFyeSA9IG51bGw7XG5cbiAgICB0aGlzLl9jbGVhbkJvYXJkKCk7XG4gIH1cbiAgLyoqIGNoZWNrIGlmIHdvcmQgYWxyZWFkeSB3YXMgdXNlZCBpbiBjdXJyZW50IGxldmVsICovXG4gIGlzVXNlZFdvcmQod29yZCkge1xuICAgIHJldHVybiAhd29yZCB8fCAhdGhpcy5fdXNlZFdvcmRzIHx8IHRoaXMuX3VzZWRXb3Jkcy5maW5kKFxuICAgICAgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudG9Mb3dlckNhc2UoKSA9PT0gd29yZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgLyoqIGNoZWNrIGlmIHdvcmQgZXhpc3RzIGluIG1haW4gZGljdGlvbmFyeSAqL1xuICBkb2VzV29yZEV4aXN0KHdvcmQpIHtcbiAgICBpZiAoIXdvcmQpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBmaXJzdExldHRlcklEID0gdGhpcy5fZ2V0TGV0dGVySUQoWy4uLndvcmRdWzBdKTtcblxuICAgIGxldCB3b3Jkc0FycmF5ID0gdGhpcy5fZ2V0V29yZHNBcnJheUJ5TGV0dGVySUQoZmlyc3RMZXR0ZXJJRCk7XG5cbiAgICByZXR1cm4gd29yZHNBcnJheS5maW5kKGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkgPT09IHdvcmQudG9Mb3dlckNhc2UoKTsgfSk7XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqIGNoZWNrIGlmIHNlbGVjdGVkIGNlbGxzIGFyZSBwb3NzaWJsZSBmb3IgYSB3b3JkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFggLSBmaXJzdCBsZXR0ZXIgY29sdW1uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFkgLSBmaXJzdCBsZXR0ZXIgcm93XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgLSBpcyB3b3JkIHZlcnRpY2FsIG9yIGhvcml6b250YWxcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFtb3VudCAtIGFtb3VudCBvZiBzZWxlY3RlZCBjZWxsc1xuICAgKi9cbiAgY2hlY2tQb3NzaWJsZUNlbGxzKHN0YXJ0WCwgc3RhcnRZLCB2ZXJ0aWNhbCwgYW1vdW50KSB7XG4gICAgaWYgKHN0YXJ0WCA8IDAgfHwgc3RhcnRZIDwgMCB8fCAodmVydGljYWwgPyBzdGFydFkgOiBzdGFydFgpICsgYW1vdW50ID4gdGhpcy5fYm9hcmRTaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgYmxvY2tlcnNDb3VudGVyID0gMDtcbiAgICBsZXQgbGV0dGVyc0NvdW50ZXIgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xuICAgICAgbGV0IGNoZWNrWCA9IHZlcnRpY2FsID8gc3RhcnRYIDogc3RhcnRYICsgaTtcbiAgICAgIGxldCBjaGVja1kgPSB2ZXJ0aWNhbCA/IHN0YXJ0WSArIGkgOiBzdGFydFk7XG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuX2JvYXJkW2NoZWNrWV1bY2hlY2tYXTtcblxuICAgICAgaWYgKHRoaXMuX2lzQVN0cmluZyhlbGVtZW50KSkgbGV0dGVyc0NvdW50ZXIrKztcbiAgICAgIGVsc2UgaWYgKGVsZW1lbnQgPj0gMyB8fCB2ZXJ0aWNhbCAmJiBlbGVtZW50ID09PSAxIHx8ICF2ZXJ0aWNhbCAmJiBlbGVtZW50ID09PSAyKSBibG9ja2Vyc0NvdW50ZXIrKztcbiAgICB9XG5cbiAgICBpZiAobGV0dGVyc0NvdW50ZXIgPT09IGFtb3VudCB8fCBibG9ja2Vyc0NvdW50ZXIgfHwgIWxldHRlcnNDb3VudGVyICYmIHRoaXMuX3VzZWRXb3Jkcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogQWRkIFdvcmQgdG8gdGhlIGJvYXJkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRYIC0gZmlyc3QgbGV0dGVyIGNvbHVtblxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRZIC0gZmlyc3QgbGV0dGVyIHJvd1xuICAgKiBAcGFyYW0ge3N0cmluZ30gd29yZCAtIHdvcmRcbiAgICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCAtIGlzIHdvcmQgdmVydGljYWwgb3IgaG9yaXpvbnRhbFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB3YXMgd29yZCBhZGRlZCBvciBub3QuXG4gICAqL1xuICBhZGRXb3JkKHN0YXJ0WCwgc3RhcnRZLCB3b3JkLCB2ZXJ0aWNhbCA9IGZhbHNlKSB7XG4gICAgaWYgKCF3b3JkIHx8ICF3b3JkLmxlbmd0aCB8fCB3b3JkLmxlbmd0aCA8IDMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3b3JkIGxlbmd0aCBpcyBsZXNzIHRoYW4gMyBsZXR0ZXJzIScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jaGVja1Bvc3NpYmxlQ2VsbHMoc3RhcnRYLCBzdGFydFksIHZlcnRpY2FsLCB3b3JkLmxlbmd0aCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwb3NzaWJsZSBjZWxscyBjaGVjayBmYWlsZWQhJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9jaGVja1Bvc3NpYmxlTGV0dGVycyhzdGFydFgsIHN0YXJ0WSwgd29yZCwgdmVydGljYWwpKSB7XG4gICAgICBjb25zb2xlLmxvZygncG9zc2libGUgbGV0dGVycyBjaGVjayBmYWlsZWQhJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNVc2VkV29yZCh3b3JkKSkge1xuICAgICAgY29uc29sZS5sb2coJ3dvcmQgaXMgYWxyZWFkeSB1c2VkJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRvZXNXb3JkRXhpc3Qod29yZCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid29yZCBkb2Vzbid0IGV4aXN0IGluIGRpY3Rpb25hcnlcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmxvY2tlcnMgYmFzZWQgb24gbnVtYmVyOlxuICAgICAqIDEgLSBmb3IgdmVydGljYWxcbiAgICAgKiAyIC0gZm9yIGhvcml6YW50YWxcbiAgICAgKiAzIC0gZm9yIGFsbFxuICAgICAqICovXG5cbiAgICBbLi4ud29yZF0uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIHZhciBlbGVtZW50WSA9IHN0YXJ0WSArICh2ZXJ0aWNhbCA/IGluZGV4IDogMCk7XG4gICAgICB2YXIgZWxlbWVudFggPSBzdGFydFggKyAodmVydGljYWwgPyAwIDogaW5kZXgpO1xuXG4gICAgICB0aGlzLl9ib2FyZFtlbGVtZW50WV1bZWxlbWVudFhdID0gZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBsZXQgdGFyZ2V0WCA9IGVsZW1lbnRYICsgKHZlcnRpY2FsID8gaSA/IDEgOiAtMSA6IDApO1xuICAgICAgICBsZXQgdGFyZ2V0WSA9IGVsZW1lbnRZICsgKHZlcnRpY2FsID8gMCA6IGkgPyAxIDogLTEpO1xuXG4gICAgICAgIGlmICh0YXJnZXRYIDwgMCB8fCB0YXJnZXRYID49IHRoaXMuX2JvYXJkU2l6ZSB8fCB0YXJnZXRZIDwgMCB8fCB0YXJnZXRZID49IHRoaXMuX2JvYXJkU2l6ZSkgY29udGludWU7XG4gICAgICAgIGxldCB0YXJnZXRFbGVtZW50ID0gdGhpcy5fYm9hcmRbdGFyZ2V0WV1bdGFyZ2V0WF07XG5cbiAgICAgICAgaWYgKHZlcnRpY2FsICYmICF0aGlzLl9pc0FWZXJ0aWNhbEJsb2NrZXIodGFyZ2V0RWxlbWVudCkpIHRoaXMuX2JvYXJkW3RhcmdldFldW3RhcmdldFhdICs9IDE7XG4gICAgICAgIGlmICghdmVydGljYWwgJiYgIXRoaXMuX2lzQUhvcml6b250YWxCbG9ja2VyKHRhcmdldEVsZW1lbnQpKSB0aGlzLl9ib2FyZFt0YXJnZXRZXVt0YXJnZXRYXSArPSAyO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICBpZiAoc3RhcnRZKSB0aGlzLl9ib2FyZFtzdGFydFkgLSAxXVtzdGFydFhdID0gMztcbiAgICAgIGlmIChzdGFydFkgKyB3b3JkLmxlbmd0aCA8IHRoaXMuX2JvYXJkU2l6ZSkgdGhpcy5fYm9hcmRbc3RhcnRZICsgd29yZC5sZW5ndGhdW3N0YXJ0WF0gPSAzO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3RhcnRYKSB0aGlzLl9ib2FyZFtzdGFydFldW3N0YXJ0WCAtIDFdID0gMztcbiAgICAgIGlmIChzdGFydFggKyB3b3JkLmxlbmd0aCA8IHRoaXMuX2JvYXJkU2l6ZSkgdGhpcy5fYm9hcmRbc3RhcnRZXVtzdGFydFggKyB3b3JkLmxlbmd0aF0gPSAzO1xuICAgIH1cblxuICAgIHRoaXMuX3VzZWRXb3Jkcy5wdXNoKHdvcmQpO1xuXG4gICAgdGhpcy5fY2hlY2tQb2ludHNGb3JXb3JkKHdvcmQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIFByb3ZpZGUgYSBwb3NzaWJsZSBoaW50IHN0cnVjdHVyZTpcbiAgICoge1xuICAgKiAgICB4OiAwLFxuICAgKiAgICB5OiAwLFxuICAgKiAgICB3b3JkOiBudWxsLFxuICAgKiAgICB2ZXJ0aWNhbDogZmFsc2VcbiAgICogfVxuICAgKi9cbiAgZ2V0SGludFdvcmQoKSB7XG4gICAgbGV0IHJldHVybkVsZW1lbnQgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgIHdvcmQ6IG51bGxcbiAgICB9O1xuICAgIHZhciBjdXJyZW50RWxlbWVudCA9IHJldHVybkVsZW1lbnQ7XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2JvYXJkU2l6ZTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX2JvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5fYm9hcmRbeV1beF07XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzQVN0cmluZyhlbGVtZW50KSkgY3VycmVudEVsZW1lbnQgPSB0aGlzLl9maW5kUG9zc2libGVXb3JkKHgsIHkpO1xuICAgICAgICBlbHNlIGNvbnRpbnVlO1xuXG4gICAgICAgIGlmIChjdXJyZW50RWxlbWVudC53b3JkICYmXG4gICAgICAgICAgICAoIXJldHVybkVsZW1lbnQud29yZCB8fFxuICAgICAgICAgICAgICByZXR1cm5FbGVtZW50LndvcmQgJiZcbiAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQud29yZC5sZW5ndGggPiByZXR1cm5FbGVtZW50LndvcmQubGVuZ3RoKVxuICAgICAgICApIHJldHVybkVsZW1lbnQgPSBjdXJyZW50RWxlbWVudDtcblxuICAgICAgICBpZiAocmV0dXJuRWxlbWVudC53b3JkICYmIHJldHVybkVsZW1lbnQud29yZC5sZW5ndGggPT09IHRoaXMuX2JvYXJkU2l6ZSkgcmV0dXJuIHJldHVybkVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVybkVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogUHJpdmF0ZSBtZXRob2RzXG4gICAqL1xuICAvKiogY2hlY2sgaWYgZWxlbWVudCBpcyBhIHN0cmluZyAqL1xuICBfaXNBU3RyaW5nKGVsZW1lbnQpIHsgcmV0dXJuIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJzsgfVxuICAvKiogY2hlY2sgaWYgZWxlbWVudCBpcyBhIG51bWJlciAqL1xuICBfaXNBTnVtYmVyKGVsZW1lbnQpIHsgcmV0dXJuICF0aGlzLl9pc0FTdHJpbmcoZWxlbWVudCk7IH1cbiAgLyoqIGNoZWNrIGlmIGEgY2VsbCBpcyBhIHZlcnRpY2FsIGJsb2NrZXIgKi9cbiAgX2lzQVZlcnRpY2FsQmxvY2tlcihlbGVtZW50KSB7cmV0dXJuICF0aGlzLl9pc0FOdW1iZXIoZWxlbWVudCkgfHwgZWxlbWVudCA9PT0gMSB8fCBlbGVtZW50ID49IDM7fVxuICAvKiogY2hlY2sgaWYgYSBjZWxsIGlzIGEgaG9yaXpvbnRhbCBibG9ja2VyICovXG4gIF9pc0FIb3Jpem9udGFsQmxvY2tlcihlbGVtZW50KSB7cmV0dXJuICF0aGlzLl9pc0FOdW1iZXIoZWxlbWVudCkgfHwgZWxlbWVudCA9PT0gMiB8fCBlbGVtZW50ID49IDM7fVxuICAvKipcbiAgICogY2hlY2sgaWYgd29yZCBsZXR0ZXJzIGludGVyc2VjdHMgZXhpc3RpbmcgbGV0dGVyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRYIC0gZmlyc3QgbGV0dGVyIGNvbHVtblxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRZIC0gZmlyc3QgbGV0dGVyIHJvd1xuICAgKiBAcGFyYW0ge3N0cmluZ30gd29yZCAgLSB3b3JkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgLSBpcyB3b3JkIHZlcnRpY2FsIG9yIGhvcml6b250YWxcbiAgICovXG4gIF9jaGVja1Bvc3NpYmxlTGV0dGVycyhzdGFydFgsIHN0YXJ0WSwgd29yZCwgdmVydGljYWwgPSBmYWxzZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoZWNrWCA9IHZlcnRpY2FsID8gc3RhcnRYIDogc3RhcnRYICsgaTtcbiAgICAgIGxldCBjaGVja1kgPSB2ZXJ0aWNhbCA/IHN0YXJ0WSArIGkgOiBzdGFydFk7XG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuX2JvYXJkW2NoZWNrWV1bY2hlY2tYXTtcblxuICAgICAgaWYgKHRoaXMuX2lzQVN0cmluZyhlbGVtZW50KSAmJiBlbGVtZW50ICE9PSBbLi4ud29yZF1baV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKiogZGVmYXVsdCBib2FyZCBzaXplICovXG4gIGdldCBfZGVmYXVsdEJvYXJkU2l6ZSgpIHsgcmV0dXJuIDExO31cbiAgLyoqXG4gICAqIGFkZCBkaWN0aW9uYXJ5XG4gICAqIE9uY2UgZGljaXRpb25hcnkgaXMgcHJlbG9hZGVkIGxpYnJhcnkgd29uJ3QgbG9hZCBkaWN0aW9uYXJ5IGFnYWluIGJ1dCB1c2UgZXhpc3Rpbmcgb25lIGJ5IG5hbWUuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHVuaXF1ZSBuYW1lIGZvciB0aGUgZGljdGlvbmFyeS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIGRpY3Rpb25hcnkgc3RyaW5nLlxuICAgKiAqL1xuICBfYWRkRGljdGlvbmFyeShuYW1lLCBzdHJpbmcpIHtcbiAgICBpZiAobmFtZSBpbiB0aGlzLl9kaWN0aW9uYXJpZXMpIHJldHVybjtcbiAgICBsZXQgZGljdCA9IG5ldyBUcmllKHN0cmluZyk7XG5cbiAgICB0aGlzLl9kaWN0aW9uYXJpZXNbbmFtZV0gPSBuZXcgUFRyaWUoZGljdC5wYWNrKCkpO1xuICB9XG4gIC8qKiBjbGVhbiBib2FyZCAqL1xuICBfY2xlYW5Cb2FyZCgpIHtcbiAgICB0aGlzLl9ib2FyZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9ib2FyZFNpemU7IHkrKykge1xuICAgICAgbGV0IF9hcnJheSA9IFtdO1xuXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX2JvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICAgIF9hcnJheS5wdXNoKDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9ib2FyZC5wdXNoKF9hcnJheSk7XG4gICAgfVxuICB9XG4gIC8qKiBhZGQgaW5pdGlhbCBob3Jpem9udGFsIGNlbnRlcmVkIHdvcmQgKi9cbiAgX3NldEluaXRpYWxSYW5kb21Xb3JkKCkge1xuICAgIGxldCB3b3JkID0gbnVsbDtcbiAgICBsZXQgcmFuZG9tTGV0dGVySUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5hbHBoYWJldC5sZW5ndGggLSAyKSk7XG5cbiAgICB3aGlsZSAoIXdvcmQpIHtcbiAgICAgIGxldCByYW5kb21Xb3JkcyA9IHRoaXMuX2dldFdvcmRzQXJyYXlCeUxldHRlcklEKHJhbmRvbUxldHRlcklELCAxKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5kb21Xb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcmFuZG9tV29yZCA9IHJhbmRvbVdvcmRzW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVXNlZFdvcmQocmFuZG9tV29yZCkgfHxcbiAgICAgICAgICAgIHJhbmRvbVdvcmQubGVuZ3RoIDwgTWF0aC5mbG9vcih0aGlzLl9ib2FyZFNpemUgKiAwLjUpIHx8XG4gICAgICAgICAgICByYW5kb21Xb3JkLmxlbmd0aCA+PSBNYXRoLmZsb29yKHRoaXMuX2JvYXJkU2l6ZSkpIGNvbnRpbnVlO1xuICAgICAgICBlbHNlIHsgd29yZCA9IHJhbmRvbVdvcmQ7IGJyZWFrO31cbiAgICAgIH1cblxuICAgICAgcmFuZG9tTGV0dGVySUQgPSByYW5kb21MZXR0ZXJJRCA8IHRoaXMuYWxwaGFiZXQubGVuZ3RoIC0gMSA/IHJhbmRvbUxldHRlcklEICsgMSA6IDA7XG4gICAgfVxuXG4gICAgbGV0IHggPSBNYXRoLmZsb29yKCh0aGlzLl9ib2FyZFNpemUgLSB3b3JkLmxlbmd0aCkgKiAwLjUpO1xuICAgIGxldCB5ID0gTWF0aC5mbG9vcih0aGlzLl9ib2FyZFNpemUgKiAwLjQgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMuX2JvYXJkU2l6ZSAqIDAuMikpO1xuXG4gICAgdGhpcy5hZGRXb3JkKHgsIHksIHdvcmQpO1xuICB9XG4gIC8qKlxuICAgKiBwcm92aWRlcyBsZXR0ZXIgaWQgaW4gdGhlIGFscGhhYmV0XG4gICAqIEBwYXJhbSB7Y2hhcn0gbGV0dGVyIC0gTGV0dGVyLlxuICAgKiAqL1xuICBfZ2V0TGV0dGVySUQobGV0dGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFscGhhYmV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5hbHBoYWJldFtpXS50b0xvd2VyQ2FzZSgpID09PSBsZXR0ZXIudG9Mb3dlckNhc2UoKSkgcmV0dXJuIGk7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG4gIC8qKlxuICAgKiBwcm92aWRlcyB3b3JkcyBhcnJheSBiYXNlZCBvbiBsZXR0ZXIgaWQgYW5kIGRpY3Rpb25hcnkgdHlwZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbGV0dGVySUQgLSBMZXR0ZXIgSUQgaW4gdGhlIGFscGhhYmV0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaWN0aW9uYXJ5VHlwZTpcbiAgICogMCAtIG1haW4gZGljdGlvbmFyeSAoZGVmYXVsdClcbiAgICogMSAtIHNlY29uZGFyeSBkaWN0aW9uYXJ5XG4gICAqL1xuICBfZ2V0V29yZHNBcnJheUJ5TGV0dGVySUQobGV0dGVySUQsIGRpY3Rpb25hcnlUeXBlID0gMCkge1xuICAgIGxldCBjdXJyZW50TGV0dGVyID0gdGhpcy5hbHBoYWJldFtsZXR0ZXJJRF07XG4gICAgbGV0IG5leHRMZXR0ZXIgPSB0aGlzLmFscGhhYmV0W2xldHRlcklEIDwgdGhpcy5hbHBoYWJldC5sZW5ndGggLSAxID8gbGV0dGVySUQgKyAxIDogMF07XG4gICAgbGV0IHdvcmRzID0gW107XG4gICAgbGV0IGRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5VHlwZSA/IHRoaXMuX3NlY29uZGFyeURpY3Rpb25hcnkgOiB0aGlzLl9tYWluRGljdGlvbmFyeTtcblxuICAgIGlmIChkaWN0aW9uYXJ5KSB3b3JkcyA9IGRpY3Rpb25hcnkud29yZHMoY3VycmVudExldHRlciwgbmV4dExldHRlcik7XG5cbiAgICBkaWN0aW9uYXJ5ID0gbnVsbDtcblxuICAgIHJldHVybiB3b3JkcztcbiAgfVxuICAvKipcbiAgICogRmluZCBwb3NzaWJsZSB3b3JkIGZvciBhIGNlbGxcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBjb2x1bW4gdmFsdWUgZm9yIGEgY2VsbFxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIHJvdyB2YWx1ZSBmb3IgYSBjZWxsXG4gICAqIEByZXR1cm5zIHN0cnVjdHVyZTpcbiAgICoge1xuICAgKiAgICB4OiAwLFxuICAgKiAgICB5OiAwLFxuICAgKiAgICB3b3JkOiBudWxsLFxuICAgKiAgICB2ZXJ0aWNhbDogZmFsc2VcbiAgICogfVxuICAgKi9cbiAgX2ZpbmRQb3NzaWJsZVdvcmQoeCwgeSkge1xuICAgIGxldCByZWdFeHBPYmplY3QgPSBudWxsO1xuICAgIGxldCByZXR1cm5Xb3JkID0gbnVsbDtcbiAgICBsZXQgcmV0dXJuWCA9IDA7XG4gICAgbGV0IHJldHVyblkgPSAwO1xuICAgIGxldCB2ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgIHZlcnRpY2FsID0gISFpO1xuXG4gICAgICByZWdFeHBPYmplY3QgPSB0aGlzLl9nZW5lcmF0ZVJlZ0V4cCh4LCB5LCB2ZXJ0aWNhbCk7XG4gICAgICBpZiAoIXJlZ0V4cE9iamVjdCkgY29udGludWU7XG5cbiAgICAgIHJldHVybldvcmQgPSB0aGlzLl9maW5kV29yZEJ5UmVnRXhwKHJlZ0V4cE9iamVjdC5yZWdFeHApO1xuICAgICAgaWYgKCFyZXR1cm5Xb3JkKSBjb250aW51ZTtcblxuICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPD0gcmVnRXhwT2JqZWN0LmJlZm9yZSArIDE7IGwrKykge1xuICAgICAgICBpZiAobCA8IHJldHVybldvcmQubGVuZ3RoICYmXG4gICAgICAgICAgICByZXR1cm5Xb3JkW2xdLnRvU3RyaW5nKCkgPT09IHRoaXMuX2JvYXJkW3ldW3hdLnRvU3RyaW5nKCkgJiZcbiAgICAgICAgICAgICh2ZXJ0aWNhbCA/IHkgOiB4KSAtIGwgPj0gMCAmJiAodmVydGljYWwgPyB5IDogeCkgLSBsICsgcmV0dXJuV29yZC5sZW5ndGggPD0gdGhpcy5fYm9hcmRTaXplKSB7XG4gICAgICAgICAgbGV0IGNoZWNrWCA9IHZlcnRpY2FsID8geCA6IHggKyByZWdFeHBPYmplY3QuYmV0d2VlbiArIChyZWdFeHBPYmplY3QuYmV0d2VlbiA/IDEgOiAwKTtcbiAgICAgICAgICBsZXQgY2hlY2tZID0gdmVydGljYWwgPyB5ICsgcmVnRXhwT2JqZWN0LmJldHdlZW4gKyAocmVnRXhwT2JqZWN0LmJldHdlZW4gPyAxIDogMCkgOiB5O1xuXG4gICAgICAgICAgaWYgKHRoaXMuX2JvYXJkW2NoZWNrWV1bY2hlY2tYXSA9PT0gcmV0dXJuV29yZFtsICsgcmVnRXhwT2JqZWN0LmJldHdlZW4gKyAocmVnRXhwT2JqZWN0LmJldHdlZW4gPyAxIDogMCldKSB7XG4gICAgICAgICAgICByZXR1cm5YID0gdmVydGljYWwgPyB4IDogeCAtIGw7XG4gICAgICAgICAgICByZXR1cm5ZID0gdmVydGljYWwgPyB5IC0gbCA6IHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJldHVybldvcmQpIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB4OiByZXR1cm5YLFxuICAgICAgeTogcmV0dXJuWSxcbiAgICAgIHdvcmQ6IHJldHVybldvcmQsXG4gICAgICB2ZXJ0aWNhbDogdmVydGljYWxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBQcm92ZGVzIHBvc3NpYmxlIHJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgY2VsbFxuICAgKiBAcGFyYW0ge251bWJlcn0geCAtIHN0YXJ0IGxldHRlciBjb2x1bW5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBzdGFydCBsZXR0ZXIgcm93XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgLSBpcyB3b3JkIHZlcnRpY2FsIG9yIGhvcml6b250YWxcbiAgICogQHJldHVybnMgc3RydWN0dXJlOlxuICAgKiB7XG4gICAqIGJlZm9yZSAgICAge251bWJlcn0gLT4gYW1vdW50IG9mIGVtcHR5IGNlbGxzIGJlZm9yZSBmaXJzdCBsZXR0ZXJcbiAgICogYmV0d2VlbiAgICB7bnVtYmVyfSAtPiBhbW91bnQgb2YgZW1wdHkgY2VsbHMgYmV0d2VlbiBsZXR0ZXJzXG4gICAqIHRvdGFsRnJlZSAge251bWJlcn0gLT4gdG90YWwgZnJlZSBjZWxsc1xuICAgKiByZWdFeHAgICAgIHtzdHJpbmd9IC0+IHJlZ3VsYXIgZXhwcmVzc2lvblxuICAgKiB9XG4gICAqIE9SXG4gICAqIE5VTEwgLT4gaW4gY2FzZSByZWcgZXhwIGlzIGltcG9zc2libGVcbiAgICovXG4gIF9nZW5lcmF0ZVJlZ0V4cCh4LCB5LCB2ZXJ0aWNhbCA9IGZhbHNlKSB7XG4gICAgdmFyIHJlZ0V4cCA9ICcnO1xuICAgIHZhciBpRGlmZiA9IE1hdGgubWF4KHRoaXMuX2JvYXJkU2l6ZSAtICh2ZXJ0aWNhbCA/IHkgOiB4KSwgdmVydGljYWwgPyB5IDogeCk7XG4gICAgdmFyIHdvcmRBcnJheSA9IG5ldyBBcnJheSh0aGlzLl9ib2FyZFNpemUpO1xuXG4gICAgd29yZEFycmF5W3ZlcnRpY2FsID8geSA6IHhdID0gdGhpcy5fYm9hcmRbeV1beF07XG4gICAgbGV0IGlzVG9wQmxvY2tlZCA9IGZhbHNlO1xuICAgIGxldCBpc0JvdHRvbUJsb2NrZWQgPSBmYWxzZTtcbiAgICBsZXQgbGV0dGVyc0NvdW50ZXIgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpRGlmZjsgaSsrKSB7XG4gICAgICAvLyBjaGVjayBtb3ZlbWVudCB0b3AvbGVmdFxuICAgICAgaWYgKCh2ZXJ0aWNhbCA/IHkgOiB4KSAtIGkgPj0gMCAmJiAhaXNUb3BCbG9ja2VkKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5fYm9hcmRbdmVydGljYWwgPyB5IC0gaSA6IHldW3ZlcnRpY2FsID8geCA6IHggLSBpXTtcblxuICAgICAgICBpZiAodmVydGljYWwgJiYgdGhpcy5faXNBVmVydGljYWxCbG9ja2VyKGVsZW1lbnQpIHx8ICF2ZXJ0aWNhbCAmJiB0aGlzLl9pc0FIb3Jpem9udGFsQmxvY2tlcihlbGVtZW50KSkge1xuICAgICAgICAgIGlmICh0aGlzLl9pc0FTdHJpbmcoZWxlbWVudCkgJiYgIWxldHRlcnNDb3VudGVyKSB7XG4gICAgICAgICAgICB3b3JkQXJyYXlbdmVydGljYWwgPyB5IC0gaSA6IHggLSBpXSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBsZXR0ZXJzQ291bnRlcisrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1RvcEJsb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGkgPiAxICYmIHRoaXMuX2lzQVN0cmluZyhlbGVtZW50KSkgd29yZEFycmF5W3ZlcnRpY2FsID8geSAtIGkgKyAxIDogeCAtIGkgKyAxXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdvcmRBcnJheVt2ZXJ0aWNhbCA/IHkgLSBpIDogeCAtIGldID0gJ1thLXpdJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gY2hlY2sgbW92ZW1lbnQgYm90dG9tL3JpZ2h0XG4gICAgICBpZiAoKHZlcnRpY2FsID8geSA6IHgpICsgaSA8IHRoaXMuX2JvYXJkU2l6ZSAmJiAhaXNCb3R0b21CbG9ja2VkKSB7XG4gICAgICAgIGxldCBfZWxlbWVudCA9IHRoaXMuX2JvYXJkW3ZlcnRpY2FsID8geSArIGkgOiB5XVt2ZXJ0aWNhbCA/IHggOiB4ICsgaV07XG5cbiAgICAgICAgaWYgKHZlcnRpY2FsICYmIHRoaXMuX2lzQVZlcnRpY2FsQmxvY2tlcihfZWxlbWVudCkgfHwgIXZlcnRpY2FsICYmIHRoaXMuX2lzQUhvcml6b250YWxCbG9ja2VyKF9lbGVtZW50KSkge1xuICAgICAgICAgIGlmICh0aGlzLl9pc0FTdHJpbmcoX2VsZW1lbnQpICYmICFsZXR0ZXJzQ291bnRlcikge1xuICAgICAgICAgICAgd29yZEFycmF5W3ZlcnRpY2FsID8geSArIGkgOiB4ICsgaV0gPSBfZWxlbWVudDtcbiAgICAgICAgICAgIGxldHRlcnNDb3VudGVyKys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzQm90dG9tQmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaSA+IDEgJiYgdGhpcy5faXNBU3RyaW5nKF9lbGVtZW50KSkgd29yZEFycmF5W3ZlcnRpY2FsID8geSArIGkgLSAxIDogeCArIGkgLSAxXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdvcmRBcnJheVt2ZXJ0aWNhbCA/IHkgKyBpIDogeCArIGldID0gJ1thLXpdJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBnZWVuZXJhdGUgcmVndWxhciBleHByZXNzaW9uXG5cbiAgICByZWdFeHAgKz0gJ14oJztcbiAgICBsZXQgYmVmb3JlTGV0dGVyQ291bnRlciA9IDA7XG4gICAgbGV0IGFueUNvdW50ZXIgPSAwO1xuICAgIGxldCB0b3RhbEZyZWVDb3VudGVyID0gMDtcbiAgICBsZXQgYmV0d2VlbkxldHRlcnNDb3VudGVyID0gMDtcblxuICAgIGxldHRlcnNDb3VudGVyID0gMDtcbiAgICB3b3JkQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgPT09ICdbYS16XScpIGFueUNvdW50ZXIrKztcbiAgICAgIGVsc2UgaWYgKGVsZW1lbnQpIHtcblxuICAgICAgICBpZiAoIWxldHRlcnNDb3VudGVyKSBiZWZvcmVMZXR0ZXJDb3VudGVyID0gYW55Q291bnRlcjtcblxuICAgICAgICBsZXR0ZXJzQ291bnRlcisrO1xuXG4gICAgICAgIGlmIChsZXR0ZXJzQ291bnRlciA9PT0gMSkgcmVnRXhwICs9ICdbYS16XXswLCcgKyBhbnlDb3VudGVyICsgJ30nICsgZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBlbHNlIGlmIChsZXR0ZXJzQ291bnRlciA9PT0gMikge1xuICAgICAgICAgIGJldHdlZW5MZXR0ZXJzQ291bnRlciA9IGFueUNvdW50ZXI7XG4gICAgICAgICAgcmVnRXhwICs9ICdbYS16XXsnICsgYW55Q291bnRlciArICd9JyArIGVsZW1lbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0b3RhbEZyZWVDb3VudGVyICs9IGFueUNvdW50ZXI7XG4gICAgICAgIGFueUNvdW50ZXIgPSAwO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgdG90YWxGcmVlQ291bnRlciArPSBhbnlDb3VudGVyO1xuICAgIGlmIChhbnlDb3VudGVyKSByZWdFeHAgKz0gJ1thLXpdezAsJyArIGFueUNvdW50ZXIgKyAnfSc7XG5cbiAgICByZWdFeHAgKz0gJykkJztcblxuICAgIGlmICghdG90YWxGcmVlQ291bnRlcikgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmVmb3JlOiBiZWZvcmVMZXR0ZXJDb3VudGVyLFxuICAgICAgYmV0d2VlbjogYmV0d2VlbkxldHRlcnNDb3VudGVyLFxuICAgICAgdG90YWxGcmVlOiB0b3RhbEZyZWVDb3VudGVyLFxuICAgICAgcmVnRXhwOiByZWdFeHBcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBQcm92aWRlcyBhIHBvc3NpYmxlIHdvcmQgYnkgcmVnIGV4cFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVnRXhwIC0gcmVndWxhciBleHByZXNzaW9uXG4gICAqL1xuICBfZmluZFdvcmRCeVJlZ0V4cChyZWdFeHApIHtcbiAgICBsZXQgd29yZCA9IG51bGw7XG4gICAgbGV0IHN0YXJ0TGV0dGVySUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5hbHBoYWJldC5sZW5ndGggLSAyKSk7XG4gICAgbGV0IHJhbmRvbUxldHRlcklEID0gc3RhcnRMZXR0ZXJJRDtcbiAgICBsZXQgcmVndWxhckV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKHJlZ0V4cCk7XG5cbiAgICAvLyB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgd2hpbGUgKCF3b3JkKSB7XG4gICAgICBsZXQgcmFuZG9tV29yZHMgPSB0aGlzLl9nZXRXb3Jkc0FycmF5QnlMZXR0ZXJJRChyYW5kb21MZXR0ZXJJRCwgMSk7XG4gICAgICAvKipcbiAgICAgICAqIEZhc3RlciB3YXkgYnV0IG9ubHkgc21hbGwgd29yZHMgY29tZSBmaXJzdC5cbiAgICAgICAqL1xuICAgICAgLy8gd29yZCA9IHJhbmRvbVdvcmRzLmZpbmQoKGVsKT0+e1xuICAgICAgLy8gICByZXR1cm4gZWwubWF0Y2gocmVndWxhckV4cHJlc3Npb24pICYmXG4gICAgICAvLyAgICAgICAgICBlbC5sZW5ndGggPj0gMyAmJlxuICAgICAgLy8gICAgICAgICAgIV90aGlzLmlzVXNlZFdvcmQoZWwpO1xuICAgICAgLy8gfSkgfHwgbnVsbDtcblxuICAgICAgd29yZCA9IG51bGw7XG4gICAgICByYW5kb21Xb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm1hdGNoKHJlZ3VsYXJFeHByZXNzaW9uKSAmJiBlbGVtZW50Lmxlbmd0aCA+PSAzICYmXG4gICAgICAgICAgICAhdGhpcy5pc1VzZWRXb3JkKGVsZW1lbnQpICYmICghd29yZCB8fCBlbGVtZW50Lmxlbmd0aCA+IHdvcmQubGVuZ3RoKSkge1xuICAgICAgICAgIHdvcmQgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgaWYgKHdvcmQpIGJyZWFrO1xuXG4gICAgICByYW5kb21MZXR0ZXJJRCA9IHJhbmRvbUxldHRlcklEIDwgdGhpcy5hbHBoYWJldC5sZW5ndGggLSAxID8gcmFuZG9tTGV0dGVySUQgKyAxIDogMDtcbiAgICAgIGlmIChyYW5kb21MZXR0ZXJJRCA9PT0gc3RhcnRMZXR0ZXJJRCkgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmQ7XG4gIH1cbiAgLyoqIGNoZWNrcyBpZiBwb3NzaWJsZSBwb2ludHMgZm9yIGEgd29yZCBhbmQgYWRkcyBpdCBpZiBuZWVkZWQgKi9cbiAgX2NoZWNrUG9pbnRzRm9yV29yZCh3b3JkKSB7XG4gICAgaWYgKCF3b3JkIHx8IHRoaXMuX3VzZWRXb3Jkcy5sZW5ndGggPCAzKSByZXR1cm47XG4gICAgd29yZCA9IHdvcmQudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBmaXJzdExldHRlcklEID0gdGhpcy5fZ2V0TGV0dGVySUQoWy4uLndvcmRdWzBdKTtcblxuICAgIGxldCB3b3Jkc0FycmF5ID0gdGhpcy5fZ2V0V29yZHNBcnJheUJ5TGV0dGVySUQoZmlyc3RMZXR0ZXJJRCwgMSk7XG5cbiAgICBpZiAod29yZHNBcnJheS5maW5kKChlbGVtZW50KT0+e3JldHVybiBlbGVtZW50ID09PSB3b3JkO30pKSB7XG4gICAgICB0aGlzLl9wb2ludHMgKz0gd29yZC5sZW5ndGg7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQUkgZnJvbSAnLi9haSc7XG5leHBvcnQgZGVmYXVsdCBBSTtcbiJdLCJzb3VyY2VSb290IjoiIn0=