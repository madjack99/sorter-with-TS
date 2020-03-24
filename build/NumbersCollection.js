"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (right, left) {
        return this.data[right] < this.data[left];
    };
    NumbersCollection.prototype.swap = function (right, left) {
        var _a;
        _a = [this.data[left], this.data[right]], this.data[right] = _a[0], this.data[left] = _a[1];
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
