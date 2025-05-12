import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharkapiService {

  constructor(private http: HttpClient) { }

  getAllAttacks() {
    return this.http.get(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records?select=date%2C%20country%2C%20area%2C%20location%2C%20injury%2C%20fatal_y_n&limit=40&refine=country%3A%22BRAZIL%22`)
  }
}