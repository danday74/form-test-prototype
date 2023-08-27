import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core'
import { KeyValue } from '@angular/common'
import { TCssFilter } from '../../types/t-css-filter'
import { ICssFilters } from '../../interfaces/i-css-filters'
import { defaultCssFilters } from '../../data/default-css-filters'
import { StorageService } from '../../../../services/storage.service'
import Sortable from 'sortablejs'
import { csfStorageKeys } from '../../data/csf-storage-keys'
import { ICssFilter } from '../../interfaces/i-css-filter'
import { getCsfOrder } from '../../utils/get-csf-order'

@Component({
  selector: 'app-css-filters-dialog',
  templateUrl: './css-filters-dialog.component.html',
  styleUrls: ['./css-filters-dialog.component.scss']
})
export class CssFiltersDialogComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() width: string
  @Input() filters: ICssFilters
  @Input() filter: TCssFilter
  @Input() target: boolean
  @Input() targetValue: boolean

  @Output() updateTarget = new EventEmitter<boolean>()
  @Output() updateOrder = new EventEmitter<TCssFilter[]>()
  @Output() changeFilter = new EventEmitter<TCssFilter>()
  @Output() resetAll = new EventEmitter<void>()

  @ViewChild('sortableRef') sortableRef: ElementRef<HTMLUListElement>

  readonly defaultCssFilters: ICssFilters = defaultCssFilters

  dismissed: boolean = this.storageService.getItem(csfStorageKeys.dismissed, false)

  private sortable: Sortable

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.onUpdateOrder = this.onUpdateOrder.bind(this)
  }

  ngAfterViewInit() {
    this.sortable = new Sortable(this.sortableRef.nativeElement, {
      handle: '.css-filters-handle',
      ghostClass: 'css-filters-ghost',
      dragClass: 'css-filters-drag',
      animation: 200,
      store: {
        get: (/* sortable: Sortable */) => getCsfOrder(this.filters),
        set: this.onUpdateOrder
      }
    })
  }

  ngOnDestroy() {
    this.sortable.destroy()
    this.sortable = null
  }

  onChangeFilter(filter: string) {
    this.changeFilter.emit(filter as TCssFilter)
  }

  onResetAll() {
    this.resetAll.emit()
  }

  dismiss() {
    this.dismissed = true
    this.storageService.setItem(csfStorageKeys.dismissed, true)
  }

  orderFunc = (a: KeyValue<TCssFilter, ICssFilter>, b: KeyValue<TCssFilter, ICssFilter>): number => {
    return a.value.order - b.value.order
  }

  trackByFunc(_idx: number, item: KeyValue<TCssFilter, ICssFilter>): TCssFilter {
    return item.key
  }

  noop(evt: MouseEvent) {
    evt.preventDefault()
    evt.stopPropagation()
  }

  onUpdateTarget(targetValue: boolean) {
    this.updateTarget.emit(targetValue)
  }

  private onUpdateOrder(sortable: Sortable) {
    const order: TCssFilter[] = sortable.toArray() as TCssFilter[]
    this.updateOrder.emit(order)
  }
}
