import { Component, OnInit } from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {DataLocalService} from "../../services/data-local.service";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, private dataLocal: DataLocalService) { }

  ngOnInit() {
  }
  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log("barcode data", barcodeData);
      if (!barcodeData.cancelled) this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text)
    }).catch(err => {
      this.dataLocal.guardarRegistro('QRCode', 'geo:-61.976369, -58.020755')
    })
  }
}
