import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { PresupuestoService, Product } from '../../services/presupuesto';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-search.html',
  styleUrls: ['./product-search.scss']
})
export class ProductSearchComponent {
  @Output() select = new EventEmitter<Product>();

  term = '';
  results: Product[] = [];
  loading = false;
  selected: Product | null = null;

  public Math = Math;
  page = 0;
  pageSize = 10;

  filterMarca: string = '';
  filterPrecio: number|null = null;

  constructor(private presu: PresupuestoService) {
    this.results = this.presu.catalog;
  }

  get marcas(): string[] {
    return Array.from(new Set(this.presu.catalog.map(p => p.brand)));
  }

  async onSearch() {
    this.loading = true;
    setTimeout(() => {
      let filtered = this.term.trim()
        ? this.presu.searchProducts(this.term)
        : this.presu.catalog;
      if (this.filterMarca) {
        filtered = filtered.filter(p => p.brand === this.filterMarca);
      }
      if (this.filterPrecio) {
        filtered = filtered.filter(p => p.price <= this.filterPrecio!);
      }
      this.results = filtered;
      this.page = 0;
      this.loading = false;
      this.selected = null;
    }, 250);
  }

  get pagedResults(): Product[] {
    const start = this.page * this.pageSize;
    return this.results.slice(start, start + this.pageSize);
  }

  prev() {
    if (this.page > 0) this.page--;
  }
  next() {
    if ((this.page + 1) * this.pageSize < this.results.length) {
      this.page++;
    }
  }

  onSelect(p: Product) {
    this.selected = p;
    this.select.emit(p);
  }
}
