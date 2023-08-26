import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { ICssFilters } from '../../interfaces/i-css-filters'
import { TCssFilter } from '../../types/t-css-filter'
import { defaultCssFilters } from '../../data/default-css-filters'
import { cloneDeep, findKey, keys, reduce } from 'lodash-es'
import { StorageService } from '../../../../services/storage.service'
import { fixUnits } from 'src/app/utils/string-utils'
import { csfStorageKeys } from '../../data/csf-storage-keys'
import { ICssFilter } from '../../interfaces/i-css-filter'
import { getCsfOrder } from '../../utils/get-csf-order'
import { throttleDecorator } from '../../../../decorators/throttle-decorator'

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
  filter: TCssFilter = this.storageService.getItem(csfStorageKeys.filter, findKey(defaultCssFilters, { order: 0 }))

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
    this.filters = reduce(this.filters, (acc: ICssFilters, _v: ICssFilter, k: string) => {
      const filter: TCssFilter = k as TCssFilter
      acc[filter].order = order.indexOf(filter)
      return acc
    }, this.filters)
    this.applyFilters()
  }

  changeFilter(filter: TCssFilter) {
    this.closeDialog()
    this.doChangeFilter(filter)
  }

  sliderUpdateFilterValue(value: number) {
    this.filters[this.filter].value = value
    this.applyFilters()
  }

  resetFilter() {
    this.filters[this.filter].value = defaultCssFilters[this.filter].value
    this.applyFilters()
  }

  resetAll() {
    this.closeDialog()
    for (const filter of keys(this.filters)) {
      const fltr: TCssFilter = filter as TCssFilter
      this.filters[fltr].value = defaultCssFilters[fltr].value
    }
    this.applyFilters()
  }

  @throttleDecorator(50, { leading: true, trailing: true })
  private applyFilters() {

    const order: TCssFilter[] = getCsfOrder(this.filters)

    const filter: string = order.reduce((acc: string, fltr: TCssFilter) => {
      acc += `${fltr}(${this.filters[fltr].value}${this.filters[fltr].uom.unit}) `
      return acc
    }, '').trim()

    const html: HTMLHtmlElement = document.querySelector('html')
    html.style.setProperty('filter', filter)

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
