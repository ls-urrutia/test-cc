import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';


export interface Product {
  sku: string;
  name: string;
  description: string;
  price: number;
  brand: string;
}
export interface ConjuntoProducto {
  product: Product;
  quantity: number;
  discount: number; // % 
}
export interface Conjunto {
  id: string;
  productos: ConjuntoProducto[];
}

@Injectable({ providedIn: 'root' })
export class PresupuestoService {
  // catálogo estático de demo
  catalog: Product[] = [
    { sku: 'ACEIT530', name: 'Lubricante', description: 'Aceite 5w30', price: 21000, brand: 'Genérico' },
    { sku: 'GOLI001',  name: 'Golilla',    description: 'Golilla tampon carter', price: 8000, brand: 'Genérico' },
    { sku: 'FILTROA',  name: 'Filtro de Aire', description: 'Filtro aire motor', price: 12000, brand: 'Bosch' },
    { sku: 'FILTROO',  name: 'Filtro de Aceite', description: 'Filtro aceite motor', price: 9500, brand: 'Mann' },
    { sku: 'BUJIA01',  name: 'Bujía', description: 'Bujía encendido', price: 3500, brand: 'NGK' },
    { sku: 'PASTFRE1', name: 'Pastillas de Freno', description: 'Juego pastillas delanteras', price: 32000, brand: 'Brembo' },
    { sku: 'AMORT01',  name: 'Amortiguador', description: 'Amortiguador delantero', price: 45000, brand: 'Monroe' },
    { sku: 'BATERIA1', name: 'Batería', description: 'Batería 60Ah', price: 65000, brand: 'Bosch' },
    { sku: 'CORREAA',  name: 'Correa Alternador', description: 'Correa alternador 6PK', price: 18000, brand: 'Gates' },
    { sku: 'LIMPIAP',  name: 'Limpia Parabrisas', description: 'Par de plumillas', price: 9000, brand: 'Trico' },
    { sku: 'ANTICONG', name: 'Anticongelante', description: 'Bidón 4L', price: 15000, brand: 'Prestone' },
    { sku: 'ACEIT1040', name: 'Aceite 10w40', description: 'Aceite sintético 10w40', price: 22000, brand: 'Shell' },
    { sku: 'FILTROC',  name: 'Filtro de Cabina', description: 'Filtro polen/cabina', price: 11000, brand: 'Mahle' },
    { sku: 'DISCOFRE', name: 'Disco de Freno', description: 'Disco freno ventilado', price: 27000, brand: 'Brembo' },
    { sku: 'BOMBAAGU', name: 'Bomba de Agua', description: 'Bomba de agua motor', price: 39000, brand: 'SKF' },
    { sku: 'SENSOROX', name: 'Sensor Oxígeno', description: 'Sensor oxígeno universal', price: 25000, brand: 'Bosch' },
    { sku: 'TERMOSTA', name: 'Termostato', description: 'Termostato motor', price: 17000, brand: 'Mahle' },
    { sku: 'RADIADOR', name: 'Radiador', description: 'Radiador aluminio', price: 78000, brand: 'Valeo' },
    { sku: 'BOMBAFUEL', name: 'Bomba de Bencina', description: 'Bomba combustible', price: 42000, brand: 'Bosch' },
    { sku: 'INYECTOR', name: 'Inyector', description: 'Inyector de combustible', price: 33000, brand: 'Denso' }
  ];

  conjuntos: Conjunto[] = [];

  addConjunto() {
    this.conjuntos.push({ id: uuid(), productos: [] });
  }

  searchProducts(term: string): Product[] {
    const t = term.trim().toLowerCase();
    if (!t) return [];
    return this.catalog.filter(p =>
      p.sku.toLowerCase().includes(t) ||
      p.name.toLowerCase().includes(t) ||
      p.description.toLowerCase().includes(t)
    );
  }

  addProductToConjunto(id: string, product: Product) {
    if (!product || !product.sku) {
      console.error('Product inválido, abortando push', product);
      return;
    }
    const c = this.conjuntos.find(x => x.id === id);
    if (!c) return;
    // …
    c.productos.push({ product, quantity: 1, discount: 0 });
  }


  removeProductFromConjunto(conjId: string, sku: string) {
  const c = this.conjuntos.find(x => x.id === conjId);
  if (!c) return;
  c.productos = c.productos.filter(it => it.product.sku !== sku);
 }

 removeConjunto(conjuntoId: string) {
  this.conjuntos = this.conjuntos.filter(c => c.id !== conjuntoId);
}
}
