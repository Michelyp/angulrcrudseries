import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Serie } from 'src/models/serie';
import { ServiceSeries } from 'src/app/services/service.departamento';
import { Router } from '@angular/router';
import { Personajes } from 'src/models/personajes';
@Component({
  selector: 'app-muevopersonaje',
  templateUrl: './muevopersonaje.component.html',
  styleUrls: ['./muevopersonaje.component.css']
})
export class MuevopersonajeComponent implements OnInit{
  public series!: Array<Serie>;
  @ViewChild("cajaid") cajaIdRef!: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaImagen")cajaImagenRef!: ElementRef;
  @ViewChild("cajaseleccionado")cajaSeleccionadoRef!: ElementRef;
  constructor(private _serviceSeries: ServiceSeries, private _router: Router){}
  ngOnInit(): void{
    this._serviceSeries.getSeries().subscribe(response=>{
      this.series = response;
    })
  }

  insertarPersonaje():void{
    var id = parseInt(this.cajaIdRef.nativeElement.value);
    var nom= this.cajaNombreRef.nativeElement.value;
    var img = this.cajaImagenRef.nativeElement.value;
    var sele=parseInt(this.cajaSeleccionadoRef.nativeElement.option.value);

    var newPer = new Personajes(id,nom,img,sele);
    this._serviceSeries.postNuevoPersonaje(newPer).subscribe(response=>{
      this._router.navigate(["/"]);
      console.log(response.data);
      
    })
    
  }
}
