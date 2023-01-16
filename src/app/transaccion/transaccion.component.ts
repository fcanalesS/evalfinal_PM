import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../services/peticiones.service";
import {Transaccion} from "../models/transaccion.model";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.scss'],
})
export class TransaccionComponent implements OnInit {
  model: Transaccion = {
    ID_TRANSACCION: this.getRandomInt(0, 99999),
    DESCRIPCION: '',
    MONTO_MOVIMIENTO: 0,
    CUENTA_DESTINO: ''
  };
  public transaccion: any;

  constructor(public alert: AlertController, public peticionesService: PeticionesService) {
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['ok']
    });
    await alert.present();
    setTimeout(location.reload.bind(location), 1000);
  }

  ngOnInit() {
    this.peticionesService.getTransaccion().subscribe(result => {
      console.log(result)
      this.transaccion = result.Items;
    }, error => {
      console.log(<any>error);
    })
  }

  agregarTransaccion() {
    console.log(this.model);

    this.peticionesService.addTransaccion(JSON.stringify(this.model)).subscribe((response: Transaccion) => {
      console.log(response);
      if (this.model.MONTO_MOVIMIENTO === 0){
        this.showAlert("ERROR", "El monto ingresado no puede ser cero");
      }else{
        this.showAlert("Transacción Agregada", "Transacción " + this.model.ID_TRANSACCION + " agregada con éxito.");
      }
    })
  }
}
