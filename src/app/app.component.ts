import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  usuarios = [];
  inscricao: Subscription;

  constructor(
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.usuarioService.buscarUsuarios()
    .subscribe(result => {
      console.log(result);
      this.usuarios = result.results;
    }, error => {
      console.error('Ocorreu um erro');
      console.error(error);
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
