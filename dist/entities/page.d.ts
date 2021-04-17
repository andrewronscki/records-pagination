import { Pageable } from './pageable';
export declare class Page<T> {
    private records;
    private totalPages;
    private currentPage;
    private itemsPerPage;
    private totalRecords;
    constructor(pageable: Pageable, records: T[], totalRecords: number);
    getRecords(): T[];
    getTotalPages(): number;
    getCurrentPage(): number;
    getItemsPerPage(): number;
    getTotalRecords(): number;
    private toFixed;
}
