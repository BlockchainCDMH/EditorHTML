import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  template: `<html>
  <div style="content" [innerHTML]="template"></div> 
  </html>
`,
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
@Input() template:string;
  constructor() { 
  }

  ngOnInit(): void {
    console.log("Desarrollado por Cristian Danilo Motta Herrera");
  }

}
