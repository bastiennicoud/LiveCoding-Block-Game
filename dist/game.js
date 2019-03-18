/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class Map {
}
//# sourceMappingURL=Map.js.map

class BaseMap extends Map {
    constructor() {
        super();
        this.map = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];
        this.spritesAssociations = {
            0: null,
            1: 'wall',
            2: 'octocat'
        };
    }
}
//# sourceMappingURL=BaseMap.js.map

class MapManager {
    constructor(app) {
        this.app = app;
        this.sprites = {};
    }
    loadMap(map) {
        console.log(this.app.view.height);
        let mapSize = map.map.length;
        let spriteSize = (this.app.view.height / window.devicePixelRatio) / mapSize;
        map.map.forEach((line, lineKey) => {
            line.forEach((element, columnKey) => {
                if (columnKey == 0) {
                    this.sprites[lineKey] = {};
                }
                if (map.spritesAssociations[element]) {
                    let sprite = new PIXI.Sprite(PIXI.loader.resources[map.spritesAssociations[element]].texture);
                    sprite.width = spriteSize;
                    sprite.height = spriteSize;
                    sprite.position.set(columnKey * spriteSize, lineKey * spriteSize);
                    this.sprites[lineKey][columnKey] = sprite;
                    this.app.stage.addChild(this.sprites[lineKey][columnKey]);
                }
                else {
                    this.sprites[lineKey][columnKey] = null;
                }
            });
        });
    }
}

let app;
let mapManager;
class Game {
    constructor(el, assetsPath) {
        this.el = el;
        this.assetsPath = assetsPath;
        this.height = this.el.offsetHeight;
        this.width = this.el.offsetWidth;
        console.log(`Is WebGL supported : ${PIXI.utils.isWebGLSupported()}`);
        this.createApplication();
        this.load();
    }
    createApplication() {
        app = new PIXI.Application({
            width: this.width,
            height: this.height,
            resolution: window.devicePixelRatio,
            autoResize: true,
            backgroundColor: 0x9809856
        });
        this.el.appendChild(app.view);
    }
    load() {
        PIXI
            .loader
            .add([
            { name: 'wall', url: `${this.assetsPath}/wall.png` },
            { name: 'octocat', url: `${this.assetsPath}/octocat.png` }
        ])
            .on('progress', this.loaderProgress)
            .load(this.setup);
    }
    loaderProgress(loader, resource) {
        console.log(`Loaded : ${resource.name}`);
        console.log(`Loading progress : ${loader.progress}%`);
    }
    setup() {
        mapManager = new MapManager(app);
        mapManager.loadMap(new BaseMap());
    }
    executeGameCommand(command) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Command to execute : ${command}`);
            this.el.innerText = command;
            return true;
        });
    }
}
//# sourceMappingURL=Game.js.map

export { Game };
