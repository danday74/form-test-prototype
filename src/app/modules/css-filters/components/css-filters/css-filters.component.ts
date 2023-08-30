import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core'
import { ICssFilters } from '../../interfaces/i-css-filters'
import { TCssFilter } from '../../types/t-css-filter'
import { defaultCssFilters } from '../../data/default-css-filters'
import { cloneDeep, findKey, keys, merge, reduce, uniq } from 'lodash-es'
import { StorageService } from '../../../../services/storage.service'
import { adjustSizeForMin, fixUnits } from 'src/app/utils/string-utils'
import { csfStorageKeys } from '../../data/csf-storage-keys'
import { ICssFilter } from '../../interfaces/i-css-filter'
import { getCsfOrder } from '../../utils/get-csf-order'
import { throttleDecorator } from '../../../../decorators/throttle-decorator'
import { differenceInMilliseconds } from 'date-fns'
import { selector } from '../../../../utils/selector'

@Component({
  selector: 'app-css-filters',
  templateUrl: './css-filters.component.html',
  styleUrls: ['./css-filters.component.scss']
})
export class CssFiltersComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() width = '100%'
  @Input() target = false // enable targeting?
  @Input() filters: TCssFilter[] = ['blur', 'brightness', 'contrast', 'grayscale', 'hue-rotate', 'invert', 'opacity', 'saturate', 'sepia']

  min: number
  max: number
  step: number
  showDialog = false

  filter: TCssFilter
  filterz: ICssFilters
  targetValue: boolean = this.storageService.getItem(csfStorageKeys.targetValue, false)

  private readonly closeOnClick = false
  private interval: number

  constructor(private storageService: StorageService, private ref: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutside(evt: MouseEvent) {
    if (!this.ref.nativeElement.contains(evt.target)) this.closeDialog(true)
  }

  ngOnInit() {
    this.setFilters()
    this.fixUnits()
    this.doChangeFilter(this.filter)
    this.applyFilters()
  }

  ngAfterViewInit() {
    const targetImagesOnly: boolean = this.targetImagesOnly()
    if (targetImagesOnly) {
      this.whenImagesAreReady().then((/* msg: string */) => {
        this.applyFilters()
        // console.log(msg)
      }).catch((/* msg: string */) => {
        // console.warn(msg)
      })
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.width && !changes.width.firstChange) this.fixUnits()
    if (changes.target && !changes.target.firstChange) this.applyFilters()
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }

  toggleDialog() {
    this.showDialog = !this.showDialog
  }

  updateTarget(targetValue: boolean) {
    this.targetValue = targetValue
    this.applyFilters()
  }

  updateOrder(order: TCssFilter[]) {
    this.filterz = reduce(this.filterz, (acc: ICssFilters, _v: ICssFilter, k: string) => {
      const filter: TCssFilter = k as TCssFilter
      acc[filter].order = order.indexOf(filter)
      return acc
    }, this.filterz)
    this.applyFilters()
  }

  changeFilter(filter: TCssFilter) {
    this.closeDialog()
    this.doChangeFilter(filter)
  }

  sliderUpdateFilterValue(value: number) {
    this.filterz[this.filter].value = value
    this.applyFilters()
  }

  resetFilter() {
    this.filterz[this.filter].value = defaultCssFilters[this.filter].value
    this.applyFilters()
  }

  resetAll() {
    this.closeDialog()
    for (const filter of keys(this.filterz) as TCssFilter[]) {
      this.filterz[filter].value = defaultCssFilters[filter].value
    }
    this.applyFilters()
  }

  @throttleDecorator(50, { leading: true, trailing: true })
  private applyFilters() {

    const order: TCssFilter[] = getCsfOrder(this.filterz)

    const filter: string = order.reduce((acc: string, fltr: TCssFilter) => {
      acc += `${fltr}(${this.filterz[fltr].value}${this.filterz[fltr].uom.unit}) `
      return acc
    }, '').trim()

    this.applyFiltersToDom(filter)

    this.storageService.setItem(csfStorageKeys.filters, this.filterz)
    this.storageService.setItem(csfStorageKeys.targetValue, this.targetValue)
  }

  private applyFiltersToDom(filter: string) {

    const html: HTMLHtmlElement = document.querySelector('html')
    const imagez: NodeListOf<HTMLImageElement> = document.querySelectorAll('img')
    const images: HTMLImageElement[] = Array.from(imagez)

    const targetImagesOnly: boolean = this.targetImagesOnly()

    const htmlFilter: string = targetImagesOnly ? null : filter
    const imageFilter: string = targetImagesOnly ? filter : null

    html.style.setProperty('filter', htmlFilter)
    images.forEach((image: HTMLImageElement) => image.style.setProperty('filter', imageFilter))
  }

  private doChangeFilter(filter: TCssFilter) {
    this.filter = filter
    this.min = this.filterz[this.filter].min
    this.max = this.filterz[this.filter].max
    this.step = this.filterz[this.filter].step
    this.storageService.setItem(csfStorageKeys.filter, filter)
  }

  private targetImagesOnly(): boolean {
    return this.target && this.targetValue
  }

  private closeDialog(force = false) {
    if (this.closeOnClick || force) this.showDialog = false
  }

  private fixUnits() {
    const width: string = fixUnits(this.width)
    this.width = adjustSizeForMin(width, 185)
  }

  private setFilters() {

    this.filters = uniq(this.filters)
    this.filters = this.filters.filter((filter: TCssFilter) => keys(defaultCssFilters).includes(filter))

    if (!this.filters.length) {
      // setting filterz and filter removes console noise
      this.filterz = cloneDeep(defaultCssFilters)
      this.filter = findKey(defaultCssFilters, { order: 0 }) as TCssFilter
      throw Error(`${selector(this.ref, true)} requires at least one filter`)
    } else {

      const storageFilters: ICssFilters = this.storageService.getItem(csfStorageKeys.filters)
      let filterz: ICssFilters = merge({}, cloneDeep(defaultCssFilters), storageFilters)

      filterz = reduce(filterz, (acc: ICssFilters, _v: ICssFilter, k: string) => {
        const filter: TCssFilter = k as TCssFilter
        if (this.filters.includes(filter)) {
          acc[filter].order = this.filters.indexOf(filter)
        } else {
          delete acc[filter]
        }
        return acc
      }, filterz)

      const storageFilter = this.storageService.getItem(csfStorageKeys.filter)
      const filter: TCssFilter = this.filters.includes(storageFilter) ? storageFilter : findKey(filterz, { order: 0 })

      this.filterz = filterz
      this.filter = filter
    }
  }

  private whenImagesAreReady(): Promise<string> {
    const startTime: Date = new Date()
    const abortTimeout = 500

    return new Promise((resolve, reject) => {
      let attempts = 0

      this.interval = setInterval(() => {
        attempts++
        const imagez: NodeListOf<HTMLImageElement> = document.querySelectorAll('img')
        const images: HTMLImageElement[] = Array.from(imagez)
        if (images.length) {
          clearInterval(this.interval)
          resolve(`success - found some images on attempt ${attempts}`)
        } else if (differenceInMilliseconds(new Date(), startTime) > abortTimeout) {
          clearInterval(this.interval)
          reject(`failure - given up looking for images on attempt ${attempts}`)
        }
      }, 25)
    })
  }
}
