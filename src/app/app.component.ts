import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  usuarios = [];

  constructor(
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuarioService.buscarUsuarios().subscribe(result => {
      console.log(result);
      this.usuarios = result.results;
    }, error => {
      console.error('Ocorreu um erro');
      console.error(error);
    });
  }

}
