import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/interfaces/post.interface';
import { ServicioBlogService } from 'src/app/servicio-blog.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  nuevoPost: Post[];

  constructor(private servicioBlogService: ServicioBlogService) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl('todos'),

    })
  }

  ngOnInit(): void {
  }

  onSubmit(formValue) {


    if (formValue.autor === null) {
      formValue.autor = 'Autor/a desconocido';
    }



    if (formValue.imagen === null) {
      formValue.imagen = 'http://c.files.bbci.co.uk/121DB/production/_109730247_gettyimages-1094263056-1.jpg';
    }



    this.servicioBlogService.addNewPost(formValue);

    alert('tu post ha sido incluido en el Blog');


  }


}
