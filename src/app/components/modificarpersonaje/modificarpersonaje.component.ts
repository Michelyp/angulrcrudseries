import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Personaje } from 'src/models/personaje';
import { ServiceSeries } from 'src/app/services/service.departamento';
import { Serie } from 'src/models/serie';
import { Personajes } from 'src/models/personajes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})
export class ModificarpersonajeComponent implements OnInit{
  public series!: Array<Serie>;
  public personajes!: Array<Personajes>;

  @ViewChild("seleccionarserie") seleccionarserieRef!:ElementRef;
  @ViewChild("seleccionarpersonaje") seleccionarpersonajeRef!:ElementRef;
  constructor(private _serviceSeries:ServiceSeries, private _router:Router){}

  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe(response =>{
      this.series = response;
    })
    this._serviceSeries.getPersonajesSelect().subscribe(response=>{
      this.personajes = response;
    })
  }

  modificarPersonaje():void{
    var serie = parseInt(this.seleccionarserieRef.nativeElement.value);
    var pers = parseInt(this.seleccionarpersonajeRef.nativeElement.value);
    var newPerso = new Personaje(pers,serie);

    this._serviceSeries.putActualizarPersonaje(newPerso, pers,serie).subscribe(response=>{
      this._router.navigate(["/"]);
    })
  }

}
