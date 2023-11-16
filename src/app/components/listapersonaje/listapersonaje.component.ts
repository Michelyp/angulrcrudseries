import { Component, OnInit } from '@angular/core';
import { ServiceSeries } from 'src/app/services/service.departamento';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Personajes } from 'src/models/personajes';

@Component({
  selector: 'app-listapersonaje',
  templateUrl: './listapersonaje.component.html',
  styleUrls: ['./listapersonaje.component.css'],
})
export class ListapersonajeComponent {
  public personajes!: Array<Personajes>;

  constructor(
    private _servideSerie: ServiceSeries,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      var id = parseInt(parametros['id']);
      this._servideSerie.getPersonajes(id).subscribe((response) => {
        this.personajes = response;
        console.log(this.personajes);
      });
    });
  }
}
