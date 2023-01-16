import { Component, OnInit } from '@angular/core';
import {Registro} from "../registro.models";
import {DataLocalService} from "../../services/data-local.service";

@Component({
  selector: 'app-historial-scan',
  templateUrl: './historial-scan.page.html',
  styleUrls: ['./historial-scan.page.scss'],
})
export class HistorialScanPage implements OnInit {

  constructor(public dataLocal: DataLocalService) { }

  ngOnInit() {
  }

  abrirRegistro(registro: Registro) {
    this.dataLocal.abrirRegistro(registro);

  }

}
