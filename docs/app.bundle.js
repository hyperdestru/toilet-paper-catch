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
                y: 0,
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
        var _this = _super.call(this, { scene: params.scene, x: params.x, y: params.y, textureKey: params.textureKey }) || this;
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
        _this.scene.add.existing(_this);
        _this.scene.physics.world.enable(_this);
        _this.setGravityY(10);
        _this.setVelocity(0, 110);
        return _this;
    }
    Paper.prototype.isOut = function () {
        if (this.y > helpers_1.getGameHeight(this.scene) || this.y < 0) {
            return true;
        }
        return false;
    };
    Paper.prototype.update = function () {
        if (this.isOut()) {
            this.destroy();
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
        _this.canGo = true;
        return _this;
    }
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.increaseScore = function () {
        this._score += 5;
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
    Player.prototype.initSounds = function () { };
    Player.prototype.initVitals = function () {
        this.health = 100;
    };
    Player.prototype.initPhysics = function () {
        this.vx = 150;
    };
    Player.prototype.applyPhysics = function () {
        this.scene.physics.world.enable(this);
        this.setCollideWorldBounds(true);
        this.setGravityY(1000);
    };
    Player.prototype.initControls = function (pKeys) {
        this.rightKey = this.scene.input.keyboard.addKey(pKeys["right"]);
        this.leftKey = this.scene.input.keyboard.addKey(pKeys["left"]);
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
            this.x += 10;
        }
        if (this.leftKey.isDown) {
            this.x -= 10;
        }
    };
    Player.prototype.update = function () {
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
        this.make.text({
            x: helpers_1.getGameWidth(this) / 2,
            y: helpers_1.getGameHeight(this) / 2,
            text: "TOILET PAPER CATCH !",
            style: {
                font: "32px monospace",
            },
            origin: 0.5,
        });
        this.btn = new SceneStartButton_1.SceneStartButton({
            scene: this,
            x: helpers_1.getGameWidth(this) / 2,
            y: 540,
            width: 124,
            height: 44,
            color: helpers_1.COLORS.white.hex,
            hoverColor: helpers_1.COLORS.customBlue.hex,
            label: "START",
            fontSize: "32px",
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
 * Actors such as Player, Bombs and Bomb are instanciated.
 * Static elements such as HUDs and HealthBars (via Player) are instanciated.
 * Level is created (not instanciated), which basically means that Tilemap is
 * drawn. Colliders between actors are handled. Player animations are created.
 * It sets a Scene Winner when one of the users PLAYER INSTANCES is dead and
 * then start the new scene (Gameover Scene).
 * It takes the data object from the Menu Scene (composed of an array of users),
 * available here in the init() et create() callbacks.
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
            _this.score.setText("SCORE : " + _this.player.score);
            paper.destroy();
        });
        this.physics.add.collider(this.player, this.contaminatedPapers, function (player, paper) {
            _this.player.hurt();
            paper.destroy();
        });
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, "store");
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
                }));
            },
            callbackScope: this,
        });
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
                font: "20px monospace",
            },
        });
        this.setColliders();
    };
    GameScene.prototype.update = function () {
        this.player.update();
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
    GameoverScene.prototype.create = function () { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2d1aS9TY2VuZVN0YXJ0QnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0NvbnRhbWluYXRlZFBhcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0hlYWx0aEJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9Mb2FkaW5nQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1BhcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0Jvb3RTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVvdmVyU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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ZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBDT0xPUlMsIERFRkFVTFRfRk9OVF9GQU1JTElFUywgRk9OVF9TSVpFUyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmVTdGFydEJ1dHRvbiB7XHJcbiAgICBwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICBwcml2YXRlIGJveDogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuICAgIHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgY29sb3I6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaG92ZXJDb2xvcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBmb250U2l6ZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBmb250Q29sb3I6IHN0cmluZztcclxuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcclxuICAgIHByaXZhdGUgYWxwaGE6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbmV3U2NlbmVLZXk6IHN0cmluZztcclxuICAgIHByaXZhdGUgc2NlbmVEYXRhOiBhbnk7XHJcblxyXG4gICAgZGVzdHJveUJveEFuZFRleHQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ib3guZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMudGV4dC5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICAgICAgY29sb3I6IG51bWJlcjtcclxuICAgICAgICBob3ZlckNvbG9yOiBudW1iZXI7XHJcbiAgICAgICAgbGFiZWw6IHN0cmluZztcclxuICAgICAgICBmb250U2l6ZTogc3RyaW5nO1xyXG4gICAgICAgIGZvbnRDb2xvcjogc3RyaW5nO1xyXG4gICAgICAgIGFscGhhOiBudW1iZXI7XHJcbiAgICAgICAgbmV3U2NlbmVLZXk6IHN0cmluZztcclxuICAgICAgICBzY2VuZURhdGE/OiBhbnk7XHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHBhcmFtcy5zY2VuZTtcclxuICAgICAgICB0aGlzLnggPSBwYXJhbXMueDtcclxuICAgICAgICB0aGlzLnkgPSBwYXJhbXMueTtcclxuICAgICAgICB0aGlzLndpZHRoID0gcGFyYW1zLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gcGFyYW1zLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gcGFyYW1zLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuaG92ZXJDb2xvciA9IHBhcmFtcy5ob3ZlckNvbG9yO1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSBwYXJhbXMubGFiZWw7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IHBhcmFtcy5mb250U2l6ZTtcclxuICAgICAgICB0aGlzLmZvbnRDb2xvciA9IHBhcmFtcy5mb250Q29sb3I7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IHBhcmFtcy5hbHBoYTtcclxuICAgICAgICB0aGlzLm5ld1NjZW5lS2V5ID0gcGFyYW1zLm5ld1NjZW5lS2V5O1xyXG5cclxuICAgICAgICBpZiAocGFyYW1zLnNjZW5lRGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lRGF0YSA9IHBhcmFtcy5zY2VuZURhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZURhdGEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ib3ggPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZShcclxuICAgICAgICAgICAgdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgdGhpcy54LFxyXG4gICAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLmNvbG9yLFxyXG4gICAgICAgICAgICB0aGlzLmFscGhhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3guc2V0SW50ZXJhY3RpdmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3gub24oXHJcbiAgICAgICAgICAgIFwicG9pbnRlcmRvd25cIixcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5zdG9wQWxsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5jYW1lcmFzLm1haW4uZmFkZU91dCgxMDAwLCAwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi5vbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIFBoYXNlci5DYW1lcmFzLlNjZW5lMkQuRXZlbnRzLkZBREVfT1VUX0NPTVBMRVRFLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zY2VuZS5zdGFydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3U2NlbmVLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ib3guZmlsbENvbG9yID0gdGhpcy5ob3ZlckNvbG9yO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJveC5maWxsQ29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlRleHQoXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgIHRoaXMuYm94LngsXHJcbiAgICAgICAgICAgIHRoaXMuYm94LnksXHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IERFRkFVTFRfRk9OVF9GQU1JTElFUyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuZm9udENvbG9yLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMuYm94KTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzLnRleHQpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgd2lkdGggb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgd2lkdGggb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9hZCBhIGZpbGUgaW4gYWpheCBhbmQgcmV0dXJuIGl0cyByZXNwb25zZSB0ZXh0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoIFBhdGggdG8gdGhlIGRlc2lyZWQgZmlsZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlID0gKHBGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgIGxldCByYXdGaWxlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG4gICAgcmF3RmlsZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW1wb3NzaWJsZSB0byBsb2FkIGZpbGUuXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICByYXdGaWxlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocmF3RmlsZS5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgIGlmIChyYXdGaWxlLnN0YXR1cyA9PT0gMjAwIHx8IHJhd0ZpbGUuc3RhdHVzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByYXdGaWxlLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmF3RmlsZS5vcGVuKFwiR0VUXCIsIHBGaWxlUGF0aCwgZmFsc2UpO1xyXG4gICAgcmF3RmlsZS5zZW5kKG51bGwpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIDJkLWFycmF5IG9mIHN0cmluZ3MgZnJvbSBhIHdob2xlIHRleHQgZmlsZSBnaXZlbiBhcyBpbnB1dC5cclxuICogV29ya3MgYmVzdCBpZiB0aGUgaW5wdXQgdGV4dCBpcyBvbmx5IGNvbXBvc2VkIG9mIHNpbmdsZSBjaGFycyBhbmQgJ1xcbicuXHJcbiAqIEVhY2ggZmluYWwgYXJyYXkgZWxlbWVudCB3b3VsZCBiZSBvbmUgY2hhcmFjdGVyIG9mIHRoZSB0ZXh0IGlucHV0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZFN0cmluZ3MgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXVtdID0+IHtcclxuICAgIGxldCByYXdHcmlkID0gbG9hZEZpbGUocEZpbGVQYXRoKTtcclxuICAgIHJldHVybiByYXdHcmlkLnNwbGl0KFwiXFxuXCIpLm1hcCgoaXRlbSkgPT4gaXRlbS5zcGxpdChcIlwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xyXG4gICAgY3VzdG9tQmx1ZTogeyBzdHJpbmc6IFwiIzQzNDZmOVwiLCBoZXg6IDB4NDM0NmY5IH0sXHJcbiAgICBjdXN0b21HcmVlbjogeyBzdHJpbmc6IFwiIzc2ZWE2NFwiLCBoZXg6IDB4NzZlYTY0IH0sXHJcbiAgICB2aWJyYW50R3JlZW46IHsgc3RyaW5nOiBcIiMyNWY5NDVcIiwgaGV4OiAweDI1Zjk0NSB9LFxyXG4gICAgY3VzdG9tUmVkOiB7IHN0cmluZzogXCIjZWEyZDIzXCIsIGhleDogMHhlYTJkMjMgfSxcclxuICAgIHdoaXRlOiB7IHN0cmluZzogXCIjZmZmZmZmXCIsIGhleDogMHhmZmZmZmYgfSxcclxuICAgIGJsYWNrOiB7IHN0cmluZzogXCIjMDAwMDAwXCIsIGhleDogMHgwMDAwMDAgfSxcclxuICAgIGN1c3RvbVllbGxvdzogeyBzdHJpbmc6IFwiI2ZmZGU1OVwiLCBoZXg6IDB4ZmZkZTU5IH0sXHJcbiAgICBncmV5OiB7IHN0cmluZzogXCIjZDNkMWQyXCIsIGhleDogMHhkM2QxZDIgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MS0VZUyA9IHtcclxuICAgIFBMQVlFUjoge1xyXG4gICAgICAgIFNFVDE6IHtcclxuICAgICAgICAgICAgcmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCxcclxuICAgICAgICAgICAgbGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkxFRlQsXHJcbiAgICAgICAgICAgIGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VUCxcclxuICAgICAgICAgICAgc2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TSElGVCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBTRVQyOiB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRCxcclxuICAgICAgICAgICAgbGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlEsXHJcbiAgICAgICAgICAgIGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TLFxyXG4gICAgICAgICAgICBzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNQQUNFLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZpeGVkIGZvbnQgZmFtaWx5IHRvIHVzZSBhY3Jvc3MgdGhlIGdhbWUgOlxyXG4gKiBcIk1vbm9zcGFjZSwgVGFob21hLCBBcmlhbFwiXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9GT05UX0ZBTUlMSUVTID0gXCJtb25vc3BhY2UsIFRhaG9tYSwgQXJpYWxcIjtcclxuXHJcbi8qKlxyXG4gKiBGaXhlZCBmb250IHNpemVzIHRvIHVzZSBhY3Jvc3MgdGhlIGdhbWUgOlxyXG4gKiB4c21hbGwgPSA4cHgsXHJcbiAqIHNtYWxsID0gMTJweCxcclxuICogbWVkaXVtID0gMThweCxcclxuICogbGFyZ2UgPSAyNHB4LFxyXG4gKiB4bGFyZ2UgPSAzMnB4LFxyXG4gKiBiaWcgPSA2NHB4LFxyXG4gKiBnaWFudCA9IDEyOHB4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRk9OVF9TSVpFUyA9IHtcclxuICAgIHhzbWFsbDogXCI4cHhcIixcclxuICAgIHNtYWxsOiBcIjEycHhcIixcclxuICAgIG1lZGl1bTogXCIxOHB4XCIsXHJcbiAgICBsYXJnZTogXCIyNHB4XCIsXHJcbiAgICB4bGFyZ2U6IFwiMzJweFwiLFxyXG4gICAgYmlnOiBcIjY0cHhcIixcclxuICAgIGdpYW50OiBcIjEyOHB4XCIsXHJcbn07XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xyXG5pbXBvcnQgeyBDT0xPUlMgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBTY2VuZXMgZnJvbSBcIi4vc2NlbmVzXCI7XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6IFwiVG9pbGV0IFBhcGVyIENhdGNoXCIsXHJcblx0dHlwZTogUGhhc2VyLkFVVE8sXHJcblx0YmFja2dyb3VuZENvbG9yOiAweDIyMjIyMixcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgICAgd2lkdGg6IDcyNCxcclxuICAgICAgICBoZWlnaHQ6IDY0MCxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICAgIGtleWJvYXJkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgICBkZWZhdWx0OiBcImFyY2FkZVwiLFxyXG4gICAgICAgIGFyY2FkZToge1xyXG4gICAgICAgICAgICBncmF2aXR5OiB7XHJcbiAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwYXJlbnQ6IFwiZ2FtZVwiLFxyXG4gICAgc2NlbmU6IFNjZW5lcyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpO1xyXG4iLCJpbXBvcnQgeyBDT0xPUlMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gXCIuL1BhcGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGFtaW5hdGVkUGFwZXIgZXh0ZW5kcyBQYXBlciB7XHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7XHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cdFx0eDogbnVtYmVyO1xyXG5cdFx0eTogbnVtYmVyO1xyXG5cdFx0dGV4dHVyZUtleTogc3RyaW5nO1xyXG5cdH0pIHtcclxuXHRcdHN1cGVyKHtzY2VuZTogcGFyYW1zLnNjZW5lLCB4OiBwYXJhbXMueCwgeTogcGFyYW1zLnksIHRleHR1cmVLZXk6IHBhcmFtcy50ZXh0dXJlS2V5fSk7XHJcblxyXG5cdFx0dGhpcy5zZXRUaW50KENPTE9SUy5jdXN0b21SZWQuaGV4KTtcclxuXHR9XHJcbn0iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQ09MT1JTLCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWx0aEJhciB7XHJcbiAgICBwcml2YXRlIGJhcjogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG4gICAgcHJpdmF0ZSB4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhlYWx0aFZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGRlY3JlYXNlKHBBbW91bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoVmFsdWUgLT0gcEFtb3VudCAqIDI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aFZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aFZhbHVlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhWYWx1ZSA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYXIuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gQmFja2dyb3VuZFxyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMud2hpdGUuaGV4KTtcclxuICAgICAgICB0aGlzLmJhci5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhWYWx1ZSA+IDYwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tQmx1ZS5oZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tUmVkLmhleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhbHRoV2lkdGggPSBNYXRoLmZsb29yKHRoaXMuaGVhbHRoVmFsdWUpO1xyXG4gICAgICAgIC8vIFRoZSBhY3R1YWwgaGVhbHRoIGphdWdlIHlvdSBzZWUgZGVjcmVhc2luZ1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCBoZWFsdGhXaWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lOyB9KSB7XHJcbiAgICAgICAgdGhpcy5iYXIgPSBwYXJhbXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDE2O1xyXG5cdFx0dGhpcy5oZWFsdGhWYWx1ZSA9IDIwMDtcclxuXHRcdHRoaXMueCA9IDIwO1xyXG5cdFx0dGhpcy55ID0gMjA7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENPTE9SUywgZ2V0R2FtZUhlaWdodCwgZ2V0R2FtZVdpZHRoIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQmFyIHtcclxuICAgIHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHJcbiAgICBwcml2YXRlIGJhcjogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG4gICAgcHJpdmF0ZSBiYXJYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhclk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmFyV2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmFySGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhckNvbG9yOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhckFscGhhOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBib3g6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuICAgIHByaXZhdGUgYm94WDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJveFdpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJveEhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hDb2xvcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hBbHBoYTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBwcml2YXRlIF9wcm9ncmVzc1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICAgIGdldCBwcm9ncmVzc1RleHQoKTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc1RleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwVmFsdWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJhci5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZSh0aGlzLmJhckNvbG9yLCB0aGlzLmJhckFscGhhKTtcclxuICAgICAgICB0aGlzLmJhci5maWxsUmVjdChcclxuICAgICAgICAgICAgdGhpcy5iYXJYLFxyXG4gICAgICAgICAgICB0aGlzLmJhclksXHJcbiAgICAgICAgICAgIHRoaXMuYmFyV2lkdGggKiBwVmFsdWUsXHJcbiAgICAgICAgICAgIHRoaXMuYmFySGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFyLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmJveC5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50ZXh0LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzVGV4dC5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmUgfSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBwYXJhbXMuc2NlbmU7XHJcblxyXG4gICAgICAgIHRoaXMuYmFyID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmJhcldpZHRoID0gNDAwO1xyXG4gICAgICAgIHRoaXMuYmFySGVpZ2h0ID0gMzA7XHJcbiAgICAgICAgdGhpcy5iYXJYID0gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMiAtIHRoaXMuYmFyV2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuYmFyWSA9IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyIC0gdGhpcy5iYXJIZWlnaHQgLyAyO1xyXG4gICAgICAgIHRoaXMuYmFyQ29sb3IgPSBDT0xPUlMuY3VzdG9tUmVkLmhleDtcclxuICAgICAgICB0aGlzLmJhckFscGhhID0gMC44O1xyXG5cclxuICAgICAgICB0aGlzLmJveCA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5ib3hXaWR0aCA9IHRoaXMuYmFyV2lkdGggKyAxMDtcclxuICAgICAgICB0aGlzLmJveEhlaWdodCA9IHRoaXMuYmFySGVpZ2h0ICsgMTA7XHJcbiAgICAgICAgdGhpcy5ib3hYID0gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMiAtIHRoaXMuYm94V2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuYm94WSA9IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyIC0gdGhpcy5ib3hIZWlnaHQgLyAyO1xyXG4gICAgICAgIHRoaXMuYm94Q29sb3IgPSBDT0xPUlMud2hpdGUuaGV4O1xyXG4gICAgICAgIHRoaXMuYm94QWxwaGEgPSAwLjM7XHJcblxyXG4gICAgICAgIHRoaXMuYm94LmZpbGxTdHlsZSh0aGlzLmJveENvbG9yLCB0aGlzLmJveEFscGhhKTtcclxuICAgICAgICB0aGlzLmJveC5maWxsUmVjdCh0aGlzLmJveFgsIHRoaXMuYm94WSwgdGhpcy5ib3hXaWR0aCwgdGhpcy5ib3hIZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLnNjZW5lLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgIHg6IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIHk6IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyICsgNDAsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiQ2hhcmdlbWVudC4uLlwiLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udDogXCIyMHB4IG1vbm9zcGFjZVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NUZXh0ID0gdGhpcy5zY2VuZS5tYWtlLnRleHQoe1xyXG4gICAgICAgICAgICB4OiBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICB5OiBnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgdGV4dDogXCIwJVwiLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udDogXCIxOHB4IG1vbm9zcGFjZVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9wcm9ncmVzc1RleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBDT0xPUlMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcGVyIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkltYWdlIHtcclxuXHJcbiAgICBwcml2YXRlIGlzT3V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIHx8IHRoaXMueSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblx0XHR4OiBudW1iZXI7XHJcblx0XHR5OiBudW1iZXI7XHJcblx0XHR0ZXh0dXJlS2V5OiBzdHJpbmc7XHJcblx0fSkge1xyXG5cdFx0c3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHRcdFxyXG5cdFx0dGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHRcclxuXHRcdHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGUodGhpcyk7XHJcblxyXG5cdFx0dGhpcy5zZXRHcmF2aXR5WSgxMCk7XHJcbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eSgwLCAxMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc091dCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vSGVhbHRoQmFyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcbiAgICBwcml2YXRlIGhlYWx0aEJhcjogSGVhbHRoQmFyO1xyXG4gICAgcHJpdmF0ZSByaWdodEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgbGVmdEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgaGVhbHRoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSB2eDogbnVtYmVyO1xyXG5cdHByaXZhdGUgX3Njb3JlOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBjYW5HbzogYm9vbGVhbjtcclxuXHJcblx0Z2V0IHNjb3JlKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2NvcmU7XHJcblx0fVxyXG5cclxuXHRpbmNyZWFzZVNjb3JlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fc2NvcmUgKz0gNTtcclxuXHR9XHJcblxyXG4gICAgcHVibGljIGlzRGVhZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGggPD0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaHVydCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDIwO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5kZWNyZWFzZSgyMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFNvdW5kcygpOiB2b2lkIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Vml0YWxzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFBoeXNpY3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52eCA9IDE1MDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5UGh5c2ljcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XHJcblx0XHR0aGlzLnNldEdyYXZpdHlZKDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdENvbnRyb2xzKHBLZXlzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yaWdodEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzW1wicmlnaHRcIl0pO1xyXG4gICAgICAgIHRoaXMubGVmdEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzW1wibGVmdFwiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0SGVhbHRoQmFyKHBIZWFsdGhCYXI6IEhlYWx0aEJhcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gcEhlYWx0aEJhcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBpZGxpbmcgKGRvaW5nIG5vdGhpbmcpIEFORCBpZGxpbmctc2hvb3RpbmcuXHJcbiAgICAgKiBUaGlzIGluY2x1ZGVzIGFuaW1hdGlvbiBwbGF5aW5nLCBjaGVja2luZyBrZXkgcHJlc3MsIHNldHRpbmcgdmVsb2NpdHksXHJcbiAgICAgKiBjcmVhdGUgc2hvb3RzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZUlkbGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSB3YWxraW5nIEFORCB3YWxraW5nLXNob290aW5nLlxyXG4gICAgICogVGhpcyBpbmNsdWRlcyBhbmltYXRpb24gcGxheWluZywgY2hlY2tpbmcga2V5IHByZXNzLCBzZXR0aW5nIHZlbG9jaXR5LFxyXG4gICAgICogY3JlYXRlIHNob290cyBhbmQgcmVtZW1iZXJpbmcgbGFzdCBwcmVzc2VkIGtleS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVXYWxraW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93bikge1xyXG5cdFx0XHR0aGlzLnggKz0gMTA7XHJcblx0XHR9IFxyXG5cdFx0aWYgKHRoaXMubGVmdEtleS5pc0Rvd24pIHtcclxuXHRcdFx0dGhpcy54IC09IDEwO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB0ZXh0dXJlS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgY29udHJvbEtleXM6IG9iamVjdDtcclxuICAgICAgICBoZWFsdGhCYXI6IEhlYWx0aEJhcjtcclxuICAgIH0pIHtcclxuICAgICAgICBzdXBlcihwYXJhbXMuc2NlbmUsIHBhcmFtcy54LCBwYXJhbXMueSwgcGFyYW1zLnRleHR1cmVLZXkpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXRQaHlzaWNzKCk7XHJcbiAgICAgICAgdGhpcy5hcHBseVBoeXNpY3MoKTtcclxuICAgICAgICB0aGlzLmluaXRTb3VuZHMoKTtcclxuICAgICAgICB0aGlzLmluaXRWaXRhbHMoKTtcclxuICAgICAgICB0aGlzLmluaXRIZWFsdGhCYXIocGFyYW1zLmhlYWx0aEJhcik7XHJcblx0XHR0aGlzLmluaXRDb250cm9scyhwYXJhbXMuY29udHJvbEtleXMpO1xyXG5cdFx0dGhpcy5fc2NvcmUgPSAwO1xyXG5cdFx0dGhpcy5jYW5HbyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93biB8fCB0aGlzLmxlZnRLZXkuaXNEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlV2Fsa2luZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSWRsaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBTY2VuZVN0YXJ0QnV0dG9uIH0gZnJvbSBcIi4uL2d1aS9TY2VuZVN0YXJ0QnV0dG9uXCI7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgQ09MT1JTIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0JhciB9IGZyb20gXCIuLi9vYmplY3RzL0xvYWRpbmdCYXJcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkJvb3RcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBidG46IFNjZW5lU3RhcnRCdXR0b247XHJcblx0cHJpdmF0ZSBsb2FkaW5nQmFyOiBMb2FkaW5nQmFyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblx0XHJcbiAgICBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZC5wYWNrKFwicHJlbG9hZFwiLCBcImFzc2V0cy9wYWNrLmpzb25cIiwgXCJwcmVsb2FkXCIpO1xyXG5cdFx0dGhpcy5sb2FkaW5nQmFyID0gbmV3IExvYWRpbmdCYXIoeyBzY2VuZTogdGhpcyB9KTtcclxuICAgICAgICB0aGlzLmxvYWQub24oXCJwcm9ncmVzc1wiLCAodmFsdWUpID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkaW5nQmFyLmRyYXcodmFsdWUpO1xyXG5cdFx0XHR0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3NUZXh0LnNldFRleHQoKE1hdGguZmxvb3IodmFsdWUqMTAwKSkgKyBcIiVcIik7XHJcblx0XHR9KTtcclxuICAgICAgICB0aGlzLmxvYWQub24oXCJjb21wbGV0ZVwiLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZGluZ0Jhci5kZXN0cm95KCk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcblx0XHR0aGlzLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgIHg6IGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIHk6IGdldEdhbWVIZWlnaHQodGhpcykgLyAyLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlRPSUxFVCBQQVBFUiBDQVRDSCAhXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250OiBcIjMycHggbW9ub3NwYWNlXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdG9yaWdpbjogMC41LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJ0biA9IG5ldyBTY2VuZVN0YXJ0QnV0dG9uKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcblx0XHRcdHg6IGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcblx0XHRcdHk6IDU0MCxcclxuXHRcdFx0d2lkdGg6IDEyNCwgXHJcblx0XHRcdGhlaWdodDogNDQsXHJcblx0XHRcdGNvbG9yOiBDT0xPUlMud2hpdGUuaGV4LFxyXG5cdFx0XHRob3ZlckNvbG9yOiBDT0xPUlMuY3VzdG9tQmx1ZS5oZXgsXHJcblx0XHRcdGxhYmVsOiBcIlNUQVJUXCIsXHJcblx0XHRcdGZvbnRTaXplOiBcIjMycHhcIixcclxuXHRcdFx0Zm9udENvbG9yOiBDT0xPUlMuYmxhY2suc3RyaW5nLFxyXG5cdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0bmV3U2NlbmVLZXk6IFwiR2FtZVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgQ09OVFJPTEtFWVMsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gXCIuLi9vYmplY3RzL1BhcGVyXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9vYmplY3RzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9IZWFsdGhCYXJcIjtcclxuaW1wb3J0IHsgQ29udGFtaW5hdGVkUGFwZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Db250YW1pbmF0ZWRQYXBlclwiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiR2FtZVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBHYW1lIFNjZW5lIGlzIHdoZXJlIGFsbCB0aGUgYWN0aW9ucyB0YWtlcyBwbGFjZS5cclxuICogQWN0b3JzIHN1Y2ggYXMgUGxheWVyLCBCb21icyBhbmQgQm9tYiBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBTdGF0aWMgZWxlbWVudHMgc3VjaCBhcyBIVURzIGFuZCBIZWFsdGhCYXJzICh2aWEgUGxheWVyKSBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBMZXZlbCBpcyBjcmVhdGVkIChub3QgaW5zdGFuY2lhdGVkKSwgd2hpY2ggYmFzaWNhbGx5IG1lYW5zIHRoYXQgVGlsZW1hcCBpc1xyXG4gKiBkcmF3bi4gQ29sbGlkZXJzIGJldHdlZW4gYWN0b3JzIGFyZSBoYW5kbGVkLiBQbGF5ZXIgYW5pbWF0aW9ucyBhcmUgY3JlYXRlZC5cclxuICogSXQgc2V0cyBhIFNjZW5lIFdpbm5lciB3aGVuIG9uZSBvZiB0aGUgdXNlcnMgUExBWUVSIElOU1RBTkNFUyBpcyBkZWFkIGFuZFxyXG4gKiB0aGVuIHN0YXJ0IHRoZSBuZXcgc2NlbmUgKEdhbWVvdmVyIFNjZW5lKS5cclxuICogSXQgdGFrZXMgdGhlIGRhdGEgb2JqZWN0IGZyb20gdGhlIE1lbnUgU2NlbmUgKGNvbXBvc2VkIG9mIGFuIGFycmF5IG9mIHVzZXJzKSxcclxuICogYXZhaWxhYmxlIGhlcmUgaW4gdGhlIGluaXQoKSBldCBjcmVhdGUoKSBjYWxsYmFja3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIHBhcGVyczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBjb250YW1pbmF0ZWRQYXBlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgcGFwZXJDcmVhdGlvbkV2ZW50OiBQaGFzZXIuVGltZS5UaW1lckV2ZW50O1xyXG4gICAgcHJpdmF0ZSBjb250YW1QYXBlckNyZWF0aW9uRXZlbnQ6IFBoYXNlci5UaW1lLlRpbWVyRXZlbnQ7XHJcbiAgICBwcml2YXRlIG5ld1NjZW5lVGltZWRFdmVudDogUGhhc2VyLlRpbWUuVGltZXJFdmVudDtcclxuICAgIHByaXZhdGUgc2NvcmU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICAgIHByaXZhdGUgc2V0Q29sbGlkZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIHRoaXMucGFwZXJzLCAocGxheWVyLCBwYXBlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5pbmNyZWFzZVNjb3JlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUuc2V0VGV4dChgU0NPUkUgOiAke3RoaXMucGxheWVyLnNjb3JlfWApO1xyXG4gICAgICAgICAgICBwYXBlci5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhbWluYXRlZFBhcGVycyxcclxuICAgICAgICAgICAgKHBsYXllciwgcGFwZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmh1cnQoKTtcclxuICAgICAgICAgICAgICAgIHBhcGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuXHRcdHRoaXMuYWRkLmltYWdlKGdldEdhbWVXaWR0aCh0aGlzKS8yLCBnZXRHYW1lSGVpZ2h0KHRoaXMpLzIsIFwic3RvcmVcIik7XHJcblx0XHRcclxuICAgICAgICB0aGlzLnBhcGVycyA9IHRoaXMuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFtaW5hdGVkUGFwZXJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXBlckNyZWF0aW9uRXZlbnQgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxheTogMTAwMCxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFwZXJzLmFkZChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUGFwZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogUGhhc2VyLk1hdGguQmV0d2Vlbig1MCwgZ2V0R2FtZVdpZHRoKHRoaXMpIC0gNTApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlS2V5OiBcInBhcGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFwZXJDcmVhdGlvbkV2ZW50ID0gdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDIwMDAsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhbWluYXRlZFBhcGVycy5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbnRhbWluYXRlZFBhcGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IFBoYXNlci5NYXRoLkJldHdlZW4oNTAsIGdldEdhbWVXaWR0aCh0aGlzKSAtIDUwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZUtleTogXCJwYXBlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFja1Njb3BlOiB0aGlzLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogMzAwLFxyXG4gICAgICAgICAgICB5OiAzMDAsXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXk6IFwidG9pbGV0XCIsXHJcbiAgICAgICAgICAgIGNvbnRyb2xLZXlzOiBDT05UUk9MS0VZUy5QTEFZRVIuU0VUMSxcclxuICAgICAgICAgICAgaGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMubWFrZS50ZXh0KHtcclxuICAgICAgICAgICAgeDogMjAsXHJcbiAgICAgICAgICAgIHk6IDQwLFxyXG4gICAgICAgICAgICB0ZXh0OiBgU0NPUkUgOiAke3RoaXMucGxheWVyLnNjb3JlfWAsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250OiBcIjIwcHggbW9ub3NwYWNlXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q29sbGlkZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogXCJHYW1lb3ZlclwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVvdmVyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBtYWluTWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblxyXG4gICAgY3JlYXRlKCkge31cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSBcIi4vQm9vdFNjZW5lXCI7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gXCIuL0dhbWVTY2VuZVwiO1xyXG5pbXBvcnQgeyBHYW1lb3ZlclNjZW5lIH0gZnJvbSBcIi4vR2FtZW92ZXJTY2VuZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG5cdEJvb3RTY2VuZSwgXHJcblx0R2FtZVNjZW5lLCBcclxuXHRHYW1lb3ZlclNjZW5lXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=