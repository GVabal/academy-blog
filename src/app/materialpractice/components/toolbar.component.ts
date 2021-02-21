import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>First Line</span>
      </mat-toolbar-row>
      <mat-toolbar-row>
        <span>Second Line</span>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [
  ]
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
