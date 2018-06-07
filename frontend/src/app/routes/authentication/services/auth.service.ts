import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {PathprefixService} from '../../../shared/services/pathprefix.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/Rx' ;
import {SearchParams} from '../../../shared/models/SearchParams';


@Injectable()
export class AuthService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  private search: HttpParams;

  private loginUrl: string = this.pathprefixService.prefix + '/products';
  private registerUrl: string = this.pathprefixService.prefix + '/products';

  constructor(private http: HttpClient, private pathprefixService: PathprefixService) {
    this.http = http;
  }

  //
  // login(product) {
  //   return this.http.put(this.productsUrl + "/" + product.id, JSON.stringify(product), {
  //     headers: this.headers,
  //   }).map((response) => <any>response);
  // }

  // getManufacturers() {
  //   return this.http.get(this.manufacturersUrl)
  //     .map((response) => <any>response);
  // }

  // getProducts(searchParams: SearchParams) {
  //   this.setSearch(searchParams);
  //   return this.http.get(this.productsUrl, {params: this.search})
  //     .map((response) => <any>response);
  // }


  //
  // downloadProductsCSV(searchParams: SearchParams) {
  //   this.setSearch(searchParams);
  //   return this.http.get(this.getcsvproductsUrl, {
  //     headers: this.headers,
  //     params: this.search,
  //     responseType: 'text'
  //   }).map((response) => <any>response);
  // }

  private setSearch(searchParamas: SearchParams): void {
    this.search = new HttpParams();
    this.search = this.search.append('page', searchParamas.page.toString());
    this.search = this.search.append('size', searchParamas.size.toString());
    this.search = this.search.append('sort', searchParamas.sort.toString());
    for (let key in searchParamas.search) {
      if (searchParamas.search.hasOwnProperty(key)) {
        let val = searchParamas.search[key];
        this.search = this.search.append(key, val);
      }
    }
  }


}
