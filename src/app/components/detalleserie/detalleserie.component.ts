import { Component, OnInit } from '@angular/core';
import { ServiceSeries } from 'src/app/services/service.departamento';
import { Serie } from 'src/models/serie';
import {Router,Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalleserie',
  templateUrl: './detalleserie.component.html',
  styleUrls: ['./detalleserie.component.css']
})
export class DetalleserieComponent implements OnInit{
  public serie !:Serie;
  constructor(private _servideSerie: ServiceSeries,private _router: Router,
    private _activeRoute: ActivatedRoute
    ){
  }
  ngOnInit(): void {
 
    this._activeRoute.params.subscribe((parametros:Params) =>{
      var id = parseInt(parametros['id']);
          this._servideSerie.getDetalleSerie(id).subscribe(response =>{
      this.serie = response;
      console.log(this.serie);

     })
    })
    
  }
}
