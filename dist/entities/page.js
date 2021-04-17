"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var Page = /** @class */ (function () {
    function Page(pageable, records, totalRecords) {
        var totalPages = totalRecords / pageable.getLimit();
        this.records = records;
        this.totalPages = this.toFixed(totalPages, 0);
        this.currentPage = pageable.getPage();
        this.itemsPerPage = records.length;
        this.totalRecords = totalRecords;
    }
    Page.prototype.getRecords = function () {
        return this.records;
    };
    Page.prototype.getTotalPages = function () {
        return this.totalPages;
    };
    Page.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    Page.prototype.getItemsPerPage = function () {
        return this.itemsPerPage;
    };
    Page.prototype.getTotalRecords = function () {
        return this.totalRecords;
    };
    Page.prototype.toFixed = function (number, fixed) {
        var regex = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
        return Number(number.toString().match(regex));
    };
    return Page;
}());
exports.Page = Page;
