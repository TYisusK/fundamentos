import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos';

  //propiedades.
  nombre = 'Jesus';
  aniosServicio = 12;
  email = 'jesus@utsjr.edu.mx';
  activo = true; //Se puede cambiar por false.
  alumnos = [29, 30, 31];
  contador = 0;
  numero = 5;
  desactivarBoton = true;

  productos = [
    {
      id: 1,
      descripcion: 'Taco de pstor',
      precio: 15.50
    },
    {
      id: 2,
      descripcion: 'Taco de bistec',
      precio: 20.75
    },
    {
      id: 3,
      descripcion: 'Taco de pollo',
      precio: 18.00
    }
  ];

  //Función que muestra un mensaje dependiendo del valor de la propiedad 'activo';
  estaActivo(){
    if(this.activo) {
      return 'Empleado activo';
    } else {
      return 'Empleado inactivo';
    }
  }

  //Método que suma los valores del arreglo de alumnos.
  sumarAlumnos(){
    let suma = 0;
    for(let i=0; i<this.alumnos.length; i++){
      suma += this.alumnos[i];
    }
    return suma;
  }

  //Función que genera un número aleatorio entre 1 y 3.
  generarNumero() {
    return Math.floor(Math.random() * 3) + 1; //Agregando el +1 porque genera el 0 tambien.
  }

  //función para incrementar el contador.
  incrementarContador(){
    this.contador ++;
  }

  decrementarContador(){
    this.contador --;
  }

  //Función que cambia el valor de desactivar boton.
  cambiarValor() {
    this.desactivarBoton = false;
  }
}
