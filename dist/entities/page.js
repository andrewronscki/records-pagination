"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var Page = /** @class */ (function () {
    function Page(pageable, records, totalRecords) {
        this.records = records;
        this.totalPages = Math.ceil(totalRecords / pageable.getLimit());
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
    return Page;
}());
exports.Page = Page;
