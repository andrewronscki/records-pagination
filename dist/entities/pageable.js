"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pageable = void 0;
var Pageable = /** @class */ (function () {
    function Pageable(page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        limit = limit > 100 ? 100 : limit;
        this.page = page;
        this.limit = limit;
    }
    Pageable.prototype.getPage = function () {
        return this.page;
    };
    Pageable.prototype.getLimit = function () {
        return this.limit;
    };
    return Pageable;
}());
exports.Pageable = Pageable;
