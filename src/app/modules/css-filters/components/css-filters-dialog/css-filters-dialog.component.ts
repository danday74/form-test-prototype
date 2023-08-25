import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core'
import { KeyValue } from '@angular/common'
import { TCssFilter } from '../../../../types/t-css-filter'
import { ICssFilters } from '../../../../interfaces/i-css-filters'
import { defaultCssFilters } from '../../data/default-css-filters'
import { StorageService } from '../../../../services/storage.service'
import Sortable from 'sortablejs'
import { csfStorageKeys } from '../../data/csf-storage-keys'

@Component({
  selector: 'app-css-filters-dialog',
  templateUrl: './css-filters-dialog.component.html',
  styleUrls: ['./css-filters-dialog.component.scss']
})
export class CssFiltersDialogComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() width: string
  @Input() filters: ICssFilters
  @Input() filter: TCssFilter
  @Input() order: TCssFilter[]

  @Output() changeOrder = new EventEmitter<TCssFilter[]>()
  @Output() changeFilter = new EventEmitter<TCssFilter>()
  @Output() resetAll = new EventEmitter<void>()

  @ViewChild('sortableRef') sortableRef: ElementRef<HTMLUListElement>

  readonly defaultCssFilters: ICssFilters = defaultCssFilters
  Math: Math = Math

  dismissed: boolean = this.storageService.getItem(csfStorageKeys.dismissed, false)

  private sortable: Sortable

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.onChangeOrder = this.onChangeOrder.bind(this)
  }

  ngAfterViewInit() {
    this.sortable = new Sortable(this.sortableRef.nativeElement, {
      handle: '.css-filters-handle',
      ghostClass: 'css-filters-ghost',
      animation: 200,
      store: {
        get: (/* sortable: Sortable */) => this.order,
        set: this.onChangeOrder
      }
    })
  }

  ngOnDestroy() {
    this.sortable.destroy()
    this.sortable = null
  }

  onChangeFilter(item: KeyValue<TCssFilter, number>) {
    const filter: TCssFilter = item.key
    this.changeFilter.emit(filter)
  }

  onResetAll() {
    this.resetAll.emit()
  }

  dismiss() {
    this.dismissed = true
    this.storageService.setItem(csfStorageKeys.dismissed, true)
  }

  orderFunc = (a: KeyValue<TCssFilter, number>, b: KeyValue<TCssFilter, number>): number => {
    const orderA: number = this.order.indexOf(a.key)
    const orderB: number = this.order.indexOf(b.key)
    return orderA - orderB
  }

  trackByFunc(_idx: number, item: KeyValue<TCssFilter, number>): TCssFilter {
    return item.key
  }

  noop(evt: MouseEvent) {
    evt.preventDefault()
    evt.stopPropagation()
  }

  private onChangeOrder(sortable: Sortable) {
    const order: TCssFilter[] = sortable.toArray() as TCssFilter[]
    this.changeOrder.emit(order)
  }
}
