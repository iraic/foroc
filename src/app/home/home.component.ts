import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  preguntas = [
    {id: 1, pregunta: '¿Cual es tu nombre?'},
    {id: 2, pregunta: '¿Cual materia es la mas dificil?'},
    {id: 3, pregunta: '¿Como programar una cita con ella?'},
  ]

}
