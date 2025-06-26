import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication }           from '@angular/platform-browser';
import { CommonModule }                   from '@angular/common';
import { FormsModule }                    from '@angular/forms';
import { HttpClientModule }               from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';



import { AddConjuntoComponent }    from './presupuesto/components/add-conjunto/add-conjunto';
import { ProductSearchComponent }  from './presupuesto/components/product-search/product-search';
import { ProductTableComponent }   from './presupuesto/components/product-table/product-table';
import { PresupuestoService }      from './presupuesto/services/presupuesto';
import { ConjuntoProducto }        from './presupuesto/services/presupuesto';


import { InMemoryDataService }     from './in-memory-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AddConjuntoComponent,
    ProductSearchComponent,
    ProductTableComponent
  ],
  providers: [ PresupuestoService ],
  templateUrl: './app.html',
  styleUrls:  ['./app.scss']
})

export class AppComponent {

  step = 1;         
  modalOpen = false; 

  selectedId: string|null = null;
  showSearch = false;
  presupuestoGuardado = false;

  adjuntos: File[] = [];
  adjuntosPreview: string[] = [];
  comentario: string = '';

  guardando = false;

  constructor(public presu: PresupuestoService) {}

  onNuevoConjunto() {
    this.presu.addConjunto();
    const last = this.presu.conjuntos.slice(-1)[0];
    this.selectedId = last.id;
    this.showSearch = false;
    this.step = 1;
  }

  selectConjunto(id: string) {
    this.selectedId = id;
    this.showSearch = false;
    this.step = 1;
  }

  onAgregarItems() {
    this.showSearch = true;
  }

  onCancelarBusqueda() {
    this.showSearch = false;
  }

  openProductModal() {
    this.modalOpen = true;
  }

  onProductSelected(p: any) {
    if (!this.selectedId || !p?.sku) return;
    this.presu.addProductToConjunto(this.selectedId, p);
    this.showSearch = false;
  }

  onRemoveProducto(sku: string) {
    if (!this.selectedId) return;
    this.presu.removeProductFromConjunto(this.selectedId, sku);
  }

  onRemoveProductoFromConjunto(conjuntoId: string, sku: string) {
    this.presu.removeProductFromConjunto(conjuntoId, sku);
  }

  onAdjuntosChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    this.adjuntos = Array.from(input.files);
    this.adjuntosPreview = [];
    for (const file of this.adjuntos) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.adjuntosPreview.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  onGuardarPresupuesto() {
    this.guardando = true;
    setTimeout(() => {
      this.guardando = false;
      this.presupuestoGuardado = true;
      setTimeout(() => {
        this.presupuestoGuardado = false;
        this.step = 1;
      }, 1200);
    }, 1000); // Simula 1 segundo de guardado
  }

  vaciarConjunto() {
  // Limpia productos del conjunto activo
  const c = this.active;
  if (c) c.productos = [];
  // Limpia adjuntos y comentario
  this.adjuntos = [];
  this.adjuntosPreview = [];
  this.comentario = '';
}

vaciarPresupuesto() {
  this.presu.conjuntos = [];
  this.selectedId = null;
  this.comentario = '';
  this.adjuntos = [];
  this.adjuntosPreview = [];
}

  goNext() {
    if (this.step < 3) this.step++;
  }
  goBack() {
    if (this.step > 1) this.step--;
  }

  goStep(n: number) {
    this.step = n;
    this.showSearch = false;
  }

  get active() {
    return this.presu.conjuntos.find(c => c.id === this.selectedId);
  }

  get totalNeto() {

    return this.presu.conjuntos.reduce((total, c) =>
      total + c.productos.reduce((s, x) =>
        s + x.product.price * x.quantity * (1 - x.discount / 100), 0
      ), 0);
  }
  get totalIva() {
    return this.totalNeto * 0.19;
  }
  get totalGeneral() {
    return this.totalNeto + this.totalIva;
  }

  get totalProductos() {
    return this.presu.conjuntos.reduce((acc, c) => acc + (c.productos?.length || 0), 0);
  }

    /** Calcula neto + IVA para un item */
  total(item: ConjuntoProducto): number {
    const neto = item.product.price * item.quantity * (1 - item.discount / 100);
    const iva   = neto * 0.19;
    return neto + iva;
  }

  onRemoveConjunto(conjuntoId: string) {
    this.presu.removeConjunto(conjuntoId);
    if (this.selectedId === conjuntoId) {
      this.selectedId = this.presu.conjuntos[0]?.id ?? null;
    }
  }

}

// Bootstrapping standalone + in-memory API
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService,
        { delay: 300 }
      )
    )
  ]
});
