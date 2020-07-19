import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'editor-html';
  template = `<h1>write here your html code!</h1>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto provident voluptates, libero quod deleniti
    voluptatibus atque hic dicta animi! Atque accusamus, eos aliquam hic iste delectus, similique sequi aliquid
    sintmollitia corporis ut magni sed, non exercitationem voluptate incidunt quam est blanditiis nam rem. Libero facilis
    non facere similique fugiat.</p>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consectetur odit, placeat veritatis suscipit
    temporibus.</p>
    
  <img src="http://www.lorempixel.com/400/400/" alt="prueba">`

  onclick() {
  }
}
