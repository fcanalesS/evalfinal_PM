import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FirebaseError} from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  password: any;
  username: any;

  constructor(public route: Router, public afAuth: AngularFireAuth, public alert: AlertController) { }

  ngOnInit() {}

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Aceptar"]
    })

    await alert.present();
  }
  async iniciarSesion() {
    const {username, password} = this;
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(username, password);
      console.log(res);
      await this.route.navigate(['logeado'])
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/invalid-email") await this.showAlert("Error", "El nombre de usuario o contraseña es incorrecto");
        if (error.code === "auth/user-not-found") await this.showAlert("Error", "El usuario ingresado no existe");
      }


    }
  }
}
