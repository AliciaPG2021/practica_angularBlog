import { Injectable } from '@angular/core';
import { Post } from './interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioBlogService {

  private arrPosts: Post[];


  constructor() {

    this.arrPosts = [
      { titulo: 'Cuidado con el sol', texto: 'Neque, tenetur ex facere odit reiciendis dolores iste cupiditate culpa inventore consequatur dolor quaerat, asperiores minus', autor: 'Almudena Pico', imagen: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/8983/production/_109730253_gettyimages-658291850.jpg', fecha: '04/11/2018', categoria: 'cuidados' },

      { titulo: 'Como conservar las flores en invierno', texto: 'Neque, tenetur ex facere odit reiciendis dolores iste cupiditate culpa inventore consequatur dolor quaerat, asperiores minus', autor: 'Veronica Toledo', imagen: 'https://www.fronda.com/sites/default/files/categorias/flores-primavera-verano_1.png', fecha: '05/02/2020', categoria: 'flor' },

      { titulo: '¿Suficiente agua?', texto: 'Neque, tenetur ex facere odit reiciendis dolores iste cupiditate culpa inventore consequatur dolor quaerat, asperiores minus', autor: 'Jose Fernandez', imagen: 'https://www.jardineriaon.com/wp-content/uploads/2015/04/riego-plantas-830x623.jpg', fecha: '30/09/2019', categoria: 'cuidados' },

      { titulo: 'Mejores plantas de interior', texto: 'Neque, tenetur ex facere odit reiciendis dolores iste cupiditate culpa inventore consequatur dolor quaerat, asperiores minus', autor: 'Pablo Vega', imagen: 'https://www.handfie.com/wp-content/uploads/2016/03/kentia-plantas-de-interior.jpg', fecha: '10/06/2018', categoria: 'hoja' },

      { titulo: 'Cactus pequeños de interior', texto: 'Neque, tenetur ex facere odit reiciendis dolores iste cupiditate culpa inventore consequatur dolor quaerat, asperiores minus', autor: 'Verónica Toledo', imagen: 'https://www.hogarmania.com/archivos/202002/principales-dudas-sobre-el-cuidado-de-los-cactus-y-las-plantas-crasas-668x400x80xX-1.jpg', fecha: '12/07/2019', categoria: 'cactus' },

      { titulo: 'Mejores plantas de exterior', texto: 'Neque, tenetur ex facere odit reiciendis dolores iste cupiditate culpa inventore consequatur dolor quaerat, asperiores minus', autor: 'Veronica Toledo', imagen: 'https://maravillosanaturaleza.com/wp-content/uploads/2020/06/plantas-de-exterior-01-1.jpg', fecha: '05/02/2020', categoria: 'hoja' },

    ]
  }



  getAllPosts() {
    return this.arrPosts;
  }

  getAllCategorias() {
    let resultado = [];
    for (let post of this.arrPosts) {
      if (!resultado.includes(post.categoria)) {
        resultado.push(post.categoria);
      }

    }
    return resultado;

  }

  getByCategoria(pCategoria: string): Post[] {
    let resultado = [];
    for (let post of this.arrPosts) {
      if (post.categoria === pCategoria) {
        resultado.push(post);
      }


    }
    return resultado;
  }

  addNewPost(nuevoPost: Post) {


    this.arrPosts.push(nuevoPost);



  }


}








