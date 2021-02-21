import { Component, OnInit } from '@angular/core';
import {Post} from '../../interfaces/Post';
import someBlogpostData from '../../../some-blogpost-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts: Post[] = someBlogpostData;

  constructor() { }

  ngOnInit(): void {
  }

  onReadMore(title: string): void {
    alert(`You want to read more about "${title}"`);
  }

  onComments(title: string): void {
    alert(`You want to read comments for "${title}"`);
  }

  onAuthor(author: string): void {
    alert(`You want to know more about ${author}`);
  }

  onSidebarLink(title: string): void {
    alert(`You selected "${title}" from sidebar`);
  }
}
