import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {RegistroUsuarioComponent} from "./registro-usuario/registro-usuario.component";
import {LogeadoComponent} from "./logeado/logeado.component";
import {NavmenuComponent} from "./navmenu/navmenu.component";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import {Storage} from "@ionic/storage";
import {InAppBrowser} from "@ionic-native/in-app-browser/ngx";
import {ClienteComponent} from "./cliente/cliente.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PeticionesService} from "./services/peticiones.service";
import {TransaccionComponent} from "./transaccion/transaccion.component";
import firebaseConfig from "../firebase";
import {AngularFireModule} from "@angular/fire/compat";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistroUsuarioComponent, LogeadoComponent, NavmenuComponent, ClienteComponent, TransaccionComponent],
  imports: [BrowserModule, IonicModule.forRoot(),AngularFireModule.initializeApp(firebaseConfig), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BarcodeScanner, Storage, InAppBrowser, HttpClient, HttpClientModule, PeticionesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
