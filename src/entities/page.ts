import { Pageable } from './pageable'

export class Page<T> {
  private records: T[]
  private totalPages: number
  private currentPage: number
  private itemsPerPage: number
  private totalRecords: number

  constructor(pageable: Pageable, records: T[], totalRecords: number) {
    console.log(pageable.getLimit())
    this.records = records
    this.totalPages = this.toFixed(totalRecords / pageable.getLimit())
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

  private toFixed(number: number): number {
    const numberSplited = number.toString().split('.')
    let result = Number(numberSplited[0])
    if (numberSplited[1]) {
      result++
    }

    return result
  }
}
