"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FunctionComposition = /** @class */ (function () {
    function FunctionComposition(func) {
        this.func = func;
    }
    FunctionComposition.prototype.then = function (next) {
        var _this = this;
        return new FunctionComposition(function (value) { return next(_this.func(value)); });
    };
    FunctionComposition.prototype.apply = function (value) {
        return this.func(value);
    };
    return FunctionComposition;
}());
exports.FunctionComposition = FunctionComposition;
function first(func) {
    return new FunctionComposition(func);
}
exports.first = first;
//# sourceMappingURL=function-composition.js.map