"use strict";
// repositories/HeroRepository.ts
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
var BaseRepository_1 = require("./base/BaseRepository");
var HeroRepository = /** @class */ (function (_super) {
    __extends(HeroRepository, _super);
    function HeroRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // here, we can create all especific stuffs of Spartan Repository
    HeroRepository.prototype.countOfHeros = function () {
        return this._collection.count({});
    };
    return HeroRepository;
}(BaseRepository_1.BaseRepository));
exports.HeroRepository = HeroRepository;
