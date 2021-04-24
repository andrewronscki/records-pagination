import { Pageable } from './pageable'

export class Page<T> {
  private records: T[]
  private totalPages: number
  private currentPage: number
  private itemsPerPage: number
  private totalRecords: number

  constructor(pageable: Pageable, records: T[], totalRecords: number) {
    this.records = records
    this.totalPages = Math.ceil(totalRecords / pageable.getLimit())
    this.currentPage = pageable.getPage()
    this.itemsPerPage = records.length
    this.totalRecords = totalRecords
  }
  getRecords(): T[] {
    return this.records
  }

  getTotalPages(): number {
    return this.totalPages
  }

  getCurrentPage(): number {
    return this.currentPage
  }

  getItemsPerPage(): number {
    return this.itemsPerPage
  }

  getTotalRecords(): number {
    return this.totalRecords
  }
}
