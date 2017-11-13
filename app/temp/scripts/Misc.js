/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cat = __webpack_require__(13);

console.log(cat());
//document.write(cat());

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var cats = __webpack_require__(14)
var catNames = Object.keys(cats)

catNames.forEach(function (name) {
  cats[name] = cats[name].join('\n')
})

module.exports = function (cat) {
  cat = cat || catNames[~~(Math.random() * catNames.length)]

  return cats[cat]
}

module.exports.catNames = catNames


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = {"grumpy":["█▄                        ▄▄███","███▄                    ▄██████","█████▄                 ▄███████","███████▄    ▄▄▄▄▄    ▄█████████","█████████▄▀▀░░░░░▀▀▀▄██████████","▀█████▀░░░░░░░░░░░░░░▀████████ "," ▀██▀░░░░░░░░░░░░░░░░░░░▀████▌ ","  ██░░░░░░░░░░░░░░░░░░░░░░███  ","  █▀░░░░░░░░░░░░░░░░░░░░░░░██  ","  █░░▄████▄░░░░░▄████▄░░░░░░█  ","  █░░█▐▄█▐█░░░░░█▐▄█▐█░░░░░░█▄ ","  █░░██▄▄██░░░░░██▄▄██░░░░░░░█ "," ▐▌░░░░░░░░░░░░░░░░░░░░░░░░░░▐▌"," ▐▌░░░░░░░▀▄▄▄▄▀░░░░░░░░░░░░░▐▌"," ▐▌░░░░░░░░░▐▌░░░░░░░░░░░░░░░▐▌"," ▐▌░░░░░░░▄▀▀▀▀▄░░░░░░░░░░░░░▐▌","  █▄░░░░░▀░░░░░░▀░░░░░░░░░░░░█▌","  ▐█▀▄▄░░░░░░░░░░░░░░░░░░▄▄▀▀░█"," ▐▌░░░░▀▀▄▄░░░░░░░░▄▄▄▄▀▀░░░░░█"," █░░░░░░░░░▀▀▄▄▄▀▀▀░░░░░░░░░░░█","▐▌░░░░░░░░░░░░░░░░░░░░░░░░░░░░█","▐▌░░░░░░░░░░░░░░░░░░░░░░░░░░░░█"],"approaching":[" /\\     /\\","{  `---'  }","{  O   O  }","~~>  V  <~~"," \\  \\|/  /","  `-----'__","  /     \\  `^\\_"," {       }\\ |\\_\\_   W"," |  \\_/  |/ /  \\_\\_( )","  \\__/  /(_E     \\__/","    (  /","     MM"],"tubby":["  /\\ ___ /\\"," (  o   o  )","  \\  >#<  /","  /       \\"," /         \\       ^","|           |     //"," \\         /    //","  ///  ///   --"],"confused":["    /\\__/\\","   /`    '\\"," === 0  0 ===","   \\  --  /","  /        \\"," /          \\","|            |"," \\  ||  ||  /","  \\_oo__oo_/#######o"],"playful":[" /\\     /\\","{  `---'  }","{  O   O  }","~~>  V  <~~"," \\  \\|/  /","  `-----'____","  /     \\    \\_"," {       }\\  )_\\_   _"," |  \\_/  |/ /  \\_\\_/ )","  \\__/  /(_/     \\__/","    (__/"],"thoughtful":["                   ;,_            ,","                  _uP~\"b          d\"u,","                 dP'   \"b       ,d\"  \"o","                d\"    , `b     d\"'    \"b","               l] [    \" `l,  d\"       lb","               Ol ?     \"  \"b`\"=uoqo,_  \"l","             ,dBb \"b        \"b,    `\"~~TObup,_","           ,d\" (db.`\"         \"\"     \"tbc,_ `~\"Yuu,_","         .d\" l`T'  '=                      ~     `\"\"Yu,","       ,dO` gP,                           `u,   b,_  \"b7","      d?' ,d\" l,                           `\"b,_ `~b  \"1","    ,8i' dl   `l                 ,ggQOV\",dbgq,._\"  `l  lb","   .df' (O,    \"             ,ggQY\"~  , @@@@@d\"bd~  `b \"1","  .df'   `\"           -=@QgpOY\"\"     (b  @@@@P db    `Lp\"b,"," .d(                  _               \"ko \"=d_,Q`  ,_  \"  \"b,"," Ql         .         `\"qo,._          \"tQo,_`\"\"bo ;tb,    `\"b,","(qQ         |L           ~\"QQQgggc,_.,dObc,opooO  `\"~~\";.   __,7,","`qp         t\\io,_           `~\"TOOggQV\"\"\"\"        _,dg,_ =PIQHib."," `qp        `Q[\"tQQQo,_                          ,pl{QOP\"'   7AFR`","   `         `tb  '\"\"tQQQg,_             p\" \"b   `       .;-.`Vl'","              \"Yb      `\"tQOOo,__    _,edb    ` .__   /`/'|  |b;=;.__","                            `\"tQQQOOOOP\"\"        `\"\\QV;qQObob\"`-._`\\_~~-._","                                 \"\"\"\"    ._        /   | |oP\"\\_   ~\\ ~\\_  ~\\","                                         `~\"\\ic,qggddOOP\"|  |  ~\\   `\\  ~-._","                                           ,qP`\"\"\"|\"   | `\\ `;   `\\   `\\","                                _        _,p\"     |    |   `\\`;    |    |","                                 \"boo,._dP\"       `\\_  `\\    `\\|   `\\   ;","                                  `\"7tY~'            `\\  `\\    `|_   |","                                                           `~\\  |"],"delighted":["                    .............                .\"\"\".             .\"\"\".","            ...\"\"\"\"\"             \"\"\"\"\"...       $   . \".         .\" .   $","        ..\"\"        .   .   .   .   .    ..    $   $$$. \". ... .\" .$$$   $","      .\"    . \" . \" . \" . \" . \" . \" . \" .  \"\" .\"  $$$\"\"\"  \"   \"  \"\"\"$$$  \".","    .\"      . \" . \" . \" . \" . \" . \" . \" .     $  \"                    \"   $","   .\"   . \" . \" . \"           \"   \" . \" . \"  .\"      ...          ...     \".","  .\"    . \" . \"    ..\"\"\"\"\"\"\"\"\"...     \" . \"  $     .$\"              \"$.    $"," .\"     . \" . \" .\"\"     .   .    \"\"..   . \" $ \".      .\"\"$     .\"\"$      .\" $",".\"    \" . \" .       . \" . \" . \" .    $    \" $ \"      \"  $$    \"  $$       \" $","$     \" . \" . \" . \" . \" . \" . \" . \"   $     $             $$.$$             $","$     \" . \" . \" . \" . \" . \" . \" . \" .  $  \" $  \" .        $$$$$        . \"  $","$     \" . \" . \" . \" . \" . \" . \" . \" .  $    $      \"  ..   \"$\"   ..  \"      $","\".    \" . \" . \" . \" . \" . \" . \" . \"   .\"  \"  $  . . . $  . .\". .  $ . . .  $"," $    \" . \" . \" . \" . \" . \" . \" . \"  .\"   \"            \"..\"   \"..\"","  $     . \" . \" . \" . \" . \" . \"   ..\"   . \" . \"..    \"             \"    ..\"","  \".      \" . \" . \" . \" . \" .  .\"\"    \" . \" .    \"\"\"$...         ...$\"\"\"","   \". \"..     \" . \" . \" . \" .  \"........  \"    .....  .\"\"\".....\"\"\"","     \". .\"$\".....                       $...\"$\"$\".\"   $\".$\"... `\":....","       \"\"..\"    $\"$\"$\"$\"\"\"$........$\"$\"$\"  .\".\".\"  ...\"\"      .\"\".    `\"\".","           \"\"\".$.$.\" .\"  .\".\".\"    .\".\".\" $.$.$\"\"\"\".......  \". \". $ \". \". $","                  \"\"\".$.$.$.$.....$.$.\"\"\"\"               \"\"..$..$.\"..$..$."],"nyan":["  ☆    ☆  ☆      ","┈┈┈┈ ╭━━━━━━╮  ☆   ","┈☆ ┈┈┃╳╳╳▕╲▂▂╱▏  ","┈┈☆ ┈┃╳╳╳▕▏▍▕▍▏  ","┈┈ ╰━┫╳╳╳▕▏╰┻╯▏  ","☆ ┈┈┈┃╳╳╳╳╲▂▂╱   ","   ☆ ╰┳┳━━┳┳╯   ☆"],"resting":["                           |        |","                           |\\      /|","                           | \\____/ |","                           |  /\\/\\  |","                          .'___  ___`.","                         /  \\|/  \\|/  \\","        _.--------------( ____ __ _____)","     .-' \\  -. | | | | | \\ ----\\/---- /","   .'\\  | | / \\` | | | |  `.  -'`-  .'","  /`  ` ` '/ / \\ | | | | \\  `------'\\"," /-  `-------.' `-----.       -----. `---.","(  / | | | |  )/ | | | )/ | | | | | ) | | )"," `._________.'_____,,,/\\_______,,,,/_,,,,/"]}

/***/ })

/******/ });