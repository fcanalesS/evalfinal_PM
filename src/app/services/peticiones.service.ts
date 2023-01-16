import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Cliente} from "../models/cliente.model";
import {Transaccion} from "../models/transaccion.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  public url: string;
  public urlTransacciones: string;

  constructor(public http: HttpClient) {
    this.url = "https://53dp3ng0fk.execute-api.us-east-1.amazonaws.com/produccion/";
    this.urlTransacciones = "https://cywnhnstad.execute-api.us-east-1.amazonaws.com/produccion/"
  }

  getCliente(): Observable<any> {
    return this.http.get(this.url + 'api-productos/productos/get-cliente')
  }

  // @ts-ignore
  addCliente(cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url + 'api-productos/productos/add-cliente', cliente);
  }

  getTransaccion(): Observable<any> {
    return this.http.get(this.urlTransacciones + 'transaccion/get-transaccion')
  }

  // @ts-ignore
  addTransaccion(transaccion): Observable<Transaccion> {
    return this.http.post<Transaccion>(this.urlTransacciones + 'transaccion/add-transaccion', transaccion);
  }
}
