"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (left, right) {
        return this.data[left].toLowerCase() > this.data[right].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (left, right) {
        var _a;
        var characters = this.data.split('');
        _a = [
            characters[right],
            characters[left]
        ], characters[left] = _a[0], characters[right] = _a[1];
        this.data = characters.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
