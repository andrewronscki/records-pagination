import { Pageable } from './pageable'

export class Page<T> {
  private records: T[]
  private totalPages: number
  private currentPage: number
  private itemsPerPage: number
  private totalRecords: number

  constructor(pageable: Pageable, records: T[], totalRecords: number) {
    const totalPages = totalRecords / pageable.getLimit()
    
    this.records = records
    this.totalPages = this.toFixed(totalPages, 0)
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

  private toFixed(number: number, fixed: number): number {
    const regex = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?')
    return Number(number.toString().match(regex))
  }
}
