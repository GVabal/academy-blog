import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: `
    <mat-tab-group mat-align-tabs="start" backgroundColor="primary">
      <mat-tab label="First">Content 1</mat-tab>
      <mat-tab label="Second">Content 2</mat-tab>
      <mat-tab label="Third">Content 3</mat-tab>
    </mat-tab-group>
  `,
  styles: [
  ]
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
