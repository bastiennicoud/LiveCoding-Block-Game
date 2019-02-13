import * as p5 from 'p5';

/**
 * Wall element in the game
 */
var Wall = /** @class */ (function () {
    function Wall() {
        this.sprite = "assets/sprites/wall.png";
        //
    }
    return Wall;
}());

var InitiationLevel = /** @class */ (function () {
    function InitiationLevel() {
        this.elements = [
            new Wall
        ];
    }
    return InitiationLevel;
}());

/**
 * The level loader load a level from the levels folder
 * and creates the elements in the canvas
 */
var LevelLoader = /** @class */ (function () {
    function LevelLoader(p5$$1) {
        this.p5 = p5$$1;
    }
    LevelLoader.prototype.loadLevel = function (level) {
        if (level === void 0) { level = new InitiationLevel; }
        this.level = level;
    };
    return LevelLoader;
}());

/**
 * The asset manager allows you to load assets for reuse in all the game
 *
 * @class
 * @author Bastien Nicoud
 */
var AssetsManager = /** @class */ (function () {
    /**
     * @param p5
     */
    function AssetsManager(p5$$1) {
        this.assetsDatas = [
            { name: 'pacman', path: 'sprites/pacman.png' },
            { name: 'wall', path: 'sprites/wall.png' }
        ];
        this.p5 = p5$$1;
    }
    /**
     * Loads the assets in ram (from p5 preload)
     */
    AssetsManager.prototype.loadAssets = function () {
        for (var _i = 0, _a = this.assetsDatas; _i < _a.length; _i++) {
            var data = _a[_i];
            this.assets[data.name] = this.p5.loadImage(data.path);
        }
    };
    /**
     * Return an asset
     * @param name
     */
    AssetsManager.prototype.getAsset = function (name) {
        return this.assets[name];
    };
    return AssetsManager;
}());

var BlockGame = /** @class */ (function () {
    function BlockGame(p5$$1, config) {
        var _this = this;
        this.p5 = p5$$1;
        this.config = config;
        this.assetsManager = new AssetsManager(p5$$1);
        this.levelLoader = new LevelLoader(p5$$1);
        // Link game to p5 methods
        this.p5.preload = function () { return _this.preload(); };
        this.p5.setup = function () { return _this.setup(); };
        this.p5.draw = function () { return _this.draw(); };
        this.p5.keyPressed = function () { return _this.keyPressed(p5$$1.keyCode); };
    }
    /**
     * Preload the assets
     */
    BlockGame.prototype.preload = function () {
        // Preload all the assets in the asset manager
        this.assetsManager.loadAssets();
    };
    BlockGame.prototype.setup = function () {
        // Load the default level
        this.levelLoader.loadLevel();
    };
    BlockGame.prototype.draw = function () {
    };
    BlockGame.prototype.keyPressed = function (keyCode) {
    };
    return BlockGame;
}());

/**
 * Entry point of the game
 *
 * LiveCoding platform will load this file and execute the code
 */
/**
 * p5 initialization function
 * @param p p5 instance
 */
var gameFunctions = function (p) {
    /**
     * Loads the game
     */
    var blockGame = new BlockGame(p, {
        el: document.getElementById('block-game')
    });
};
var game = new p5(gameFunctions);
