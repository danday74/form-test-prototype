import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { ICssFilters } from '../../../../interfaces/i-css-filters'
import { TCssFilter } from '../../../../types/t-css-filter'
import { defaultCssFilters } from '../../data/default-css-filters'
import { cloneDeep } from 'lodash-es'
import { StorageService } from '../../../../services/storage.service'
import { fixUnits } from 'src/app/utils/string-utils'
import { defaultCssFiltersOrder } from '../../data/default-css-filters-order'
import { csfStorageKeys } from '../../data/csf-storage-keys'

@Component({
  selector: 'app-css-filters',
  templateUrl: './css-filters.component.html',
  styleUrls: ['./css-filters.component.scss']
})
export class CssFiltersComponent implements OnInit, OnChanges {
  @Input() width = '100%'

  min: number
  max: number
  showDialog = false

  filters: ICssFilters = this.storageService.getItem(csfStorageKeys.filters, cloneDeep(defaultCssFilters))
  filter: TCssFilter = this.storageService.getItem(csfStorageKeys.filter, defaultCssFiltersOrder[0])
  order: TCssFilter[] = this.storageService.getItem(csfStorageKeys.order, cloneDeep(defaultCssFiltersOrder))

  private readonly closeOnClick = false

  constructor(private storageService: StorageService, private ref: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutside(evt: MouseEvent) {
    if (!this.ref.nativeElement.contains(evt.target)) this.closeDialog(true)
  }

  ngOnInit() {
    this.fixUnits()
    this.doChangeFilter(this.filter)
    this.applyFilters()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.width && !changes.width.firstChange) this.fixUnits()
  }

  toggleDialog() {
    this.showDialog = !this.showDialog
  }

  updateOrder(order: TCssFilter[]) {
    this.order = order
    this.applyFilters()
  }

  changeFilter(filter: TCssFilter) {
    this.closeDialog()
    this.doChangeFilter(filter)
  }

  sliderUpdateFilterValue(value: number) {
    this.filters[this.filter] = value
    this.applyFilters()
  }

  resetFilter() {
    this.filters[this.filter] = defaultCssFilters[this.filter]
    this.applyFilters()
  }

  resetAll() {
    this.closeDialog()
    this.filters = cloneDeep(defaultCssFilters)
    this.applyFilters()
  }

  private applyFilters() {

    const filter: string = this.order.reduce((acc: string, fltr: TCssFilter) => {

      let unit = '%'
      if (fltr === 'blur') unit = 'px'
      if (fltr === 'hue-rotate') unit = 'deg'

      acc += `${fltr}(${this.filters[fltr]}${unit}) `
      return acc
    }, '').trim()

    const html: HTMLHtmlElement = document.querySelector('html')
    html.style.setProperty('filter', filter)

    this.storageService.setItem(csfStorageKeys.order, this.order)
    this.storageService.setItem(csfStorageKeys.filters, this.filters)
  }

  private doChangeFilter(filter: TCssFilter) {
    this.filter = filter
    this.setMinMax()
    this.storageService.setItem(csfStorageKeys.filter, filter)
  }

  private setMinMax() {
    if (this.filter === 'brightness' || this.filter === 'contrast') {
      this.min = 20
      this.max = 200
    } else if (this.filter === 'saturate') {
      this.min = 0
      this.max = 200
    } else if (this.filter === 'opacity') {
      this.min = 20
      this.max = 100
    } else if (this.filter === 'blur') {
      this.min = 0
      this.max = 10
    } else if (this.filter === 'hue-rotate') {
      this.min = 0
      this.max = 360
    } else {
      this.min = 0
      this.max = 100
    }
  }

  private closeDialog(force = false) {
    if (this.closeOnClick || force) this.showDialog = false
  }

  private fixUnits() {
    this.width = fixUnits(this.width)
  }
}
