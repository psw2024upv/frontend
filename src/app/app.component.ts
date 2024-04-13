import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formularioRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mail: new FormControl('', [Validators.required, Validators.minLength(10)]),
    nickname: new FormControl('', [Validators.required, Validators.minLength(10)]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(10)]),
    edad: new FormControl('', [Validators.required, Validators.minLength(10)])
  });


}
