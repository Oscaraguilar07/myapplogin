import { Component, OnInit } from '@angular/core';

import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router
    ){

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    })


  }

  ngOnInit() {
  }

  async ingresar() {
    if (this.formularioLogin.valid) {
      // Acciones a realizar cuando el formulario es válido
      const nombre = this.formularioLogin.value.nombre;
      const password = this.formularioLogin.value.password;

      // Lógica de validación de credenciales
      if (nombre === "usuario" && password === "1234") {
        // Credenciales válidas
        console.log("Credenciales válidas");
          this.router.navigate(['/home']);
        // Aquí puedes redirigir a la página deseada o realizar otras acciones

      } else {
        // Credenciales inválidas
        console.log("Credenciales inválidas");
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Usuario o contraseña inválida. Por favor, inténtalo nuevamente.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      // El formulario no es válido
      console.log("Formulario inválido");

  
    }

  }
}



  /*
  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem.toString("usuario"));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('ingresado');
    }
    else{const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'Los datos que ingresaste son incorrectos.',
      buttons: ['Aceptar']
    });

    await alert.present();
      
    }
  }
  */


