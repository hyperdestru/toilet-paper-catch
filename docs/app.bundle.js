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
                font: "32px monospace",
                fontStyle: "strong"
            },
        });
        this.setColliders();
    };
    GameScene.prototype.update = function () {
        this.player.update();
        if (this.player.isDead()) {
            this.scene.start("Gameover");
        }
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
    GameoverScene.prototype.create = function () {
        this.make.text({
            x: helpers_1.getGameWidth(this) / 2,
            y: helpers_1.getGameHeight(this) / 2,
            text: "YOU. ARE. DEAD",
            origin: 0.5,
            style: {
                font: "64px monospace",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2d1aS9TY2VuZVN0YXJ0QnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0NvbnRhbWluYXRlZFBhcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0hlYWx0aEJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9Mb2FkaW5nQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1BhcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0Jvb3RTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVvdmVyU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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Z0I7WUFDdEIsTUFBTSxFQUFFLEdBQUc7WUFDRixLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsU0FBUyxFQUFFLFFBQVE7YUFDVjtTQUNWLENBQUMsQ0FBQztRQUVILElBQUksbUNBQWdCLENBQUM7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNwQixDQUFDLEVBQUUsc0JBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsRUFBRSxHQUFHO1lBQ04sS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxnQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHO1lBQ3ZCLFVBQVUsRUFBRSxnQkFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHO1lBQ25DLEtBQUssRUFBRSxRQUFRO1lBQ2YsUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLGdCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDOUIsS0FBSyxFQUFFLENBQUM7WUFDUixXQUFXLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQztJQUNWLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQ0FsQ2tDLE1BQU0sQ0FBQyxLQUFLLEdBa0M5QztBQWxDWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7QUNYMUIsY0FBYzs7QUFFZCxzRkFBd0M7QUFDeEMsc0ZBQXdDO0FBQ3hDLGtHQUFnRDtBQUVoRCxrQkFBZTtJQUNkLHFCQUFTO0lBQ1QscUJBQVM7SUFDVCw2QkFBYTtDQUNiLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENPTE9SUywgREVGQVVMVF9GT05UX0ZBTUlMSUVTLCBGT05UX1NJWkVTIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZVN0YXJ0QnV0dG9uIHtcclxuICAgIHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgIHByaXZhdGUgYm94OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlO1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIHByaXZhdGUgeDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjb2xvcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBob3ZlckNvbG9yOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGZvbnRTaXplOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGZvbnRDb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhbHBoYTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBuZXdTY2VuZUtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzY2VuZURhdGE6IGFueTtcclxuXHJcbiAgICBkZXN0cm95Qm94QW5kVGV4dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJveC5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50ZXh0LmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgd2lkdGg6IG51bWJlcjtcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgICAgICBjb2xvcjogbnVtYmVyO1xyXG4gICAgICAgIGhvdmVyQ29sb3I6IG51bWJlcjtcclxuICAgICAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgICAgIGZvbnRTaXplOiBzdHJpbmc7XHJcbiAgICAgICAgZm9udENvbG9yOiBzdHJpbmc7XHJcbiAgICAgICAgYWxwaGE6IG51bWJlcjtcclxuICAgICAgICBuZXdTY2VuZUtleTogc3RyaW5nO1xyXG4gICAgICAgIHNjZW5lRGF0YT86IGFueTtcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gcGFyYW1zLnNjZW5lO1xyXG4gICAgICAgIHRoaXMueCA9IHBhcmFtcy54O1xyXG4gICAgICAgIHRoaXMueSA9IHBhcmFtcy55O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBwYXJhbXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBwYXJhbXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBwYXJhbXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5ob3ZlckNvbG9yID0gcGFyYW1zLmhvdmVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IHBhcmFtcy5sYWJlbDtcclxuICAgICAgICB0aGlzLmZvbnRTaXplID0gcGFyYW1zLmZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMuZm9udENvbG9yID0gcGFyYW1zLmZvbnRDb2xvcjtcclxuICAgICAgICB0aGlzLmFscGhhID0gcGFyYW1zLmFscGhhO1xyXG4gICAgICAgIHRoaXMubmV3U2NlbmVLZXkgPSBwYXJhbXMubmV3U2NlbmVLZXk7XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMuc2NlbmVEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVEYXRhID0gcGFyYW1zLnNjZW5lRGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lRGF0YSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJveCA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgICAgIHRoaXMueSxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgIHRoaXMuYWxwaGFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5vbihcclxuICAgICAgICAgICAgXCJwb2ludGVyZG93blwiLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnN0b3BBbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi5mYWRlT3V0KDEwMDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLm9uY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5FdmVudHMuRkFERV9PVVRfQ09NUExFVEUsXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnNjZW5lLnN0YXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdTY2VuZUtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhpcy5zY2VuZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94Lm9uKFwicG9pbnRlcm92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJveC5maWxsQ29sb3IgPSB0aGlzLmhvdmVyQ29sb3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94Lm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm94LmZpbGxDb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dChcclxuICAgICAgICAgICAgdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgdGhpcy5ib3gueCxcclxuICAgICAgICAgICAgdGhpcy5ib3gueSxcclxuICAgICAgICAgICAgdGhpcy5sYWJlbCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogREVGQVVMVF9GT05UX0ZBTUlMSUVTLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5mb250Q29sb3IsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcy5ib3gpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMudGV4dCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSB3aWR0aCBvZiB0aGUgXCJzY3JlZW5cIi9jYW52YXMgYnV0IG5vdCBhbHdheXMuXHJcbiAqIEBwYXJhbSBzY2VuZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuICAgIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBMb2FkIGEgZmlsZSBpbiBhamF4IGFuZCByZXR1cm4gaXRzIHJlc3BvbnNlIHRleHQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGggUGF0aCB0byB0aGUgZGVzaXJlZCBmaWxlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEZpbGUgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgbGV0IHJhd0ZpbGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZztcclxuXHJcbiAgICByYXdGaWxlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIGxvYWQgZmlsZS5cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJhd0ZpbGUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChyYXdGaWxlLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgaWYgKHJhd0ZpbGUuc3RhdHVzID09PSAyMDAgfHwgcmF3RmlsZS5zdGF0dXMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJhd0ZpbGUucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByYXdGaWxlLm9wZW4oXCJHRVRcIiwgcEZpbGVQYXRoLCBmYWxzZSk7XHJcbiAgICByYXdGaWxlLnNlbmQobnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgMmQtYXJyYXkgb2Ygc3RyaW5ncyBmcm9tIGEgd2hvbGUgdGV4dCBmaWxlIGdpdmVuIGFzIGlucHV0LlxyXG4gKiBXb3JrcyBiZXN0IGlmIHRoZSBpbnB1dCB0ZXh0IGlzIG9ubHkgY29tcG9zZWQgb2Ygc2luZ2xlIGNoYXJzIGFuZCAnXFxuJy5cclxuICogRWFjaCBmaW5hbCBhcnJheSBlbGVtZW50IHdvdWxkIGJlIG9uZSBjaGFyYWN0ZXIgb2YgdGhlIHRleHQgaW5wdXQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGhcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkU3RyaW5ncyA9IChwRmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZ1tdW10gPT4ge1xyXG4gICAgbGV0IHJhd0dyaWQgPSBsb2FkRmlsZShwRmlsZVBhdGgpO1xyXG4gICAgcmV0dXJuIHJhd0dyaWQuc3BsaXQoXCJcXG5cIikubWFwKChpdGVtKSA9PiBpdGVtLnNwbGl0KFwiXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgICBjdXN0b21CbHVlOiB7IHN0cmluZzogXCIjNDM0NmY5XCIsIGhleDogMHg0MzQ2ZjkgfSxcclxuICAgIGN1c3RvbUdyZWVuOiB7IHN0cmluZzogXCIjNzZlYTY0XCIsIGhleDogMHg3NmVhNjQgfSxcclxuICAgIHZpYnJhbnRHcmVlbjogeyBzdHJpbmc6IFwiIzI1Zjk0NVwiLCBoZXg6IDB4MjVmOTQ1IH0sXHJcbiAgICBjdXN0b21SZWQ6IHsgc3RyaW5nOiBcIiNlYTJkMjNcIiwgaGV4OiAweGVhMmQyMyB9LFxyXG4gICAgd2hpdGU6IHsgc3RyaW5nOiBcIiNmZmZmZmZcIiwgaGV4OiAweGZmZmZmZiB9LFxyXG4gICAgYmxhY2s6IHsgc3RyaW5nOiBcIiMwMDAwMDBcIiwgaGV4OiAweDAwMDAwMCB9LFxyXG4gICAgY3VzdG9tWWVsbG93OiB7IHN0cmluZzogXCIjZmZkZTU5XCIsIGhleDogMHhmZmRlNTkgfSxcclxuICAgIGdyZXk6IHsgc3RyaW5nOiBcIiNkM2QxZDJcIiwgaGV4OiAweGQzZDFkMiB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRST0xLRVlTID0ge1xyXG4gICAgUExBWUVSOiB7XHJcbiAgICAgICAgU0VUMToge1xyXG4gICAgICAgICAgICByaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlJJR0hULFxyXG4gICAgICAgICAgICBsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuTEVGVCxcclxuICAgICAgICAgICAganVtcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlVQLFxyXG4gICAgICAgICAgICBzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNISUZULFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFNFVDI6IHtcclxuICAgICAgICAgICAgcmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5ELFxyXG4gICAgICAgICAgICBsZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUSxcclxuICAgICAgICAgICAganVtcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlMsXHJcbiAgICAgICAgICAgIHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0UsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG4vKipcclxuICogRml4ZWQgZm9udCBmYW1pbHkgdG8gdXNlIGFjcm9zcyB0aGUgZ2FtZSA6XHJcbiAqIFwiTW9ub3NwYWNlLCBUYWhvbWEsIEFyaWFsXCJcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMgPSBcIm1vbm9zcGFjZSwgVGFob21hLCBBcmlhbFwiO1xyXG5cclxuLyoqXHJcbiAqIEZpeGVkIGZvbnQgc2l6ZXMgdG8gdXNlIGFjcm9zcyB0aGUgZ2FtZSA6XHJcbiAqIHhzbWFsbCA9IDhweCxcclxuICogc21hbGwgPSAxMnB4LFxyXG4gKiBtZWRpdW0gPSAxOHB4LFxyXG4gKiBsYXJnZSA9IDI0cHgsXHJcbiAqIHhsYXJnZSA9IDMycHgsXHJcbiAqIGJpZyA9IDY0cHgsXHJcbiAqIGdpYW50ID0gMTI4cHhcclxuICovXHJcbmV4cG9ydCBjb25zdCBGT05UX1NJWkVTID0ge1xyXG4gICAgeHNtYWxsOiBcIjhweFwiLFxyXG4gICAgc21hbGw6IFwiMTJweFwiLFxyXG4gICAgbWVkaXVtOiBcIjE4cHhcIixcclxuICAgIGxhcmdlOiBcIjI0cHhcIixcclxuICAgIHhsYXJnZTogXCIzMnB4XCIsXHJcbiAgICBiaWc6IFwiNjRweFwiLFxyXG4gICAgZ2lhbnQ6IFwiMTI4cHhcIixcclxufTtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XHJcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gXCIuL2hlbHBlcnNcIjtcclxuaW1wb3J0IFNjZW5lcyBmcm9tIFwiLi9zY2VuZXNcIjtcclxuXHJcbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgICB0aXRsZTogXCJUb2lsZXQgUGFwZXIgQ2F0Y2hcIixcclxuXHR0eXBlOiBQaGFzZXIuQVVUTyxcclxuXHRiYWNrZ3JvdW5kQ29sb3I6IDB4MjIyMjIyLFxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgICB3aWR0aDogNzI0LFxyXG4gICAgICAgIGhlaWdodDogNjQwLFxyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgICAga2V5Ym9hcmQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcGh5c2ljczoge1xyXG4gICAgICAgIGRlZmF1bHQ6IFwiYXJjYWRlXCIsXHJcbiAgICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgICAgIGdyYXZpdHk6IHtcclxuICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBhcmVudDogXCJnYW1lXCIsXHJcbiAgICBzY2VuZTogU2NlbmVzLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XHJcbiIsImltcG9ydCB7IENPTE9SUyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IFBhcGVyIH0gZnJvbSBcIi4vUGFwZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YW1pbmF0ZWRQYXBlciBleHRlbmRzIFBhcGVyIHtcclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblx0XHR4OiBudW1iZXI7XHJcblx0XHR5OiBudW1iZXI7XHJcblx0XHR0ZXh0dXJlS2V5OiBzdHJpbmc7XHJcblx0fSkge1xyXG5cdFx0c3VwZXIoe3NjZW5lOiBwYXJhbXMuc2NlbmUsIHg6IHBhcmFtcy54LCB5OiBwYXJhbXMueSwgdGV4dHVyZUtleTogcGFyYW1zLnRleHR1cmVLZXl9KTtcclxuXHJcblx0XHR0aGlzLnNldFRpbnQoQ09MT1JTLmN1c3RvbVJlZC5oZXgpO1xyXG5cdH1cclxufSIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBDT0xPUlMsIGdldEdhbWVXaWR0aCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhbHRoQmFyIHtcclxuICAgIHByaXZhdGUgYmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3M7XHJcbiAgICBwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaGVhbHRoVmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgZGVjcmVhc2UocEFtb3VudDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhWYWx1ZSAtPSBwQW1vdW50ICogMjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoVmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoVmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aFZhbHVlID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJhci5jbGVhcigpO1xyXG5cclxuICAgICAgICAvLyBCYWNrZ3JvdW5kXHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFN0eWxlKENPTE9SUy53aGl0ZS5oZXgpO1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aFZhbHVlID4gNjApIHtcclxuICAgICAgICAgICAgdGhpcy5iYXIuZmlsbFN0eWxlKENPTE9SUy5jdXN0b21CbHVlLmhleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iYXIuZmlsbFN0eWxlKENPTE9SUy5jdXN0b21SZWQuaGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoZWFsdGhXaWR0aCA9IE1hdGguZmxvb3IodGhpcy5oZWFsdGhWYWx1ZSk7XHJcbiAgICAgICAgLy8gVGhlIGFjdHVhbCBoZWFsdGggamF1Z2UgeW91IHNlZSBkZWNyZWFzaW5nXHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIGhlYWx0aFdpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmU7IH0pIHtcclxuICAgICAgICB0aGlzLmJhciA9IHBhcmFtcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMjAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTY7XHJcblx0XHR0aGlzLmhlYWx0aFZhbHVlID0gMjAwO1xyXG5cdFx0dGhpcy54ID0gMjA7XHJcblx0XHR0aGlzLnkgPSAyMDtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQ09MT1JTLCBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdCYXIge1xyXG4gICAgcHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cclxuICAgIHByaXZhdGUgYmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3M7XHJcbiAgICBwcml2YXRlIGJhclg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmFyWTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBiYXJXaWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBiYXJIZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmFyQ29sb3I6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmFyQWxwaGE6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGJveDogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG4gICAgcHJpdmF0ZSBib3hYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJveFk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYm94V2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYm94SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJveENvbG9yOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJveEFscGhhOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIHByaXZhdGUgX3Byb2dyZXNzVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gICAgZ2V0IHByb2dyZXNzVGV4dCgpOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBWYWx1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFyLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFN0eWxlKHRoaXMuYmFyQ29sb3IsIHRoaXMuYmFyQWxwaGEpO1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxSZWN0KFxyXG4gICAgICAgICAgICB0aGlzLmJhclgsXHJcbiAgICAgICAgICAgIHRoaXMuYmFyWSxcclxuICAgICAgICAgICAgdGhpcy5iYXJXaWR0aCAqIHBWYWx1ZSxcclxuICAgICAgICAgICAgdGhpcy5iYXJIZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuYm94LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnRleHQuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NUZXh0LmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZSB9KSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHBhcmFtcy5zY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5iYXIgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuYmFyV2lkdGggPSA0MDA7XHJcbiAgICAgICAgdGhpcy5iYXJIZWlnaHQgPSAzMDtcclxuICAgICAgICB0aGlzLmJhclggPSBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgLyAyIC0gdGhpcy5iYXJXaWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5iYXJZID0gZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKSAvIDIgLSB0aGlzLmJhckhlaWdodCAvIDI7XHJcbiAgICAgICAgdGhpcy5iYXJDb2xvciA9IENPTE9SUy5jdXN0b21SZWQuaGV4O1xyXG4gICAgICAgIHRoaXMuYmFyQWxwaGEgPSAwLjg7XHJcblxyXG4gICAgICAgIHRoaXMuYm94ID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmJveFdpZHRoID0gdGhpcy5iYXJXaWR0aCArIDEwO1xyXG4gICAgICAgIHRoaXMuYm94SGVpZ2h0ID0gdGhpcy5iYXJIZWlnaHQgKyAxMDtcclxuICAgICAgICB0aGlzLmJveFggPSBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgLyAyIC0gdGhpcy5ib3hXaWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5ib3hZID0gZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKSAvIDIgLSB0aGlzLmJveEhlaWdodCAvIDI7XHJcbiAgICAgICAgdGhpcy5ib3hDb2xvciA9IENPTE9SUy53aGl0ZS5oZXg7XHJcbiAgICAgICAgdGhpcy5ib3hBbHBoYSA9IDAuMztcclxuXHJcbiAgICAgICAgdGhpcy5ib3guZmlsbFN0eWxlKHRoaXMuYm94Q29sb3IsIHRoaXMuYm94QWxwaGEpO1xyXG4gICAgICAgIHRoaXMuYm94LmZpbGxSZWN0KHRoaXMuYm94WCwgdGhpcy5ib3hZLCB0aGlzLmJveFdpZHRoLCB0aGlzLmJveEhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dCA9IHRoaXMuc2NlbmUubWFrZS50ZXh0KHtcclxuICAgICAgICAgICAgeDogZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgeTogZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKSAvIDIgKyA0MCxcclxuICAgICAgICAgICAgdGV4dDogXCJDaGFyZ2VtZW50Li4uXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250OiBcIjIwcHggbW9ub3NwYWNlXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cclxuICAgICAgICB0aGlzLl9wcm9ncmVzc1RleHQgPSB0aGlzLnNjZW5lLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgIHg6IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIHk6IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIjAlXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250OiBcIjE4cHggbW9ub3NwYWNlXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3Byb2dyZXNzVGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIENPTE9SUyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFwZXIgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuSW1hZ2Uge1xyXG5cclxuICAgIHByaXZhdGUgaXNPdXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHwgdGhpcy55IDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHRcdHg6IG51bWJlcjtcclxuXHRcdHk6IG51bWJlcjtcclxuXHRcdHRleHR1cmVLZXk6IHN0cmluZztcclxuXHR9KSB7XHJcblx0XHRzdXBlcihwYXJhbXMuc2NlbmUsIHBhcmFtcy54LCBwYXJhbXMueSwgcGFyYW1zLnRleHR1cmVLZXkpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuXHJcblx0XHR0aGlzLnNldEdyYXZpdHlZKDEwKTtcclxuICAgICAgICB0aGlzLnNldFZlbG9jaXR5KDAsIDExMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tIFwiLi9IZWFsdGhCYXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuICAgIHByaXZhdGUgaGVhbHRoQmFyOiBIZWFsdGhCYXI7XHJcbiAgICBwcml2YXRlIHJpZ2h0S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHJpdmF0ZSBsZWZ0S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHJpdmF0ZSBoZWFsdGg6IG51bWJlcjtcclxuXHRwcml2YXRlIHZ4OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfc2NvcmU6IG51bWJlcjtcclxuXHRwcml2YXRlIGNhbkdvOiBib29sZWFuO1xyXG5cclxuXHRnZXQgc2NvcmUoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9zY29yZTtcclxuXHR9XHJcblxyXG5cdGluY3JlYXNlU2NvcmUoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9zY29yZSArPSA1O1xyXG5cdH1cclxuXHJcbiAgICBwdWJsaWMgaXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aCA8PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBodXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gMjA7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmRlY3JlYXNlKDIwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0U291bmRzKCk6IHZvaWQge31cclxuXHJcbiAgICBwcml2YXRlIGluaXRWaXRhbHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0UGh5c2ljcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZ4ID0gMTUwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXBwbHlQaHlzaWNzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGUodGhpcyk7XHJcblx0XHR0aGlzLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcclxuXHRcdHRoaXMuc2V0R3Jhdml0eVkoMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Q29udHJvbHMocEtleXMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJpZ2h0S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJyaWdodFwiXSk7XHJcbiAgICAgICAgdGhpcy5sZWZ0S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJsZWZ0XCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRIZWFsdGhCYXIocEhlYWx0aEJhcjogSGVhbHRoQmFyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSBwSGVhbHRoQmFyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGlkbGluZyAoZG9pbmcgbm90aGluZykgQU5EIGlkbGluZy1zaG9vdGluZy5cclxuICAgICAqIFRoaXMgaW5jbHVkZXMgYW5pbWF0aW9uIHBsYXlpbmcsIGNoZWNraW5nIGtleSBwcmVzcywgc2V0dGluZyB2ZWxvY2l0eSxcclxuICAgICAqIGNyZWF0ZSBzaG9vdHMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlSWRsaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIHdhbGtpbmcgQU5EIHdhbGtpbmctc2hvb3RpbmcuXHJcbiAgICAgKiBUaGlzIGluY2x1ZGVzIGFuaW1hdGlvbiBwbGF5aW5nLCBjaGVja2luZyBrZXkgcHJlc3MsIHNldHRpbmcgdmVsb2NpdHksXHJcbiAgICAgKiBjcmVhdGUgc2hvb3RzIGFuZCByZW1lbWJlcmluZyBsYXN0IHByZXNzZWQga2V5LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZVdhbGtpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucmlnaHRLZXkuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMueCArPSAxMDtcclxuXHRcdH0gXHJcblx0XHRpZiAodGhpcy5sZWZ0S2V5LmlzRG93bikge1xyXG5cdFx0XHR0aGlzLnggLT0gMTA7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHRleHR1cmVLZXk6IHN0cmluZztcclxuICAgICAgICBjb250cm9sS2V5czogb2JqZWN0O1xyXG4gICAgICAgIGhlYWx0aEJhcjogSGVhbHRoQmFyO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBoeXNpY3MoKTtcclxuICAgICAgICB0aGlzLmFwcGx5UGh5c2ljcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNvdW5kcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFZpdGFscygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEhlYWx0aEJhcihwYXJhbXMuaGVhbHRoQmFyKTtcclxuXHRcdHRoaXMuaW5pdENvbnRyb2xzKHBhcmFtcy5jb250cm9sS2V5cyk7XHJcblx0XHR0aGlzLl9zY29yZSA9IDA7XHJcblx0XHR0aGlzLmNhbkdvID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucmlnaHRLZXkuaXNEb3duIHx8IHRoaXMubGVmdEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVXYWxraW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVJZGxpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IFNjZW5lU3RhcnRCdXR0b24gfSBmcm9tIFwiLi4vZ3VpL1NjZW5lU3RhcnRCdXR0b25cIjtcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBDT0xPUlMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBMb2FkaW5nQmFyIH0gZnJvbSBcIi4uL29iamVjdHMvTG9hZGluZ0JhclwiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiQm9vdFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIGJ0bjogU2NlbmVTdGFydEJ1dHRvbjtcclxuXHRwcml2YXRlIGxvYWRpbmdCYXI6IExvYWRpbmdCYXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG5cdH1cclxuXHRcclxuICAgIHByZWxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkLnBhY2soXCJwcmVsb2FkXCIsIFwiYXNzZXRzL3BhY2suanNvblwiLCBcInByZWxvYWRcIik7XHJcblx0XHR0aGlzLmxvYWRpbmdCYXIgPSBuZXcgTG9hZGluZ0Jhcih7IHNjZW5lOiB0aGlzIH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5vbihcInByb2dyZXNzXCIsICh2YWx1ZSkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRpbmdCYXIuZHJhdyh2YWx1ZSk7XHJcblx0XHRcdHRoaXMubG9hZGluZ0Jhci5wcm9ncmVzc1RleHQuc2V0VGV4dCgoTWF0aC5mbG9vcih2YWx1ZSoxMDApKSArIFwiJVwiKTtcclxuXHRcdH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5vbihcImNvbXBsZXRlXCIsICgpID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkaW5nQmFyLmRlc3Ryb3koKTtcclxuXHRcdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuXHRcdHRoaXMuYWRkLmltYWdlKGdldEdhbWVXaWR0aCh0aGlzKS8yLCBnZXRHYW1lSGVpZ2h0KHRoaXMpLzIsIFwibG9nb1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG4gPSBuZXcgU2NlbmVTdGFydEJ1dHRvbih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG5cdFx0XHR4OiBnZXRHYW1lV2lkdGgodGhpcykgLyAyLFxyXG5cdFx0XHR5OiA1NDAsXHJcblx0XHRcdHdpZHRoOiAxMjQsIFxyXG5cdFx0XHRoZWlnaHQ6IDQ0LFxyXG5cdFx0XHRjb2xvcjogQ09MT1JTLndoaXRlLmhleCxcclxuXHRcdFx0aG92ZXJDb2xvcjogQ09MT1JTLmN1c3RvbVllbGxvdy5oZXgsXHJcblx0XHRcdGxhYmVsOiBcIlNUQVJUXCIsXHJcblx0XHRcdGZvbnRTaXplOiBcIjI0cHhcIixcclxuXHRcdFx0Zm9udENvbG9yOiBDT0xPUlMuYmxhY2suc3RyaW5nLFxyXG5cdFx0XHRhbHBoYTogMSxcclxuXHRcdFx0bmV3U2NlbmVLZXk6IFwiR2FtZVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgQ09OVFJPTEtFWVMsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gXCIuLi9vYmplY3RzL1BhcGVyXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9vYmplY3RzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9IZWFsdGhCYXJcIjtcclxuaW1wb3J0IHsgQ29udGFtaW5hdGVkUGFwZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Db250YW1pbmF0ZWRQYXBlclwiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiR2FtZVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBHYW1lIFNjZW5lIGlzIHdoZXJlIGFsbCB0aGUgYWN0aW9ucyB0YWtlcyBwbGFjZS5cclxuICogQWN0b3JzIHN1Y2ggYXMgUGxheWVyLCBCb21icyBhbmQgQm9tYiBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBTdGF0aWMgZWxlbWVudHMgc3VjaCBhcyBIVURzIGFuZCBIZWFsdGhCYXJzICh2aWEgUGxheWVyKSBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBMZXZlbCBpcyBjcmVhdGVkIChub3QgaW5zdGFuY2lhdGVkKSwgd2hpY2ggYmFzaWNhbGx5IG1lYW5zIHRoYXQgVGlsZW1hcCBpc1xyXG4gKiBkcmF3bi4gQ29sbGlkZXJzIGJldHdlZW4gYWN0b3JzIGFyZSBoYW5kbGVkLiBQbGF5ZXIgYW5pbWF0aW9ucyBhcmUgY3JlYXRlZC5cclxuICogSXQgc2V0cyBhIFNjZW5lIFdpbm5lciB3aGVuIG9uZSBvZiB0aGUgdXNlcnMgUExBWUVSIElOU1RBTkNFUyBpcyBkZWFkIGFuZFxyXG4gKiB0aGVuIHN0YXJ0IHRoZSBuZXcgc2NlbmUgKEdhbWVvdmVyIFNjZW5lKS5cclxuICogSXQgdGFrZXMgdGhlIGRhdGEgb2JqZWN0IGZyb20gdGhlIE1lbnUgU2NlbmUgKGNvbXBvc2VkIG9mIGFuIGFycmF5IG9mIHVzZXJzKSxcclxuICogYXZhaWxhYmxlIGhlcmUgaW4gdGhlIGluaXQoKSBldCBjcmVhdGUoKSBjYWxsYmFja3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIHBhcGVyczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBjb250YW1pbmF0ZWRQYXBlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgcGFwZXJDcmVhdGlvbkV2ZW50OiBQaGFzZXIuVGltZS5UaW1lckV2ZW50O1xyXG4gICAgcHJpdmF0ZSBjb250YW1QYXBlckNyZWF0aW9uRXZlbnQ6IFBoYXNlci5UaW1lLlRpbWVyRXZlbnQ7XHJcbiAgICBwcml2YXRlIG5ld1NjZW5lVGltZWRFdmVudDogUGhhc2VyLlRpbWUuVGltZXJFdmVudDtcclxuICAgIHByaXZhdGUgc2NvcmU6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICAgIHByaXZhdGUgc2V0Q29sbGlkZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIsIHRoaXMucGFwZXJzLCAocGxheWVyLCBwYXBlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5pbmNyZWFzZVNjb3JlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUuc2V0VGV4dChgU0NPUkUgOiAke3RoaXMucGxheWVyLnNjb3JlfWApO1xyXG4gICAgICAgICAgICBwYXBlci5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhbWluYXRlZFBhcGVycyxcclxuICAgICAgICAgICAgKHBsYXllciwgcGFwZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmh1cnQoKTtcclxuICAgICAgICAgICAgICAgIHBhcGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuXHRcdHRoaXMuYWRkLmltYWdlKGdldEdhbWVXaWR0aCh0aGlzKS8yLCBnZXRHYW1lSGVpZ2h0KHRoaXMpLzIsIFwic3RvcmVcIik7XHJcblx0XHRcclxuICAgICAgICB0aGlzLnBhcGVycyA9IHRoaXMuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFtaW5hdGVkUGFwZXJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXBlckNyZWF0aW9uRXZlbnQgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxheTogMTAwMCxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFwZXJzLmFkZChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUGFwZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogUGhhc2VyLk1hdGguQmV0d2Vlbig1MCwgZ2V0R2FtZVdpZHRoKHRoaXMpIC0gNTApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlS2V5OiBcInBhcGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFwZXJDcmVhdGlvbkV2ZW50ID0gdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDIwMDAsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhbWluYXRlZFBhcGVycy5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbnRhbWluYXRlZFBhcGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IFBoYXNlci5NYXRoLkJldHdlZW4oNTAsIGdldEdhbWVXaWR0aCh0aGlzKSAtIDUwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZUtleTogXCJwYXBlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFja1Njb3BlOiB0aGlzLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogMzAwLFxyXG4gICAgICAgICAgICB5OiAzMDAsXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXk6IFwidG9pbGV0XCIsXHJcbiAgICAgICAgICAgIGNvbnRyb2xLZXlzOiBDT05UUk9MS0VZUy5QTEFZRVIuU0VUMSxcclxuICAgICAgICAgICAgaGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMubWFrZS50ZXh0KHtcclxuICAgICAgICAgICAgeDogMjAsXHJcbiAgICAgICAgICAgIHk6IDQwLFxyXG4gICAgICAgICAgICB0ZXh0OiBgU0NPUkUgOiAke3RoaXMucGxheWVyLnNjb3JlfWAsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcblx0XHRcdFx0Zm9udDogXCIzMnB4IG1vbm9zcGFjZVwiLFxyXG5cdFx0XHRcdGZvbnRTdHlsZTogXCJzdHJvbmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldENvbGxpZGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuXHRcdHRoaXMucGxheWVyLnVwZGF0ZSgpO1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5wbGF5ZXIuaXNEZWFkKCkpIHtcclxuXHRcdFx0dGhpcy5zY2VuZS5zdGFydChcIkdhbWVvdmVyXCIpO1xyXG5cdFx0fVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBTY2VuZVN0YXJ0QnV0dG9uIH0gZnJvbSBcIi4uL2d1aS9TY2VuZVN0YXJ0QnV0dG9uXCI7XHJcbmltcG9ydCB7IENPTE9SUywgZ2V0R2FtZUhlaWdodCwgZ2V0R2FtZVdpZHRoIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkdhbWVvdmVyXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZW92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIG1haW5NZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG5cdH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcblx0XHR0aGlzLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgIHg6IGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIHk6IGdldEdhbWVIZWlnaHQodGhpcykgLyAyLFxyXG5cdFx0XHR0ZXh0OiBcIllPVS4gQVJFLiBERUFEXCIsXHJcblx0XHRcdG9yaWdpbjogMC41LFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG5cdFx0XHRcdGZvbnQ6IFwiNjRweCBtb25vc3BhY2VcIixcclxuXHRcdFx0XHRmb250U3R5bGU6IFwic3Ryb25nXCJcclxuICAgICAgICAgICAgfSxcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRuZXcgU2NlbmVTdGFydEJ1dHRvbih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG5cdFx0XHR4OiBnZXRHYW1lV2lkdGgodGhpcykgLyAyLFxyXG5cdFx0XHR5OiA1NDAsXHJcblx0XHRcdHdpZHRoOiAxMjQsIFxyXG5cdFx0XHRoZWlnaHQ6IDQ0LFxyXG5cdFx0XHRjb2xvcjogQ09MT1JTLndoaXRlLmhleCxcclxuXHRcdFx0aG92ZXJDb2xvcjogQ09MT1JTLmN1c3RvbVllbGxvdy5oZXgsXHJcblx0XHRcdGxhYmVsOiBcIlJFUExBWVwiLFxyXG5cdFx0XHRmb250U2l6ZTogXCIyNHB4XCIsXHJcblx0XHRcdGZvbnRDb2xvcjogQ09MT1JTLmJsYWNrLnN0cmluZyxcclxuXHRcdFx0YWxwaGE6IDEsXHJcblx0XHRcdG5ld1NjZW5lS2V5OiBcIkdhbWVcIlxyXG4gICAgICAgIH0pO1xyXG5cdH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSBcIi4vQm9vdFNjZW5lXCI7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gXCIuL0dhbWVTY2VuZVwiO1xyXG5pbXBvcnQgeyBHYW1lb3ZlclNjZW5lIH0gZnJvbSBcIi4vR2FtZW92ZXJTY2VuZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG5cdEJvb3RTY2VuZSwgXHJcblx0R2FtZVNjZW5lLCBcclxuXHRHYW1lb3ZlclNjZW5lXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=