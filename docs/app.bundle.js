/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gui/SceneStartButton.ts":
/*!*************************************!*\
  !*** ./src/gui/SceneStartButton.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneStartButton = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var SceneStartButton = /** @class */ (function () {
    function SceneStartButton(params) {
        var _this = this;
        this.scene = params.scene;
        this.x = params.x;
        this.y = params.y;
        this.width = params.width;
        this.height = params.height;
        this.color = params.color;
        this.hoverColor = params.hoverColor;
        this.label = params.label;
        this.fontSize = params.fontSize;
        this.fontColor = params.fontColor;
        this.alpha = params.alpha;
        this.newSceneKey = params.newSceneKey;
        if (params.sceneData) {
            this.sceneData = params.sceneData;
        }
        else {
            this.sceneData = null;
        }
        this.box = new Phaser.GameObjects.Rectangle(this.scene, this.x, this.y, this.width, this.height, this.color, this.alpha);
        this.box.setInteractive();
        this.box.on("pointerdown", function () {
            _this.scene.sound.stopAll();
            _this.scene.cameras.main.fadeOut(1000, 0, 0, 0);
            _this.scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, function () {
                _this.scene.scene.start(_this.newSceneKey, _this.sceneData);
            });
        }, this.scene);
        this.box.on("pointerover", function () {
            _this.box.fillColor = _this.hoverColor;
        });
        this.box.on("pointerout", function () {
            _this.box.fillColor = _this.color;
        });
        this.box.setOrigin(0.5, 0.5);
        this.text = new Phaser.GameObjects.Text(this.scene, this.box.x, this.box.y, this.label, {
            fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
            fontSize: this.fontSize,
            color: this.fontColor,
            align: "center",
            fontStyle: "bold",
        });
        this.text.setOrigin(0.5, 0.5);
        this.scene.add.existing(this.box);
        this.scene.add.existing(this.text);
    }
    SceneStartButton.prototype.destroyBoxAndText = function () {
        this.box.destroy();
        this.text.destroy();
    };
    return SceneStartButton;
}());
exports.SceneStartButton = SceneStartButton;


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FONT_SIZES = exports.DEFAULT_FONT_FAMILIES = exports.CONTROLKEYS = exports.COLORS = exports.loadStrings = exports.loadFile = exports.getGameHeight = exports.getGameWidth = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/**
 * Return the width of the current scene.
 * Which is generally equal to the width of the "screen"/canvas but not always.
 * @param scene
 */
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
/**
 * Return the height of the current scene.
 * Which is generally equal to the height of the "screen"/canvas but not always.
 * @param scene
 */
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};
/**
 * Load a file in ajax and return its response text.
 * @param pFilePath Path to the desired file
 */
exports.loadFile = function (pFilePath) {
    var rawFile = new XMLHttpRequest();
    var result;
    rawFile.onerror = function () {
        console.log("Impossible to load file.");
    };
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                result = rawFile.responseText;
            }
        }
    };
    rawFile.open("GET", pFilePath, false);
    rawFile.send(null);
    return result;
};
/**
 * Returns a 2d-array of strings from a whole text file given as input.
 * Works best if the input text is only composed of single chars and '\n'.
 * Each final array element would be one character of the text input.
 * @param pFilePath
 */
exports.loadStrings = function (pFilePath) {
    var rawGrid = exports.loadFile(pFilePath);
    return rawGrid.split("\n").map(function (item) { return item.split(""); });
};
exports.COLORS = {
    customBlue: { string: "#4346f9", hex: 0x4346f9 },
    customGreen: { string: "#76ea64", hex: 0x76ea64 },
    vibrantGreen: { string: "#25f945", hex: 0x25f945 },
    customRed: { string: "#ea2d23", hex: 0xea2d23 },
    white: { string: "#ffffff", hex: 0xffffff },
    black: { string: "#000000", hex: 0x000000 },
    customYellow: { string: "#ffde59", hex: 0xffde59 },
    grey: { string: "#d3d1d2", hex: 0xd3d1d2 },
};
exports.CONTROLKEYS = {
    PLAYER: {
        SET1: {
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            jump: Phaser.Input.Keyboard.KeyCodes.UP,
            shoot: Phaser.Input.Keyboard.KeyCodes.SHIFT,
        },
        SET2: {
            right: Phaser.Input.Keyboard.KeyCodes.D,
            left: Phaser.Input.Keyboard.KeyCodes.Q,
            jump: Phaser.Input.Keyboard.KeyCodes.S,
            shoot: Phaser.Input.Keyboard.KeyCodes.SPACE,
        },
    },
};
/**
 * Fixed font family to use across the game :
 * "Monospace, Tahoma, Arial"
 */
exports.DEFAULT_FONT_FAMILIES = "monospace, Tahoma, Arial";
/**
 * Fixed font sizes to use across the game :
 * xsmall = 8px,
 * small = 12px,
 * medium = 18px,
 * large = 24px,
 * xlarge = 32px,
 * big = 64px,
 * giant = 128px
 */
exports.FONT_SIZES = {
    xsmall: "8px",
    small: "12px",
    medium: "18px",
    large: "24px",
    xlarge: "32px",
    big: "64px",
    giant: "128px",
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var gameConfig = {
    title: "Toilet Paper Catch",
    type: Phaser.AUTO,
    backgroundColor: 0x222222,
    scale: {
        width: 724,
        height: 640,
    },
    input: {
        keyboard: true,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 100,
            },
            debug: false,
        },
    },
    parent: "game",
    scene: scenes_1.default,
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/objects/ContaminatedPaper.ts":
/*!******************************************!*\
  !*** ./src/objects/ContaminatedPaper.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaminatedPaper = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Paper_1 = __webpack_require__(/*! ./Paper */ "./src/objects/Paper.ts");
var ContaminatedPaper = /** @class */ (function (_super) {
    __extends(ContaminatedPaper, _super);
    function ContaminatedPaper(params) {
        var _this = _super.call(this, {
            scene: params.scene,
            x: params.x,
            y: params.y,
            textureKey: params.textureKey,
            player: params.player
        }) || this;
        _this.setTint(helpers_1.COLORS.customRed.hex);
        return _this;
    }
    return ContaminatedPaper;
}(Paper_1.Paper));
exports.ContaminatedPaper = ContaminatedPaper;


/***/ }),

/***/ "./src/objects/HealthBar.ts":
/*!**********************************!*\
  !*** ./src/objects/HealthBar.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthBar = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var HealthBar = /** @class */ (function () {
    function HealthBar(params) {
        this.bar = params.scene.add.graphics();
        this.width = 200;
        this.height = 16;
        this.healthValue = 200;
        this.x = 20;
        this.y = 20;
        this.draw();
    }
    HealthBar.prototype.decrease = function (pAmount) {
        this.healthValue -= pAmount * 2;
        if (this.healthValue < 0) {
            this.healthValue = 0;
        }
        this.draw();
        return this.healthValue === 0;
    };
    HealthBar.prototype.draw = function () {
        this.bar.clear();
        // Background
        this.bar.fillStyle(helpers_1.COLORS.white.hex);
        this.bar.fillRect(this.x, this.y, this.width, this.height);
        if (this.healthValue > 60) {
            this.bar.fillStyle(helpers_1.COLORS.customBlue.hex);
        }
        else {
            this.bar.fillStyle(helpers_1.COLORS.customRed.hex);
        }
        var healthWidth = Math.floor(this.healthValue);
        // The actual health jauge you see decreasing
        this.bar.fillRect(this.x, this.y, healthWidth, this.height);
    };
    return HealthBar;
}());
exports.HealthBar = HealthBar;


/***/ }),

/***/ "./src/objects/LoadingBar.ts":
/*!***********************************!*\
  !*** ./src/objects/LoadingBar.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingBar = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var LoadingBar = /** @class */ (function () {
    function LoadingBar(params) {
        this.scene = params.scene;
        this.bar = this.scene.add.graphics();
        this.barWidth = 400;
        this.barHeight = 30;
        this.barX = helpers_1.getGameWidth(this.scene) / 2 - this.barWidth / 2;
        this.barY = helpers_1.getGameHeight(this.scene) / 2 - this.barHeight / 2;
        this.barColor = helpers_1.COLORS.customRed.hex;
        this.barAlpha = 0.8;
        this.box = this.scene.add.graphics();
        this.boxWidth = this.barWidth + 10;
        this.boxHeight = this.barHeight + 10;
        this.boxX = helpers_1.getGameWidth(this.scene) / 2 - this.boxWidth / 2;
        this.boxY = helpers_1.getGameHeight(this.scene) / 2 - this.boxHeight / 2;
        this.boxColor = helpers_1.COLORS.white.hex;
        this.boxAlpha = 0.3;
        this.box.fillStyle(this.boxColor, this.boxAlpha);
        this.box.fillRect(this.boxX, this.boxY, this.boxWidth, this.boxHeight);
        this.text = this.scene.make.text({
            x: helpers_1.getGameWidth(this.scene) / 2,
            y: helpers_1.getGameHeight(this.scene) / 2 + 40,
            text: "Chargement...",
            style: {
                font: "20px monospace",
            },
        });
        this.text.setOrigin(0.5, 0.5);
        this._progressText = this.scene.make.text({
            x: helpers_1.getGameWidth(this.scene) / 2,
            y: helpers_1.getGameHeight(this.scene) / 2,
            text: "0%",
            style: {
                font: "18px monospace",
            },
        });
        this._progressText.setOrigin(0.5, 0.5);
    }
    Object.defineProperty(LoadingBar.prototype, "progressText", {
        get: function () {
            return this._progressText;
        },
        enumerable: false,
        configurable: true
    });
    LoadingBar.prototype.draw = function (pValue) {
        this.bar.clear();
        this.bar.fillStyle(this.barColor, this.barAlpha);
        this.bar.fillRect(this.barX, this.barY, this.barWidth * pValue, this.barHeight);
    };
    LoadingBar.prototype.destroy = function () {
        this.bar.destroy();
        this.box.destroy();
        this.text.destroy();
        this.progressText.destroy();
    };
    return LoadingBar;
}());
exports.LoadingBar = LoadingBar;


/***/ }),

/***/ "./src/objects/Paper.ts":
/*!******************************!*\
  !*** ./src/objects/Paper.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paper = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Paper = /** @class */ (function (_super) {
    __extends(Paper, _super);
    function Paper(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.textureKey) || this;
        _this.vx = 0;
        _this.vy = 110;
        _this.gy = 10;
        _this.player = params.player;
        _this.scene.add.existing(_this);
        _this.scene.physics.world.enable(_this);
        _this.setGravityY(_this.gy);
        _this.setVelocity(_this.vx, _this.vy);
        return _this;
    }
    Paper.prototype.isOut = function () {
        if (this.y > helpers_1.getGameHeight(this.scene) || this.y < 0) {
            return true;
        }
        return false;
    };
    Paper.prototype.update = function () {
        if (this.player.scoreIsStepOne()) {
            this.setVelocityY(200);
        }
        if (this.isOut()) {
            this.destroy();
            if (!this.player.scoreIsNeg()) {
                this.player.decreaseScore();
            }
        }
    };
    return Paper;
}(Phaser.Physics.Arcade.Image));
exports.Paper = Paper;


/***/ }),

/***/ "./src/objects/Player.ts":
/*!*******************************!*\
  !*** ./src/objects/Player.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.textureKey) || this;
        _this.scene.add.existing(_this);
        _this.initPhysics();
        _this.applyPhysics();
        _this.initSounds();
        _this.initVitals();
        _this.initHealthBar(params.healthBar);
        _this.initControls(params.controlKeys);
        _this._score = 0;
        return _this;
    }
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "badPaperSound", {
        get: function () {
            return this._badPaperSound;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "goodPaperSound", {
        get: function () {
            return this._goodPaperSound;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.increaseScore = function () {
        this._score += 5;
    };
    Player.prototype.decreaseScore = function () {
        this._score -= 5;
    };
    Player.prototype.scoreIsNeg = function () {
        return this._score <= 0;
    };
    Player.prototype.scoreIsStepOne = function () {
        return this._score >= 100;
    };
    Player.prototype.isDead = function () {
        return this.health <= 0;
    };
    Player.prototype.hurt = function () {
        if (this.health > 0) {
            this.health -= 20;
            this.healthBar.decrease(20);
        }
    };
    Player.prototype.initSounds = function () {
        this._badPaperSound = this.scene.sound.add("badPaperSound");
        this._goodPaperSound = this.scene.sound.add("goodPaperSound");
    };
    Player.prototype.initVitals = function () {
        this.health = 100;
    };
    Player.prototype.initPhysics = function () {
        this.vx = 350;
        this.jumpVelocity = -500;
    };
    Player.prototype.applyPhysics = function () {
        this.scene.physics.world.enable(this);
        this.setCollideWorldBounds(true);
        this.setGravityY(1000);
        this.setBounce(0.5);
    };
    Player.prototype.initControls = function (pKeys) {
        this.rightKey = this.scene.input.keyboard.addKey(pKeys["right"]);
        this.leftKey = this.scene.input.keyboard.addKey(pKeys["left"]);
        this.upKey = this.scene.input.keyboard.addKey(pKeys["jump"]);
    };
    Player.prototype.initHealthBar = function (pHealthBar) {
        this.healthBar = pHealthBar;
    };
    /**
     * Handle idling (doing nothing) AND idling-shooting.
     * This includes animation playing, checking key press, setting velocity,
     * create shoots.
     */
    Player.prototype.handleIdling = function () {
        this.setVelocityX(0);
    };
    /**
     * Handle walking AND walking-shooting.
     * This includes animation playing, checking key press, setting velocity,
     * create shoots and remembering last pressed key.
     */
    Player.prototype.handleWalking = function () {
        if (this.rightKey.isDown) {
            this.setVelocityX(this.vx);
        }
        else if (this.leftKey.isDown) {
            this.setVelocityX(-this.vx);
        }
    };
    /**
     * Handle jumping AND jumping-shooting.
     * This includes animation playing, checking key press, setting velocity,
     * create shoots and remembering last pressed key.
     */
    Player.prototype.handleJumping = function () {
        if (this.upKey.isDown) {
            if (this.body.blocked.down || this.body.touching.down) {
                this.setVelocityY(this.jumpVelocity);
            }
        }
    };
    Player.prototype.update = function () {
        if (this.upKey.isDown) {
            this.handleJumping();
        }
        if (this.rightKey.isDown || this.leftKey.isDown) {
            this.handleWalking();
        }
        else {
            this.handleIdling();
        }
    };
    return Player;
}(Phaser.Physics.Arcade.Sprite));
exports.Player = Player;


/***/ }),

/***/ "./src/scenes/BootScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/BootScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootScene = void 0;
var SceneStartButton_1 = __webpack_require__(/*! ../gui/SceneStartButton */ "./src/gui/SceneStartButton.ts");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var LoadingBar_1 = __webpack_require__(/*! ../objects/LoadingBar */ "./src/objects/LoadingBar.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: "Boot",
};
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, sceneConfig) || this;
    }
    BootScene.prototype.preload = function () {
        var _this = this;
        this.load.pack("preload", "assets/pack.json", "preload");
        this.loadingBar = new LoadingBar_1.LoadingBar({ scene: this });
        this.load.on("progress", function (value) {
            _this.loadingBar.draw(value);
            _this.loadingBar.progressText.setText((Math.floor(value * 100)) + "%");
        });
        this.load.on("complete", function () {
            _this.loadingBar.destroy();
        });
    };
    BootScene.prototype.create = function () {
        this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, "logo");
        this.btn = new SceneStartButton_1.SceneStartButton({
            scene: this,
            x: helpers_1.getGameWidth(this) / 2,
            y: 540,
            width: 124,
            height: 44,
            color: helpers_1.COLORS.white.hex,
            hoverColor: helpers_1.COLORS.customYellow.hex,
            label: "START",
            fontSize: "24px",
            fontColor: helpers_1.COLORS.black.string,
            alpha: 1,
            newSceneKey: "Game"
        });
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/GameScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/GameScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameScene = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Paper_1 = __webpack_require__(/*! ../objects/Paper */ "./src/objects/Paper.ts");
var Player_1 = __webpack_require__(/*! ../objects/Player */ "./src/objects/Player.ts");
var HealthBar_1 = __webpack_require__(/*! ../objects/HealthBar */ "./src/objects/HealthBar.ts");
var ContaminatedPaper_1 = __webpack_require__(/*! ../objects/ContaminatedPaper */ "./src/objects/ContaminatedPaper.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: "Game",
};
/**
 * The Game Scene is where all the actions takes place.
 */
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this, sceneConfig) || this;
    }
    GameScene.prototype.setColliders = function () {
        var _this = this;
        this.physics.add.collider(this.player, this.papers, function (player, paper) {
            _this.player.increaseScore();
            _this.player.goodPaperSound.play();
            paper.destroy();
        });
        this.physics.add.collider(this.player, this.contaminatedPapers, function (player, paper) {
            _this.player.hurt();
            _this.player.badPaperSound.play();
            paper.destroy();
        });
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, "store");
        this.player = new Player_1.Player({
            scene: this,
            x: 300,
            y: 300,
            textureKey: "toilet",
            controlKeys: helpers_1.CONTROLKEYS.PLAYER.SET1,
            healthBar: new HealthBar_1.HealthBar({
                scene: this,
            }),
        });
        this.score = this.make.text({
            x: 20,
            y: 40,
            text: "SCORE : " + this.player.score,
            style: {
                font: "32px monospace",
                fontStyle: "strong"
            },
        });
        this.papers = this.add.group({
            runChildUpdate: true,
        });
        this.contaminatedPapers = this.add.group({
            runChildUpdate: true,
        });
        this.paperCreationEvent = this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: function () {
                _this.papers.add(new Paper_1.Paper({
                    scene: _this,
                    x: Phaser.Math.Between(50, helpers_1.getGameWidth(_this) - 50),
                    y: 0,
                    textureKey: "paper",
                    player: _this.player,
                }));
            },
            callbackScope: this,
        });
        this.paperCreationEvent = this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: function () {
                _this.contaminatedPapers.add(new ContaminatedPaper_1.ContaminatedPaper({
                    scene: _this,
                    x: Phaser.Math.Between(50, helpers_1.getGameWidth(_this) - 50),
                    y: 0,
                    textureKey: "paper",
                    player: _this.player
                }));
            },
            callbackScope: this,
        });
        this.setColliders();
    };
    GameScene.prototype.update = function () {
        this.player.update();
        if (this.player.isDead()) {
            this.scene.start("Gameover", { "score": this.player.score });
        }
        // TODO : Virer ça de l'update
        this.score.setText("SCORE : " + this.player.score);
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/scenes/GameoverScene.ts":
/*!*************************************!*\
  !*** ./src/scenes/GameoverScene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameoverScene = void 0;
var SceneStartButton_1 = __webpack_require__(/*! ../gui/SceneStartButton */ "./src/gui/SceneStartButton.ts");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: "Gameover",
};
var GameoverScene = /** @class */ (function (_super) {
    __extends(GameoverScene, _super);
    function GameoverScene() {
        return _super.call(this, sceneConfig) || this;
    }
    GameoverScene.prototype.init = function (gameSceneData) {
        this.data.set("score", gameSceneData.score);
    };
    GameoverScene.prototype.create = function () {
        this.gameOverSound = this.sound.add("gameOverSound");
        this.gameOverSound.play();
        this.mainMessage = this.make.text({
            x: helpers_1.getGameWidth(this) / 2,
            y: helpers_1.getGameHeight(this) / 2,
            text: "YOU. ARE. DEAD",
            origin: 0.5,
            style: {
                font: "64px monospace",
                fontStyle: "strong"
            },
        });
        this.make.text({
            x: helpers_1.getGameWidth(this) / 2,
            y: this.mainMessage.y + 55,
            text: "Your score : " + this.data.get("score"),
            origin: 0.5,
            style: {
                font: "32px monospace",
                fontStyle: "strong"
            },
        });
        new SceneStartButton_1.SceneStartButton({
            scene: this,
            x: helpers_1.getGameWidth(this) / 2,
            y: 540,
            width: 124,
            height: 44,
            color: helpers_1.COLORS.white.hex,
            hoverColor: helpers_1.COLORS.customYellow.hex,
            label: "REPLAY",
            fontSize: "24px",
            fontColor: helpers_1.COLORS.black.string,
            alpha: 1,
            newSceneKey: "Game"
        });
    };
    return GameoverScene;
}(Phaser.Scene));
exports.GameoverScene = GameoverScene;


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var BootScene_1 = __webpack_require__(/*! ./BootScene */ "./src/scenes/BootScene.ts");
var GameScene_1 = __webpack_require__(/*! ./GameScene */ "./src/scenes/GameScene.ts");
var GameoverScene_1 = __webpack_require__(/*! ./GameoverScene */ "./src/scenes/GameoverScene.ts");
exports.default = [
    BootScene_1.BootScene,
    GameScene_1.GameScene,
    GameoverScene_1.GameoverScene
];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2d1aS9TY2VuZVN0YXJ0QnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0NvbnRhbWluYXRlZFBhcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0hlYWx0aEJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9Mb2FkaW5nQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1BhcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0Jvb3RTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVvdmVyU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LHNDQUFhOzs7Ozs7Ozs7Ozs7OztBQ1gxQixjQUFjOztBQUVkLHNGQUF3QztBQUN4QyxzRkFBd0M7QUFDeEMsa0dBQWdEO0FBRWhELGtCQUFlO0lBQ2QscUJBQVM7SUFDVCxxQkFBUztJQUNULDZCQUFhO0NBQ2IsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQ09MT1JTLCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsIEZPTlRfU0laRVMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lU3RhcnRCdXR0b24ge1xyXG4gICAgcHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgcHJpdmF0ZSBib3g6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgICBwcml2YXRlIHRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gICAgcHJpdmF0ZSB4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGNvbG9yOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhvdmVyQ29sb3I6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZm9udFNpemU6IHN0cmluZztcclxuICAgIHByaXZhdGUgZm9udENvbG9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGFscGhhOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIG5ld1NjZW5lS2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHNjZW5lRGF0YTogYW55O1xyXG5cclxuICAgIGRlc3Ryb3lCb3hBbmRUZXh0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm94LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnRleHQuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgICAgIGNvbG9yOiBudW1iZXI7XHJcbiAgICAgICAgaG92ZXJDb2xvcjogbnVtYmVyO1xyXG4gICAgICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICAgICAgZm9udFNpemU6IHN0cmluZztcclxuICAgICAgICBmb250Q29sb3I6IHN0cmluZztcclxuICAgICAgICBhbHBoYTogbnVtYmVyO1xyXG4gICAgICAgIG5ld1NjZW5lS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgc2NlbmVEYXRhPzogYW55O1xyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBwYXJhbXMuc2NlbmU7XHJcbiAgICAgICAgdGhpcy54ID0gcGFyYW1zLng7XHJcbiAgICAgICAgdGhpcy55ID0gcGFyYW1zLnk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHBhcmFtcy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHBhcmFtcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHBhcmFtcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmhvdmVyQ29sb3IgPSBwYXJhbXMuaG92ZXJDb2xvcjtcclxuICAgICAgICB0aGlzLmxhYmVsID0gcGFyYW1zLmxhYmVsO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSBwYXJhbXMuZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5mb250Q29sb3IgPSBwYXJhbXMuZm9udENvbG9yO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSBwYXJhbXMuYWxwaGE7XHJcbiAgICAgICAgdGhpcy5uZXdTY2VuZUtleSA9IHBhcmFtcy5uZXdTY2VuZUtleTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcy5zY2VuZURhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZURhdGEgPSBwYXJhbXMuc2NlbmVEYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVEYXRhID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYm94ID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUoXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgIHRoaXMueCxcclxuICAgICAgICAgICAgdGhpcy55LFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgdGhpcy5hbHBoYVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94LnNldEludGVyYWN0aXZlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94Lm9uKFxyXG4gICAgICAgICAgICBcInBvaW50ZXJkb3duXCIsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc291bmQuc3RvcEFsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLmZhZGVPdXQoMTAwMCwgMCwgMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmFzLm1haW4ub25jZShcclxuICAgICAgICAgICAgICAgICAgICBQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkV2ZW50cy5GQURFX09VVF9DT01QTEVURSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc2NlbmUuc3RhcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld1NjZW5lS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZURhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3gub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm94LmZpbGxDb2xvciA9IHRoaXMuaG92ZXJDb2xvcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3gub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ib3guZmlsbENvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3guc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0KFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICB0aGlzLmJveC54LFxyXG4gICAgICAgICAgICB0aGlzLmJveC55LFxyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogdGhpcy5mb250U2l6ZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmZvbnRDb2xvcixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzLmJveCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcy50ZXh0KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSBjdXJyZW50IHNjZW5lLlxyXG4gKiBXaGljaCBpcyBnZW5lcmFsbHkgZXF1YWwgdG8gdGhlIHdpZHRoIG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuICAgIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgaGVpZ2h0IG9mIHRoZSBjdXJyZW50IHNjZW5lLlxyXG4gKiBXaGljaCBpcyBnZW5lcmFsbHkgZXF1YWwgdG8gdGhlIGhlaWdodCBvZiB0aGUgXCJzY3JlZW5cIi9jYW52YXMgYnV0IG5vdCBhbHdheXMuXHJcbiAqIEBwYXJhbSBzY2VuZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIExvYWQgYSBmaWxlIGluIGFqYXggYW5kIHJldHVybiBpdHMgcmVzcG9uc2UgdGV4dC5cclxuICogQHBhcmFtIHBGaWxlUGF0aCBQYXRoIHRvIHRoZSBkZXNpcmVkIGZpbGVcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkRmlsZSA9IChwRmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICBsZXQgcmF3RmlsZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nO1xyXG5cclxuICAgIHJhd0ZpbGUub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkltcG9zc2libGUgdG8gbG9hZCBmaWxlLlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgcmF3RmlsZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHJhd0ZpbGUucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICBpZiAocmF3RmlsZS5zdGF0dXMgPT09IDIwMCB8fCByYXdGaWxlLnN0YXR1cyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmF3RmlsZS5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJhd0ZpbGUub3BlbihcIkdFVFwiLCBwRmlsZVBhdGgsIGZhbHNlKTtcclxuICAgIHJhd0ZpbGUuc2VuZChudWxsKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSAyZC1hcnJheSBvZiBzdHJpbmdzIGZyb20gYSB3aG9sZSB0ZXh0IGZpbGUgZ2l2ZW4gYXMgaW5wdXQuXHJcbiAqIFdvcmtzIGJlc3QgaWYgdGhlIGlucHV0IHRleHQgaXMgb25seSBjb21wb3NlZCBvZiBzaW5nbGUgY2hhcnMgYW5kICdcXG4nLlxyXG4gKiBFYWNoIGZpbmFsIGFycmF5IGVsZW1lbnQgd291bGQgYmUgb25lIGNoYXJhY3RlciBvZiB0aGUgdGV4dCBpbnB1dC5cclxuICogQHBhcmFtIHBGaWxlUGF0aFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRTdHJpbmdzID0gKHBGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nW11bXSA9PiB7XHJcbiAgICBsZXQgcmF3R3JpZCA9IGxvYWRGaWxlKHBGaWxlUGF0aCk7XHJcbiAgICByZXR1cm4gcmF3R3JpZC5zcGxpdChcIlxcblwiKS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3BsaXQoXCJcIikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcclxuICAgIGN1c3RvbUJsdWU6IHsgc3RyaW5nOiBcIiM0MzQ2ZjlcIiwgaGV4OiAweDQzNDZmOSB9LFxyXG4gICAgY3VzdG9tR3JlZW46IHsgc3RyaW5nOiBcIiM3NmVhNjRcIiwgaGV4OiAweDc2ZWE2NCB9LFxyXG4gICAgdmlicmFudEdyZWVuOiB7IHN0cmluZzogXCIjMjVmOTQ1XCIsIGhleDogMHgyNWY5NDUgfSxcclxuICAgIGN1c3RvbVJlZDogeyBzdHJpbmc6IFwiI2VhMmQyM1wiLCBoZXg6IDB4ZWEyZDIzIH0sXHJcbiAgICB3aGl0ZTogeyBzdHJpbmc6IFwiI2ZmZmZmZlwiLCBoZXg6IDB4ZmZmZmZmIH0sXHJcbiAgICBibGFjazogeyBzdHJpbmc6IFwiIzAwMDAwMFwiLCBoZXg6IDB4MDAwMDAwIH0sXHJcbiAgICBjdXN0b21ZZWxsb3c6IHsgc3RyaW5nOiBcIiNmZmRlNTlcIiwgaGV4OiAweGZmZGU1OSB9LFxyXG4gICAgZ3JleTogeyBzdHJpbmc6IFwiI2QzZDFkMlwiLCBoZXg6IDB4ZDNkMWQyIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVFJPTEtFWVMgPSB7XHJcbiAgICBQTEFZRVI6IHtcclxuICAgICAgICBTRVQxOiB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUklHSFQsXHJcbiAgICAgICAgICAgIGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5MRUZULFxyXG4gICAgICAgICAgICBqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVVAsXHJcbiAgICAgICAgICAgIHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU0hJRlQsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgU0VUMjoge1xyXG4gICAgICAgICAgICByaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkQsXHJcbiAgICAgICAgICAgIGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5RLFxyXG4gICAgICAgICAgICBqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUyxcclxuICAgICAgICAgICAgc2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TUEFDRSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGaXhlZCBmb250IGZhbWlseSB0byB1c2UgYWNyb3NzIHRoZSBnYW1lIDpcclxuICogXCJNb25vc3BhY2UsIFRhaG9tYSwgQXJpYWxcIlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRk9OVF9GQU1JTElFUyA9IFwibW9ub3NwYWNlLCBUYWhvbWEsIEFyaWFsXCI7XHJcblxyXG4vKipcclxuICogRml4ZWQgZm9udCBzaXplcyB0byB1c2UgYWNyb3NzIHRoZSBnYW1lIDpcclxuICogeHNtYWxsID0gOHB4LFxyXG4gKiBzbWFsbCA9IDEycHgsXHJcbiAqIG1lZGl1bSA9IDE4cHgsXHJcbiAqIGxhcmdlID0gMjRweCxcclxuICogeGxhcmdlID0gMzJweCxcclxuICogYmlnID0gNjRweCxcclxuICogZ2lhbnQgPSAxMjhweFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEZPTlRfU0laRVMgPSB7XHJcbiAgICB4c21hbGw6IFwiOHB4XCIsXHJcbiAgICBzbWFsbDogXCIxMnB4XCIsXHJcbiAgICBtZWRpdW06IFwiMThweFwiLFxyXG4gICAgbGFyZ2U6IFwiMjRweFwiLFxyXG4gICAgeGxhcmdlOiBcIjMycHhcIixcclxuICAgIGJpZzogXCI2NHB4XCIsXHJcbiAgICBnaWFudDogXCIxMjhweFwiLFxyXG59O1xyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcclxuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgU2NlbmVzIGZyb20gXCIuL3NjZW5lc1wiO1xyXG5cclxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICAgIHRpdGxlOiBcIlRvaWxldCBQYXBlciBDYXRjaFwiLFxyXG5cdHR5cGU6IFBoYXNlci5BVVRPLFxyXG5cdGJhY2tncm91bmRDb2xvcjogMHgyMjIyMjIsXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAgIHdpZHRoOiA3MjQsXHJcbiAgICAgICAgaGVpZ2h0OiA2NDAsXHJcbiAgICB9LFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgICBrZXlib2FyZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJhcmNhZGVcIixcclxuICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgZ3Jhdml0eToge1xyXG4gICAgICAgICAgICAgICAgeTogMTAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwYXJlbnQ6IFwiZ2FtZVwiLFxyXG4gICAgc2NlbmU6IFNjZW5lcyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpO1xyXG4iLCJpbXBvcnQgeyBDT0xPUlMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gXCIuL1BhcGVyXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhbWluYXRlZFBhcGVyIGV4dGVuZHMgUGFwZXIge1xyXG5cdGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHRcdHg6IG51bWJlcjtcclxuXHRcdHk6IG51bWJlcjtcclxuXHRcdHRleHR1cmVLZXk6IHN0cmluZztcclxuXHRcdHBsYXllcjogUGxheWVyXHJcblx0fSkge1xyXG5cdFx0c3VwZXIoe1xyXG5cdFx0XHRzY2VuZTogcGFyYW1zLnNjZW5lLCBcclxuXHRcdFx0eDogcGFyYW1zLngsIFxyXG5cdFx0XHR5OiBwYXJhbXMueSwgXHJcblx0XHRcdHRleHR1cmVLZXk6IHBhcmFtcy50ZXh0dXJlS2V5LFxyXG5cdFx0XHRwbGF5ZXI6IHBhcmFtcy5wbGF5ZXJcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuc2V0VGludChDT0xPUlMuY3VzdG9tUmVkLmhleCk7XHJcblx0fVxyXG59IiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENPTE9SUywgZ2V0R2FtZVdpZHRoIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFsdGhCYXIge1xyXG4gICAgcHJpdmF0ZSBiYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuICAgIHByaXZhdGUgeDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWFsdGhWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBkZWNyZWFzZShwQW1vdW50OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLmhlYWx0aFZhbHVlIC09IHBBbW91bnQgKiAyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhWYWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhWYWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoVmFsdWUgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFyLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIEJhY2tncm91bmRcclxuICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLndoaXRlLmhleCk7XHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoVmFsdWUgPiA2MCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLmN1c3RvbUJsdWUuaGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLmN1c3RvbVJlZC5oZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhlYWx0aFdpZHRoID0gTWF0aC5mbG9vcih0aGlzLmhlYWx0aFZhbHVlKTtcclxuICAgICAgICAvLyBUaGUgYWN0dWFsIGhlYWx0aCBqYXVnZSB5b3Ugc2VlIGRlY3JlYXNpbmdcclxuICAgICAgICB0aGlzLmJhci5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgaGVhbHRoV2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZTsgfSkge1xyXG4gICAgICAgIHRoaXMuYmFyID0gcGFyYW1zLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAyMDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNjtcclxuXHRcdHRoaXMuaGVhbHRoVmFsdWUgPSAyMDA7XHJcblx0XHR0aGlzLnggPSAyMDtcclxuXHRcdHRoaXMueSA9IDIwO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBDT0xPUlMsIGdldEdhbWVIZWlnaHQsIGdldEdhbWVXaWR0aCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0JhciB7XHJcbiAgICBwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblxyXG4gICAgcHJpdmF0ZSBiYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuICAgIHByaXZhdGUgYmFyWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBiYXJZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhcldpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhckhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBiYXJDb2xvcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBiYXJBbHBoYTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgYm94OiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3M7XHJcbiAgICBwcml2YXRlIGJveFg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYm94WTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hXaWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hIZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYm94Q29sb3I6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYm94QWxwaGE6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gICAgcHJpdmF0ZSBfcHJvZ3Jlc3NUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcbiAgICBnZXQgcHJvZ3Jlc3NUZXh0KCk6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocFZhbHVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYXIuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUodGhpcy5iYXJDb2xvciwgdGhpcy5iYXJBbHBoYSk7XHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFJlY3QoXHJcbiAgICAgICAgICAgIHRoaXMuYmFyWCxcclxuICAgICAgICAgICAgdGhpcy5iYXJZLFxyXG4gICAgICAgICAgICB0aGlzLmJhcldpZHRoICogcFZhbHVlLFxyXG4gICAgICAgICAgICB0aGlzLmJhckhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJhci5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ib3guZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMudGV4dC5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RleHQuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lIH0pIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gcGFyYW1zLnNjZW5lO1xyXG5cclxuICAgICAgICB0aGlzLmJhciA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5iYXJXaWR0aCA9IDQwMDtcclxuICAgICAgICB0aGlzLmJhckhlaWdodCA9IDMwO1xyXG4gICAgICAgIHRoaXMuYmFyWCA9IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSAvIDIgLSB0aGlzLmJhcldpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLmJhclkgPSBnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIC8gMiAtIHRoaXMuYmFySGVpZ2h0IC8gMjtcclxuICAgICAgICB0aGlzLmJhckNvbG9yID0gQ09MT1JTLmN1c3RvbVJlZC5oZXg7XHJcbiAgICAgICAgdGhpcy5iYXJBbHBoYSA9IDAuODtcclxuXHJcbiAgICAgICAgdGhpcy5ib3ggPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuYm94V2lkdGggPSB0aGlzLmJhcldpZHRoICsgMTA7XHJcbiAgICAgICAgdGhpcy5ib3hIZWlnaHQgPSB0aGlzLmJhckhlaWdodCArIDEwO1xyXG4gICAgICAgIHRoaXMuYm94WCA9IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSAvIDIgLSB0aGlzLmJveFdpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLmJveFkgPSBnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIC8gMiAtIHRoaXMuYm94SGVpZ2h0IC8gMjtcclxuICAgICAgICB0aGlzLmJveENvbG9yID0gQ09MT1JTLndoaXRlLmhleDtcclxuICAgICAgICB0aGlzLmJveEFscGhhID0gMC4zO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5maWxsU3R5bGUodGhpcy5ib3hDb2xvciwgdGhpcy5ib3hBbHBoYSk7XHJcbiAgICAgICAgdGhpcy5ib3guZmlsbFJlY3QodGhpcy5ib3hYLCB0aGlzLmJveFksIHRoaXMuYm94V2lkdGgsIHRoaXMuYm94SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5zY2VuZS5tYWtlLnRleHQoe1xyXG4gICAgICAgICAgICB4OiBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICB5OiBnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIC8gMiArIDQwLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIkNoYXJnZW1lbnQuLi5cIixcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IFwiMjBweCBtb25vc3BhY2VcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3Byb2dyZXNzVGV4dCA9IHRoaXMuc2NlbmUubWFrZS50ZXh0KHtcclxuICAgICAgICAgICAgeDogZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgeTogZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiMCVcIixcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IFwiMThweCBtb25vc3BhY2VcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NUZXh0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXBlciBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5JbWFnZSB7XHJcblxyXG5cdHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSB2eDogbnVtYmVyO1xyXG5cdHByaXZhdGUgdnk6IG51bWJlcjtcclxuXHRwcml2YXRlIGd5OiBudW1iZXI7XHJcblxyXG4gICAgaXNPdXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHwgdGhpcy55IDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRcclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHRcdHg6IG51bWJlcjtcclxuXHRcdHk6IG51bWJlcjtcclxuXHRcdHRleHR1cmVLZXk6IHN0cmluZztcclxuXHRcdHBsYXllcjogUGxheWVyO1xyXG5cdH0pIHtcclxuXHRcdHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcblxyXG5cdFx0dGhpcy52eCA9IDA7XHJcblx0XHR0aGlzLnZ5ID0gMTEwO1xyXG5cdFx0dGhpcy5neSA9IDEwO1xyXG5cdFx0dGhpcy5wbGF5ZXIgPSBwYXJhbXMucGxheWVyO1xyXG5cdFx0XHJcblx0XHR0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHRcdHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGUodGhpcyk7XHJcblx0XHR0aGlzLnNldEdyYXZpdHlZKHRoaXMuZ3kpO1xyXG5cdFx0dGhpcy5zZXRWZWxvY2l0eSh0aGlzLnZ4LCB0aGlzLnZ5KTtcclxuXHR9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMucGxheWVyLnNjb3JlSXNTdGVwT25lKCkpIHtcclxuXHRcdFx0dGhpcy5zZXRWZWxvY2l0eVkoMjAwKTtcclxuXHRcdH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXQoKSkge1xyXG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdFx0aWYgKCF0aGlzLnBsYXllci5zY29yZUlzTmVnKCkpIHtcclxuXHRcdFx0XHR0aGlzLnBsYXllci5kZWNyZWFzZVNjb3JlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vSGVhbHRoQmFyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcbiAgICBwcml2YXRlIGhlYWx0aEJhcjogSGVhbHRoQmFyO1xyXG4gICAgcHJpdmF0ZSByaWdodEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgbGVmdEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgdXBLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwcml2YXRlIGhlYWx0aDogbnVtYmVyO1xyXG5cdHByaXZhdGUgdng6IG51bWJlcjtcclxuXHRwcml2YXRlIGp1bXBWZWxvY2l0eTogbnVtYmVyO1xyXG5cdHByaXZhdGUgX3Njb3JlOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfYmFkUGFwZXJTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHRwcml2YXRlIF9nb29kUGFwZXJTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHJcblx0Z2V0IHNjb3JlKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2NvcmU7XHJcblx0fVxyXG5cclxuXHRnZXQgYmFkUGFwZXJTb3VuZCgpOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kIHtcclxuXHRcdHJldHVybiB0aGlzLl9iYWRQYXBlclNvdW5kO1xyXG5cdH1cclxuXHJcblx0Z2V0IGdvb2RQYXBlclNvdW5kKCk6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2dvb2RQYXBlclNvdW5kO1xyXG5cdH1cclxuXHJcblx0aW5jcmVhc2VTY29yZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuX3Njb3JlICs9IDU7XHJcblx0fVxyXG5cclxuXHRkZWNyZWFzZVNjb3JlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fc2NvcmUgLT0gNTtcclxuXHR9XHJcblxyXG5cdHNjb3JlSXNOZWcoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2NvcmUgPD0gMDtcclxuXHR9XHJcblxyXG5cdHNjb3JlSXNTdGVwT25lKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Njb3JlID49IDEwMDtcclxuXHR9XHJcblxyXG4gICAgaXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aCA8PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBodXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gMjA7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmRlY3JlYXNlKDIwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0U291bmRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2JhZFBhcGVyU291bmQgPSB0aGlzLnNjZW5lLnNvdW5kLmFkZChcImJhZFBhcGVyU291bmRcIik7XHJcbiAgICAgICAgdGhpcy5fZ29vZFBhcGVyU291bmQgPSB0aGlzLnNjZW5lLnNvdW5kLmFkZChcImdvb2RQYXBlclNvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFZpdGFscygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRQaHlzaWNzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudnggPSAzNTA7XHJcblx0XHR0aGlzLmp1bXBWZWxvY2l0eSA9IC01MDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseVBoeXNpY3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuXHRcdHRoaXMuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xyXG5cdFx0dGhpcy5zZXRHcmF2aXR5WSgxMDAwKTtcclxuXHRcdHRoaXMuc2V0Qm91bmNlKDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Q29udHJvbHMocEtleXMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJpZ2h0S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJyaWdodFwiXSk7XHJcbiAgICAgICAgdGhpcy5sZWZ0S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJsZWZ0XCJdKTtcclxuICAgICAgICB0aGlzLnVwS2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJqdW1wXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRIZWFsdGhCYXIocEhlYWx0aEJhcjogSGVhbHRoQmFyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSBwSGVhbHRoQmFyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGlkbGluZyAoZG9pbmcgbm90aGluZykgQU5EIGlkbGluZy1zaG9vdGluZy5cclxuICAgICAqIFRoaXMgaW5jbHVkZXMgYW5pbWF0aW9uIHBsYXlpbmcsIGNoZWNraW5nIGtleSBwcmVzcywgc2V0dGluZyB2ZWxvY2l0eSxcclxuICAgICAqIGNyZWF0ZSBzaG9vdHMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlSWRsaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIHdhbGtpbmcgQU5EIHdhbGtpbmctc2hvb3RpbmcuXHJcbiAgICAgKiBUaGlzIGluY2x1ZGVzIGFuaW1hdGlvbiBwbGF5aW5nLCBjaGVja2luZyBrZXkgcHJlc3MsIHNldHRpbmcgdmVsb2NpdHksXHJcbiAgICAgKiBjcmVhdGUgc2hvb3RzIGFuZCByZW1lbWJlcmluZyBsYXN0IHByZXNzZWQga2V5LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZVdhbGtpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucmlnaHRLZXkuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMuc2V0VmVsb2NpdHlYKHRoaXMudngpO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmxlZnRLZXkuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMuc2V0VmVsb2NpdHlYKC10aGlzLnZ4KTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBqdW1waW5nIEFORCBqdW1waW5nLXNob290aW5nLlxyXG4gICAgICogVGhpcyBpbmNsdWRlcyBhbmltYXRpb24gcGxheWluZywgY2hlY2tpbmcga2V5IHByZXNzLCBzZXR0aW5nIHZlbG9jaXR5LFxyXG4gICAgICogY3JlYXRlIHNob290cyBhbmQgcmVtZW1iZXJpbmcgbGFzdCBwcmVzc2VkIGtleS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVKdW1waW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnVwS2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5LmJsb2NrZWQuZG93biB8fCB0aGlzLmJvZHkudG91Y2hpbmcuZG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVkodGhpcy5qdW1wVmVsb2NpdHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB0ZXh0dXJlS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgY29udHJvbEtleXM6IG9iamVjdDtcclxuICAgICAgICBoZWFsdGhCYXI6IEhlYWx0aEJhcjtcclxuICAgIH0pIHtcclxuICAgICAgICBzdXBlcihwYXJhbXMuc2NlbmUsIHBhcmFtcy54LCBwYXJhbXMueSwgcGFyYW1zLnRleHR1cmVLZXkpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXRQaHlzaWNzKCk7XHJcbiAgICAgICAgdGhpcy5hcHBseVBoeXNpY3MoKTtcclxuICAgICAgICB0aGlzLmluaXRTb3VuZHMoKTtcclxuICAgICAgICB0aGlzLmluaXRWaXRhbHMoKTtcclxuICAgICAgICB0aGlzLmluaXRIZWFsdGhCYXIocGFyYW1zLmhlYWx0aEJhcik7XHJcblx0XHR0aGlzLmluaXRDb250cm9scyhwYXJhbXMuY29udHJvbEtleXMpO1xyXG5cdFx0dGhpcy5fc2NvcmUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy51cEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVKdW1waW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93biB8fCB0aGlzLmxlZnRLZXkuaXNEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlV2Fsa2luZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSWRsaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBTY2VuZVN0YXJ0QnV0dG9uIH0gZnJvbSBcIi4uL2d1aS9TY2VuZVN0YXJ0QnV0dG9uXCI7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgQ09MT1JTIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0JhciB9IGZyb20gXCIuLi9vYmplY3RzL0xvYWRpbmdCYXJcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkJvb3RcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBidG46IFNjZW5lU3RhcnRCdXR0b247XHJcblx0cHJpdmF0ZSBsb2FkaW5nQmFyOiBMb2FkaW5nQmFyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblx0XHJcbiAgICBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZC5wYWNrKFwicHJlbG9hZFwiLCBcImFzc2V0cy9wYWNrLmpzb25cIiwgXCJwcmVsb2FkXCIpO1xyXG5cdFx0dGhpcy5sb2FkaW5nQmFyID0gbmV3IExvYWRpbmdCYXIoeyBzY2VuZTogdGhpcyB9KTtcclxuICAgICAgICB0aGlzLmxvYWQub24oXCJwcm9ncmVzc1wiLCAodmFsdWUpID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkaW5nQmFyLmRyYXcodmFsdWUpO1xyXG5cdFx0XHR0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3NUZXh0LnNldFRleHQoKE1hdGguZmxvb3IodmFsdWUqMTAwKSkgKyBcIiVcIik7XHJcblx0XHR9KTtcclxuICAgICAgICB0aGlzLmxvYWQub24oXCJjb21wbGV0ZVwiLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZGluZ0Jhci5kZXN0cm95KCk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcblx0XHR0aGlzLmFkZC5pbWFnZShnZXRHYW1lV2lkdGgodGhpcykvMiwgZ2V0R2FtZUhlaWdodCh0aGlzKS8yLCBcImxvZ29cIik7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuID0gbmV3IFNjZW5lU3RhcnRCdXR0b24oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuXHRcdFx0eDogZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMixcclxuXHRcdFx0eTogNTQwLFxyXG5cdFx0XHR3aWR0aDogMTI0LCBcclxuXHRcdFx0aGVpZ2h0OiA0NCxcclxuXHRcdFx0Y29sb3I6IENPTE9SUy53aGl0ZS5oZXgsXHJcblx0XHRcdGhvdmVyQ29sb3I6IENPTE9SUy5jdXN0b21ZZWxsb3cuaGV4LFxyXG5cdFx0XHRsYWJlbDogXCJTVEFSVFwiLFxyXG5cdFx0XHRmb250U2l6ZTogXCIyNHB4XCIsXHJcblx0XHRcdGZvbnRDb2xvcjogQ09MT1JTLmJsYWNrLnN0cmluZyxcclxuXHRcdFx0YWxwaGE6IDEsXHJcblx0XHRcdG5ld1NjZW5lS2V5OiBcIkdhbWVcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIENPTlRST0xLRVlTLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9QYXBlclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4uL29iamVjdHMvSGVhbHRoQmFyXCI7XHJcbmltcG9ydCB7IENvbnRhbWluYXRlZFBhcGVyIH0gZnJvbSBcIi4uL29iamVjdHMvQ29udGFtaW5hdGVkUGFwZXJcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkdhbWVcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgR2FtZSBTY2VuZSBpcyB3aGVyZSBhbGwgdGhlIGFjdGlvbnMgdGFrZXMgcGxhY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSBwYXBlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgY29udGFtaW5hdGVkUGFwZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwcml2YXRlIHBhcGVyQ3JlYXRpb25FdmVudDogUGhhc2VyLlRpbWUuVGltZXJFdmVudDtcclxuICAgIHByaXZhdGUgY29udGFtUGFwZXJDcmVhdGlvbkV2ZW50OiBQaGFzZXIuVGltZS5UaW1lckV2ZW50O1xyXG4gICAgcHJpdmF0ZSBuZXdTY2VuZVRpbWVkRXZlbnQ6IFBoYXNlci5UaW1lLlRpbWVyRXZlbnQ7XHJcblx0cHJpdmF0ZSBzY29yZTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDb2xsaWRlcnMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgdGhpcy5wYXBlcnMsIChwbGF5ZXIsIHBhcGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmluY3JlYXNlU2NvcmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ29vZFBhcGVyU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICBwYXBlci5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhbWluYXRlZFBhcGVycyxcclxuICAgICAgICAgICAgKHBsYXllciwgcGFwZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmh1cnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmJhZFBhcGVyU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgcGFwZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG5cdFx0dGhpcy5hZGQuaW1hZ2UoZ2V0R2FtZVdpZHRoKHRoaXMpLzIsIGdldEdhbWVIZWlnaHQodGhpcykvMiwgXCJzdG9yZVwiKTtcclxuXHJcblx0XHR0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogMzAwLFxyXG4gICAgICAgICAgICB5OiAzMDAsXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXk6IFwidG9pbGV0XCIsXHJcbiAgICAgICAgICAgIGNvbnRyb2xLZXlzOiBDT05UUk9MS0VZUy5QTEFZRVIuU0VUMSxcclxuICAgICAgICAgICAgaGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMubWFrZS50ZXh0KHtcclxuICAgICAgICAgICAgeDogMjAsXHJcbiAgICAgICAgICAgIHk6IDQwLFxyXG4gICAgICAgICAgICB0ZXh0OiBgU0NPUkUgOiAke3RoaXMucGxheWVyLnNjb3JlfWAsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcblx0XHRcdFx0Zm9udDogXCIzMnB4IG1vbm9zcGFjZVwiLFxyXG5cdFx0XHRcdGZvbnRTdHlsZTogXCJzdHJvbmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5wYXBlcnMgPSB0aGlzLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhbWluYXRlZFBhcGVycyA9IHRoaXMuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFwZXJDcmVhdGlvbkV2ZW50ID0gdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDEwMDAsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcGVycy5hZGQoXHJcblx0XHRcdFx0XHRuZXcgUGFwZXIoe1xyXG5cdFx0XHRcdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0XHRcdFx0eDogUGhhc2VyLk1hdGguQmV0d2Vlbig1MCwgZ2V0R2FtZVdpZHRoKHRoaXMpIC0gNTApLFxyXG5cdFx0XHRcdFx0XHR5OiAwLFxyXG5cdFx0XHRcdFx0XHR0ZXh0dXJlS2V5OiBcInBhcGVyXCIsXHJcblx0XHRcdFx0XHRcdHBsYXllcjogdGhpcy5wbGF5ZXIsXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFwZXJDcmVhdGlvbkV2ZW50ID0gdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDIwMDAsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhbWluYXRlZFBhcGVycy5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbnRhbWluYXRlZFBhcGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IFBoYXNlci5NYXRoLkJldHdlZW4oNTAsIGdldEdhbWVXaWR0aCh0aGlzKSAtIDUwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZUtleTogXCJwYXBlclwiLFxyXG5cdFx0XHRcdFx0XHRwbGF5ZXI6IHRoaXMucGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0dGhpcy5zZXRDb2xsaWRlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcblx0XHR0aGlzLnBsYXllci51cGRhdGUoKTtcclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMucGxheWVyLmlzRGVhZCgpKSB7XHJcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoXCJHYW1lb3ZlclwiLCB7XCJzY29yZVwiOiB0aGlzLnBsYXllci5zY29yZX0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRPRE8gOiBWaXJlciDDp2EgZGUgbCd1cGRhdGVcclxuXHRcdHRoaXMuc2NvcmUuc2V0VGV4dChgU0NPUkUgOiAke3RoaXMucGxheWVyLnNjb3JlfWApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBTY2VuZVN0YXJ0QnV0dG9uIH0gZnJvbSBcIi4uL2d1aS9TY2VuZVN0YXJ0QnV0dG9uXCI7XHJcbmltcG9ydCB7IENPTE9SUywgZ2V0R2FtZUhlaWdodCwgZ2V0R2FtZVdpZHRoIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkdhbWVvdmVyXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZW92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0cHJpdmF0ZSBtYWluTWVzc2FnZTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblx0Z2FtZU92ZXJTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblxyXG5cdGluaXQoZ2FtZVNjZW5lRGF0YSkge1xyXG5cdFx0dGhpcy5kYXRhLnNldChcInNjb3JlXCIsIGdhbWVTY2VuZURhdGEuc2NvcmUpO1xyXG5cdH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcblx0XHR0aGlzLmdhbWVPdmVyU291bmQgPSB0aGlzLnNvdW5kLmFkZChcImdhbWVPdmVyU291bmRcIilcclxuXHRcdHRoaXMuZ2FtZU92ZXJTb3VuZC5wbGF5KCk7XHJcblxyXG5cdFx0dGhpcy5tYWluTWVzc2FnZSA9IHRoaXMubWFrZS50ZXh0KHtcclxuICAgICAgICAgICAgeDogZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMixcclxuICAgICAgICAgICAgeTogZ2V0R2FtZUhlaWdodCh0aGlzKSAvIDIsXHJcblx0XHRcdHRleHQ6IFwiWU9VLiBBUkUuIERFQURcIixcclxuXHRcdFx0b3JpZ2luOiAwLjUsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcblx0XHRcdFx0Zm9udDogXCI2NHB4IG1vbm9zcGFjZVwiLFxyXG5cdFx0XHRcdGZvbnRTdHlsZTogXCJzdHJvbmdcIlxyXG4gICAgICAgICAgICB9LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5tYWtlLnRleHQoe1xyXG4gICAgICAgICAgICB4OiBnZXRHYW1lV2lkdGgodGhpcykgLyAyLFxyXG4gICAgICAgICAgICB5OiB0aGlzLm1haW5NZXNzYWdlLnkgKyA1NSxcclxuXHRcdFx0dGV4dDogYFlvdXIgc2NvcmUgOiAke3RoaXMuZGF0YS5nZXQoXCJzY29yZVwiKX1gLFxyXG5cdFx0XHRvcmlnaW46IDAuNSxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuXHRcdFx0XHRmb250OiBcIjMycHggbW9ub3NwYWNlXCIsXHJcblx0XHRcdFx0Zm9udFN0eWxlOiBcInN0cm9uZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0bmV3IFNjZW5lU3RhcnRCdXR0b24oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuXHRcdFx0eDogZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMixcclxuXHRcdFx0eTogNTQwLFxyXG5cdFx0XHR3aWR0aDogMTI0LCBcclxuXHRcdFx0aGVpZ2h0OiA0NCxcclxuXHRcdFx0Y29sb3I6IENPTE9SUy53aGl0ZS5oZXgsXHJcblx0XHRcdGhvdmVyQ29sb3I6IENPTE9SUy5jdXN0b21ZZWxsb3cuaGV4LFxyXG5cdFx0XHRsYWJlbDogXCJSRVBMQVlcIixcclxuXHRcdFx0Zm9udFNpemU6IFwiMjRweFwiLFxyXG5cdFx0XHRmb250Q29sb3I6IENPTE9SUy5ibGFjay5zdHJpbmcsXHJcblx0XHRcdGFscGhhOiAxLFxyXG5cdFx0XHRuZXdTY2VuZUtleTogXCJHYW1lXCJcclxuICAgICAgICB9KTtcclxuXHR9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gXCIuL0Jvb3RTY2VuZVwiO1xyXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tIFwiLi9HYW1lU2NlbmVcIjtcclxuaW1wb3J0IHsgR2FtZW92ZXJTY2VuZSB9IGZyb20gXCIuL0dhbWVvdmVyU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuXHRCb290U2NlbmUsIFxyXG5cdEdhbWVTY2VuZSwgXHJcblx0R2FtZW92ZXJTY2VuZVxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9