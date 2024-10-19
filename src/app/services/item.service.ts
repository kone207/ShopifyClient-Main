import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Item } from '../models/item';
import { ItemPayload } from '../models/item-payload';
import { Filter } from '../models/filter';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { error } from 'console';


const mock_items: ItemPayload = { 
  items: [
    {id: 1, name: 'cgirdy', price: 90.0, category: 'shoes', description:'not available'},
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

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  itemsUrl = `${environment.apiUrl}/items`

  httpOtions = {
    headers: new HttpHeaders({'Content-Type':'applicatio/json'})
  };

  constructor(private http: HttpClient) {}

getItems(page:number, pageSize:number,filter: Filter):
 Observable<ItemPayload> {
  let categoriesString: string = "";
  filter.categories
  .forEach(cc => categoriesString = categoriesString + cc + "#");
  if(categoriesString.length > 0)
    categoriesString = categoriesString
    .substring(0, categoriesString.length -1);
  
    let params = new HttpParams()
    .set("name", filter.name)
    .set("pageNumber", page.toString())
    .set("pageSize", pageSize.toString())
    .set("category", categoriesString);

    return this.http.get<ItemPayload>(this.itemsUrl,{params: params})
    .pipe(
      catchError(this.handleError<ItemPayload>('getItems', {
        items: [], count: 0
      }))
    );
}

handleError<T>(operation = 'operation', result?:T) {
  return (error:any): Observable<T> => {
    console.error(error);
    return of(result as T);
  }
}

getItem(id:number): Observable<Item> {
  const url = `${this.itemsUrl}/${id}`;
  return this.http.get<Item>(url)
  .pipe(
    catchError(this.handleError<Item>(`getItem/${id}`,
      {id: 0, name:"", price: 0, category: "", description:""}
    )));
}

}
