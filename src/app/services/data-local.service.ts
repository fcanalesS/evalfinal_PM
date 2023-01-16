import { Injectable } from '@angular/core';
import {NavController} from "@ionic/angular";
import {Storage} from '@ionic/storage';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {Registro} from "../pages/registro.models";

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  guardados: Registro[] = [];
  constructor(private storage: Storage, private navCtrl: NavController, private inAppBrowser: InAppBrowser) { }

  async cargarStorage(){
    this.guardados = (await this.storage.get('registros') || [])
  }

  async guardarRegistro (format: string, text: string) {
    await this.storage.create();
    await this.cargarStorage();

    const nuevoRegistro = new Registro(format, text);
    this.guardados.unshift(nuevoRegistro);

    this.storage.set('registros', this.guardados);
    this.abrirRegistro(nuevoRegistro);
  }

  abrirRegistro(registro: Registro){
    this.navCtrl.navigateForward('/navscan/navscan/historial');

    switch (registro.type){
      case 'http':
        this.inAppBrowser.create(registro.text, '_system');
        break;
      case 'geo':
        this.navCtrl.navigateForward(`/navscan/navscan/historial/mapa/${registro.text}`);
        break;
    }

  }
}
