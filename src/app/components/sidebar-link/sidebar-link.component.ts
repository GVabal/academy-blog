import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../interfaces/Post';

@Component({
  selector: 'app-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss']
})
export class SidebarLinkComponent implements OnInit {

  @Input() post: Post = {author: '', title: '', content: '', date: ''};

  @Output() sidebarLink = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickLink(title: string): void {
    this.sidebarLink.emit(title);
  }
}
