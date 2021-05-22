import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { ServicioBlogService } from 'src/app/servicio-blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  Posts: Post[];

  constructor(private servicioBlogService: ServicioBlogService) { }

  ngOnInit(): void {
    this.Posts = this.servicioBlogService.getAllPosts();
  }


  onChange($event) {

    if ($event.target.value === 'todos') {
      this.Posts = this.servicioBlogService.getAllPosts();
    } else {
      this.Posts = this.servicioBlogService.getByCategoria($event.target.value);
    }
  }


}
