export class Pageable {
  private page: number
  private limit: number

  constructor(page = 1, limit = 10) {
    limit = limit > 100 ? 100 : limit
    this.page = page
    this.limit = limit
  }

  getPage() {
    return this.page
  }

  getLimit() {
    return this.limit
  }
}

export namespace Pageable {
  export type Data = {
    page: number
    limit: number
  }
}
