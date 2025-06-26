import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product, Conjunto } from './presupuesto/services/presupuesto';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const catalog: Product[] = [
      { sku:'ACEIT530', name:'Lubricante', description:'Aceite 5w30', price:21000, brand:'Genérico' },
      { sku:'Tuerca20', name:'Tuerca', description:'Pack 20 Tuercas', price:4000, brand:'Genérico' },
    ];
    const conjuntos: Conjunto[] = [];
    return { catalog, conjuntos };
  }
}
