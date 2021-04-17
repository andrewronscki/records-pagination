export declare class Pageable {
    private page;
    private limit;
    constructor(page?: number, limit?: number);
    getPage(): number;
    getLimit(): number;
}
export declare namespace Pageable {
    type Data = {
        page: number;
        limit: number;
    };
}
