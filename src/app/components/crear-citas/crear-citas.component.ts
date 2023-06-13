import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent {
  nombre = "";
  fecha = "";
  hora  = "";
  sintomas = "";

  formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>();

  agregarCita():void{
    if(this.nombre == "" || this.fecha == "" || this.hora == "" || this.sintomas == ""){
      this.formularioIncorrecto = true;
    }
    this.formularioIncorrecto = false;

    //Creamos objeto

    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    console.log(CITA)
    this.nuevaCita.emit(CITA);
    this.resetCampos()
  }
  resetCampos():void{
    this.nombre = "";
    this.fecha = "";
    this.hora = "";
    this.sintomas = "";
  }

}
