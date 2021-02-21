import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from '../../interfaces/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post = {author: '', title: '', content: '', date: ''};

  @Output() readMore = new EventEmitter<string>();
  @Output() comments = new EventEmitter<string>();
  @Output() author = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickReadMore(title: string): void {
    this.readMore.emit(title);
  }

  clickComments(title: string): void {
    this.comments.emit(title);
  }

  clickAuthor(author: string): void {
    this.author.emit(author);
  }
}
