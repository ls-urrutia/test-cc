import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ConjuntoProducto }   from '../../services/presupuesto';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './product-table.html',
  styleUrls: ['./product-table.scss']
})
export class ProductTableComponent {
  @Input()  items: ConjuntoProducto[] = [];
  @Output() change = new EventEmitter<void>();
    @Output() removeItem = new EventEmitter<string>(); // emite el SKU

  neto(item: ConjuntoProducto) {
    return item.product.price * item.quantity * (1 - item.discount/100);
  }
  iva(item: ConjuntoProducto) {
    return this.neto(item) * 0.19;
  }
  total(item: ConjuntoProducto) {
    return this.neto(item) + this.iva(item);
  }

  get totalGeneral(): number {
    return this.items.reduce((s, it) => s + this.total(it), 0);
  }

  onQtyChange()     { this.change.emit(); }
  onDiscountChange(){ this.change.emit(); }

  onRemove(sku: string) {
    this.removeItem.emit(sku);
  }

  incrementQty(item: ConjuntoProducto) {
    item.quantity++;
    this.onQtyChange();
  }
  decrementQty(item: ConjuntoProducto) {
    if (item.quantity > 1) {
      item.quantity--;
      this.onQtyChange();
    }
  }
}

