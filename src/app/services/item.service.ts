import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item';
import { ItemPayload } from '../models/item-payload';

@Injectable({
  providedIn: 'root'
})

const mock_items: ItemPayload = { 
  items: [
    {id: 1, name: 'Adam hector', price: 90.0, category: 'shoes', description:'not available'},
    {  id: 2, name: 'yusuf Mustaf', price: 980.0, category: 'food', description:'available in pairs'},
    {  id: 3, name: 'Chris hani ', price: 160.0, category: 'motor', description:'available'},
    {  id: 4, name: 'Gram square', price: 180.0, category: 'platter', description:'good quality'},
    {  id: 5, name: 'nelson mandela', price: 180.0, category: 'hybrid', description:''},
    {  id: 6, name: 'hillary cliton', price: 180.0, category: 'hybrid', description:''},
    {  id: 7, name: 'muamar gadaffi', price: 180.0, category: 'hybrid', description:''},
    {  id: 8, name: 'jacop zuma', price: 180.0, category: 'hybrid', description:''},
    {  id: 9, name: 'leonad zacho', price: 180.0, category: 'hybrid', description:''}
  ],
  count:6
};

export class ItemService {

getItems(page:number, pageSize:number): Observable<ItemPayload> {
  let payload:ItemPayload = {
    items: mock_items.items.slice((page-1)*pageSize,page*pageSize),
    count:mock_items.items.length
  }
  return of(payload)
}

getItem(id:number): Observable<Item> {
  return of(mock_items.items[id - 1])
}

  constructor() { }

}
